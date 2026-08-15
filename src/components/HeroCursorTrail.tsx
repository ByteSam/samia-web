"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type TrailDot = {
  id: number;
  x: number;
  y: number;
};

const MAX_DOTS = 10;
const THROTTLE_MS = 48;

/** Trail dorado muy sutil al mover el mouse en el hero — solo desktop (Fase 6). */
export default function HeroCursorTrail() {
  const layerRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(0);
  const lastSpawn = useRef(0);
  const [dots, setDots] = useState<TrailDot[]>([]);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    function update() {
      setEnabled(finePointer.matches && !reducedMotion.matches);
    }

    update();
    finePointer.addEventListener("change", update);
    reducedMotion.addEventListener("change", update);
    return () => {
      finePointer.removeEventListener("change", update);
      reducedMotion.removeEventListener("change", update);
    };
  }, []);

  const spawnDot = useCallback((x: number, y: number) => {
    const id = nextId.current++;
    setDots((prev) => [...prev.slice(-(MAX_DOTS - 1)), { id, x, y }]);
    window.setTimeout(() => {
      setDots((prev) => prev.filter((d) => d.id !== id));
    }, 520);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const layer = layerRef.current;
    if (!layer) return;

    function onMove(e: MouseEvent) {
      const el = layerRef.current;
      if (!el) return;

      const now = Date.now();
      if (now - lastSpawn.current < THROTTLE_MS) return;
      lastSpawn.current = now;

      const rect = el.getBoundingClientRect();
      spawnDot(e.clientX - rect.left, e.clientY - rect.top);
    }

    layer.addEventListener("mousemove", onMove, { passive: true });
    return () => layer.removeEventListener("mousemove", onMove);
  }, [enabled, spawnDot]);

  if (!enabled) return null;

  return (
    <div ref={layerRef} className="hero-cursor-trail pointer-events-none absolute inset-0 z-0" aria-hidden>
      {dots.map((dot) => (
        <span
          key={dot.id}
          className="hero-cursor-trail-dot"
          style={{ left: dot.x, top: dot.y }}
        />
      ))}
    </div>
  );
}
