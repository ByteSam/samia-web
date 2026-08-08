import { MessageSquareOff, MessageSquare, ArrowRight, Check } from "lucide-react";

const CONSULTAS = [
  { id: "c-1", texto: "¿Tienen disponibilidad hoy?" },
  { id: "c-2", texto: "¿Cuánto cuesta la consulta?" },
  { id: "c-3", texto: "¿Abren el sábado?" },
];

function InboxMiniHero({
  titulo,
  respondido,
  icon: Icon,
}: {
  titulo: string;
  respondido: boolean;
  icon: typeof MessageSquareOff;
}) {
  const pendientes = respondido ? 0 : CONSULTAS.length;

  return (
    <div
      className={`h-full rounded-[20px] border p-5 sm:p-6 ${
        respondido
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
            respondido ? "bg-terracota/12 text-terracota-dark" : "bg-ink/8 text-ink/55"
          }`}
        >
          {respondido ? "0 pendientes" : `${pendientes} pendientes`}
        </span>
      </div>
      <div className="mt-4 space-y-2">
        {CONSULTAS.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-2 rounded-lg px-3 py-2.5 text-sm leading-relaxed ${
              respondido
                ? "bg-white text-ink shadow-sm"
                : "border border-dashed border-ink/10 bg-white/60 text-ink/55"
            }`}
          >
            {respondido ? (
              <Check
                className="mt-0.5 h-4 w-4 shrink-0 text-terracota"
                strokeWidth={2}
                aria-hidden
              />
            ) : (
              <span
                className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-ink/25"
                aria-hidden
              />
            )}
            <span>{msg.texto}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Mini comparación inbox para el hero — sin vs con agente. */
export default function AgentesHeroInboxCompare() {
  return (
    <div className="mt-10 pb-1 sm:mt-12">
      <p className="section-eyebrow text-center text-[0.72rem] lg:text-left">
        Sin vs con agente
      </p>
      <div className="mt-4 grid items-stretch gap-4 sm:grid-cols-[1fr_auto_1fr] sm:gap-5">
        <InboxMiniHero titulo="Sin agente" respondido={false} icon={MessageSquareOff} />
        <div className="flex items-center justify-center py-2 sm:py-0">
          <ArrowRight
            className="h-5 w-5 rotate-90 text-ink/35 sm:rotate-0"
            strokeWidth={1.5}
            aria-hidden
          />
        </div>
        <InboxMiniHero titulo="Con agente" respondido={true} icon={MessageSquare} />
      </div>
    </div>
  );
}
