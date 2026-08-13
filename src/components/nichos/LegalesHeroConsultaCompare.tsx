import { MessageSquareOff, ArrowRight, X } from "lucide-react";
import ComparePanel from "@/components/ComparePanel";
import WhatsAppMockup from "@/components/WhatsAppMockup";
import { MOCKUP_LEGAL } from "@/lib/nichos/mockups";

const CONSULTAS_SIN = [
  { id: "s-1", texto: "\"Me despidieron hoy\" — sin respuesta hasta mañana" },
  { id: "s-2", texto: "\"¿Cuánto cuesta la consulta?\" — cliente se va a otro estudio" },
  { id: "s-3", texto: "Consulta fuera de horario — perdida en el chat" },
];

function SinAsistente() {
  return (
    <ComparePanel
      tone="muted"
      title="Sin asistente"
      badge="consultas perdidas"
      icon={MessageSquareOff}
    >
      <ul className="space-y-2.5">
        {CONSULTAS_SIN.map((item) => (
          <li
            key={item.id}
            className="flex items-start gap-2 rounded-lg border border-dashed border-ink/10 bg-white/60 px-3 py-2.5 text-sm leading-relaxed text-ink/55"
          >
            <X className="mt-0.5 h-4 w-4 shrink-0 text-ink/35" strokeWidth={2} aria-hidden />
            <span>{item.texto}</span>
          </li>
        ))}
      </ul>
    </ComparePanel>
  );
}

function ConAsistente() {
  return (
    <ComparePanel tone="accent" title="Con asistente" badge="filtra y agenda" className="!p-4 sm:!p-5">
      <div className="flex justify-center">
        <WhatsAppMockup
          compact
          titulo={MOCKUP_LEGAL.titulo}
          subtitulo={MOCKUP_LEGAL.subtitulo}
          mensajes={MOCKUP_LEGAL.mensajes}
        />
      </div>
      <p className="mt-3 text-center text-xs text-ink/50">
        Empatía y agenda — sin dar consejo legal automático.
      </p>
    </ComparePanel>
  );
}

/** Comparación consulta legal — sin vs con asistente (mockup integrado). */
export default function LegalesHeroConsultaCompare() {
  return (
    <div className="grid items-stretch gap-4 sm:grid-cols-[1fr_auto_1fr] sm:gap-6">
      <SinAsistente />
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
