import type { Metadata } from "next";
import { Hexagon, CalendarCheck, MessageCircleMore } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookingButton from "@/components/BookingButton";
import Reveal from "@/components/Reveal";
import WhatsAppMockup from "@/components/WhatsAppMockup";
import LeadForm from "@/components/LeadForm";
import ProblemaSection from "@/components/ProblemaSection";
import ServiciosGrid from "@/components/ServiciosGrid";
import SolucionesGrid from "@/components/SolucionesGrid";
import ProcesoSection from "@/components/ProcesoSection";
import GarantiaSection from "@/components/GarantiaSection";
import FAQSection from "@/components/FAQSection";
import HeroTrustLine from "@/components/HeroTrustLine";
import ProyectosRecientes from "@/components/ProyectosRecientes";
import MarqueeStrip from "@/components/MarqueeStrip";
import StickyCTA from "@/components/StickyCTA";
import HeroParallaxEffect from "@/components/HeroParallaxEffect";
import HeroCursorTrail from "@/components/HeroCursorTrail";
import HomeConsultaCompare from "@/components/HomeConsultaCompare";
import { WHATSAPP_DIAGNOSTICO_MESSAGE, isCalComConfigured } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Tu negocio responde solo — webs y asistentes WhatsApp para pymes | afynova",
  description:
    "Atiende mejor, vende más, deja de perder tiempo. Webs y asistentes de WhatsApp para pymes peruanas. Diagnóstico gratis · piloto 14 días.",
  alternates: { canonical: "/" },
};

const FAQS_HOME = [
  {
    q: "¿Necesito ya tener una web?",
    a: "No. Muchos proyectos empiezan con una web de captación nueva. Si ya tienes una, la evaluamos en el diagnóstico y vemos si conviene mejorarla o rehacerla.",
  },
  {
    q: "¿Qué incluye una implementación desde S/500?",
    a: "Depende de tu caso: puede ser un asistente que responde consultas frecuentes, una landing con aviso por WhatsApp, o ambos. El alcance exacto lo cerramos en el diagnóstico, sin costos ocultos.",
  },
  {
    q: "¿Necesito cambiar mi número de WhatsApp?",
    a: "No. Se conecta a tu número actual mediante la API oficial de WhatsApp.",
  },
  {
    q: "¿Reemplaza a mi equipo?",
    a: "No. Filtra lo repetitivo y te pasa solo las conversaciones que de verdad necesitan a una persona.",
  },
  {
    q: "¿Cuánto tarda en estar listo?",
    a: "Normalmente pocos días desde que tengo la información de tu negocio.",
  },
  {
    q: "¿Qué pasa si no funciona para mi caso?",
    a: "No pagas la configuración — es literalmente lo que cubre el piloto de 14 días.",
  },
];

const MOCKUP_REASSURANCE = "Si no sabe la respuesta, te la pasa a ti directo.";

export default function Home() {
  return (
    <>
      {/* ① HERO */}
      <section className="landing-hero-accent container-shell relative pb-20 pt-16 md:pb-24 md:pt-20 lg:pt-24">
        <HeroCursorTrail />
        <HeroParallaxEffect />
        <div className="hero-nebula pointer-events-none absolute -right-24 top-8 -z-10 h-72 w-72 opacity-40 md:h-80 md:w-80" aria-hidden />
        <div className="grid gap-12 lg:grid-cols-[5fr_4fr] lg:items-center">
          <div>
            <Reveal>
              <p className="hero-eyebrow section-eyebrow">Para pymes en Perú</p>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="text-h1 text-balance relative mt-4 max-w-xl text-ink">
                Ninguna consulta de tu negocio{" "}
                <span className="hero-text-gradient font-display italic">sin respuesta.</span>
              </h1>
            </Reveal>

            {/* Mobile (<sm): CTA tras subtitle; chips/badges debajo. Desktop (sm+): orden actual. */}
            <div className="relative flex flex-col">
              <Reveal delay={80}>
                <p className="text-lead text-pretty relative mt-6 max-w-md">
                  Tu negocio responde solo — web, WhatsApp y automatización que trabajan por ti
                  mientras atiendes lo que importa.
                </p>
                <p className="mt-3 max-w-md text-sm text-secondary">
                  Atiende mejor, vende más, deja de perder tiempo.
                </p>
              </Reveal>

              <Reveal delay={80} className="order-2 sm:order-3 relative mt-6 sm:mt-8">
                <div className="flex flex-col items-start">
                  <WhatsAppButton
                    message={WHATSAPP_DIAGNOSTICO_MESSAGE}
                    variant="terracota"
                    source="home_hero"
                    className="btn-pill-hero w-full sm:w-auto"
                  >
                    Diagnóstico gratis
                  </WhatsAppButton>
                  <p className="hero-cta-caption">
                    Gratis · 30 min · sin compromiso
                  </p>
                  {isCalComConfigured() && (
                    <BookingButton
                      variant="link"
                      subtle
                      className="text-caption mt-3"
                    />
                  )}
                  <div className="mt-3">
                    <HeroTrustLine />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={80} className="order-3 sm:order-2 mt-5 sm:mt-3">
                <p className="max-w-md text-sm text-muted">
                  No es un bot genérico. Está configurado para tu negocio.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <p className="hero-price-chip">Desde S/500 · según tu caso</p>
                  <p className="combo-chip">Combo web + asistente desde S/1,800</p>
                </div>
                <p className="mt-3 max-w-md text-sm text-secondary">
                  Si recuperas 2 clientes al mes, se paga solo
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <p className="piloto-badge">🔒 API oficial WhatsApp</p>
                  <p className="piloto-badge">Piloto 14 días sin riesgo</p>
                  <p className="piloto-badge">Operando desde 2026</p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={80}>
              <div className="relative mt-8 flex justify-center lg:hidden">
                <WhatsAppMockup compact reassurance={MOCKUP_REASSURANCE} />
              </div>
            </Reveal>
          </div>

          <Reveal delay={80} className="hidden lg:flex lg:-translate-y-2 lg:justify-end">
            <div className="hero-mockup-stage relative">
              <div className="hero-mockup-glow pointer-events-none absolute -inset-8" aria-hidden />
              <WhatsAppMockup framed reassurance={MOCKUP_REASSURANCE} />
            </div>
          </Reveal>
        </div>
      </section>

      <MarqueeStrip />

      {/* Mini-pricing — 3 niveles (#126) */}
      <section className="section-depth-a container-content section-py section-horizon">
        <Reveal>
          <span className="chip">Precios</span>
          <h2 className="text-h2 mt-4 text-ink">Tres niveles claros</h2>
          <p className="text-body mt-2 max-w-lg">
            Configuración única + mensualidad. El alcance exacto lo cerramos en el diagnóstico.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            {
              nombre: "Esencial",
              setup: "S/500",
              mes: "S/200/mes",
              linea: "Entrada: asistente o web de captación.",
            },
            {
              nombre: "Profesional",
              setup: "S/1,500",
              mes: "S/450/mes",
              linea: "Más flujo, más automatización.",
              destacado: true,
            },
            {
              nombre: "Integral",
              setup: "S/3,500",
              mes: "S/800/mes",
              linea: "Web + asistente + automatización.",
            },
          ].map((p, i) => (
            <Reveal key={p.nombre} delay={i * 60}>
              <div
                className={`h-full ${p.destacado ? "card-soft-tint" : "card-soft"} p-5`}
              >
                {p.destacado && <span className="chip mb-2">El más elegido</span>}
                <h3 className="text-lg font-medium text-ink">{p.nombre}</h3>
                <p className="mt-2 text-xl font-medium text-ink">
                  {p.setup}{" "}
                  <span className="text-sm font-normal text-muted">setup</span>
                </p>
                <p className="mt-0.5 text-base font-medium text-dorado">{p.mes}</p>
                <p className="mt-3 text-sm text-secondary">{p.linea}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* COMPARACIÓN — consulta perdida vs atendida */}
      <section className="section-depth-b container-content section-py section-horizon">
        <Reveal>
          <p className="section-eyebrow">La misma consulta, dos resultados</p>
          <h2 className="text-h2 mt-4 text-ink">Sin respuesta vs. atendida al instante</h2>
          <p className="text-body mt-3 max-w-lg">
            El cliente escribe igual. La diferencia está en si alguien responde a tiempo.
          </p>
        </Reveal>
        <Reveal delay={80} className="mt-10">
          <HomeConsultaCompare />
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-8 text-center text-sm text-secondary">
            <span className="piloto-badge inline-flex">Piloto 14 días sin riesgo</span>
            <span className="mt-2 block text-muted">
              Si no funciona, no pagas la configuración.
            </span>
          </p>
        </Reveal>
      </section>

      {/* ② PROBLEMA */}
      <div className="section-band">
        <ProblemaSection />
      </div>

      {/* ③ PROPUESTA DE VALOR */}
      <div className="section-white">
        <section className="container-content section-py">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <Reveal>
              <p className="section-eyebrow">Qué ganas</p>
              <h2 className="text-h2 mt-4 text-ink">Lo que cambia en tu negocio</h2>
              <p className="text-body mt-3">
                No importa por dónde empieces — web, WhatsApp o automatización — el objetivo es el
                mismo: que ninguna consulta se pierda.
              </p>
              <ul className="mt-8 space-y-4 text-small">
                {[
                  "Captura y organiza consultas desde cualquier canal",
                  "Responde al instante lo repetitivo",
                  "Prioriza quién necesita seguimiento",
                  "Recupera oportunidades que antes se perdían",
                ].map((item, i) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-ink/8 pb-4 last:border-0 last:pb-0 text-secondary"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracota" aria-hidden />
                    <span className={i === 0 ? "font-medium text-ink" : undefined}>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={80}>
              <div className="card-soft-tint commitment-card h-full">
                <p className="text-label text-terracota-dark/70">
                  Mi compromiso
                </p>
                <p className="commitment-stat mt-4 font-display text-7xl italic text-terracota-dark">
                  &lt;30<span className="text-3xl not-italic font-sans"> seg</span>
                </p>
                <p className="text-small text-secondary mt-2">Tiempo de primera respuesta</p>
                <div className="commitment-item mt-8 flex items-start gap-3">
                  <MessageCircleMore className="mt-px h-4 w-4 shrink-0 text-terracota" strokeWidth={1.5} />
                  <div>
                    <p className="text-small font-medium text-ink">Recepcionista IA 24/7</p>
                    <p className="text-small text-muted mt-0.5">
                      Atiende consultas al instante, deriva a un humano solo cuando hace falta.
                    </p>
                  </div>
                </div>
                <div className="commitment-item flex items-start gap-3">
                  <CalendarCheck className="mt-px h-4 w-4 shrink-0 text-terracota" strokeWidth={1.5} />
                  <div>
                    <p className="text-small font-medium text-ink">Agenda inteligente</p>
                    <p className="text-small text-muted mt-0.5">
                      Confirma y recuerda citas — menos ausencias, agenda llena.
                    </p>
                  </div>
                </div>
                <div className="commitment-item flex items-start gap-3">
                  <Hexagon className="mt-px h-4 w-4 shrink-0 text-terracota" strokeWidth={1.5} />
                  <div>
                    <p className="text-small font-medium text-ink">Implementado por mí</p>
                    <p className="text-small text-muted mt-0.5">
                      Soporte directo después de la entrega — no desaparezco. Punto.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </div>

      <SolucionesGrid equalCards />

      <div className="section-white">
        <ServiciosGrid />
      </div>

      <ProyectosRecientes />

      <div className="section-band">
        <ProcesoSection />
      </div>

      <div className="section-ink">
        <GarantiaSection
          condicion="la solución no te ayuda a captar o atender mejor a tus clientes"
          variant="dark"
          cta={{
            message: "Hola, quiero probar con la garantía de 14 días",
            textoBoton: "Empezar con piloto de 14 días",
            source: "home_garantia",
          }}
        />
        <p className="container-prose pb-16 text-center text-small text-sand/65">
          Implementaciones desde <strong className="font-medium text-sand/80">S/500</strong>.
          Combo web + asistente desde <strong className="font-medium text-sand/80">S/1,800</strong>.
          El precio final depende de tu caso y lo definimos después del diagnóstico gratuito. Si
          recuperas clientes que hoy se pierden, la inversión se justifica rápido.
        </p>
      </div>

      {/* FORMULARIO + FAQ */}
      <section
        id="contacto"
        className="section-depth-a container-content section-py scroll-mt-8 section-horizon"
        style={{ scrollMarginBottom: "5rem" }}
      >
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <Reveal>
            <p className="section-eyebrow">Contacto</p>
            <h2 className="text-h2 mt-4 text-ink">Solicita tu diagnóstico gratuito</h2>
            <p className="text-body mt-3">
              Completa el formulario y continuamos por WhatsApp — sin compromiso.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="card-soft p-6 sm:p-8">
              <LeadForm />
            </div>
          </Reveal>
        </div>
      </section>

      <FAQSection items={FAQS_HOME} showContactCta />

      <StickyCTA />
    </>
  );
}
