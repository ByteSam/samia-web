import { FileSpreadsheet, BarChart3, ArrowRight, X, Check } from "lucide-react";

const ITEMS_EXCEL = [
  { id: "e-1", texto: "Datos en hojas sueltas" },
  { id: "e-2", texto: "Sin vista del mes en un clic" },
  { id: "e-3", texto: "Reportes que tardas horas" },
];

const ITEMS_TABLERO = [
  { id: "t-1", texto: "KPIs en un solo lugar" },
  { id: "t-2", texto: "Actualización sin copiar/pegar" },
  { id: "t-3", texto: "Alertas cuando algo cambia" },
];

function DatosMiniHero({
  titulo,
  tablero,
  icon: Icon,
  items,
}: {
  titulo: string;
  tablero: boolean;
  icon: typeof FileSpreadsheet;
  items: { id: string; texto: string }[];
}) {
  return (
    <div
      className={`h-full rounded-[20px] border p-5 sm:p-6 ${
        tablero
          ? "border-terracota/15 bg-terracota/[0.06] shadow-[0_1px_2px_rgba(36,21,9,0.04),0_6px_18px_rgba(36,21,9,0.03)]"
          : "border-dashed border-ink/12 bg-ink/[0.02]"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5 shrink-0 text-terracota" strokeWidth={1.5} />
          <p className="text-base font-medium text-ink">{titulo}</p>
        </div>
        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${
            tablero ? "bg-terracota/12 text-terracota-dark" : "bg-ink/8 text-ink/55"
          }`}
        >
          {tablero ? "visión clara" : "datos dispersos"}
        </span>
      </div>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li
            key={item.id}
            className={`flex items-start gap-2 rounded-lg px-3 py-2.5 text-sm leading-relaxed ${
              tablero
                ? "bg-white text-ink shadow-sm"
                : "border border-dashed border-ink/10 bg-white/60 text-ink/55"
            }`}
          >
            {tablero ? (
              <Check
                className="mt-0.5 h-4 w-4 shrink-0 text-terracota"
                strokeWidth={2}
                aria-hidden
              />
            ) : (
              <X
                className="mt-0.5 h-4 w-4 shrink-0 text-ink/35"
                strokeWidth={2}
                aria-hidden
              />
            )}
            <span>{item.texto}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Mini comparación para el hero — Excel vs tablero. */
export default function DatosAnaliticaHeroCompare() {
  return (
    <div className="mt-10 pb-1 sm:mt-12">
      <p className="section-eyebrow text-center text-[0.72rem] lg:text-left">
        Excel vs tablero
      </p>
      <div className="mt-4 grid items-stretch gap-4 sm:grid-cols-[1fr_auto_1fr] sm:gap-5">
        <DatosMiniHero
          titulo="Hojas sueltas"
          tablero={false}
          icon={FileSpreadsheet}
          items={ITEMS_EXCEL}
        />
        <div className="flex items-center justify-center py-2 sm:py-0">
          <ArrowRight
            className="h-5 w-5 rotate-90 text-ink/35 sm:rotate-0"
            strokeWidth={1.5}
            aria-hidden
          />
        </div>
        <DatosMiniHero
          titulo="Tablero con KPIs"
          tablero={true}
          icon={BarChart3}
          items={ITEMS_TABLERO}
        />
      </div>
    </div>
  );
}
