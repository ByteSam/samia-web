import { MousePointerClick, X, Check, MessageCircle, UserRound } from "lucide-react";

type EventoTipo = "neutral" | "accion" | "respuesta" | "malo" | "bueno";

type EventoData = {
  texto: string;
  tipo: EventoTipo;
};

type Evento = {
  tiempo: string;
  pasiva: EventoData | null;
  convierte: EventoData | null;
};

const EVENTOS: Evento[] = [
  {
    tiempo: "Llega",
    pasiva: { texto: "Entra a tu web", tipo: "neutral" },
    convierte: { texto: "Entra a tu web", tipo: "neutral" },
  },
  {
    tiempo: "30 seg",
    pasiva: { texto: "No encuentra cómo contactar", tipo: "malo" },
    convierte: { texto: "Ve botón WhatsApp claro", tipo: "accion" },
  },
  {
    tiempo: "Al irse",
    pasiva: { texto: "Sale sin escribir", tipo: "malo" },
    convierte: { texto: "Deja datos o te escribe", tipo: "respuesta" },
  },
  {
    tiempo: "Resultado",
    pasiva: { texto: "0 contactos", tipo: "malo" },
    convierte: { texto: "Te llega el aviso", tipo: "bueno" },
  },
];

const TIPO_STYLES: Record<EventoTipo, string> = {
  neutral: "bg-ink/6 text-ink/55",
  accion: "bg-terracota/10 text-terracota-dark",
  respuesta: "bg-[#d4ead8] text-[#2d6e47]",
  malo: "bg-red-50 text-red-400 line-through",
  bueno: "bg-terracota/12 text-terracota-dark font-semibold",
};

const TIPO_ICON: Partial<Record<EventoTipo, React.ReactNode>> = {
  accion: <MousePointerClick className="h-3 w-3 shrink-0" aria-hidden />,
  respuesta: <MessageCircle className="h-3 w-3 shrink-0" aria-hidden />,
  malo: <X className="h-3 w-3 shrink-0" aria-hidden />,
  bueno: <Check className="h-3 w-3 shrink-0" aria-hidden />,
  neutral: <UserRound className="h-3 w-3 shrink-0" aria-hidden />,
};

function EventoPill({ ev }: { ev: EventoData }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs ${TIPO_STYLES[ev.tipo]}`}
    >
      {TIPO_ICON[ev.tipo]}
      {ev.texto}
    </span>
  );
}

/** Comparación narrativa — el mismo visitante en web pasiva vs web que convierte. */
export default function DesarrolloWebHeroCompare() {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink/8 bg-white">
      <div className="grid grid-cols-[72px_1fr_1fr] border-b border-ink/6 sm:grid-cols-[88px_1fr_1fr]">
        <div className="px-3 py-3 sm:px-4" />
        <div className="border-l border-ink/6 px-3 py-3 sm:px-4">
          <p className="text-xs font-semibold text-ink/40">Web pasiva</p>
        </div>
        <div className="border-l border-ink/6 bg-terracota/[0.03] px-3 py-3 sm:px-4">
          <p className="text-xs font-semibold text-terracota-dark/70">Web que convierte</p>
        </div>
      </div>

      {EVENTOS.map((ev, i) => (
        <div
          key={ev.tiempo}
          className={`grid grid-cols-[72px_1fr_1fr] sm:grid-cols-[88px_1fr_1fr] ${
            i < EVENTOS.length - 1 ? "border-b border-ink/6" : ""
          }`}
        >
          <div className="flex items-center px-3 py-4 sm:px-4">
            <p className="text-[11px] font-medium tabular-nums text-ink/35 leading-tight">
              {ev.tiempo}
            </p>
          </div>
          <div className="flex items-center border-l border-ink/6 px-3 py-4 sm:px-4">
            {ev.pasiva ? (
              <EventoPill ev={ev.pasiva} />
            ) : (
              <span className="text-xs text-ink/20">—</span>
            )}
          </div>
          <div className="flex items-center border-l border-ink/6 bg-terracota/[0.025] px-3 py-4 sm:px-4">
            {ev.convierte ? (
              <EventoPill ev={ev.convierte} />
            ) : (
              <span className="text-xs text-ink/20">—</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
