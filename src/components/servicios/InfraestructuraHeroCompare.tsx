import { Unplug, Network, ArrowRight, X, Check } from "lucide-react";

const ITEMS_SUELTAS = [
  { id: "s-1", texto: "Web aislada del resto" },
  { id: "s-2", texto: "Pagos y datos en Excel" },
  { id: "s-3", texto: "Sin avisos si algo falla" },
];

const ITEMS_INTEGRADA = [
  { id: "i-1", texto: "Web + backend en un sistema" },
  { id: "i-2", texto: "Pagos y datos conectados" },
  { id: "i-3", texto: "Monitoreo y tablero de KPIs" },
];

function StackMiniHero({
  titulo,
  integrada,
  icon: Icon,
  items,
}: {
  titulo: string;
  integrada: boolean;
  icon: typeof Unplug;
  items: { id: string; texto: string }[];
}) {
  return (
    <div
      className={`h-full rounded-[20px] border p-5 sm:p-6 ${
        integrada
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
            integrada ? "bg-terracota/12 text-terracota-dark" : "bg-ink/8 text-ink/55"
          }`}
        >
          {integrada ? "una arquitectura" : "desconectado"}
        </span>
      </div>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li
            key={item.id}
            className={`flex items-start gap-2 rounded-lg px-3 py-2.5 text-sm leading-relaxed ${
              integrada
                ? "bg-white text-ink shadow-sm"
                : "border border-dashed border-ink/10 bg-white/60 text-ink/55"
            }`}
          >
            {integrada ? (
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

/** Mini comparación para el hero — herramientas sueltas vs integrada. */
export default function InfraestructuraHeroCompare() {
  return (
    <div className="mt-10 pb-1 sm:mt-12">
      <p className="section-eyebrow text-center text-[0.72rem] lg:text-left">
        Sueltas vs integrada
      </p>
      <div className="mt-4 grid items-stretch gap-4 sm:grid-cols-[1fr_auto_1fr] sm:gap-5">
        <StackMiniHero
          titulo="Herramientas sueltas"
          integrada={false}
          icon={Unplug}
          items={ITEMS_SUELTAS}
        />
        <div className="flex items-center justify-center py-2 sm:py-0">
          <ArrowRight
            className="h-5 w-5 rotate-90 text-ink/35 sm:rotate-0"
            strokeWidth={1.5}
            aria-hidden
          />
        </div>
        <StackMiniHero
          titulo="Arquitectura integrada"
          integrada={true}
          icon={Network}
          items={ITEMS_INTEGRADA}
        />
      </div>
    </div>
  );
}
