"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type TrailDot = {
  id: number;
  x: number;
  y: number;
};

const MAX_DOTS = 10;
/** Desktop only — <768px no cursor trail (#134). Firefox OFF (diag perf). */
const DESKTOP_MQ = "(min-width: 768px) and (pointer: fine)";

function isFirefox(): boolean {
  return typeof navigator !== "undefined" && /firefox/i.test(navigator.userAgent);
}

/** Trail dorado sutil en el hero — solo desktop (no Firefox). */
export default function HeroCursorTrail() {
  const layerRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(0);
  const rafPending = useRef(false);
  const latestPoint = useRef<{ x: number; y: number } | null>(null);
  const [dots, setDots] = useState<TrailDot[]>([]);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (isFirefox()) return;

    const desktop = window.matchMedia(DESKTOP_MQ);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    function update() {
      setEnabled(desktop.matches && !reducedMotion.matches);
    }

    update();
    desktop.addEventListener("change", update);
    reducedMotion.addEventListener("change", update);
    return () => {
      desktop.removeEventListener("change", update);
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

    function flush() {
      rafPending.current = false;
      const point = latestPoint.current;
      const el = layerRef.current;
      if (!point || !el) return;
      const rect = el.getBoundingClientRect();
      spawnDot(point.x - rect.left, point.y - rect.top);
    }

    function onMove(e: MouseEvent) {
      latestPoint.current = { x: e.clientX, y: e.clientY };
      if (rafPending.current) return;
      rafPending.current = true;
      requestAnimationFrame(flush);
    }

    layer.addEventListener("mousemove", onMove, { passive: true });
    return () => layer.removeEventListener("mousemove", onMove);
  }, [enabled, spawnDot]);

  if (!enabled) return null;

  return (
    <div
      ref={layerRef}
      className="hero-cursor-trail pointer-events-none absolute inset-0 z-0"
      aria-hidden
    >
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
