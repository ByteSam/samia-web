import { LayoutTemplate, Sparkles, ArrowRight, X, Check } from "lucide-react";

const ITEMS_PASIVA = [
  { id: "p-1", texto: "Sin CTA claro a WhatsApp" },
  { id: "p-2", texto: "Sin formulario ni aviso" },
  { id: "p-3", texto: "Lenta y difícil de actualizar" },
];

const ITEMS_CONVIERTE = [
  { id: "c-1", texto: "Botón WhatsApp visible" },
  { id: "c-2", texto: "Te avisa cuando llega alguien" },
  { id: "c-3", texto: "Código real, indexable" },
];

function WebMiniHero({
  titulo,
  convierte,
  icon: Icon,
  items,
}: {
  titulo: string;
  convierte: boolean;
  icon: typeof LayoutTemplate;
  items: { id: string; texto: string }[];
}) {
  return (
    <div
      className={`h-full rounded-[20px] border p-5 sm:p-6 ${
        convierte
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
            convierte ? "bg-terracota/12 text-terracota-dark" : "bg-ink/8 text-ink/55"
          }`}
        >
          {convierte ? "capta contactos" : "solo informa"}
        </span>
      </div>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li
            key={item.id}
            className={`flex items-start gap-2 rounded-lg px-3 py-2.5 text-sm leading-relaxed ${
              convierte
                ? "bg-white text-ink shadow-sm"
                : "border border-dashed border-ink/10 bg-white/60 text-ink/55"
            }`}
          >
            {convierte ? (
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

/** Mini comparación web para el hero — pasiva vs convierte. */
export default function DesarrolloWebHeroCompare() {
  return (
    <div className="mt-10 pb-1 sm:mt-12">
      <p className="section-eyebrow text-center text-[0.72rem] lg:text-left">
        Pasiva vs que convierte
      </p>
      <div className="mt-4 grid items-stretch gap-4 sm:grid-cols-[1fr_auto_1fr] sm:gap-5">
        <WebMiniHero
          titulo="Web pasiva"
          convierte={false}
          icon={LayoutTemplate}
          items={ITEMS_PASIVA}
        />
        <div className="flex items-center justify-center py-2 sm:py-0">
          <ArrowRight
            className="h-5 w-5 rotate-90 text-ink/35 sm:rotate-0"
            strokeWidth={1.5}
            aria-hidden
          />
        </div>
        <WebMiniHero
          titulo="Web que convierte"
          convierte={true}
          icon={Sparkles}
          items={ITEMS_CONVIERTE}
        />
      </div>
    </div>
  );
}
