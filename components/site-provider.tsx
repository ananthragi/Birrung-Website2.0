"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { Modals } from "@/components/modals";
import type { ModalName } from "@/lib/site";

type SiteContextValue = {
  open: (name: ModalName) => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function useSite() {
  const value = useContext(SiteContext);
  if (!value) throw new Error("useSite must be used within SiteProvider");
  return value;
}

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [modal, setModal] = useState<ModalName | null>(null);
  const open = useCallback((name: ModalName) => setModal(name), []);
  const close = useCallback(() => setModal(null), []);
  const value = useMemo(() => ({ open }), [open]);

  return (
    <SiteContext.Provider value={value}>
      {children}
      <Modals name={modal} onClose={close} />
    </SiteContext.Provider>
  );
}
