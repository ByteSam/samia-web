import { MessageSquareOff, ArrowRight, X } from "lucide-react";
import ComparePanel from "@/components/ComparePanel";
import CompareChecksList from "@/components/CompareChecksList";

const CONSULTAS_SIN = [
  { id: "s-1", pregunta: '"¿Tienen disponibilidad hoy?"', resultado: "Sin respuesta" },
  { id: "s-2", pregunta: '"¿Cuánto cuesta?"', resultado: "Se va a la competencia" },
  { id: "s-3", pregunta: "Consulta fuera de horario", resultado: "Perdida en el chat" },
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
      <ul className="space-y-0">
        {CONSULTAS_SIN.map((item) => (
          <li
            key={item.id}
            className="flex items-start gap-2 compare-list-item-muted border-b border-white/5 px-3 py-2.5 text-sm leading-relaxed last:border-0"
          >
            <X className="mt-0.5 h-4 w-4 shrink-0 text-rojo-tierra/80" strokeWidth={2} aria-hidden />
            <span>
              {item.pregunta}{" "}
              <span className="text-muted">→ {item.resultado}</span>
            </span>
          </li>
        ))}
      </ul>
    </ComparePanel>
  );
}

function ConAsistente() {
  return (
    <ComparePanel tone="accent" title="Con asistente" badge="responde al instante" className="compare-panel-accent-glow">
      <CompareChecksList items={CON_ASISTENTE} />
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
          className="compare-arrow-pulse rotate-90 sm:rotate-0"
          strokeWidth={1.75}
          aria-hidden
        />
      </div>
      <ConAsistente />
    </div>
  );
}
