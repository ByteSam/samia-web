"use client";

import { useEffect, useRef, useState } from "react";

type StatCounterProps = {
  to: number;
  className?: string;
};

/** Cuenta hasta `to` al entrar en viewport (#150). */
export default function StatCounter({ to, className }: StatCounterProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || started.current) return;
        started.current = true;
        if (reduced) {
          setValue(to);
          return;
        }
        const start = performance.now();
        const duration = 900;
        function tick(now: number) {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - (1 - t) ** 3;
          setValue(Math.round(to * eased));
          if (t < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      },
      { threshold: 0.45 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
