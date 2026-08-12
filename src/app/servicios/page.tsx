import type { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiciosGrid from "@/components/ServiciosGrid";
import ProcesoSection from "@/components/ProcesoSection";
import GarantiaSection from "@/components/GarantiaSection";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Catálogo de servicios — web, automatización y agentes IA | afynova",
  description:
    "Desarrollo web, automatización, agentes IA por WhatsApp, datos y analítica e infraestructura digital — servicios para pymes en Perú. Diagnóstico gratis.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-3xl px-6 pb-12 pt-20 text-center md:pt-28 md:pb-16">
        <Reveal>
          <span className="chip">Servicios · afynova</span>
          <h1 className="text-h1 mt-6 text-[2.5rem] text-ink sm:text-5xl md:text-[3.5rem]">
            El catálogo completo
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink/60">
            Cinco servicios para que ninguna consulta de tu negocio se pierda — desde la primera web
            hasta la automatización completa. Diagnóstico gratis para saber por dónde empezar.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton message="Hola, quiero un diagnóstico gratis para saber qué servicio me conviene">
              Diagnóstico gratis por WhatsApp
            </WhatsAppButton>
          </div>
        </Reveal>
      </section>

      {/* GRID DE SERVICIOS */}
      <ServiciosGrid />

      {/* METODOLOGÍA */}
      <div className="section-band">
        <ProcesoSection />
      </div>

      {/* GARANTÍA + PRECIO — bloque oscuro */}
      <div className="section-ink">
        <GarantiaSection
          condicion="el servicio no te ayuda a captar o atender mejor a tus clientes"
          variant="dark"
        />
        <p className="mx-auto max-w-3xl px-6 pb-16 text-center text-sm text-sand/50">
          Implementaciones desde <strong className="font-medium text-sand/80">S/1,500</strong>. El
          precio final depende de tu caso y lo definimos después del diagnóstico gratuito.
        </p>
      </div>
    </>
  );
}
