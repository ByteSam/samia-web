import { MessageSquareOff, ArrowRight } from "lucide-react";
import ComparePanel from "@/components/ComparePanel";
import WhatsAppMockup from "@/components/WhatsAppMockup";
import { MOCKUP_AGENTES } from "@/lib/nichos/mockups";

const CONSULTAS = [
  { id: "c-1", texto: "¿Tienen disponibilidad hoy?" },
  { id: "c-2", texto: "¿Cuánto cuesta la consulta?" },
  { id: "c-3", texto: "¿Abren el sábado?" },
];

function InboxSinAgente() {
  const pendientes = CONSULTAS.length;

  return (
    <ComparePanel
      tone="muted"
      title="Sin agente"
      badge={`${pendientes} pendientes`}
      icon={MessageSquareOff}
    >
      <div className="space-y-2">
        {CONSULTAS.map((msg) => (
          <div
            key={msg.id}
            className="flex items-start gap-2 rounded-lg border border-dashed border-ink/10 bg-white/60 px-3 py-2.5 text-sm leading-relaxed text-ink/55"
          >
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-ink/25" aria-hidden />
            <span>{msg.texto}</span>
          </div>
        ))}
      </div>
    </ComparePanel>
  );
}

function InboxConAgente() {
  return (
    <ComparePanel tone="accent" title="Con agente" badge="0 pendientes" className="!p-4 sm:!p-5">
      <div className="flex justify-center">
        <WhatsAppMockup
          compact
          titulo={MOCKUP_AGENTES.titulo}
          subtitulo={MOCKUP_AGENTES.subtitulo}
          mensajes={MOCKUP_AGENTES.mensajes}
        />
      </div>
      <p className="mt-3 text-center text-xs text-ink/50">
        Así responde el agente en tu WhatsApp — sin que tengas que estar pegado al teléfono.
      </p>
    </ComparePanel>
  );
}

/** Mini comparación inbox para el hero — sin vs con agente (mockup integrado). */
export default function AgentesHeroInboxCompare() {
  return (
    <div className="mt-10 pb-1 sm:mt-12">
      <p className="section-eyebrow text-center lg:text-left">
        Sin vs con agente
      </p>
      <div className="mt-4 grid items-stretch gap-4 sm:grid-cols-[1fr_auto_1fr] sm:gap-6">
        <InboxSinAgente />
        <div className="flex items-center justify-center py-2 sm:py-0">
          <ArrowRight
            className="h-5 w-5 rotate-90 text-ink/35 sm:rotate-0"
            strokeWidth={1.5}
            aria-hidden
          />
        </div>
        <InboxConAgente />
      </div>
    </div>
  );
}
