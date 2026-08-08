import Reveal from "@/components/Reveal";

/** Sección "Problema" de Home — dolor de captación + WhatsApp. */
export default function ProblemaSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-20">
      <Reveal>
        <div className="card-soft">
          <h2 className="text-h2 text-ink">
            Cada consulta que no atiendes a tiempo es un cliente que se va a la
            competencia.
          </h2>
          <ul className="mt-6 space-y-3 text-ink/65">
            <li>
              • Tienes web o redes, pero quien visita no deja datos o no te
              avisan a tiempo.
            </li>
            <li>
              • Llegan consultas por WhatsApp fuera de horario y nadie contesta
              hasta el día siguiente.
            </li>
            <li>
              • Las citas o consultas no se confirman y se pierden — agenda
              con huecos.
            </li>
            <li>
              • Respondes siempre lo mismo — precios, horarios,
              disponibilidad — tiempo que no dedicas a atender.
            </li>
          </ul>
          <p className="mt-6 text-sm text-ink/50">
            La mayoría de las personas abandona si no le responden rápido.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
