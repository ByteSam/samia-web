"use client";

import { createContext, useCallback, useContext, useState } from "react";
import FundadorPanel from "@/components/FundadorPanel";

type FundadorContextValue = {
  open: boolean;
  openPanel: () => void;
  closePanel: () => void;
};

const FundadorContext = createContext<FundadorContextValue | null>(null);

export function useFundador(): FundadorContextValue {
  const ctx = useContext(FundadorContext);
  if (!ctx) {
    throw new Error("useFundador debe usarse dentro de FundadorProvider");
  }
  return ctx;
}

/** Estado global del panel “Conoce a Daniel” — bubble, nav y Hero comparten el mismo open. */
export default function FundadorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const openPanel = useCallback(() => setOpen(true), []);
  const closePanel = useCallback(() => setOpen(false), []);

  return (
    <FundadorContext.Provider value={{ open, openPanel, closePanel }}>
      {children}
      <FundadorPanel open={open} onOpen={openPanel} onClose={closePanel} />
    </FundadorContext.Provider>
  );
}
