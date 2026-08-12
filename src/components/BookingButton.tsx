"use client";

import { CalendarCheck } from "lucide-react";
import { bookingLink, isCalComConfigured } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

type BookingButtonProps = {
  className?: string;
  /** pill = botón ghost; link = texto secundario (home hero) */
  variant?: "pill" | "link";
  /** link sin underline hasta hover (hero) */
  subtle?: boolean;
};

/** CTA secundario de agenda — Cal.com si está configurado, WhatsApp como fallback. */
export default function BookingButton({
  className = "",
  variant = "pill",
  subtle = false,
}: BookingButtonProps) {
  const calConfigured = isCalComConfigured();

  const label = calConfigured
    ? "Agendar diagnóstico"
    : "Prefiero agendar una llamada";

  if (variant === "link") {
    return (
      <a
        href={bookingLink()}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-sm font-medium text-ink/55 underline-offset-2 transition-colors hover:text-terracota-dark ${
          subtle ? "no-underline hover:underline" : "underline"
        } ${className}`}
        onClick={() =>
          trackEvent("booking", {
            channel: calConfigured ? "calcom" : "whatsapp_fallback",
          })
        }
      >
        {label}
      </a>
    );
  }

  return (
    <a
      href={bookingLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-pill btn-pill-ghost inline-flex items-center gap-2 ${className}`}
      onClick={() =>
        trackEvent("booking", {
          channel: calConfigured ? "calcom" : "whatsapp_fallback",
        })
      }
    >
      <CalendarCheck className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
      {label}
    </a>
  );
}
