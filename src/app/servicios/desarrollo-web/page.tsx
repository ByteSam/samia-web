import type { Metadata } from "next";
import {
  LayoutTemplate,
  Building2,
  Briefcase,
  LayoutDashboard,
  ShoppingCart,
  ClipboardList,
  Palette,
  Code2,
  Rocket,
  PackageCheck,
} from "lucide-react";
import ProyectosRecientes from "@/components/ProyectosRecientes";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import GarantiaSection from "@/components/GarantiaSection";
import FAQSection from "@/components/FAQSection";
import CatalogGrid from "@/components/CatalogGrid";
import FinalCTA from "@/components/FinalCTA";
import ProblemSection from "@/components/ProblemSection";
import HeroTrustLine from "@/components/HeroTrustLine";
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
    entregable: "Recomendación y tipo de sitio con precio cerrado",
    d: "Vemos qué necesita tu negocio y qué tipo de sitio se ajusta mejor a tu objetivo — 30 min por WhatsApp, sin costo.",
    icon: ClipboardList,
  },
  {
    t: "Diseño",
    entregable: "Estructura y estilo aprobados antes de codificar",
    d: "Defino la estructura y el estilo visual antes de programar, para que apruebes el rumbo desde el inicio.",
    icon: Palette,
  },
  {
    t: "Desarrollo",
    entregable: "Sitio funcionando con WhatsApp integrado",
    d: "Construyo el sitio en código real, con tu WhatsApp integrado desde el primer día.",
    icon: Code2,
  },
  {
    t: "Lanzamiento",
    entregable: "Publicado e indexado en Google",
    d: "Publico el sitio, lo dejo indexado en Google, y te enseño lo básico para que puedas actualizarlo tú mismo.",
    icon: Rocket,
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
      {/* HERO — texto + mockup captación */}
      <section
        className="landing-hero-accent mx-auto max-w-6xl px-6 pb-12 pt-20 md:pb-16 md:pt-28"
      >
        <div className="grid gap-12 lg:grid-cols-[5fr_4fr] lg:items-center">
          <div className="text-center lg:text-left">
            <span className="chip">Servicio · Desarrollo web</span>

            <h1 className="text-h1 text-balance mt-6 text-[2.5rem] text-ink sm:text-[2.75rem] lg:text-[3rem]">
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
                className="w-full max-w-[280px] md:w-auto"
              >
                Quiero una web que convierta
              </WhatsAppButton>
              <p className="text-sm text-ink/50">
                Desde S/600 · Diagnóstico gratis · Sin compromiso
              </p>
              <div className="mt-1">
                <HeroTrustLine />
              </div>
            </div>
          </div>

          <Reveal delay={120} className="hidden lg:flex lg:justify-end">
            <WhatsAppMockup
              framed
              titulo={MOCKUP_CAPTACION_WEB.titulo}
              subtitulo={MOCKUP_CAPTACION_WEB.subtitulo}
              mensajes={MOCKUP_CAPTACION_WEB.mensajes}
            />
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-10 flex justify-center lg:hidden">
          <div className="max-h-[280px] overflow-hidden">
            <WhatsAppMockup
              compact
              titulo={MOCKUP_CAPTACION_WEB.titulo}
              subtitulo={MOCKUP_CAPTACION_WEB.subtitulo}
              mensajes={MOCKUP_CAPTACION_WEB.mensajes}
            />
          </div>
        </Reveal>
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

      {/* Comparación visitante — después del problema */}
      <section className="mx-auto max-w-3xl px-6 section-py">
        <Reveal>
          <span className="chip">El mismo visitante, dos resultados</span>
          <h2 className="text-h2 mt-4 text-ink">Lo que pasa con y sin una web que convierte</h2>
          <p className="mt-3 max-w-lg text-ink/60">
            El visitante llega igual. La diferencia está en si tu web le da un camino claro para contactarte.
          </p>
        </Reveal>
        <Reveal delay={80} className="mt-10">
          <DesarrolloWebHeroCompare />
        </Reveal>
      </section>

      {/* Tipo de sitio — fondo blanco */}
      <DesarrolloWebCatalogBridge />

      {/* CATÁLOGO — sand, sin banda duplicada */}
      <CatalogGrid
        items={CATALOGO}
        columns={3}
        chip="Catálogo completo"
        titulo="Sitios web, en soles"
        subtitulo="Rangos orientativos — el precio final lo cerramos en el diagnóstico."
      >
        <p className="text-sm text-ink/50">
          Mantenimiento: S/100 – 500/mes (hosting, dominio, respaldos y ajustes menores).
        </p>
      </CatalogGrid>

      {/* CÓMO TRABAJAMOS */}
      <section className="section-band border-t border-ink/6">
        <div className="mx-auto max-w-3xl px-6 section-py">
          <Reveal>
            <span className="chip">Implementación</span>
            <h2 className="text-h2 mt-4 text-ink">Cómo trabajamos</h2>
          </Reveal>
          <Reveal delay={80}>
            <ol className="mt-10 space-y-0">
              {PASOS.map((step, i) => (
                <li key={step.t} className="flex gap-5 sm:gap-6">
                  <div className="flex flex-col items-center">
                    <span className="font-display text-3xl italic text-terracota sm:text-4xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {i < PASOS.length - 1 && (
                      <span className="my-2 min-h-10 w-px grow bg-ink/12 sm:min-h-14" aria-hidden />
                    )}
                  </div>
                  <div className="pb-10 sm:pb-12">
                    <div className="flex items-center gap-2">
                      <step.icon className="h-4 w-4 text-terracota" strokeWidth={1.5} />
                      <h3 className="font-medium text-ink">{step.t}</h3>
                    </div>
                    <p className="mt-2 flex items-start gap-1.5 text-xs font-medium text-terracota-dark/80">
                      <PackageCheck className="mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                      <span>Entregable: {step.entregable}</span>
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink/60">{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <ProyectosRecientes variant="compact" />

      <div className="section-ink">
        <GarantiaSection condicion="el sitio no te trae los resultados esperados" variant="dark" />
      </div>

      <FAQSection items={FAQS} />

      <FinalCTA
        titulo="¿Tu web de hoy te trae clientes, o solo está ahí?"
        mensaje="Hola, quiero una web que convierta visitas en clientes"
        textoBoton="Quiero una web que convierta"
      />
    </>
  );
}
