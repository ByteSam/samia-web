import type { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiciosGrid from "@/components/ServiciosGrid";
import ProcesoSection from "@/components/ProcesoSection";
import GarantiaSection from "@/components/GarantiaSection";
import Reveal from "@/components/Reveal";
import HeroTrustLine from "@/components/HeroTrustLine";
import { WHATSAPP_DIAGNOSTICO_MESSAGE } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Catálogo de servicios — web, automatización y agentes IA | afynova",
  description:
    "Desarrollo web, automatización, agentes IA por WhatsApp, datos y analítica e infraestructura digital — servicios para pymes en Perú. Diagnóstico gratis.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <>
      <section className="landing-hero-accent mx-auto max-w-6xl px-6 pb-12 pt-20 md:pb-16 md:pt-28">
        <div className="grid gap-12 lg:grid-cols-[5fr_4fr] lg:items-center">
          <div className="text-center lg:text-left">
            <Reveal>
              <span className="chip">Servicios · afynova</span>
              <h1 className="text-h1 text-balance mt-6 text-ink">
                El catálogo completo
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/60 lg:mx-0 mx-auto">
                Cinco servicios para que ninguna consulta de tu negocio se pierda — desde la primera
                web hasta la automatización completa.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 lg:items-start">
                <WhatsAppButton
                  message={WHATSAPP_DIAGNOSTICO_MESSAGE}
                  source="servicios_hero"
                >
                  Diagnóstico gratis por WhatsApp
                </WhatsAppButton>
                <p className="text-sm text-ink/50">30 min sin costo · Sin compromiso</p>
                <div className="mt-1">
                  <HeroTrustLine />
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="hidden lg:block">
            <div className="card-soft-tint p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-terracota-dark/70">
                ¿Por dónde empezar?
              </p>
              <ol className="mt-5 space-y-4 text-sm">
                {[
                  { n: "1", t: "Sin web que convierta", s: "Desarrollo web" },
                  { n: "2", t: "Pierdes consultas por WhatsApp", s: "Agentes IA" },
                  { n: "3", t: "Procesos manuales repetitivos", s: "Automatización" },
                ].map((item) => (
                  <li key={item.n} className="flex gap-3 border-b border-ink/8 pb-4 last:border-0 last:pb-0">
                    <span className="font-display text-xl italic text-terracota">{item.n}</span>
                    <div>
                      <p className="font-medium text-ink">{item.t}</p>
                      <p className="mt-0.5 text-ink/55">→ {item.s}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      <ServiciosGrid />

      <div className="section-band">
        <ProcesoSection />
      </div>

      <div className="section-ink">
        <GarantiaSection
          condicion="el servicio no te ayuda a captar o atender mejor a tus clientes"
          variant="dark"
          cta={{
            message: WHATSAPP_DIAGNOSTICO_MESSAGE,
            textoBoton: "Empezar con piloto de 14 días",
            source: "servicios_garantia",
          }}
        />
        <p className="mx-auto max-w-3xl px-6 pb-16 text-center text-sm text-sand/50">
          Implementaciones desde <strong className="font-medium text-sand/80">S/1,500</strong>. El
          precio final depende de tu caso y lo definimos después del diagnóstico gratuito.
        </p>
      </div>
    </>
  );
}
