"use client";

import { useEffect } from "react";

/** Ajusta --hero-parallax-y en el hero para mover glows al scroll (Fase 4). */
export default function HeroParallaxEffect() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".landing-hero-accent");
    if (!hero) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    function onScroll() {
      hero?.style.setProperty("--hero-parallax-y", `${window.scrollY * 0.14}px`);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
