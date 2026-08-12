import Reveal from "@/components/Reveal";

/** Sección "Problema" — layout abierto sobre section-band. */
export default function ProblemaSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 section-py">
      <Reveal>
        <h2 className="text-h2 text-ink">
          Cada consulta que no atiendes a tiempo es un cliente que se va a la
          competencia.
        </h2>
        <ul className="mt-8 space-y-4 text-ink/65">
          {[
            "Tienes web o redes, pero quien visita no deja datos o no te avisan a tiempo.",
            "Llegan consultas por WhatsApp fuera de horario y nadie contesta hasta el día siguiente.",
            "Las citas o consultas no se confirman y se pierden — agenda con huecos.",
            "Respondes siempre lo mismo — precios, horarios, disponibilidad — tiempo que no dedicas a atender.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 border-b border-ink/8 pb-4 last:border-0 last:pb-0">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-terracota" />
              <span className="text-base leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-ink/45">
          La mayoría de las personas abandona si no le responden rápido.
        </p>
      </Reveal>
    </section>
  );
}
