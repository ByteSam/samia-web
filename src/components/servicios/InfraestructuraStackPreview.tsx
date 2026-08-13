"use client";

import { useEffect, useState } from "react";
import {
  Globe,
  Database,
  Wallet,
  Workflow,
  BarChart3,
  Activity,
  type LucideIcon,
} from "lucide-react";

type Nodo = { icon: LucideIcon; label: string };

const NODOS: Nodo[] = [
  { icon: Globe, label: "Web/app" },
  { icon: Database, label: "Backend" },
  { icon: Wallet, label: "Pagos" },
  { icon: Workflow, label: "Automatización" },
  { icon: BarChart3, label: "Datos/BI" },
  { icon: Activity, label: "Monitoreo" },
];

const STAGGER_MS = 80;
const INITIAL_MS = 300;

/** Vista previa del stack — hub central con 6 módulos conectados, animado al montar. */
export default function InfraestructuraStackPreview() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), INITIAL_MS);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="card-compact border-terracota/10 bg-gradient-to-br from-white to-terracota/[0.04] p-4 sm:p-5">
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs font-medium text-ink">Arquitectura integrada</p>
        <span className="rounded-full bg-ink px-2.5 py-0.5 text-[0.6rem] font-medium text-sand">
          Ejemplo ilustrativo
        </span>
      </div>

      <div className="relative mt-4 grid min-h-[148px] grid-cols-3 gap-2 sm:gap-3">
        {/* Líneas conectoras al hub — solo desktop visual */}
        <span
          className={`pointer-events-none absolute left-1/2 top-1/2 z-0 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-terracota/20 transition-all duration-700 ${
            visible ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}
          aria-hidden
        />

        {NODOS.map((nodo, i) => (
          <div
            key={nodo.label}
            className={`relative z-10 flex flex-col items-center rounded-xl border border-ink/8 bg-white px-2 py-3 text-center shadow-sm transition-all duration-500 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
            }`}
            style={{ transitionDelay: `${INITIAL_MS + i * STAGGER_MS}ms` }}
          >
              <nodo.icon className="h-4 w-4 text-terracota sm:h-5 sm:w-5" strokeWidth={1.5} />
              <p className="mt-1.5 text-[0.6rem] font-medium leading-tight text-ink sm:text-xs">
                {nodo.label}
              </p>
            </div>
          ))}

        {/* Hub central — ocupa el centro del grid 3×3 visualmente */}
        <div
          className={`absolute left-1/2 top-1/2 z-20 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-terracota/30 bg-terracota/10 shadow-sm transition-all duration-500 sm:h-12 sm:w-12 ${
            visible ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}
          style={{ transitionDelay: `${INITIAL_MS + 500}ms` }}
        >
          <span className="font-display text-[0.55rem] italic text-terracota-dark sm:text-[0.6rem]">
            afynova
          </span>
        </div>
      </div>

      <p className="mt-3 text-center text-[0.65rem] text-ink/45">
        Los seis módulos conectados — no como herramientas aisladas.
      </p>
    </div>
  );
}
