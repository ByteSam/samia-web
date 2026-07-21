import Reveal from "@/components/Reveal";

/** Sección "Problema" de Home — nueva, no existía antes. Mismo patrón que ya usan las páginas de nicho. */
export default function ProblemaSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-20">
      <Reveal>
        <div className="card-soft">
          <h2 className="text-2xl font-normal text-ink md:text-3xl">
            Cada mensaje sin responder es un cliente que se va a la competencia.
          </h2>
          <ul className="mt-6 space-y-3 text-ink/65">
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
            El 62% de las personas abandona si no le responden rápido.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
