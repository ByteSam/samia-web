"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "@/components/Reveal";
import { whatsappLink } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

type FAQItem = { q: string; a: string };

type FAQSectionProps = {
  items: FAQItem[];
  titulo?: string;
  /** Muestra CTA de contacto al final de la sección */
  showContactCta?: boolean;
};

/** Bloque de preguntas frecuentes — acordeón reutilizable en Home y landings. */
export default function FAQSection({
  items,
  titulo = "Preguntas frecuentes",
  showContactCta = false,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section className="mx-auto max-w-3xl px-6 pb-20">
      <Reveal>
        <h2 className="text-h2 text-ink">{titulo}</h2>
      </Reveal>
      <div className="mt-8 space-y-2">
        {items.map((f, i) => {
          const isOpen = openIndex === i;
          return (
            <Reveal key={f.q} delay={i * 40}>
              <div className="border-b border-ink/8 last:border-0">
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="flex w-full items-start justify-between gap-4 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-ink">{f.q}</span>
                  <ChevronDown
                    className={`mt-0.5 h-4 w-4 shrink-0 text-ink/40 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-4 text-sm text-ink/60">{f.a}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {showContactCta && (
        <Reveal delay={120}>
          <p className="mt-8 text-center text-sm text-ink/60">
            ¿Tienes otra pregunta?{" "}
            <a
              href={whatsappLink("Hola, tengo una pregunta sobre tus servicios")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-terracota-dark underline underline-offset-2 hover:text-terracota"
              onClick={() => trackEvent("click_whatsapp", { source: "faq_contact" })}
            >
              Escríbeme directamente
            </a>
          </p>
        </Reveal>
      )}
    </section>
  );
}
