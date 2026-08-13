import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3, Layers, Activity, ClipboardList, LayoutDashboard, Plug, Settings2 } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import GarantiaSection from "@/components/GarantiaSection";
import FAQSection from "@/components/FAQSection";
import ProblemSection from "@/components/ProblemSection";
import CatalogGrid from "@/components/CatalogGrid";
import DatosAnaliticaHeroCompare from "@/components/servicios/DatosAnaliticaHeroCompare";
import DatosAnaliticaBridge from "@/components/servicios/DatosAnaliticaBridge";
import ImplementacionStepper from "@/components/ImplementacionStepper";

export const metadata: Metadata = {
  title: "Datos y analítica para negocios en Perú",
  description:
    "Tableros, reportes y monitoreo con tus KPIs reales — dashboards y BI para pymes en Perú, en soles o como módulo de Infraestructura digital.",
  alternates: { canonical: "/servicios/datos-y-analitica" },
};

const CATALOGO = [
  {
    icon: BarChart3,
    nombre: "Tablero de KPIs",
    descripcion: "Indicadores que ya usas — consultas, ventas, citas o leads — en un solo lugar.",
    setup: "Proyecto puntual",
  },
  {
    icon: Layers,
    nombre: "Paquete Integral",
    descripcion: "Dashboard BI + analítica + monitoreo, dentro de Infraestructura digital.",
    setup: "S/15,000 – 25,000",
    retainer: "S/1,200 – 2,000",
    badge: "Incluye BI completo",
  },
  {
    icon: Activity,
    nombre: "Monitoreo y alertas",
    descripcion: "Te avisa cuando algo cambia en tu operación o en la infraestructura.",
    setup: "Cotización en diagnóstico",
  },
];

const PASOS_IMPLEMENTACION = [
  {
    t: "Diagnóstico",
    d: "Vemos qué datos tienes hoy, qué decisiones necesitas tomar y qué KPIs importan — 30 min, sin costo.",
    icon: ClipboardList,
  },
  {
    t: "Diseño del tablero",
    d: "Defino métricas, fuentes de datos y frecuencia de actualización — sin inventar números.",
    icon: LayoutDashboard,
  },
  {
    t: "Implementación",
    d: "Construyo el tablero o reportes y los conecto a tus fuentes reales.",
    icon: Plug,
  },
  {
    t: "Soporte",
    d: "Ajustes cuando agregas nuevos procesos o quieres medir otra cosa.",
    icon: Settings2,
  },
];

const FAQS = [
  {
    q: "¿Necesito Infraestructura digital completa?",
    a: "No siempre. El paquete Integral incluye BI y monitoreo, pero también puedo armar un tablero puntual si ya tienes datos en otros sistemas.",
  },
  {
    q: "¿Puedo ver un ejemplo del tablero antes de contratar?",
    a: "Sí — en el hero de esta página ves un tablero ilustrativo, y en el diagnóstico gratuito defino las métricas reales de tu negocio y te muestro cómo quedaría antes de implementar nada.",
  },
  {
    q: "¿Inventan métricas o usan datos reales?",
    a: "Solo KPIs que tú defines y que podemos obtener de tu operación — nada de números de relleno.",
  },
  {
    q: "¿Qué herramientas usan?",
    a: "Depende del caso: puede ser un dashboard en tu web, reportes automatizados o integración con lo que ya usas. Lo cerramos en el diagnóstico.",
  },
  {
    q: "¿Cuánto tarda?",
    a: "Un tablero simple puede estar en semanas; proyectos con varias fuentes de datos tardan más — el alcance lo definimos antes de empezar.",
  },
];

export default function DatosAnaliticaPage() {
  return (
    <>
      {/* HERO — Excel vs tablero + dashboard integrado */}
      <section className="landing-hero-accent mx-auto max-w-3xl px-6 pb-12 pt-20 md:pb-16 md:pt-28 lg:max-w-5xl">
        <div className="text-center lg:text-left">
          <span className="chip">Servicio · Datos y analítica</span>

          <h1 className="text-h1 mt-6 text-ink">
            Decisiones con{" "}
            <span className="font-display italic text-terracota">datos claros</span>, no con hojas
            perdidas.
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-ink/60">
            Tableros, reportes y monitoreo con los indicadores de tu negocio — no plantillas genéricas
            ni métricas inventadas.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 lg:items-start">
            <WhatsAppButton
              message="Hola, quiero ver mis datos en un tablero para mi negocio"
              source="datos_analitica_hero"
            >
              Quiero ver mis datos en un tablero
            </WhatsAppButton>
            <p className="text-sm text-ink/50">
              Cotización en diagnóstico · Hablarás directamente conmigo
            </p>
          </div>

          <DatosAnaliticaHeroCompare />
        </div>
      </section>

      {/* PROBLEMA */}
      <div className="section-band">
        <ProblemSection
          variant="band"
          titulo="Tienes datos, pero no una vista clara del negocio."
          bullets={[
            "Números en Excel que nadie actualiza a tiempo.",
            "Decisiones a ciegas porque no ves tendencias del mes.",
            "Sin alertas cuando algo se cae o cambia en la operación.",
          ]}
          stat="Un tablero con tus KPIs reales evita el Excel eterno — y te da visibilidad sin armar reportes manualmente cada semana."
        />
      </div>

      {/* BRIDGE — cuándo tiene sentido */}
      <DatosAnaliticaBridge />

      {/* CATÁLOGO / PRECIOS */}
      <div className="section-band border-t border-ink/6">
        <CatalogGrid
          titulo="Cómo se cotiza"
          chip="Servicios · Precios orientativos"
          columns={3}
          items={CATALOGO}
        >
          <p className="text-sm text-ink/50">
            El Paquete Integral incluye retainer de hosting, monitoreo, respaldos y optimización.{" "}
            <Link
              href="/servicios/infraestructura-digital"
              className="text-terracota-dark underline-offset-2 hover:underline"
            >
              Ver Infraestructura digital
            </Link>
            .
          </p>
        </CatalogGrid>
      </div>

      {/* CÓMO TRABAJAMOS */}
      <div className="section-band">
        <ImplementacionStepper pasos={PASOS_IMPLEMENTACION} columns={4} />
      </div>

      <div className="section-ink">
        <GarantiaSection
          condicion="el tablero no refleja la operación como se acordó"
          variant="dark"
          cta={{
            message: "Hola, quiero ver mis datos en un tablero con la garantía de 14 días",
            textoBoton: "Empezar con piloto de 14 días",
            source: "datos_analitica_garantia",
          }}
        />
      </div>

      <FAQSection items={FAQS} />
    </>
  );
}
