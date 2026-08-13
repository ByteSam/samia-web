import Reveal from "@/components/Reveal";

/** Sección "Problema" — layout con card sobre section-band. */
export default function ProblemaSection() {
  return (
    <section className="container-prose section-py">
      <Reveal>
        <div className="card-soft bg-white">
          <h2 className="text-h2 text-ink">
            Cada consulta que no atiendes a tiempo es un cliente que se va a la competencia.
          </h2>
          <ul className="mt-8 space-y-4 text-body">
            {[
              "Tienes web o redes, pero quien visita no deja datos o no te avisan a tiempo.",
              "Llegan consultas por WhatsApp fuera de horario y nadie contesta hasta el día siguiente.",
              "Las citas o consultas no se confirman y se pierden — agenda con huecos.",
              "Respondes siempre lo mismo — precios, horarios, disponibilidad — tiempo que no dedicas a atender.",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 border-b border-ink/8 pb-4 last:border-0 last:pb-0"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracota" />
                <span className="text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <blockquote className="mt-6 border-t border-ink/8 pt-5">
            <p className="font-display text-base italic leading-relaxed text-terracota-dark sm:text-lg">
              La mayoría de las personas abandona si no le responden rápido.
            </p>
          </blockquote>
        </div>
      </Reveal>
    </section>
  );
}
