import {
  Globe,
  Database,
  Wallet,
  Workflow,
  BarChart3,
  Activity,
} from "lucide-react";

const NODOS = [
  { icon: Globe, label: "Web/app" },
  { icon: Database, label: "Backend" },
  { icon: Wallet, label: "Pagos" },
  { icon: Workflow, label: "Automatización" },
  { icon: BarChart3, label: "Datos/BI" },
  { icon: Activity, label: "Monitoreo" },
];

/** Vista previa del stack — 6 módulos conectados. */
export default function InfraestructuraStackPreview() {
  return (
    <div className="card-compact border-terracota/10 bg-gradient-to-br from-white to-terracota/[0.04] p-5 sm:p-6">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {NODOS.map((nodo, i) => (
          <div
            key={nodo.label}
            className="relative flex flex-col items-center rounded-xl border border-ink/8 bg-white px-3 py-4 text-center shadow-sm"
          >
            <nodo.icon className="h-5 w-5 text-terracota" strokeWidth={1.5} />
            <p className="mt-2 text-xs font-medium text-ink sm:text-sm">{nodo.label}</p>
            {i < NODOS.length - 1 && (
              <span
                className="absolute -right-2 top-1/2 hidden h-px w-4 -translate-y-1/2 bg-terracota/25 sm:block"
                aria-hidden
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
