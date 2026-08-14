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
import HomeConsultaCompare from "@/components/HomeConsultaCompare";
import { WHATSAPP_DIAGNOSTICO_MESSAGE, isCalComConfigured } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Webs, automatización y agentes IA para pymes | afynova",
  description:
    "Web de captación, agentes IA y automatización para pymes peruanas. Ninguna consulta sin respuesta. Implementado directamente por mí, con diagnóstico gratis.",
  alternates: { canonical: "/" },
};

const FAQS_HOME = [
  {
    q: "¿Necesito ya tener una web?",
    a: "No. Muchos proyectos empiezan con una web de captación nueva. Si ya tienes una, la evaluamos en el diagnóstico y vemos si conviene mejorarla o rehacerla.",
  },
  {
    q: "¿Qué incluye una implementación desde S/1,500?",
    a: "Depende de tu caso: puede ser una landing con formulario y aviso por WhatsApp, o un asistente que responde consultas frecuentes. El alcance exacto lo cerramos en el diagnóstico, sin costos ocultos.",
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

export default function Home() {
  return (
    <>
      {/* ① HERO */}
      <section className="landing-hero-accent container-shell relative pb-20 pt-16 md:pb-24 md:pt-20 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-[5fr_4fr] lg:items-center">
          <div>
            <Reveal>
              <p className="section-eyebrow">Para pymes en Perú</p>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="text-h1 text-balance relative mt-4 max-w-xl text-ink">
                Ninguna consulta de tu negocio{" "}
                <span className="font-display italic text-terracota">sin respuesta.</span>
              </h1>
            </Reveal>

            <Reveal delay={80}>
              <p className="text-lead text-pretty relative mt-6 max-w-md">
                Webs, agentes IA y automatización por WhatsApp — para que ninguna consulta se pierda
                mientras tú atiendes lo que importa.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <div className="relative mt-8 flex flex-col items-start">
                <WhatsAppButton
                  message={WHATSAPP_DIAGNOSTICO_MESSAGE}
                  variant="terracota"
                  source="home_hero"
                  className="btn-pill-hero w-full sm:w-auto"
                >
                  Diagnóstico gratis
                </WhatsAppButton>
                <p className="text-caption mt-2">
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

            <Reveal delay={80}>
              <div className="relative mt-8 flex justify-center lg:hidden">
                <WhatsAppMockup compact />
              </div>
            </Reveal>
          </div>

          <Reveal delay={80} className="hidden lg:flex lg:-translate-y-2 lg:justify-end">
            <div className="relative">
              <div
                className="pointer-events-none absolute -inset-8 rounded-full bg-terracota/6 blur-3xl"
                aria-hidden
              />
              <WhatsAppMockup framed />
            </div>
          </Reveal>
        </div>
      </section>

      <MarqueeStrip />

      {/* COMPARACIÓN — consulta perdida vs atendida */}
      <section className="container-content section-py">
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
              <h2 className="text-h2 mt-4 text-ink">Del primer contacto al negocio integrado</h2>
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
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-ink/8 pb-4 last:border-0 last:pb-0 text-secondary"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracota" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={80}>
              <div className="card-soft-tint h-full">
                <p className="text-label text-terracota-dark/70">
                  Mi compromiso
                </p>
                <p className="mt-4 font-display text-7xl italic text-terracota-dark">
                  &lt;30<span className="text-3xl not-italic font-sans"> seg</span>
                </p>
                <p className="text-small text-secondary mt-2">Tiempo de primera respuesta</p>
                <div className="mt-8 flex items-start gap-3 border-t border-ink/8 pt-6">
                  <MessageCircleMore className="mt-px h-4 w-4 shrink-0 text-terracota" strokeWidth={1.5} />
                  <div>
                    <p className="text-small font-medium text-ink">Recepcionista IA 24/7</p>
                    <p className="text-small text-muted mt-0.5">
                      Atiende consultas al instante, deriva a un humano solo cuando hace falta.
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex items-start gap-3">
                  <CalendarCheck className="mt-px h-4 w-4 shrink-0 text-terracota" strokeWidth={1.5} />
                  <div>
                    <p className="text-small font-medium text-ink">Agenda inteligente</p>
                    <p className="text-small text-muted mt-0.5">
                      Confirma y recuerda citas — menos ausencias, agenda llena.
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex items-start gap-3">
                  <Hexagon className="mt-px h-4 w-4 shrink-0 text-terracota" strokeWidth={1.5} />
                  <div>
                    <p className="text-small font-medium text-ink">Implementado por mí</p>
                    <p className="text-small text-muted mt-0.5">
                      No desaparezco después de la entrega — soporte y ajustes continuos.
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
          Implementaciones desde <strong className="font-medium text-sand/80">S/1,500</strong>. El
          precio final depende de tu caso y lo definimos después del diagnóstico gratuito.
        </p>
      </div>

      {/* FORMULARIO + FAQ */}
      <section
        id="contacto"
        className="container-content section-py scroll-mt-8"
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
