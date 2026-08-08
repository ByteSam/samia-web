import type { Metadata } from "next";
import {
  LayoutTemplate,
  Building2,
  Briefcase,
  LayoutDashboard,
  ShoppingCart,
} from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import GarantiaSection from "@/components/GarantiaSection";
import FAQSection from "@/components/FAQSection";
import CatalogGrid from "@/components/CatalogGrid";
import FinalCTA from "@/components/FinalCTA";
import ProblemSection from "@/components/ProblemSection";
import WhatsAppMockup from "@/components/WhatsAppMockup";
import DesarrolloWebHeroCompare from "@/components/servicios/DesarrolloWebHeroCompare";
import DesarrolloWebCatalogBridge from "@/components/servicios/DesarrolloWebCatalogBridge";
import { MOCKUP_CAPTACION_WEB } from "@/lib/nichos/mockups";

export const metadata: Metadata = {
  title: "Desarrollo Web para negocios en Perú",
  description:
    "Landing, web corporativa, portafolio, portal de cliente y e-commerce — sitios que venden, construidos en código, en soles.",
  alternates: { canonical: "/servicios/desarrollo-web" },
};

const CATALOGO = [
  {
    icon: LayoutTemplate,
    nombre: "Landing",
    descripcion:
      "Para negocios que arrancan o lanzan una oferta puntual. Una sola página enfocada en un objetivo: que te escriban por WhatsApp.",
    setup: "S/600 – 2,000",
  },
  {
    icon: Building2,
    nombre: "Web corporativa",
    descripcion:
      "Para negocios ya establecidos que necesitan presencia completa: servicios, nosotros y contacto, todo en un solo sitio.",
    setup: "S/1,800 – 6,000",
  },
  {
    icon: Briefcase,
    nombre: "Portafolio",
    descripcion:
      "Para profesionales y creativos que venden con evidencia visual: una galería de proyectos y casos reales.",
    setup: "S/1,200 – 4,000",
  },
  {
    icon: LayoutDashboard,
    nombre: "Portal de cliente",
    descripcion:
      "Para negocios cuyos clientes necesitan iniciar sesión para ver su información o gestionar su cuenta.",
    setup: "S/3,000 – 10,000",
  },
  {
    icon: ShoppingCart,
    nombre: "E-commerce",
    descripcion:
      "Para vender en línea directamente: catálogo, carrito y pagos integrados, sin depender de redes sociales.",
    setup: "S/3,500 – 15,000",
  },
];

const PASOS = [
  {
    t: "Diagnóstico",
    d: "Vemos qué necesita tu negocio y qué tipo de sitio se ajusta mejor a tu objetivo — 30 min por WhatsApp, sin costo.",
  },
  {
    t: "Diseño",
    d: "Defino la estructura y el estilo visual antes de programar, para que apruebes el rumbo desde el inicio.",
  },
  {
    t: "Desarrollo",
    d: "Construyo el sitio en código real, con tu WhatsApp integrado desde el primer día.",
  },
  {
    t: "Lanzamiento",
    d: "Publico el sitio, lo dejo indexado en Google, y te enseño lo básico para que puedas actualizarlo tú mismo.",
  },
];

const FAQS = [
  {
    q: "¿Landing o web corporativa?",
    a: "Depende de tu objetivo: landing para una oferta puntual o arranque rápido; corporativa si necesitas varias secciones y presencia completa. Lo vemos en el diagnóstico gratis.",
  },
  {
    q: "¿El sitio queda en código real o en un builder tipo Wix?",
    a: "Código real, no plantillas genéricas — más rápido, más control, mejor indexado en Google.",
  },
  {
    q: "¿Incluye conexión a WhatsApp?",
    a: "Sí, desde el día uno — todo botón de contacto lleva directo a tu WhatsApp.",
  },
  {
    q: "¿Ya tengo dominio, lo puedo usar?",
    a: "Sí. Si no tienes, te ayudo a elegir y comprarlo.",
  },
  {
    q: "¿Cuánto tarda en estar listo?",
    a: "Depende del tipo de sitio — desde días para una landing, hasta semanas para un portal o e-commerce.",
  },
];

export default function DesarrolloWebPage() {
  return (
    <>
      {/* HERO — Opción B: web pasiva vs convierte */}
      <section className="landing-hero-accent mx-auto max-w-3xl px-6 pb-12 pt-20 md:pb-16 md:pt-28 lg:max-w-4xl">
        <div className="text-center lg:text-left">
          <span className="chip">Servicio · Desarrollo web</span>

          <h1 className="text-h1 mt-6 text-[2.5rem] text-ink sm:text-5xl md:text-[3.5rem]">
            Un sitio que{" "}
            <span className="font-display italic text-terracota">convierte</span>, no uno que solo
            se ve bonito.
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-ink/60">
            Código real, rápido, indexable en Google y conectado a tu WhatsApp desde el día uno.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 lg:items-start">
            <WhatsAppButton
              message="Hola, quiero una web que convierta visitas en clientes"
              source="desarrollo_web_hero"
            >
              Quiero una web que convierta
            </WhatsAppButton>
            <p className="text-sm text-ink/50">
              Desde S/600 · Diagnóstico gratis · Hablarás directamente conmigo
            </p>
          </div>

          <DesarrolloWebHeroCompare />
        </div>
      </section>

      {/* Mockup — aviso de captación, debajo del hero */}
      <section className="mx-auto max-w-sm px-6 pb-14 md:pb-20">
        <div className="mockup-frame">
          <WhatsAppMockup
            titulo={MOCKUP_CAPTACION_WEB.titulo}
            subtitulo={MOCKUP_CAPTACION_WEB.subtitulo}
            mensajes={MOCKUP_CAPTACION_WEB.mensajes}
          />
        </div>
        <p className="mt-3 text-center text-xs text-ink/45">
          Así te avisa cuando alguien deja datos en tu web.
        </p>
      </section>

      {/* PROBLEMA */}
      <div className="section-band">
        <ProblemSection
          variant="band"
          titulo="Tu web existe, pero no está trabajando para ti."
          bullets={[
            "No genera consultas — la gente la visita y se va sin escribirte.",
            "No transmite confianza — se ve genérica o anticuada, y eso se nota antes de leer una palabra.",
            "No aparece en Google — nadie te encuentra buscando lo que ofreces.",
            "Es difícil de actualizar — cambiar un precio o una foto depende de alguien más, o de nadie.",
          ]}
          stat="La primera impresión de tu negocio ya no es el local ni la llamada — es lo que la gente ve en tu web en los primeros segundos."
        />
      </div>

      {/* FIRMA — tipo de sitio */}
      <DesarrolloWebCatalogBridge />

      {/* CATÁLOGO */}
      <div className="section-band border-t border-ink/6">
        <CatalogGrid items={CATALOGO} columns={3} pb="16" titulo="Catálogo de sitios, en soles">
          <p className="text-sm text-ink/50">
            Mantenimiento: S/100 – 500/mes (hosting, dominio, respaldos y ajustes menores).
          </p>
        </CatalogGrid>
      </div>

      {/* CÓMO TRABAJAMOS */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <Reveal>
          <p className="section-eyebrow">Implementación</p>
          <h2 className="text-h2 mt-2 text-ink">Cómo trabajamos</h2>
        </Reveal>
        <Reveal delay={80}>
          <ol className="mt-8 space-y-6">
            {PASOS.map((step, i) => (
              <li key={step.t} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/15 font-medium text-ink">
                  {i + 1}
                </span>
                <div>
                  <p className="font-medium text-ink">{step.t}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{step.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      <GarantiaSection condicion="el sitio no te trae los resultados esperados" />

      <FAQSection items={FAQS} />

      <FinalCTA
        titulo="¿Tu web de hoy te trae clientes, o solo está ahí?"
        mensaje="Hola, quiero una web que convierta visitas en clientes"
        textoBoton="Quiero una web que convierta"
      />
    </>
  );
}
