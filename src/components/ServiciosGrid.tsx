import Link from "next/link";
import {
  MessageCircleMore,
  Globe,
  Workflow,
  BarChart3,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { RUBROS_HOME } from "@/lib/navigation";

const ENTRADA = [
  {
    nombre: "Desarrollo web",
    href: "/servicios/desarrollo-web",
    icon: Globe,
    beneficio: "Una web que vende, no que solo informa.",
    criterio: "Empieza acá si todavía no tienes una web que realmente convierta visitas en contactos.",
  },
  {
    nombre: "Agentes IA por WhatsApp",
    href: "/servicios/agentes-ia",
    icon: MessageCircleMore,
    beneficio: "Atiende por WhatsApp al instante, 24/7, sin que se te escape ninguno.",
    criterio: "Empieza acá si ya tienes web o redes, pero pierdes clientes por no responder rápido.",
  },
  {
    nombre: "Automatización",
    href: "/servicios/automatizacion",
    icon: Workflow,
    beneficio: "Avisos, seguimiento e integraciones — sin copiar datos a mano.",
    criterio: "Empieza acá si los flujos repetitivos te quitan tiempo cada semana.",
  },
];

const ESCALA = [
  {
    nombre: "Datos y analítica",
    href: "/servicios/datos-y-analitica",
    icon: BarChart3,
    beneficio: "Tus KPIs en un tablero, no en varias hojas de cálculo.",
    criterio: "Cuando ya validas y necesitas ver el negocio con claridad.",
  },
  {
    nombre: "Infraestructura digital",
    href: "/servicios/infraestructura-digital",
    icon: Layers,
    beneficio: "Todo conectado en una arquitectura que escala contigo.",
    criterio: "Cuando ya trabajamos juntos y quieres integrarlo todo.",
  },
];

function ServicioCard({
  s,
  chip,
  compact,
}: {
  s: (typeof ENTRADA)[number];
  chip: string;
  compact?: boolean;
}) {
  return (
    <Link href={s.href} className="card-soft hover-lift group flex h-full flex-col">
      <span className="chip-muted text-[0.65rem]">{chip}</span>
      <s.icon className={`${compact ? "mt-4 h-6 w-6" : "mt-5 h-7 w-7"} text-terracota`} strokeWidth={1.5} />
      <h3 className={`${compact ? "mt-4 text-base" : "mt-5 text-lg"} font-medium text-ink`}>
        {s.nombre}
      </h3>
      <p className="mt-2 text-sm text-ink/75">{s.beneficio}</p>
      <p className="mt-3 text-sm text-ink/55">{s.criterio}</p>
      <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-terracota-dark">
        Ver más <ArrowUpRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}

/** Grid de 5 servicios con criterio de auto-selección — Home, sección "Servicios". */
export default function ServiciosGrid() {
  return (
    <section className="mx-auto max-w-5xl px-6 section-py">
      <Reveal>
        <span className="chip">Catálogo completo</span>
        <h2 className="text-h2 mt-4 text-ink">Servicios</h2>
        <p className="mt-2 max-w-md text-ink/60">
          Cinco formas de resolverlo, según dónde estés hoy.
        </p>
      </Reveal>

      <Reveal delay={60}>
        <p className="mt-10 text-xs font-semibold uppercase tracking-wide text-ink/40">
          Empieza aquí
        </p>
      </Reveal>
      <div className="mt-4 grid gap-6 md:grid-cols-3">
        {ENTRADA.map((s, i) => (
          <Reveal key={s.href} delay={80 + i * 60}>
            <ServicioCard s={s} chip="Empieza aquí" />
          </Reveal>
        ))}
      </div>

      <Reveal delay={240}>
        <p className="mt-10 text-xs font-semibold uppercase tracking-wide text-ink/40">
          Cuando ya validas
        </p>
      </Reveal>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        {ESCALA.map((s, i) => (
          <Reveal key={s.href} delay={280 + i * 60}>
            <ServicioCard s={s} chip="Cuando ya validas" compact />
          </Reveal>
        ))}
      </div>

      <Reveal delay={360}>
        <p className="mt-8 text-center text-sm text-ink/50">
          Experiencia aplicable en: {RUBROS_HOME}
        </p>
      </Reveal>
    </section>
  );
}
