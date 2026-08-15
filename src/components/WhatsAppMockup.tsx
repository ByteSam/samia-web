"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { ShieldCheck } from "lucide-react";
import { MOCKUP_HOME } from "@/lib/nichos/mockups";

type Mensaje = {
  de: "cliente" | "asistente";
  texto: string;
  choice?: boolean;
};

const STAGGER_MS = 280;
const INITIAL_DELAY_MS = 400;

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

type WhatsAppMockupProps = {
  mensajes?: Mensaje[];
  titulo?: string;
  subtitulo?: string;
  compact?: boolean;
  framed?: boolean;
  /** Línea de confianza bajo el mockup (ej. escalamiento a humano). */
  reassurance?: string;
};

/** Mockup ilustrativo — muestra la IA respondiendo con stagger real al montar. */
export default function WhatsAppMockup({
  mensajes = MOCKUP_HOME.mensajes,
  titulo = MOCKUP_HOME.titulo,
  subtitulo = MOCKUP_HOME.subtitulo,
  compact = false,
  framed = false,
  reassurance,
}: WhatsAppMockupProps) {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    getReducedMotionServerSnapshot,
  );
  const [animatedCount, setAnimatedCount] = useState(0);
  const visibleCount = prefersReducedMotion ? mensajes.length : animatedCount;

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    let cancelled = false;

    timers.push(
      setTimeout(() => {
        if (cancelled) return;
        setAnimatedCount(0);
        mensajes.forEach((_, i) => {
          timers.push(
            setTimeout(
              () => {
                if (!cancelled) setAnimatedCount((n) => Math.max(n, i + 1));
              },
              INITIAL_DELAY_MS + i * STAGGER_MS,
            ),
          );
        });
      }, 0),
    );

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [mensajes, prefersReducedMotion]);

  const shell = (
    <div className={`relative w-full ${compact ? "max-w-[280px]" : "max-w-[340px]"}`}>
      <div className="whatsapp-mockup-shell overflow-hidden rounded-3xl border shadow-overlay">
        {/* Header del chat */}
        <div className="flex items-center gap-3 bg-[#2d8a52] px-4 py-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.51 2 12.04 2Zm5.8 14.02c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.95-.31-1.63-.6-2.87-1.24-4.75-4.14-4.9-4.33-.14-.19-1.17-1.56-1.17-2.98s.73-2.11 1-2.4c.24-.27.53-.34.71-.34.18 0 .35 0 .5.01.16.01.37-.06.58.44.24.56.8 1.94.87 2.08.07.14.11.3.02.48-.09.19-.14.3-.27.46-.14.16-.29.36-.41.48-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.61-.07.16-.19.7-.81.89-1.09.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.21.53.33.07.12.07.68-.17 1.36Z" />
            </svg>
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-white">{titulo}</p>
            <p className="text-xs text-white/80">{subtitulo}</p>
          </div>
        </div>

        {/* Burbujas con stagger */}
        <div className="whatsapp-mockup-chat flex flex-col gap-2.5 px-4 py-3">
          {mensajes.map((m, i) => (
            <div
              key={i}
              className={`whatsapp-bubble rounded-2xl px-3.5 py-2 text-sm leading-snug shadow-sm transition-all ${
                m.de === "asistente"
                  ? "whatsapp-bubble-out max-w-[78%] self-end rounded-tr-sm"
                  : "whatsapp-bubble-in max-w-[72%] self-start rounded-tl-sm"
              } ${m.choice ? "mockup-bubble-choice" : ""} ${
                i < visibleCount
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0"
              }`}
              style={{ transitionDuration: "280ms", transitionTimingFunction: "ease-out" }}
            >
              {m.texto}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const caption = (
    <>
      <p className="mockup-caption">Ejemplo ilustrativo</p>
      {reassurance ? (
        <p className="mockup-reassurance ai-safety-line justify-center">
          <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-terracota" strokeWidth={2} aria-hidden />
          {reassurance}
        </p>
      ) : null}
    </>
  );

  if (framed) {
    return (
      <div className="hero-mockup-float">
        <div className="mockup-frame">{shell}</div>
        {caption}
      </div>
    );
  }

  if (compact) {
    return (
      <div className="mockup-frame-tilt-light">
        {shell}
        {caption}
      </div>
    );
  }

  return shell;
}
