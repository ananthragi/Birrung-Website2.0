"use client";

import { useEffect, useRef } from "react";
import { EnquiryForm } from "@/components/forms";
import type { ModalName } from "@/lib/site";

const titles: Record<ModalName, { id: string; title: string; lede: string }> = {
  demo: {
    id: "demo-title",
    title: "Book a live demo",
    lede: "See Birrung in action. Let our experts show you how to transform your screens.",
  },
  trial: {
    id: "trial-title",
    title: "Start your 14-day free trial",
    lede: "No credit card required. Get full access to all premium features. We are confident you will love it.",
  },
};

export function Modals({ name, onClose }: { name: ModalName | null; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    document.body.classList.toggle("modal-open", Boolean(name));
    return () => document.body.classList.remove("modal-open");
  }, [name]);

  useEffect(() => {
    if (!name) return;
    restoreRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const panel = panelRef.current;
    const field = panel?.querySelector<HTMLElement>("input:not([tabindex='-1']), select, textarea, [data-close]");
    field?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panel) return;
      const nodes = Array.from(panel.querySelectorAll<HTMLElement>("a, button, input, select, textarea")).filter(
        (node) => !node.hasAttribute("disabled") && node.tabIndex !== -1 && !node.closest("[hidden]"),
      );
      if (!nodes.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      restoreRef.current?.focus();
    };
  }, [name, onClose]);

  if (!name) return null;
  const copy = titles[name];

  return (
    <div
      className="modal"
      id={`modal-${name}`}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="modal-panel" role="dialog" aria-modal="true" aria-labelledby={copy.id} ref={panelRef}>
        <button className="modal-x" type="button" data-close aria-label="Close" onClick={onClose}>
          ×
        </button>
        <h2 id={copy.id}>{copy.title}</h2>
        <p className="modal-lede">{copy.lede}</p>
        <EnquiryForm key={name} kind={name} />
      </div>
    </div>
  );
}
