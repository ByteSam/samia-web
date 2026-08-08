import Link from "next/link";
import { MessageCircleMore, Globe, Workflow, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { RUBROS_HOME } from "@/lib/navigation";

const SERVICIOS = [
  {
    nombre: "Desarrollo web",
    href: "/servicios/desarrollo-web",
    icon: Globe,
    beneficio: "Una web que vende, no que solo informa.",
    criterio: "Empieza acá si todavía no tienes una web que realmente convierta visitas en contactos.",
  },
  {
    nombre: "Agentes IA",
    href: "/servicios/agentes-ia",
    icon: MessageCircleMore,
    beneficio: "Atiende por WhatsApp al instante, 24/7, sin que se te escape ninguno.",
    criterio: "Empieza acá si ya tienes web o redes, pero pierdes clientes por no responder rápido.",
  },
  {
    nombre: "Infraestructura cloud",
    href: "/servicios/infraestructura-digital",
    icon: Workflow,
    beneficio: "Cuando ya validaste, todo tu negocio conectado en un solo sistema.",
    criterio: "Empieza acá si ya trabajamos juntos y quieres integrarlo todo.",
  },
];

/** Grid de 3 servicios con criterio de auto-selección — Home, sección "Servicios". */
export default function ServiciosGrid() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">
      <Reveal>
        <h2 className="text-h2 text-ink">Servicios</h2>
        <p className="mt-2 max-w-md text-ink/60">
          Tres formas de resolverlo, según dónde estés hoy.
        </p>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {SERVICIOS.map((s, i) => (
          <Reveal key={s.href} delay={i * 80}>
            <Link href={s.href} className="card-soft hover-lift group flex h-full flex-col">
              <s.icon className="h-7 w-7 text-terracota" strokeWidth={1.5} />
              <h3 className="mt-5 text-lg font-medium text-ink">{s.nombre}</h3>
              <p className="mt-2 text-sm text-ink/75">{s.beneficio}</p>
              <p className="mt-3 text-sm text-ink/55">{s.criterio}</p>
              <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-terracota-dark">
                Ver más <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
      <Reveal delay={240}>
        <p className="mt-8 text-center text-sm text-ink/50">
          Experiencia aplicable en: {RUBROS_HOME}
        </p>
      </Reveal>
    </section>
  );
}
