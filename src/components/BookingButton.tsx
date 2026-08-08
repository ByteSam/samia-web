"use client";

import { CalendarCheck } from "lucide-react";
import { bookingLink, isCalComConfigured } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

type BookingButtonProps = {
  className?: string;
};

/** CTA secundario de agenda — Cal.com si está configurado, WhatsApp como fallback. */
export default function BookingButton({ className = "" }: BookingButtonProps) {
  const calConfigured = isCalComConfigured();

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
      {calConfigured ? "Agendar diagnóstico" : "Agendar por WhatsApp"}
    </a>
  );
}
