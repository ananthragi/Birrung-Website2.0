export const TRAIL_API = process.env.TRAIL_API_URL ?? "https://birrung.com.au/trail";

export type LeadKind = "contact" | "demo" | "trial";

export const REQUEST_TYPE: Record<LeadKind, string> = {
  contact: "contact_us",
  demo: "free_demo",
  trial: "trail",
};

export type LeadPayload = {
  Name: string;
  Email: string;
  Phone: string;
  Company: string;
  State: string;
  Message: string;
};

export type LeadResponse = {
  status?: boolean;
  message?: string;
  errors?: Record<string, string>;
};

export class LeadSubmitError extends Error {
  fieldErrors?: Record<string, string>;

  constructor(message: string, fieldErrors?: Record<string, string>) {
    super(message);
    this.name = "LeadSubmitError";
    this.fieldErrors = fieldErrors;
  }
}

export async function submitLead(kind: LeadKind, payload: LeadPayload): Promise<LeadResponse> {
  const response = await fetch("/trail", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...payload,
      request_type: REQUEST_TYPE[kind],
    }),
  });

  let data: LeadResponse = {};
  try {
    data = (await response.json()) as LeadResponse;
  } catch {
    data = {};
  }

  if (!response.ok || data.status === false) {
    throw new LeadSubmitError(data.message || "Something went wrong. Please try again.", data.errors);
  }

  return data;
}
