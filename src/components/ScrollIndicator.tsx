"use client";

import { useEffect, useState } from "react";

const HIDE_AFTER_PX = 32;

/** Línea/dot mínimo bajo el header — desaparece al scrollear (Fase 6). */
export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY < HIDE_AFTER_PX);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`scroll-indicator pointer-events-none fixed left-1/2 z-30 -translate-x-1/2 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      <span className="scroll-indicator-dot block" />
      <span className="scroll-indicator-line mt-1 block" />
    </div>
  );
}
