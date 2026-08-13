import Link from "next/link";
import { ArrowUpRight, Stethoscope, Scale, Wrench } from "lucide-react";
import Reveal from "@/components/Reveal";

const NICHOS = [
  {
    nombre: "Clínicas",
    href: "/clinicas",
    icon: Stethoscope,
    dolor: "Citas que se caen, agenda con huecos, WhatsApp sin responder.",
    beneficio: "Recordatorios automáticos y respuesta al instante — menos ausencias, más agenda llena.",
    featured: true,
    accent: "bg-terracota",
  },
  {
    nombre: "Firmas legales",
    href: "/servicios-legales",
    icon: Scale,
    dolor: "Consultas que llegan fuera de horario, sin filtro ni prioridad.",
    beneficio: "Clasifica, deriva y agenda la primera consulta — sin que tengas que estar disponible.",
    featured: false,
    accent: "bg-dorado",
  },
  {
    nombre: "Negocios locales",
    href: "/servicios-locales",
    icon: Wrench,
    dolor: "Llamadas perdidas y WhatsApp sin contestar mientras estás en servicio.",
    beneficio: "Atiende lo urgente, filtra cotizaciones y agenda visitas automáticamente.",
    featured: false,
    accent: "bg-rojo-tierra",
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
    <Link href={n.href} className={`${cardClass} group relative flex h-full flex-col overflow-hidden`}>
      <span className={`absolute inset-x-0 top-0 h-1 ${n.accent}`} aria-hidden />
      <n.icon
        className={`text-terracota ${featured ? "h-8 w-8" : "h-6 w-6"}`}
        strokeWidth={1.5}
      />
      <h3 className={`mt-5 font-medium text-ink ${featured ? "text-xl" : "text-lg"}`}>
        {n.nombre}
      </h3>
      <p className="mt-2 text-sm text-ink/55">{n.dolor}</p>
      <p className="mt-3 text-sm font-medium text-ink/75">{n.beneficio}</p>
      <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-terracota-dark">
        Ver solución para {n.nombre.toLowerCase()}{" "}
        <ArrowUpRight className="h-3.5 w-3.5" />
      </span>
    </Link>
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
    <section className="mx-auto max-w-5xl px-6 section-py">
      <Reveal>
        <span className="chip">Mismo sistema, adaptado a tu sector</span>
        <h2 className="text-h2 mt-4 text-ink">Soluciones por rubro</h2>
        <p className="mt-2 max-w-lg text-ink/60">
          Si tu negocio tiene un perfil específico, hay una solución pensada exactamente para ti.
        </p>
      </Reveal>

      {equalCards ? (
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {NICHOS.map((n, i) => (
            <Reveal key={n.href} delay={i * 80}>
              <NichoCard n={n} />
            </Reveal>
          ))}
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
        </>
      )}
    </section>
  );
}
