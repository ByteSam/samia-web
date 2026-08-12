import { CalendarCheck, X, Check, Zap, MessageCircle } from "lucide-react";

type EventoTipo = "neutral" | "accion" | "respuesta" | "malo" | "bueno";

type EventoData = {
  texto: string;
  tipo: EventoTipo;
};

type Evento = {
  tiempo: string;
  sin: EventoData | null;
  con: EventoData | null;
};

const EVENTOS: Evento[] = [
  {
    tiempo: "Lun 9am",
    sin: { texto: "Cita agendada", tipo: "neutral" },
    con: { texto: "Cita agendada", tipo: "neutral" },
  },
  {
    tiempo: "Mié 3pm",
    sin: null,
    con: { texto: "Recordatorio enviado", tipo: "accion" },
  },
  {
    tiempo: "Mié 3:10pm",
    sin: null,
    con: { texto: "\"Sí, confirmo\"", tipo: "respuesta" },
  },
  {
    tiempo: "Jue 10am",
    sin: { texto: "Silla vacía", tipo: "malo" },
    con: { texto: "Paciente llega", tipo: "bueno" },
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
  accion: <Zap className="h-3 w-3 shrink-0" aria-hidden />,
  respuesta: <MessageCircle className="h-3 w-3 shrink-0" aria-hidden />,
  malo: <X className="h-3 w-3 shrink-0" aria-hidden />,
  bueno: <Check className="h-3 w-3 shrink-0" aria-hidden />,
  neutral: <CalendarCheck className="h-3 w-3 shrink-0" aria-hidden />,
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

/** Comparación narrativa — timeline del mismo turno en dos escenarios. */
export default function ClinicasHeroAgendaCompare() {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink/8 bg-white">
      {/* Cabecera */}
      <div className="grid grid-cols-[80px_1fr_1fr] border-b border-ink/6 sm:grid-cols-[96px_1fr_1fr]">
        <div className="px-4 py-3" />
        <div className="border-l border-ink/6 px-4 py-3">
          <p className="text-xs font-semibold text-ink/40">Sin recordatorio</p>
        </div>
        <div className="border-l border-ink/6 bg-terracota/[0.03] px-4 py-3">
          <p className="text-xs font-semibold text-terracota-dark/70">Con recordatorio</p>
        </div>
      </div>

      {/* Filas */}
      {EVENTOS.map((ev, i) => (
        <div
          key={ev.tiempo}
          className={`grid grid-cols-[80px_1fr_1fr] sm:grid-cols-[96px_1fr_1fr] ${
            i < EVENTOS.length - 1 ? "border-b border-ink/6" : ""
          }`}
        >
          {/* Tiempo */}
          <div className="flex items-center px-4 py-4">
            <p className="text-[11px] font-medium tabular-nums text-ink/35 leading-tight">
              {ev.tiempo}
            </p>
          </div>

          {/* Sin recordatorio */}
          <div className="flex items-center border-l border-ink/6 px-4 py-4">
            {ev.sin ? (
              <EventoPill ev={ev.sin} />
            ) : (
              <span className="text-xs text-ink/20">—</span>
            )}
          </div>

          {/* Con recordatorio */}
          <div className="flex items-center border-l border-ink/6 bg-terracota/[0.025] px-4 py-4">
            {ev.con ? (
              <EventoPill ev={ev.con} />
            ) : (
              <span className="text-xs text-ink/20">—</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
