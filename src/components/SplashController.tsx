"use client";

import { useEffect } from "react";

export const SPLASH_STORAGE_KEY = "afynova-splash";
/** Total: fade out termina ~3.8s */
export const SPLASH_DURATION_MS = 3800;
export const SPLASH_REDUCED_MS = 500;

/**
 * Solo gate de sesión + clase en <html>.
 * La animación es CSS; el markup SSR ya está en el DOM desde paint 0.
 */
export default function SplashController() {
  useEffect(() => {
    const root = document.documentElement;
    if (root.classList.contains("splash-skip")) {
      root.classList.add("splash-done");
      const el = document.getElementById("afynova-splash");
      el?.remove();
      return;
    }

    const reduced = root.classList.contains("splash-reduced");
    const ms = reduced ? SPLASH_REDUCED_MS : SPLASH_DURATION_MS;

    const timer = window.setTimeout(() => {
      try {
        sessionStorage.setItem(SPLASH_STORAGE_KEY, "1");
      } catch {
        /* private mode */
      }
      root.classList.add("splash-done");
      const el = document.getElementById("afynova-splash");
      // Quitar del DOM tras el fade CSS (~0.6s)
      window.setTimeout(() => el?.remove(), reduced ? 250 : 700);
    }, ms);

    return () => window.clearTimeout(timer);
  }, []);

  return null;
}
