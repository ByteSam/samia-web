import Link from "next/link";
import { MessageCircleMore, Globe, Workflow, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const SERVICIOS = [
  {
    href: "/servicios/agentes-ia",
    icon: MessageCircleMore,
    beneficio: "Atiende a tus clientes al instante, 24/7, sin que se te escape ninguno.",
    criterio: "Empieza acá si ya tienes web o redes, pero pierdes clientes por no responder rápido.",
  },
  {
    href: "/servicios/desarrollo-web",
    icon: Globe,
    beneficio: "Una web que vende, no que solo informa.",
    criterio: "Empieza acá si todavía no tienes una web que realmente venda.",
  },
  {
    href: "/infraestructura-digital",
    icon: Workflow,
    beneficio: "Cuando ya validaste, todo tu negocio conectado en un solo sistema.",
    criterio: "Empieza acá si ya validaste con nosotros y quieres integrarlo todo en un solo sistema.",
  },
];

const RUBROS = ["Clínicas", "Servicios legales", "Reformas", "Servicios locales"];

/** Grid de 3 servicios con criterio de auto-selección — Home, sección "Servicios". */
export default function ServiciosGrid() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">
      <Reveal>
        <h2 className="text-3xl font-medium text-ink">Servicios</h2>
        <p className="mt-2 max-w-md text-ink/60">
          Tres formas de resolverlo, según dónde estés hoy.
        </p>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {SERVICIOS.map((s, i) => (
          <Reveal key={s.href} delay={i * 80}>
            <Link href={s.href} className="card-soft hover-lift group flex h-full flex-col">
              <s.icon className="h-7 w-7 text-terracota" strokeWidth={1.5} />
              <p className="mt-5 font-medium text-ink">{s.beneficio}</p>
              <p className="mt-3 text-sm text-ink/55">{s.criterio}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-terracota-dark">
                Ver más <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
      <Reveal delay={240}>
        <p className="mt-8 text-center text-sm text-ink/50">
          Experiencia aplicable en: {RUBROS.join(" · ")}
        </p>
      </Reveal>
    </section>
  );
}
