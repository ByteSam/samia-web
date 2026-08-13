"use client";

import { useEffect, useState } from "react";

const WIDGETS = [
  { label: "Consultas / semana", valor: 142, pct: 71 },
  { label: "Leads nuevos", valor: 38, pct: 48 },
  { label: "Citas confirmadas", valor: 29, pct: 58 },
  { label: "Tasa de respuesta", valor: 94, pct: 94, sufijo: "%" },
];

const SPARKLINE = [42, 55, 48, 67, 61, 78, 72, 89, 83, 95, 88, 142];

const STAGGER_MS = 180;
const INITIAL_MS = 350;

/** Vista previa ilustrativa de tablero — valores de ejemplo, animados al montar. */
export default function DatosDashboardPreview() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), INITIAL_MS);
    return () => clearTimeout(t);
  }, []);

  const max = Math.max(...SPARKLINE);

  return (
    <div className="card-compact border-terracota/10 bg-gradient-to-br from-white to-terracota/[0.04] p-4 sm:p-5">
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs font-medium text-ink">Tablero de ejemplo</p>
        <span className="rounded-full bg-ink px-2.5 py-0.5 text-[0.6rem] font-medium text-sand">
          Ejemplo ilustrativo
        </span>
      </div>

      {/* KPI grid */}
      <div className="mt-3 grid grid-cols-2 gap-2">
        {WIDGETS.map((w, i) => (
          <div
            key={w.label}
            className="rounded-xl border border-ink/8 bg-white px-2.5 py-3 shadow-sm"
          >
            <p className="text-[0.6rem] font-medium uppercase tracking-wide text-ink/45 leading-tight">
              {w.label}
            </p>
            <p
              className={`mt-1.5 font-display text-xl italic text-ink transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
              }`}
              style={{ transitionDelay: `${INITIAL_MS + i * STAGGER_MS}ms` }}
            >
              {w.valor}
              {w.sufijo ?? ""}
            </p>
            {/* mini progress bar */}
            <div className="mt-1.5 h-1 w-full rounded-full bg-ink/8">
              <div
                className="h-1 rounded-full bg-terracota/50 transition-all duration-700"
                style={{
                  width: visible ? `${w.pct}%` : "0%",
                  transitionDelay: `${INITIAL_MS + i * STAGGER_MS + 100}ms`,
                }}
                aria-hidden
              />
            </div>
          </div>
        ))}
      </div>

      {/* Sparkline */}
      <div className="mt-3 rounded-xl border border-ink/8 bg-white px-3 py-3 shadow-sm">
        <p className="text-[0.6rem] font-medium uppercase tracking-wide text-ink/45">
          Tendencia · últimas 12 semanas
        </p>
        <div className="mt-2 flex items-end gap-[3px] h-10">
          {SPARKLINE.map((v, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-terracota/40 transition-all duration-500"
              style={{
                height: visible ? `${(v / max) * 100}%` : "4px",
                transitionDelay: `${INITIAL_MS + 600 + i * 40}ms`,
              }}
              aria-hidden
            />
          ))}
        </div>
      </div>
    </div>
  );
}
