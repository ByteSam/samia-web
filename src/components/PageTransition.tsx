"use client";

import { usePathname } from "next/navigation";

/** Fade sutil al cambiar de ruta (Fase 6). */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="page-transition">
      {children}
    </div>
  );
}
