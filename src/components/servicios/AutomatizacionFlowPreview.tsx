import { Bell, UserPlus, ArrowRight } from "lucide-react";

const NODOS = [
  { icon: Bell, label: "Lead llega", desc: "Formulario o WhatsApp" },
  { icon: UserPlus, label: "Registro automático", desc: "Sin copiar a Excel" },
  { icon: ArrowRight, label: "Aviso al equipo", desc: "WhatsApp al instante" },
];

/** Preview de flujo para el hero de automatización. */
export default function AutomatizacionFlowPreview() {
  return (
    <div className="card-soft-tint h-full p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-terracota-dark/70">
        Ejemplo de flujo
      </p>
      <ol className="mt-6 space-y-4">
        {NODOS.map((nodo, i) => (
          <li key={nodo.label} className="relative flex items-start gap-3">
            {i < NODOS.length - 1 && (
              <span
                className="absolute left-[15px] top-9 h-[calc(100%+4px)] w-px bg-terracota/20"
                aria-hidden
              />
            )}
            <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-terracota/25 bg-white shadow-sm">
              <nodo.icon className="h-4 w-4 text-terracota" strokeWidth={1.5} aria-hidden />
            </span>
            <div className="pt-0.5">
              <p className="text-sm font-medium text-ink">{nodo.label}</p>
              <p className="mt-0.5 text-xs text-ink/55">{nodo.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
