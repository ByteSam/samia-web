import type { Metadata } from "next";
import {
  Bell,
  UserPlus,
  Link2,
  Workflow,
  ClipboardList,
  Settings2,
  PackageCheck,
  Headset,
} from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import GarantiaSection from "@/components/GarantiaSection";
import FAQSection from "@/components/FAQSection";
import CatalogGrid from "@/components/CatalogGrid";
import ProblemSection from "@/components/ProblemSection";
import HeroTrustLine from "@/components/HeroTrustLine";
import AutomatizacionHeroCompare from "@/components/servicios/AutomatizacionHeroCompare";
import AutomatizacionFlowPreview from "@/components/servicios/AutomatizacionFlowPreview";
import AutomatizacionUseCasesBridge from "@/components/servicios/AutomatizacionUseCasesBridge";
import ImplementacionStepper from "@/components/ImplementacionStepper";

export const metadata: Metadata = {
  title: "Automatización de procesos para negocios en Perú",
  description:
    "Automatiza avisos, captación de leads e integraciones entre sistemas — formularios, seguimiento y WhatsApp para pymes en Perú, en soles.",
  alternates: { canonical: "/servicios/automatizacion" },
};

const CATALOGO = [
  {
    icon: Bell,
    nombre: "Avisos y captación de leads",
    descripcion:
      "Formulario o WhatsApp → registro y aviso automático a tu equipo cuando llega alguien interesado.",
    entrega: "3-7 días",
    setup: "S/900 – 2,500",
    retainer: "S/300 – 700",
  },
  {
    icon: UserPlus,
    nombre: "Seguimiento automatizado",
    descripcion:
      "Recordatorios cuando un prospecto no responde — cotizaciones, consultas o citas pendientes.",
    entrega: "1 semana",
    setup: "S/1,500 – 3,000",
    retainer: "S/300 – 700",
  },
  {
    icon: Link2,
    nombre: "Integración entre sistemas",
    descripcion:
      "Conecta CRM, email, ERP u hojas de cálculo para no copiar datos entre herramientas.",
    entrega: "1-3 semanas",
    setup: "S/2,500 – 7,000",
    retainer: "S/400 – 1,000",
  },
  {
    icon: Workflow,
    nombre: "Flujos a medida",
    descripcion:
      "OCR de documentos, facturación electrónica u procesos administrativos — alcance en diagnóstico.",
    setup: "Cotización en diagnóstico",
  },
];

const PASOS = [
  {
    t: "Diagnóstico",
    d: "Identificamos el proceso manual que más te cuesta tiempo o dinero — 30 min por WhatsApp, sin costo.",
    icon: ClipboardList,
  },
  {
    t: "Diseño del flujo",
    d: "Defino qué dispara la automatización, qué datos se guardan y quién recibe el aviso.",
    icon: Settings2,
  },
  {
    t: "Implementación",
    d: "Configuro el flujo, lo probamos con casos reales y lo dejo documentado.",
    icon: PackageCheck,
  },
  {
    t: "Soporte",
    d: "Ajustes y mejoras cuando tu operación cambia — no desaparezco después de la entrega.",
    icon: Headset,
  },
];

const FAQS = [
  {
    q: "¿Es lo mismo que un agente de WhatsApp?",
    a: "No siempre. Un agente atiende conversaciones; la automatización conecta procesos (avisos, seguimiento, integraciones). Muchas veces van juntos — lo vemos en el diagnóstico.",
  },
  {
    q: "¿Necesito un CRM como Odoo para automatizar?",
    a: "No obligatorio. Podemos empezar con avisos por WhatsApp y hojas de cálculo, y escalar a CRM o ERP cuando haga falta.",
  },
  {
    q: "¿Puedo ver un ejemplo antes de contratar?",
    a: "Sí — en la comparación de esta página ves cómo te avisa un flujo cuando necesita tu atención. En el diagnóstico adaptamos el flujo a tu operación.",
  },
  {
    q: "¿Puedo automatizar solo un proceso?",
    a: "Sí. La mayoría empieza con un flujo — aviso de lead o seguimiento de cotización — y suma más después.",
  },
  {
    q: "¿Cuánto tarda en estar listo?",
    a: "Desde pocos días para un aviso simple, hasta semanas para integraciones entre varios sistemas.",
  },
];

export default function AutomatizacionPage() {
  return (
    <>
      <section className="landing-hero-accent mx-auto max-w-6xl px-6 pb-12 pt-20 md:pb-16 md:pt-28">
        <div className="grid gap-12 lg:grid-cols-[5fr_4fr] lg:items-center">
          <div className="text-center lg:text-left">
            <span className="chip">Servicio · Automatización</span>

            <h1 className="text-h1 text-balance mt-6 text-ink">
              Menos tareas{" "}
              <span className="font-display italic text-terracota">repetitivas</span>, más tiempo para
              lo que importa.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-ink/60">
              Flujos que capturan, avisan y conectan — sin que copies datos entre WhatsApp, Excel y
              tu correo.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 lg:items-start">
              <WhatsAppButton
                message="Hola, quiero automatizar procesos en mi negocio"
                source="automatizacion_hero"
              >
                Quiero automatizar procesos
              </WhatsAppButton>
              <p className="text-sm text-ink/50">
                Desde S/900 · Diagnóstico gratis · Hablarás directamente conmigo
              </p>
              <div className="mt-1">
                <HeroTrustLine />
              </div>
            </div>
          </div>

          <Reveal delay={120} className="hidden lg:block">
            <AutomatizacionFlowPreview />
          </Reveal>
        </div>
      </section>

      <div className="section-band">
        <ProblemSection
          variant="band"
          titulo="Si el proceso vive en WhatsApp y Excel, algo se pierde."
          bullets={[
            "Leads que nadie sigue porque el aviso quedó en un chat sin leer.",
            "Datos duplicados entre formulario, hoja de cálculo y CRM.",
            "Horas cada semana en tareas que un flujo podría hacer por ti.",
          ]}
          stat="En muchas pymes peruanas el canal de ventas es WhatsApp — automatizar el seguimiento suele ser el primer quick win con retorno visible."
        />
      </div>

      <section className="mx-auto max-w-5xl px-6 section-py">
        <Reveal>
          <span className="chip">Manual vs automatizado</span>
          <h2 className="text-h2 mt-4 text-ink">El mismo lead, dos resultados</h2>
          <p className="mt-3 max-w-lg text-ink/60">
            El contacto llega igual. La diferencia está en si alguien lo sigue a tiempo.
          </p>
        </Reveal>
        <Reveal delay={80} className="mt-10">
          <AutomatizacionHeroCompare />
        </Reveal>
      </section>

      <AutomatizacionUseCasesBridge />

      <div className="section-band border-t border-ink/6">
        <CatalogGrid
          items={CATALOGO}
          titulo="Flujos habituales, en soles"
          chip="Servicios · Precios orientativos"
          columns={2}
        >
          <p className="text-sm text-ink/50">
            También disponible dentro de Agentes IA e Infraestructura digital — el diagnóstico
            define el punto de partida.
          </p>
        </CatalogGrid>
      </div>

      <div className="section-band">
        <ImplementacionStepper titulo="Cómo trabajamos" pasos={PASOS} columns={4} />
      </div>

      <div className="section-ink">
        <GarantiaSection
          condicion="la automatización no te ahorra tiempo ni recupera oportunidades"
          variant="dark"
          cta={{
            message: "Hola, quiero probar la automatización con la garantía de 14 días",
            textoBoton: "Empezar con piloto de 14 días",
            source: "automatizacion_garantia",
          }}
        />
      </div>

      <FAQSection items={FAQS} />
    </>
  );
}
