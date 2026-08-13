import { FileSpreadsheet, BarChart3, ArrowRight, X } from "lucide-react";
import ComparePanel from "@/components/ComparePanel";
import DatosDashboardPreview from "@/components/servicios/DatosDashboardPreview";

const ITEMS_EXCEL = [
  { id: "e-1", texto: "Datos en hojas sueltas" },
  { id: "e-2", texto: "Sin vista del mes en un clic" },
  { id: "e-3", texto: "Reportes que tardas horas" },
];

function HojasSueltas() {
  return (
    <ComparePanel tone="muted" title="Hojas sueltas" badge="datos dispersos" icon={FileSpreadsheet}>
      <ul className="space-y-2.5">
        {ITEMS_EXCEL.map((item) => (
          <li
            key={item.id}
            className="flex items-start gap-2 rounded-lg border border-dashed border-ink/10 bg-white/60 px-3 py-2.5 text-sm leading-relaxed text-ink/55"
          >
            <X className="mt-0.5 h-4 w-4 shrink-0 text-ink/35" strokeWidth={2} aria-hidden />
            <span>{item.texto}</span>
          </li>
        ))}
      </ul>
    </ComparePanel>
  );
}

function TableroConKPIs() {
  return (
    <ComparePanel
      tone="accent"
      title="Tablero con KPIs"
      badge="visión clara"
      icon={BarChart3}
      className="!p-4 sm:!p-5"
    >
      <DatosDashboardPreview />
    </ComparePanel>
  );
}

/** Mini comparación para el hero — Excel vs tablero (dashboard integrado). */
export default function DatosAnaliticaHeroCompare() {
  return (
    <div className="mt-10 pb-1 sm:mt-12">
      <p className="section-eyebrow text-center text-[0.72rem] lg:text-left">
        Excel vs tablero
      </p>
      <div className="mt-4 grid items-stretch gap-4 sm:grid-cols-[1fr_auto_1fr] sm:gap-6">
        <HojasSueltas />
        <div className="flex items-center justify-center py-2 sm:py-0">
          <ArrowRight
            className="h-5 w-5 rotate-90 text-ink/35 sm:rotate-0"
            strokeWidth={1.5}
            aria-hidden
          />
        </div>
        <TableroConKPIs />
      </div>
    </div>
  );
}
