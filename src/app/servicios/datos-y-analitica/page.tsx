import type { Metadata } from "next";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import GarantiaSection from "@/components/GarantiaSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import ProblemSection from "@/components/ProblemSection";
import DatosAnaliticaHeroCompare from "@/components/servicios/DatosAnaliticaHeroCompare";
import DatosDashboardPreview from "@/components/servicios/DatosDashboardPreview";
import DatosAnaliticaBridge from "@/components/servicios/DatosAnaliticaBridge";

export const metadata: Metadata = {
  title: "Datos y analítica para negocios en Perú",
  description:
    "Tableros, reportes y monitoreo con tus KPIs reales — dashboards y BI para pymes en Perú, en soles o como módulo de Infraestructura digital.",
  alternates: { canonical: "/servicios/datos-y-analitica" },
};

const OFERTAS_PRECIO = [
  {
    nombre: "Tablero de KPIs",
    setup: "Proyecto puntual",
    detalle: "Indicadores que ya usas — consultas, ventas, citas o leads — en un solo lugar.",
  },
  {
    nombre: "Paquete Integral",
    setup: "S/15,000 – 25,000",
    detalle: "Dashboard BI + analítica + monitoreo, dentro de Infraestructura digital.",
    destacado: true,
  },
  {
    nombre: "Monitoreo y alertas",
    setup: "Cotización en diagnóstico",
    detalle: "Te avisa cuando algo cambia en tu operación o en la infraestructura.",
  },
];

const PASOS = [
  {
    t: "Diagnóstico",
    d: "Vemos qué datos tienes hoy, qué decisiones necesitas tomar y qué KPIs importan — 30 min, sin costo.",
  },
  {
    t: "Diseño del tablero",
    d: "Defino métricas, fuentes de datos y frecuencia de actualización — sin inventar números.",
  },
  {
    t: "Implementación",
    d: "Construyo el tablero o reportes y los conecto a tus fuentes reales.",
  },
  {
    t: "Soporte",
    d: "Ajustes cuando agregas nuevos procesos o quieres medir otra cosa.",
  },
];

const FAQS = [
  {
    q: "¿Necesito Infraestructura digital completa?",
    a: "No siempre. El paquete Integral incluye BI y monitoreo, pero también puedo armar un tablero puntual si ya tienes datos en otros sistemas.",
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
      <section className="landing-hero-accent mx-auto max-w-3xl px-6 pb-12 pt-20 md:pb-16 md:pt-28 lg:max-w-4xl">
        <div className="text-center lg:text-left">
          <span className="chip">Servicio · Datos y analítica</span>

          <h1 className="text-h1 mt-6 text-[2.5rem] text-ink sm:text-5xl md:text-[3.5rem]">
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

      <section className="mx-auto max-w-md px-6 pb-14 md:pb-20">
        <div className="mockup-frame">
          <DatosDashboardPreview />
        </div>
        <p className="mt-3 text-center text-xs text-ink/45">
          Ejemplo ilustrativo — tus KPIs se definen en el diagnóstico.
        </p>
      </section>

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

      <DatosAnaliticaBridge />

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <Reveal>
          <p className="section-eyebrow">Precios</p>
          <h2 className="text-h2 mt-2 text-ink">Cómo se cotiza</h2>
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {OFERTAS_PRECIO.map((p) => (
              <div
                key={p.nombre}
                className={`p-5 sm:p-6 ${p.destacado ? "card-soft-tint" : "card-soft"}`}
              >
                {p.destacado && <span className="chip mb-3">Incluye BI completo</span>}
                <h3 className="text-lg font-medium text-ink">{p.nombre}</h3>
                <p className="mt-3 text-xl font-medium text-ink">{p.setup}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{p.detalle}</p>
                {p.destacado && (
                  <Link
                    href="/servicios/infraestructura-digital"
                    className="mt-4 inline-flex text-sm font-medium text-terracota-dark underline-offset-2 hover:underline"
                  >
                    Ver Infraestructura digital →
                  </Link>
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink/50">
            Retainer de Infraestructura Integral: S/1,200 – 2,000/mes — cubre hosting, monitoreo,
            respaldos y optimización.
          </p>
        </Reveal>
      </section>

      <div className="section-band">
        <section className="mx-auto max-w-4xl px-6 section-py">
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
      </div>

      <div className="section-ink">
        <GarantiaSection condicion="el tablero no refleja la operación como se acordó" variant="dark" />
      </div>

      <FAQSection items={FAQS} />

      <FinalCTA
        titulo="¿Qué te gustaría ver en un tablero de tu negocio?"
        mensaje="Hola, quiero ver mis datos en un tablero para mi negocio"
        textoBoton="Quiero ver mis datos en un tablero"
      />
    </>
  );
}
