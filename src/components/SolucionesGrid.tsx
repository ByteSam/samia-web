import Link from "next/link";
import { ArrowUpRight, MessageCircle, Stethoscope, Scale, Wrench } from "lucide-react";
import Reveal from "@/components/Reveal";
import { whatsappLink, WHATSAPP_DIAGNOSTICO_MESSAGE } from "@/lib/contact";

const NICHOS = [
  {
    nombre: "Clínicas",
    href: "/clinicas",
    icon: Stethoscope,
    gancho: "¿Pacientes que no confirman?",
    dolor: "Citas que se caen, agenda con huecos, WhatsApp sin responder.",
    beneficio: "Recordatorios automáticos. Respuesta al instante. Menos ausencias. Más agenda llena.",
    featured: true,
    accent: "bg-terracota",
    iconColor: "text-terracota",
    iconBg: "bg-terracota/12",
  },
  {
    nombre: "Firmas legales",
    href: "/servicios-legales",
    icon: Scale,
    gancho: "¿Consultas fuera de horario?",
    dolor: "Consultas que llegan fuera de horario, sin filtro ni prioridad.",
    beneficio: "Clasifica. Deriva. Agenda la primera consulta. Sin que tengas que estar disponible.",
    featured: false,
    accent: "bg-dorado",
    iconColor: "text-dorado",
    iconBg: "bg-dorado/12",
  },
  {
    nombre: "Negocios locales",
    href: "/servicios-locales",
    icon: Wrench,
    gancho: "¿Pierdes llamadas?",
    dolor: "Llamadas perdidas y WhatsApp sin contestar mientras estás en servicio.",
    beneficio: "Atiende lo urgente, filtra cotizaciones y agenda visitas automáticamente.",
    featured: false,
    accent: "bg-rojo-tierra",
    iconColor: "text-rojo-tierra",
    iconBg: "bg-rojo-tierra/12",
  },
];

function NichoCard({
  n,
  featured,
}: {
  n: (typeof NICHOS)[number];
  featured?: boolean;
}) {
  const cardClass = featured ? "card-soft-tint hover-lift" : "card-soft hover-lift";

  return (
    <Link href={n.href} className={`${cardClass} card-hover-mars group relative flex h-full flex-col overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracota`}>
      <span className={`absolute inset-x-0 top-0 h-1 ${n.accent}`} aria-hidden />
      <span
        className={`inline-flex items-center justify-center rounded-xl ${n.iconBg} ${featured ? "h-14 w-14" : "h-10 w-10"}`}
      >
        <n.icon
          className={`${n.iconColor} ${featured ? "h-7 w-7" : "h-5 w-5"}`}
          strokeWidth={1.5}
        />
      </span>
      <h3 className={`text-h3 ${featured ? "text-h3-featured" : ""} mt-5 text-ink`}>
        {n.nombre}
      </h3>
      <p className="mt-2 text-sm font-medium text-terracota-dark/90">{n.gancho}</p>
      <p className="text-small text-muted mt-1.5">{n.dolor}</p>
      <p className="text-small text-secondary mt-3 font-medium">{n.beneficio}</p>
      <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-terracota-dark">
        Ver solución para {n.nombre.toLowerCase()}{" "}
        <ArrowUpRight className="link-card-arrow h-3.5 w-3.5" />
      </span>
    </Link>
  );
}

function OtroRubroCard() {
  return (
    <a
      href={whatsappLink(WHATSAPP_DIAGNOSTICO_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      className="card-soft hover-lift card-hover-mars group relative flex h-full flex-col overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracota"
    >
      <span className="absolute inset-x-0 top-0 h-1 bg-ink/25" aria-hidden />
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-ink/8 text-ink">
        <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
      </span>
      <h3 className="text-h3 mt-5 text-ink">¿Otro rubro?</h3>
      <p className="mt-2 text-sm font-medium text-terracota-dark/90">
        También funciona
      </p>
      <p className="text-small text-muted mt-1.5">
        Si tu negocio no está en la lista, conversemos. El diagnóstico es gratis.
      </p>
      <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-terracota-dark">
        Conversemos por WhatsApp{" "}
        <ArrowUpRight className="link-card-arrow h-3.5 w-3.5" />
      </span>
    </a>
  );
}

/** Grid bento de soluciones por rubro — Home, sección "Soluciones". */
export default function SolucionesGrid({
  equalCards = false,
}: {
  /** Sin card destacada — útil en Home genérica */
  equalCards?: boolean;
}) {
  const featured = equalCards ? null : NICHOS.find((n) => n.featured);
  const rest = equalCards ? NICHOS : NICHOS.filter((n) => !n.featured);

  return (
    <section className="section-depth-a container-content section-py section-horizon">
      <Reveal>
        <span className="chip">Por sector</span>
        <h2 className="text-h2 mt-4 text-ink">¿En qué rubro estás?</h2>
        <p className="text-body mt-2 max-w-lg">
          Si tu negocio tiene un perfil específico, hay una solución pensada exactamente para ti.
        </p>
      </Reveal>

      {equalCards ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {NICHOS.map((n, i) => (
            <Reveal key={n.href} delay={i * 80}>
              <NichoCard n={n} />
            </Reveal>
          ))}
          <Reveal delay={NICHOS.length * 80}>
            <OtroRubroCard />
          </Reveal>
        </div>
      ) : (
        <>
          {/* Mobile: stack uniforme */}
          <div className="mt-10 grid gap-6 md:hidden">
            {NICHOS.map((n, i) => (
              <Reveal key={n.href} delay={i * 80}>
                <NichoCard n={n} featured={n.featured} />
              </Reveal>
            ))}
            <Reveal delay={NICHOS.length * 80}>
              <OtroRubroCard />
            </Reveal>
          </div>

          {/* Desktop: bento — card featured + columna derecha */}
          <div className="mt-10 hidden gap-6 md:grid md:grid-cols-2 md:grid-rows-2">
            {featured && (
              <Reveal className="md:row-span-2">
                <NichoCard n={featured} featured />
              </Reveal>
            )}
            {rest.map((n, i) => (
              <Reveal key={n.href} delay={80 + i * 60}>
                <NichoCard n={n} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-6 hidden md:block">
            <OtroRubroCard />
          </Reveal>
        </>
      )}
    </section>
  );
}
