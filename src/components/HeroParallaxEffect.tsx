"use client";

import { useEffect } from "react";

const DESKTOP_MQ = "(min-width: 640px)";

/** Ajusta --hero-parallax-y en el hero para mover glows al scroll — solo desktop (Fase 4). */
export default function HeroParallaxEffect() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".landing-hero-accent");
    if (!hero) return;

    const desktop = window.matchMedia(DESKTOP_MQ);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let rafId = 0;

    function clearParallax() {
      hero?.style.removeProperty("--hero-parallax-y");
      hero?.classList.remove("hero-parallax-active");
    }

    function applyParallax() {
      if (!desktop.matches || reducedMotion.matches) {
        clearParallax();
        return;
      }
      hero?.classList.add("hero-parallax-active");
      hero?.style.setProperty("--hero-parallax-y", `${window.scrollY * 0.14}px`);
    }

    function onScroll() {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        applyParallax();
      });
    }

    applyParallax();
    desktop.addEventListener("change", applyParallax);
    reducedMotion.addEventListener("change", applyParallax);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      desktop.removeEventListener("change", applyParallax);
      reducedMotion.removeEventListener("change", applyParallax);
      window.removeEventListener("scroll", onScroll);
      clearParallax();
    };
  }, []);

  return null;
}
