"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const BUBBLE_SCROLL_THRESHOLD = 420;

type FundadorPanelProps = {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
};

/** Bubble fijo + panel expandible — aparece tras scroll para no competir con hero. */
export default function FundadorPanel({ open, onOpen, onClose }: FundadorPanelProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const bubbleButtonRef = useRef<HTMLButtonElement>(null);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShowBubble(window.scrollY > BUBBLE_SCROLL_THRESHOLD);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  function handleClose() {
    onClose();
    bubbleButtonRef.current?.focus();
  }

  const bubbleVisible = showBubble || open;

  return (
    <>
      {!open && bubbleVisible && (
        <button
          ref={bubbleButtonRef}
          type="button"
          onClick={onOpen}
          aria-label="Conoce a Daniel"
          aria-expanded={false}
          className="fundador-bubble fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border-2 border-terracota/30 bg-sand shadow-[0_8px_24px_rgba(36,21,9,0.14)] transition-transform hover:scale-105 hover:border-terracota/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracota md:hidden"
        >
          <span className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image
              src="/daniel-avatar.jpg"
              alt=""
              fill
              sizes="56px"
              priority
              className="object-cover"
            />
          </span>
        </button>
      )}

      {open && (
        <>
          <button
            type="button"
            aria-label="Cerrar"
            className="fixed inset-0 z-[60] bg-ink/10"
            onClick={handleClose}
          />

          <aside
            role="dialog"
            aria-labelledby="fundador-panel-title"
            aria-modal="true"
            className="fundador-panel-pop fixed bottom-6 right-6 z-[70] flex w-[min(100%,24rem)] max-h-[min(36rem,calc(100vh-6rem))] flex-col rounded-3xl border border-ink/10 bg-sand shadow-[0_24px_60px_rgba(36,21,9,0.18)] md:bottom-8 md:right-8"
          >
            <div className="flex justify-end px-4 pt-4">
              <button
                ref={closeButtonRef}
                type="button"
                onClick={handleClose}
                aria-label="Cerrar panel"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-ink/50 transition-colors hover:bg-ink/5 hover:text-ink"
              >
                <X className="h-4 w-4" strokeWidth={1.75} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 pb-6 text-center">
              <div className="relative mx-auto h-[6.5rem] w-[6.5rem] overflow-hidden rounded-full border border-terracota/20 ring-4 ring-terracota/10">
                <Image
                  src="/daniel-avatar.jpg"
                  alt="Daniel, fundador de afynova"
                  fill
                  sizes="104px"
                  priority
                  className="object-cover"
                />
              </div>

              <h2
                id="fundador-panel-title"
                className="mt-5 text-base font-medium text-ink"
              >
                Daniel
              </h2>
              <span className="chip mt-2">Implementador directo</span>

              <p className="mt-5 text-sm leading-relaxed text-ink/70">
                Soy ingeniero especializado en infraestructura y automatización para pymes.
                Implemento personalmente webs, agentes de IA y flujos automatizados —
                principalmente para negocios en Perú.
              </p>

              <div className="mt-5 w-full border-t border-ink/8 pt-5">
                <p className="text-xs text-ink/50">
                  Certificación en IA generativa · DeepLearning.AI
                </p>
                <p className="mt-2 text-xs text-ink/50">
                  Automatización con n8n · IA con OpenAI y Anthropic · Next.js + Tailwind
                </p>
                <p className="mt-3 text-sm text-ink/60">
                  Hablarás directamente conmigo, no con un call center.
                </p>
              </div>
            </div>

            <div className="border-t border-ink/8 px-5 py-4">
              <WhatsAppButton
                message="Hola Daniel, vi tu web y quiero conocer más sobre cómo trabajas"
                className="w-full justify-center"
              >
                Escríbeme por WhatsApp
              </WhatsAppButton>
            </div>
          </aside>
        </>
      )}
    </>
  );
}
