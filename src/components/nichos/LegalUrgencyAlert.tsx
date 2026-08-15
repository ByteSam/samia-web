import { MessageCircleMore, ArrowRight, BellRing, Filter } from "lucide-react";
import Reveal from "@/components/Reveal";

const STEPS = [
  {
    id: "mensaje",
    icon: MessageCircleMore,
    titulo: "Consulta urgente",
    ejemplo: "\"Me despidieron hoy\"",
    detalle: "El cliente escribe fuera de horario o en crisis.",
  },
  {
    id: "clasifica",
    icon: Filter,
    titulo: "Asistente empatiza",
    ejemplo: "Sin dar consejo legal",
    detalle: "Responde con tu tono y recopila datos básicos.",
  },
  {
    id: "alerta",
    icon: BellRing,
    titulo: "Te avisa al instante",
    ejemplo: "Notificación al abogado",
    detalle: "Ves la alerta y decides si atender tú.",
  },
];

/** Flujo visual: urgencia detectada → notificación al abogado (Fase 8 #56). */
export default function LegalUrgencyAlert() {
  return (
    <section className="section-depth-a section-py section-horizon">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <span className="chip">Cuando suena urgente</span>
          <h2 className="text-h2 mt-4 text-ink">Del mensaje a tu alerta</h2>
          <p className="mt-3 max-w-2xl text-secondary">
            No solo ves el chat — también recibes aviso cuando algo necesita revisión humana.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
          {STEPS.map((step, i) => (
            <Reveal key={step.id} delay={i * 80} className="contents">
              <div className="card-soft card-hover-mars h-full p-5 text-center md:text-left">
                <step.icon className="mx-auto h-6 w-6 text-terracota md:mx-0" strokeWidth={1.5} />
                <p className="mt-3 text-sm font-medium text-ink">{step.titulo}</p>
                <p className="mt-1 text-xs font-medium text-terracota-dark/80">{step.ejemplo}</p>
                <p className="mt-2 text-xs text-muted">{step.detalle}</p>
              </div>
              {i < STEPS.length - 1 && (
                <ArrowRight
                  className="compare-arrow-pulse mx-auto hidden h-5 w-5 self-center text-dorado-light md:block"
                  strokeWidth={1.5}
                  aria-hidden
                />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
