"use client";

import { useSite } from "@/components/site-provider";
import type { ModalName } from "@/lib/site";

export function OpenButton({
  modal,
  className,
  children,
}: {
  modal: ModalName;
  className?: string;
  children: React.ReactNode;
}) {
  const { open } = useSite();
  return (
    <button className={className} type="button" onClick={() => open(modal)}>
      {children}
    </button>
  );
}
