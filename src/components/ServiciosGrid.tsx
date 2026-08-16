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
    chip: "Web",
    popular: true,
    iconColor: "text-terracota",
    iconBg: "bg-terracota/12",
  },
  {
    nombre: "Agentes IA por WhatsApp",
    href: "/servicios/agentes-ia",
    icon: MessageCircleMore,
    beneficio: "Atiende por WhatsApp al instante, 24/7, sin que se te escape ninguno.",
    criterio: "Empieza acá si ya tienes web o redes, pero pierdes clientes por no responder rápido.",
    chip: "IA",
    popular: true,
    iconColor: "text-dorado",
    iconBg: "bg-dorado/12",
  },
  {
    nombre: "Automatización",
    href: "/servicios/automatizacion",
    icon: Workflow,
    beneficio: "Avisos. Seguimiento. Integraciones. Sin copiar datos a mano.",
    criterio: "Empieza acá si los flujos repetitivos te quitan tiempo cada semana.",
    chip: "Automatización",
    popular: false,
    iconColor: "text-rojo-tierra",
    iconBg: "bg-rojo-tierra/12",
  },
];

const ESCALA = [
  {
    nombre: "Datos y analítica",
    href: "/servicios/datos-y-analitica",
    icon: BarChart3,
    beneficio: "Tus KPIs en un tablero, no en varias hojas de cálculo.",
    criterio: "Cuando ya validas y necesitas ver el negocio con claridad.",
    chip: "Datos",
    popular: false,
    iconColor: "text-dorado",
    iconBg: "bg-dorado/12",
  },
  {
    nombre: "Infraestructura digital",
    href: "/servicios/infraestructura-digital",
    icon: Layers,
    beneficio: "Todo conectado en una arquitectura que escala contigo.",
    criterio: "Cuando ya trabajamos juntos y quieres integrarlo todo.",
    chip: "Infra",
    popular: false,
    iconColor: "text-terracota",
    iconBg: "bg-terracota/12",
  },
];

function ServicioCard({
  s,
  compact,
}: {
  s: (typeof ENTRADA)[number] | (typeof ESCALA)[number];
  compact?: boolean;
}) {
  return (
    <Link
      href={s.href}
      className={`card-hover-mars hover-lift group flex h-full flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracota ${
        s.popular ? "card-soft-tint" : "card-soft"
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="chip text-caption">{s.chip}</span>
        {s.popular && <span className="servicio-core-badge">Más pedido</span>}
      </div>
      <span
        className={`inline-flex items-center justify-center rounded-xl ${s.iconBg} ${compact ? "mt-4 h-10 w-10" : "mt-5 h-12 w-12"}`}
      >
        <s.icon className={`${compact ? "h-5 w-5" : "h-6 w-6"} ${s.iconColor}`} strokeWidth={1.5} />
      </span>
      <h3 className={`text-h3 ${compact ? "mt-4" : "mt-5"} ${s.popular ? "text-h3-featured" : ""} text-ink`}>
        {s.nombre}
      </h3>
      <p className="text-small text-secondary mt-2">{s.beneficio}</p>
      <p className="text-small text-muted mt-3">{s.criterio}</p>
      <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-terracota-dark">
        Ver más <ArrowUpRight className="link-card-arrow h-3.5 w-3.5" />
      </span>
    </Link>
  );
}

/** Grid de 5 servicios con criterio de auto-selección — Home, sección "Servicios". */
export default function ServiciosGrid() {
  return (
    <section className="container-content section-py">
      <Reveal>
        <span className="chip">Catálogo completo</span>
        <h2 className="text-h2 mt-4 text-ink">Qué incluye</h2>
        <p className="text-body mt-2 max-w-md">
          Cinco formas de resolverlo, según dónde estés hoy.
        </p>
        <p className="text-small text-muted mt-4 max-w-lg">
          ¿No ves tu rubro exacto? Lo de arriba es el mismo sistema, aplicado a cualquier negocio
          que recibe consultas por web o WhatsApp. Combo web + asistente desde S/1,800.
        </p>
      </Reveal>

      <Reveal delay={60}>
        <p className="text-label mt-10">
          Empieza aquí · lo más pedido
        </p>
      </Reveal>
      <div className="mt-4 grid gap-6 md:grid-cols-3">
        {ENTRADA.map((s, i) => (
          <Reveal key={s.href} delay={80 + i * 60}>
            <ServicioCard s={s} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={80}>
        <p className="text-label mt-10">
          Cuando ya validas
        </p>
      </Reveal>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        {ESCALA.map((s, i) => (
          <Reveal key={s.href} delay={80 + i * 60}>
            <ServicioCard s={s} compact />
          </Reveal>
        ))}
      </div>

      <Reveal delay={80}>
        <p className="text-small text-muted mt-8 text-center">
          Experiencia aplicable en: {RUBROS_HOME}
        </p>
      </Reveal>
    </section>
  );
}
