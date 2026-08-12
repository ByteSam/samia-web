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
      {/* ① HERO — sand */}
      <section
        className="landing-hero-accent relative mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-24 md:pt-20 lg:pt-24"
      >
        <div className="grid gap-12 lg:grid-cols-[5fr_4fr] lg:items-center">
          <div>
            <Reveal>
              <span className="chip-muted">Para pymes en Perú</span>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="text-h1 text-balance relative mt-4 max-w-lg text-[2.5rem] text-ink sm:text-[2.75rem] lg:text-[3rem]">
                Ninguna consulta de tu negocio
                <br />
                <span className="font-display italic text-ink/80">sin respuesta.</span>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="text-pretty relative mt-5 max-w-[26rem] text-base text-ink/70">
                Webs, IA y automatización — garantía 14 días.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <div className="relative mt-8 flex flex-col items-start">
                <WhatsAppButton
                  message={WHATSAPP_DIAGNOSTICO_MESSAGE}
                  variant="terracota"
                  source="home_hero"
                  className="btn-pill-hero w-full max-w-[280px] md:w-auto"
                >
                  Diagnóstico gratis
                </WhatsAppButton>
                <p className="mt-2 text-xs text-ink/40">
                  Gratis · 30 min · sin compromiso
                </p>
                {isCalComConfigured() && (
                  <BookingButton
                    variant="link"
                    subtle
                    className="mt-3 text-xs text-ink/40"
                  />
                )}
                <div className="mt-3">
                  <HeroTrustLine />
                </div>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="relative mt-8 flex justify-center lg:hidden">
                <div className="max-h-[320px] overflow-hidden">
                  <WhatsAppMockup compact />
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="hidden lg:flex lg:justify-end">
            <WhatsAppMockup framed />
          </Reveal>
        </div>
      </section>

      {/* MARQUEE — divider editorial */}
      <MarqueeStrip />

      {/* ② PROBLEMA — section-band, layout abierto */}
      <div className="section-band">
        <ProblemaSection />
      </div>

      {/* ③ PROPUESTA DE VALOR — section-white, 2 columnas */}
      <div className="section-white">
        <section className="mx-auto max-w-5xl px-6 section-py">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            {/* Izquierda — qué ganas */}
            <Reveal>
              <span className="chip">Qué ganas</span>
              <h2 className="text-h2 mt-4 text-ink">Del primer contacto al negocio integrado</h2>
              <p className="mt-3 text-ink/60">
                No importa por dónde empieces — web, WhatsApp o automatización — el objetivo es el
                mismo: que ninguna consulta se pierda.
              </p>
              <ul className="mt-8 space-y-4 text-sm">
                {[
                  "Captura y organiza consultas desde cualquier canal",
                  "Responde al instante lo repetitivo",
                  "Prioriza quién necesita seguimiento",
                  "Recupera oportunidades que antes se perdían",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-ink/8 pb-4 last:border-0 last:pb-0 text-ink/70"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracota" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Derecha — stat + mini-features */}
            <Reveal delay={100}>
              <div className="card-soft-tint h-full">
                <p className="text-xs font-medium uppercase tracking-wide text-terracota-dark/70">
                  Mi compromiso
                </p>
                <p className="mt-4 font-display text-7xl italic text-terracota-dark">
                  &lt;30<span className="text-3xl not-italic font-sans"> seg</span>
                </p>
                <p className="mt-2 text-sm text-ink/60">Tiempo de primera respuesta</p>
                <div className="mt-8 flex items-start gap-3 border-t border-ink/8 pt-6">
                  <MessageCircleMore className="mt-0.5 h-4 w-4 shrink-0 text-terracota" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm font-medium text-ink">Recepcionista IA 24/7</p>
                    <p className="mt-0.5 text-sm text-ink/55">
                      Atiende consultas al instante, deriva a un humano solo cuando hace falta.
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex items-start gap-3">
                  <CalendarCheck className="mt-0.5 h-4 w-4 shrink-0 text-terracota" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm font-medium text-ink">Agenda inteligente</p>
                    <p className="mt-0.5 text-sm text-ink/55">
                      Confirma y recuerda citas — menos ausencias, agenda llena.
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex items-start gap-3">
                  <Hexagon className="mt-0.5 h-4 w-4 shrink-0 text-terracota" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm font-medium text-ink">Implementado por mí</p>
                    <p className="mt-0.5 text-sm text-ink/55">
                      No desaparezco después de la entrega — soporte y ajustes continuos.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </div>

      {/* ④ SOLUCIONES POR RUBRO — sand, abierto */}
      <SolucionesGrid equalCards />

      {/* Puente narrativo: rubros vs servicios */}
      <div className="border-y border-ink/8 bg-sand">
        <p className="mx-auto max-w-3xl px-6 py-8 text-center text-sm text-ink/60">
          ¿No ves tu rubro exacto? Los servicios de abajo son el catálogo completo — el mismo
          sistema, aplicado a cualquier negocio que recibe consultas por web o WhatsApp.
        </p>
      </div>

      {/* ⑤ SERVICIOS — section-white */}
      <div className="section-white">
        <ServiciosGrid />
      </div>

      {/* ⑥ PROYECTOS REALIZADOS (proof) — sand */}
      <ProyectosRecientes />

      {/* ⑦ METODOLOGÍA — section-band */}
      <div className="section-band">
        <ProcesoSection />
      </div>

      {/* ⑧ GARANTÍA + PRECIO — section-ink (un solo bloque oscuro) */}
      <div className="section-ink">
        <GarantiaSection
          condicion="la solución no te ayuda a captar o atender mejor a tus clientes"
          variant="dark"
        />
        <p className="mx-auto max-w-3xl px-6 pb-16 text-center text-sm text-sand/50">
          Implementaciones desde <strong className="font-medium text-sand/80">S/1,500</strong>. El
          precio final depende de tu caso y lo definimos después del diagnóstico gratuito.
        </p>
      </div>

      {/* ⑨ FORMULARIO + FAQ — sand */}
      <section
        id="contacto"
        className="mx-auto max-w-md px-6 pb-12 pt-16 text-center scroll-mt-8"
        style={{ scrollMarginBottom: "5rem" }}
      >
        <Reveal>
          <h3 className="text-xl font-medium text-ink">Solicita tu diagnóstico gratuito</h3>
          <p className="mt-2 text-sm text-ink/60">
            Completa el formulario y continuamos por WhatsApp — sin compromiso.
          </p>
          <div className="mt-6 text-left">
            <LeadForm />
          </div>
        </Reveal>
      </section>

      <FAQSection items={FAQS_HOME} showContactCta />

      {/* CTA FINAL */}
      <section className="mx-auto max-w-3xl px-6 pb-28 text-center">
        <Reveal>
          <h2 className="text-h2 text-ink">
            ¿Cuántos clientes estás dejando de atender esta semana?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink/60">
            Diagnóstico gratis de 30 minutos. Sin compromiso.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3">
            <WhatsAppButton
              message={WHATSAPP_DIAGNOSTICO_MESSAGE}
              variant="terracota"
              source="home_final"
            >
              Diagnóstico gratis
            </WhatsAppButton>
            <BookingButton variant="link" className="text-ink/50" />
          </div>
        </Reveal>
      </section>

      <StickyCTA />
    </>
  );
}
