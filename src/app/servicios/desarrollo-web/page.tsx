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

const FAQS = [
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
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-20 text-center md:pt-28">
        <Reveal>
          <span className="chip">Servicio · Desarrollo Web</span>
          <h1 className="mx-auto mt-6 max-w-3xl text-[2.5rem] font-normal leading-[1.08] text-ink sm:text-6xl md:text-[4rem]">
            Un sitio que vende, no uno que solo se ve bonito.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/60">
            Construido en código (no plantillas genéricas), rápido, indexable
            en Google y conectado a tu WhatsApp desde el día uno.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <WhatsAppButton message="Hola, quiero información sobre desarrollo web">
              Conversar por WhatsApp
            </WhatsAppButton>
          </div>
        </Reveal>
      </section>

      {/* QUÉ PROBLEMA RESUELVE */}
      <ProblemSection
        titulo="Tu web existe, pero no está trabajando para ti."
        bullets={[
          "No genera consultas — la gente la visita y se va sin escribirte.",
          "No transmite confianza — se ve genérica o anticuada, y eso se nota antes de leer una palabra.",
          "No aparece en Google — nadie te encuentra buscando lo que ofreces.",
          "Es difícil de actualizar — cambiar un precio o una foto depende de alguien más, o de nadie.",
        ]}
        stat="La primera impresión de tu negocio ya no es el local ni la llamada — es lo que la gente ve en tu web en los primeros segundos."
      />

      <CatalogGrid items={CATALOGO} columns={3} pb="16">
        <Reveal delay={280}>
          <p className="text-sm text-ink/50">
            Mantenimiento: S/100 – 500/mes (hosting, dominio, respaldos y
            ajustes menores).
          </p>
        </Reveal>
      </CatalogGrid>

      {/* CÓMO TRABAJAMOS */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <Reveal>
          <h2 className="text-2xl font-medium text-ink md:text-3xl">Cómo trabajamos</h2>
        </Reveal>
        <ol className="mt-8 space-y-6">
          {[
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
          ].map((step, i) => (
            <Reveal key={step.t} delay={i * 80}>
              <li className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/15 font-medium text-ink">
                  {i + 1}
                </span>
                <div>
                  <p className="font-medium text-ink">{step.t}</p>
                  <p className="text-sm text-ink/60">{step.d}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <GarantiaSection condicion="el sitio no te trae los resultados esperados" />

      <FAQSection items={FAQS} />

      {/* CTA FINAL */}
      <FinalCTA
        titulo="¿Tu web de hoy te trae clientes, o solo está ahí?"
        mensaje="Hola, quiero información sobre desarrollo web"
        textoBoton="Conversar por WhatsApp"
      />
    </>
  );
}
