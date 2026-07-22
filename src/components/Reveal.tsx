"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Retraso en ms, para escalonar varias tarjetas */
  delay?: number;
};

/**
 * Fade-in-up discreto cuando el elemento entra al viewport.
 * Si el elemento entra en pantalla por un salto de ancla (#hash en la URL,
 * ej. click en "Conoce a Daniel"), se muestra de inmediato sin animar —
 * evita el segundo de espacio vacío al aterrizar directo en una sección.
 */
export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (window.location.hash) {
            setInstant(true);
          }
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${instant ? "" : "reveal"} ${visible ? "is-visible" : ""} ${className}`}
      style={{ animationDelay: visible && !instant ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
