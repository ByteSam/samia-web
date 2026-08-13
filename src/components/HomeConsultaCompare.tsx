import { MessageSquareOff, ArrowRight, Check } from "lucide-react";
import ComparePanel from "@/components/ComparePanel";

const CONSULTAS_SIN = [
  { id: "s-1", texto: '"¿Tienen disponibilidad hoy?" — sin respuesta' },
  { id: "s-2", texto: '"¿Cuánto cuesta?" — cliente se va a la competencia' },
  { id: "s-3", texto: "Consulta fuera de horario — perdida en el chat" },
];

const CON_ASISTENTE = [
  { id: "a-1", texto: "Horarios y precios respondidos al instante" },
  { id: "a-2", texto: "Consulta filtrada y priorizada" },
  { id: "a-3", texto: "Cita o visita agendada sin ida y vuelta" },
];

function SinRespuesta() {
  return (
    <ComparePanel
      tone="muted"
      title="Sin respuesta"
      badge="consultas perdidas"
      icon={MessageSquareOff}
    >
      <ul className="space-y-2.5">
        {CONSULTAS_SIN.map((item) => (
          <li
            key={item.id}
            className="flex items-start gap-2 rounded-lg border border-dashed border-ink/10 bg-white/60 px-3 py-2.5 text-sm leading-relaxed text-ink/55"
          >
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-ink/25" aria-hidden />
            <span>{item.texto}</span>
          </li>
        ))}
      </ul>
    </ComparePanel>
  );
}

function ConAsistente() {
  return (
    <ComparePanel tone="accent" title="Con asistente" badge="responde al instante">
      <ul className="space-y-2.5">
        {CON_ASISTENTE.map((item) => (
          <li
            key={item.id}
            className="flex items-start gap-2 rounded-lg bg-white px-3 py-2.5 text-sm leading-relaxed text-ink shadow-rest"
          >
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-terracota" strokeWidth={2} aria-hidden />
            <span>{item.texto}</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-ink/50">
        El mockup del hero muestra cómo responde en WhatsApp — sin que tengas que estar pegado al
        teléfono.
      </p>
    </ComparePanel>
  );
}

/** Comparación genérica para Home — sin respuesta vs con asistente (sin mockup duplicado). */
export default function HomeConsultaCompare() {
  return (
    <div className="grid items-stretch gap-4 sm:grid-cols-[1fr_auto_1fr] sm:gap-6">
      <SinRespuesta />
      <div className="flex items-center justify-center py-2 sm:py-0">
        <ArrowRight
          className="h-5 w-5 rotate-90 text-ink/35 sm:rotate-0"
          strokeWidth={1.5}
          aria-hidden
        />
      </div>
      <ConAsistente />
    </div>
  );
}
