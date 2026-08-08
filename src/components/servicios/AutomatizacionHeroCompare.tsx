import { ClipboardList, Workflow, ArrowRight, X, Check } from "lucide-react";

const ITEMS_MANUAL = [
  { id: "m-1", texto: "Copias datos entre WhatsApp y Excel" },
  { id: "m-2", texto: "Persigues leads uno por uno" },
  { id: "m-3", texto: "Avisas manualmente a tu equipo" },
];

const ITEMS_AUTO = [
  { id: "a-1", texto: "Captura → registro automático" },
  { id: "a-2", texto: "Seguimiento sin que lo recuerdes" },
  { id: "a-3", texto: "Avisos por WhatsApp al instante" },
];

function FlujoMiniHero({
  titulo,
  automatizado,
  icon: Icon,
  items,
}: {
  titulo: string;
  automatizado: boolean;
  icon: typeof ClipboardList;
  items: { id: string; texto: string }[];
}) {
  return (
    <div
      className={`h-full rounded-[20px] border p-5 sm:p-6 ${
        automatizado
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
            automatizado ? "bg-terracota/12 text-terracota-dark" : "bg-ink/8 text-ink/55"
          }`}
        >
          {automatizado ? "flujo automático" : "manual"}
        </span>
      </div>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li
            key={item.id}
            className={`flex items-start gap-2 rounded-lg px-3 py-2.5 text-sm leading-relaxed ${
              automatizado
                ? "bg-white text-ink shadow-sm"
                : "border border-dashed border-ink/10 bg-white/60 text-ink/55"
            }`}
          >
            {automatizado ? (
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

/** Mini comparación para el hero — manual vs automatizado. */
export default function AutomatizacionHeroCompare() {
  return (
    <div className="mt-10 pb-1 sm:mt-12">
      <p className="section-eyebrow text-center text-[0.72rem] lg:text-left">
        Manual vs automatizado
      </p>
      <div className="mt-4 grid items-stretch gap-4 sm:grid-cols-[1fr_auto_1fr] sm:gap-5">
        <FlujoMiniHero
          titulo="Proceso manual"
          automatizado={false}
          icon={ClipboardList}
          items={ITEMS_MANUAL}
        />
        <div className="flex items-center justify-center py-2 sm:py-0">
          <ArrowRight
            className="h-5 w-5 rotate-90 text-ink/35 sm:rotate-0"
            strokeWidth={1.5}
            aria-hidden
          />
        </div>
        <FlujoMiniHero
          titulo="Proceso automatizado"
          automatizado={true}
          icon={Workflow}
          items={ITEMS_AUTO}
        />
      </div>
    </div>
  );
}
