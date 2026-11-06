"use client";

import { useState } from "react";
import { LEAD_CAPTCHA_TOKEN, LEAD_SCREENS, submitLead } from "@/lib/leads";
import { email, states } from "@/lib/site";

type Kind = "contact" | "demo" | "trial";

const copy: Record<
  Kind,
  { subject: string; submit: string; button: string; title: string; body: string; sending: string }
> = {
  contact: {
    subject: "Birrung website enquiry",
    submit: "Send message",
    button: "btn btn-ink",
    title: "Your message is ready to send.",
    body: "If your email app did not open, write to",
    sending: "Sending…",
  },
  demo: {
    subject: "Birrung demo request",
    submit: "Reserve my slot",
    button: "btn btn-gold",
    title: "Demo request submitted.",
    body: "Thanks. We will confirm a time shortly.",
    sending: "Submitting…",
  },
  trial: {
    subject: "Birrung trial request",
    submit: "Activate my trial",
    button: "btn btn-gold",
    title: "Free trial request submitted.",
    body: "Thanks. We will help you get started shortly.",
    sending: "Submitting…",
  },
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function messageFor(field: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) {
  const value = field.value.trim();
  if (field.required && !value) return "Please fill this in.";
  if (field.type === "email" && value && !emailPattern.test(value)) return "Enter a valid email address.";
  if (field.type === "tel" && value && value.replace(/\D/g, "").length < 8) return "Enter a phone number we can call.";
  return "";
}

export function EnquiryForm({ kind }: { kind: Kind }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [formError, setFormError] = useState("");
  const [pending, setPending] = useState(false);
  const text = copy[kind];

  if (sent) {
    return (
      <div className="form-success">
        <h3>{successMessage || text.title}</h3>
        {kind === "contact" ? (
          <p>
            {text.body} <a href={`mailto:${email}`}>{email}</a> and we will reply shortly.
          </p>
        ) : (
          <p>{text.body}</p>
        )}
      </div>
    );
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const trap = form.elements.namedItem("company_website");
    if (trap instanceof HTMLInputElement && trap.value) {
      setSent(true);
      return;
    }

    const nextErrors: Record<string, string> = {};
    const fields = Array.from(form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>("input, select, textarea"));
    for (const field of fields) {
      if (field.name === "company_website") continue;
      const error = messageFor(field);
      if (!error) continue;
      nextErrors[field.name] = error;
    }
    setErrors(nextErrors);
    setFormError("");
    const firstInvalid = fields.find((field) => field.name !== "company_website" && nextErrors[field.name]);
    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    if (kind === "contact") {
      const lines: string[] = [];
      new FormData(form).forEach((value, key) => {
        if (key === "company_website") return;
        lines.push(`${key}: ${String(value).trim()}`);
      });
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(text.subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
      setSent(true);
      return;
    }

    const data = new FormData(form);
    setPending(true);
    try {
      const result = await submitLead(kind, {
        name: String(data.get("Name") ?? "").trim(),
        email: String(data.get("Email") ?? "").trim(),
        phone: String(data.get("Phone") ?? "").trim(),
        company: String(data.get("Company") ?? "").trim(),
        state: String(data.get("State") ?? "").trim(),
        message: String(data.get("Message") ?? "").trim(),
        screens: LEAD_SCREENS,
        captchaToken: LEAD_CAPTCHA_TOKEN,
      });
      setSuccessMessage(result.message || text.title);
      setSent(true);
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  }

  function clear(name: string) {
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  return (
    <form data-form={kind} noValidate onSubmit={onSubmit}>
      {kind === "contact" ? <ContactFields errors={errors} clear={clear} /> : <LeadFields kind={kind} errors={errors} clear={clear} />}
      <div className="hp" aria-hidden="true">
        <label>
          Company website <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {formError ? <p className="form-error">{formError}</p> : null}
      <div className="form-actions">
        <button className={text.button} type="submit" disabled={pending}>
          {pending ? text.sending : text.submit}
        </button>
      </div>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  error,
  children,
}: {
  id: string;
  name: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={error ? "field is-error" : "field"}>
      <label htmlFor={id}>{label}</label>
      {children}
      <p className="err" id={`${id}-err`}>
        {error ?? ""}
      </p>
    </div>
  );
}

function ContactFields({ errors, clear }: { errors: Record<string, string>; clear: (name: string) => void }) {
  return (
    <>
      <div className="form-row two">
        <Field id="contact-name" name="Name" label="Name" error={errors.Name}>
          <input id="contact-name" name="Name" type="text" autoComplete="name" required aria-invalid={Boolean(errors.Name)} aria-describedby="contact-name-err" onInput={() => clear("Name")} />
        </Field>
        <Field id="contact-email" name="Email" label="Email" error={errors.Email}>
          <input id="contact-email" name="Email" type="email" autoComplete="email" required aria-invalid={Boolean(errors.Email)} aria-describedby="contact-email-err" onInput={() => clear("Email")} />
        </Field>
      </div>
      <div className="form-row two">
        <Field id="contact-phone" name="Phone" label="Phone" error={errors.Phone}>
          <input id="contact-phone" name="Phone" type="tel" autoComplete="tel" required aria-invalid={Boolean(errors.Phone)} aria-describedby="contact-phone-err" onInput={() => clear("Phone")} />
        </Field>
        <Field id="contact-state" name="State" label="State" error={errors.State}>
          <select id="contact-state" name="State" required defaultValue="" aria-invalid={Boolean(errors.State)} aria-describedby="contact-state-err" onChange={() => clear("State")}>
            <option value="" disabled>
              Select a state
            </option>
            {states.map((state) => (
              <option key={state}>{state}</option>
            ))}
          </select>
        </Field>
      </div>
      <Field id="contact-message" name="Message" label="Message" error={errors.Message}>
        <textarea id="contact-message" name="Message" required aria-invalid={Boolean(errors.Message)} aria-describedby="contact-message-err" onInput={() => clear("Message")} />
      </Field>
    </>
  );
}

function LeadFields({ kind, errors, clear }: { kind: "demo" | "trial"; errors: Record<string, string>; clear: (name: string) => void }) {
  const prefix = kind;
  return (
    <>
      <Field id={`${prefix}-name`} name="Name" label="Name" error={errors.Name}>
        <input id={`${prefix}-name`} name="Name" type="text" autoComplete="name" required aria-invalid={Boolean(errors.Name)} onInput={() => clear("Name")} />
      </Field>
      <Field id={`${prefix}-email`} name="Email" label="Email" error={errors.Email}>
        <input id={`${prefix}-email`} name="Email" type="email" autoComplete="email" required aria-invalid={Boolean(errors.Email)} onInput={() => clear("Email")} />
      </Field>
      <Field id={`${prefix}-phone`} name="Phone" label="Phone" error={errors.Phone}>
        <input id={`${prefix}-phone`} name="Phone" type="tel" autoComplete="tel" required aria-invalid={Boolean(errors.Phone)} onInput={() => clear("Phone")} />
      </Field>
      <Field id={`${prefix}-company`} name="Company" label="Company" error={errors.Company}>
        <input id={`${prefix}-company`} name="Company" type="text" autoComplete="organization" required aria-invalid={Boolean(errors.Company)} onInput={() => clear("Company")} />
      </Field>
      <Field id={`${prefix}-state`} name="State" label="State" error={errors.State}>
        <select id={`${prefix}-state`} name="State" required defaultValue="" aria-invalid={Boolean(errors.State)} aria-describedby={`${prefix}-state-err`} onChange={() => clear("State")}>
          <option value="" disabled>
            Select a state
          </option>
          {states.map((state) => (
            <option key={state}>{state}</option>
          ))}
        </select>
      </Field>
      <Field id={`${prefix}-message`} name="Message" label="Message" error={errors.Message}>
        <textarea id={`${prefix}-message`} name="Message" required aria-invalid={Boolean(errors.Message)} aria-describedby={`${prefix}-message-err`} onInput={() => clear("Message")} />
      </Field>
    </>
  );
}
