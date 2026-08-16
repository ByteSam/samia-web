"use client";

import { useEffect } from "react";

const DESKTOP_MQ = "(min-width: 768px)";

function isFirefox(): boolean {
  return typeof navigator !== "undefined" && /firefox/i.test(navigator.userAgent);
}

/** Parallax de glows del hero — solo desktop (#134). Firefox OFF (diag perf). */
export default function HeroParallaxEffect() {
  useEffect(() => {
    if (isFirefox()) return;

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
