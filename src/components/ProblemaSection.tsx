import { AlertTriangle } from "lucide-react";
import Reveal from "@/components/Reveal";

/** Sección "Problema" — layout con card sobre section-band. */
export default function ProblemaSection() {
  return (
    <section className="container-prose section-py">
      <Reveal>
        <div className="card-soft problem-card relative overflow-hidden">
          <AlertTriangle
            className="problem-card-icon pointer-events-none absolute -right-4 -top-4 h-24 w-24 rotate-12"
            strokeWidth={1}
            aria-hidden
          />
          <h2 className="text-h2 relative text-ink">
            Cada consulta que no atiendes a tiempo es un cliente que se va a la competencia.
          </h2>
          <ul className="relative mt-8 space-y-4 text-body">
            {[
              "Tienes web o redes, pero quien visita no deja datos o no te avisan a tiempo.",
              "Llegan consultas por WhatsApp fuera de horario y nadie contesta hasta el día siguiente.",
              "Las citas no se confirman. Se pierden. Agenda con huecos.",
              "Respondes siempre lo mismo. Precios. Horarios. Disponibilidad. Tiempo que no dedicas a atender.",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 border-b border-ink/8 pb-4 last:border-0 last:pb-0"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracota" aria-hidden />
                <span className="text-base leading-relaxed text-secondary">{item}</span>
              </li>
            ))}
          </ul>
          <blockquote className="problem-card-quote relative">
            <p className="font-display text-base italic leading-relaxed text-terracota-dark sm:text-lg">
              La mayoría de las personas abandona si no le responden rápido.
            </p>
          </blockquote>
        </div>
      </Reveal>
    </section>
  );
}
