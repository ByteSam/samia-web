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
  neutral: "bg-ink/8 text-secondary",
  accion: "bg-terracota/12 text-dorado-light",
  respuesta: "bg-terracota/10 text-ink",
  malo: "bg-red-950/40 text-red-300/80 line-through",
  bueno: "bg-terracota/16 text-dorado-light font-semibold",
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
    <div className="compare-timeline-shell overflow-hidden rounded-2xl border">
      {/* Cabecera */}
      <div className="grid grid-cols-[80px_1fr_1fr] border-b border-ink/10 sm:grid-cols-[96px_1fr_1fr]">
        <div className="px-4 py-3" />
        <div className="border-l border-ink/10 px-4 py-3">
          <p className="text-xs font-semibold text-muted">Sin recordatorio</p>
        </div>
        <div className="compare-timeline-accent-col border-l border-ink/10 px-4 py-3">
          <p className="text-xs font-semibold text-dorado-light">Con recordatorio</p>
        </div>
      </div>

      {/* Filas */}
      {EVENTOS.map((ev, i) => (
        <div
          key={ev.tiempo}
          className={`grid grid-cols-[80px_1fr_1fr] sm:grid-cols-[96px_1fr_1fr] ${
            i < EVENTOS.length - 1 ? "border-b border-ink/10" : ""
          }`}
        >
          {/* Tiempo */}
          <div className="flex items-center px-4 py-4">
            <p className="text-[11px] font-medium tabular-nums text-muted leading-tight">
              {ev.tiempo}
            </p>
          </div>

          {/* Sin recordatorio */}
          <div className="flex items-center border-l border-ink/10 px-4 py-4">
            {ev.sin ? (
              <EventoPill ev={ev.sin} />
            ) : (
              <span className="text-xs text-muted">—</span>
            )}
          </div>

          {/* Con recordatorio */}
          <div className="compare-timeline-accent-col flex items-center border-l border-ink/10 px-4 py-4">
            {ev.con ? (
              <EventoPill ev={ev.con} />
            ) : (
              <span className="text-xs text-muted">—</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
