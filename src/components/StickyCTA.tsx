"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { X } from "lucide-react";
import { whatsappLink, WHATSAPP_DIAGNOSTICO_MESSAGE } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

const DISMISS_KEY = "sticky_cta_dismissed";
const DISMISS_EVENT = "sticky-cta-dismiss";
const SCROLL_THRESHOLD = 500;

function subscribeDismiss(cb: () => void) {
  window.addEventListener(DISMISS_EVENT, cb);
  return () => window.removeEventListener(DISMISS_EVENT, cb);
}

function getDismissedSnapshot() {
  return sessionStorage.getItem(DISMISS_KEY) === "1";
}

/** Barra sticky — solo Home; alineada con CTA terracota del hero. */
export default function StickyCTA() {
  const dismissed = useSyncExternalStore(
    subscribeDismiss,
    getDismissedSnapshot,
    () => false
  );
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const contactEl = document.getElementById("contacto");
    let contactVisible = false;

    const observer = contactEl
      ? new IntersectionObserver(
          ([entry]) => {
            contactVisible = entry.isIntersecting;
            updateVisibility();
          },
          { threshold: 0.15 }
        )
      : null;

    if (contactEl && observer) observer.observe(contactEl);

    function updateVisibility() {
      const scrolled = window.scrollY > SCROLL_THRESHOLD;
      setVisible(scrolled && !contactVisible);
    }

    function onScroll() {
      updateVisibility();
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    updateVisibility();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (observer && contactEl) observer.unobserve(contactEl);
    };
  }, [dismissed]);

  useEffect(() => {
    if (visible && !dismissed) {
      document.body.classList.add("sticky-cta-visible");
    } else {
      document.body.classList.remove("sticky-cta-visible");
    }
    return () => document.body.classList.remove("sticky-cta-visible");
  }, [visible, dismissed]);

  if (dismissed || !visible) return null;

  function handleDismiss() {
    sessionStorage.setItem(DISMISS_KEY, "1");
    window.dispatchEvent(new Event(DISMISS_EVENT));
    document.body.classList.remove("sticky-cta-visible");
  }

  return (
    <div
      className="sticky-cta-bar fixed inset-x-0 bottom-0 z-40 border-t border-ink/8 bg-white/95 px-4 py-3 backdrop-blur-sm"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-lg items-center gap-3">
        <a
          href={whatsappLink(WHATSAPP_DIAGNOSTICO_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pill btn-pill-solid inline-flex flex-1 justify-center py-3 text-sm"
          onClick={() => trackEvent("click_whatsapp", { source: "sticky_bar" })}
        >
          Diagnóstico gratis
        </a>
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Cerrar barra de contacto"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-ink/45 transition-colors hover:bg-ink/5 hover:text-ink"
        >
          <X className="h-4 w-4" strokeWidth={1.75} />
        </button>
      </div>
    </div>
  );
}
