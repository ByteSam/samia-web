import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Database,
  Wallet,
  Workflow,
  BarChart3,
  Activity,
  Check,
} from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import GarantiaSection from "@/components/GarantiaSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import InfraestructuraHeroCompare from "@/components/servicios/InfraestructuraHeroCompare";
import InfraestructuraStackPreview from "@/components/servicios/InfraestructuraStackPreview";
import InfraestructuraUpgradeBridge from "@/components/servicios/InfraestructuraUpgradeBridge";

export const metadata: Metadata = {
  title: "Infraestructura Digital Completa para tu negocio",
  description:
    "Web que vende + pagos + automatización + datos + monitoreo, en una sola arquitectura moderna. El upgrade natural una vez que ya confías en afynova.",
  alternates: { canonical: "/servicios/infraestructura-digital" },
};

const MODULOS = [
  { icon: Globe, t: "Web/app", d: "Landing o portal de cliente que vende, no solo informa." },
  {
    icon: Database,
    t: "Backend + auth",
    d: "Datos y usuarios ordenados, con panel de cliente si lo necesitas.",
  },
  { icon: Wallet, t: "Pagos", d: "Cobra online y por WhatsApp (Culqi/Izipay/Yape)." },
  {
    icon: Workflow,
    t: "Automatización",
    d: "Leads, OCR de documentos, facturación electrónica SUNAT e integraciones entre tus sistemas (CRM↔ERP↔email).",
    href: "/servicios/automatizacion",
  },
  {
    icon: BarChart3,
    t: "Datos/BI",
    d: "Un tablero con tus KPIs reales, no una hoja de cálculo perdida.",
    href: "/servicios/datos-y-analitica",
  },
  {
    icon: Activity,
    t: "Analítica + monitoreo",
    d: "Mides lo que pasa y te avisa antes de que se caiga.",
  },
];

const PAQUETES = [
  {
    nombre: "Base",
    setup: "S/6,000 – 9,000",
    retainer: "S/400 – 700",
    features: ["Web + captura de leads + automatización"],
  },
  {
    nombre: "Pro",
    destacado: true,
    setup: "S/9,000 – 15,000",
    retainer: "S/700 – 1,200",
    features: ["Web + captura de leads + automatización", "Pagos online (Culqi/Yape)"],
  },
  {
    nombre: "Integral",
    setup: "S/15,000 – 25,000",
    retainer: "S/1,200 – 2,000",
    features: [
      "Web + captura de leads + automatización",
      "Pagos online (Culqi/Yape)",
      "Backend + auth + panel de cliente",
      "Dashboard BI + analítica + monitoreo",
    ],
  },
];

const FAQS = [
  {
    q: "¿Necesito ya un asistente de WhatsApp para empezar aquí?",
    a: "No es obligatorio, pero es lo más común — la mayoría llega a Infraestructura Digital después de validar un servicio más chico primero.",
  },
  {
    q: "¿Puedo empezar por el paquete Base y subir después?",
    a: "Sí. Los tres paquetes están pensados para escalar sin rehacer nada.",
  },
  {
    q: "¿Qué pasa si solo necesito 2 de los 5 módulos?",
    a: "Lo vemos en el diagnóstico y armamos una combinación a medida si ningún paquete calza exacto.",
  },
];

export default function InfraestructuraDigitalPage() {
  return (
    <>
      {/* HERO — Opción B: sueltas vs integrada */}
      <section className="landing-hero-accent mx-auto max-w-3xl px-6 pb-12 pt-20 md:pb-16 md:pt-28 lg:max-w-4xl">
        <div className="text-center lg:text-left">
          <span className="chip">Servicio · Infraestructura digital</span>

          <h1 className="text-h1 mt-6 text-[2.5rem] text-ink sm:text-5xl md:text-[3.5rem]">
            Tu negocio{" "}
            <span className="font-display italic text-terracota">conectado</span>, en una sola
            arquitectura.
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-ink/60">
            Web, pagos, automatización, datos y monitoreo — integrados para crecer contigo, no para
            romperse cuando escala.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 lg:items-start">
            <WhatsAppButton
              message="Hola, quiero integrar mi negocio con Infraestructura Digital Completa"
              source="infraestructura_digital_hero"
            >
              Quiero integrar mi negocio
            </WhatsAppButton>
            <p className="text-sm text-ink/50">
              Cotización en diagnóstico · Para clientes que ya validaron con afynova
            </p>
          </div>

          <InfraestructuraHeroCompare />
        </div>
      </section>

      {/* Stack preview — debajo del hero */}
      <section className="mx-auto max-w-2xl px-6 pb-14 md:pb-20">
        <div className="mockup-frame">
          <InfraestructuraStackPreview />
        </div>
        <p className="mt-3 text-center text-xs text-ink/45">
          Los seis módulos trabajando juntos — no como herramientas aisladas.
        </p>
      </section>

      {/* FIRMA — cuándo tiene sentido */}
      <InfraestructuraUpgradeBridge />

      {/* QUÉ INCLUYE */}
      <div className="section-band border-t border-ink/6">
        <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <Reveal>
            <p className="section-eyebrow">Módulos</p>
            <h2 className="text-h2 mt-2 text-ink">Qué incluye</h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {MODULOS.map((m) => (
                <div key={m.t} className="card-soft hover-lift p-5 sm:p-6">
                  <m.icon className="h-6 w-6 text-terracota" strokeWidth={1.5} />
                  {m.href ? (
                    <Link
                      href={m.href}
                      className="mt-4 block font-medium text-ink transition-colors hover:text-terracota"
                    >
                      {m.t}
                    </Link>
                  ) : (
                    <p className="mt-4 font-medium text-ink">{m.t}</p>
                  )}
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{m.d}</p>
                  {m.href && (
                    <Link
                      href={m.href}
                      className="mt-3 text-sm text-terracota-dark underline-offset-2 hover:underline"
                    >
                      Ver servicio →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </section>
      </div>

      {/* PAQUETES */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <Reveal>
          <p className="section-eyebrow">Precios</p>
          <h2 className="text-h2 mt-2 text-ink">Paquetes, en soles</h2>
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PAQUETES.map((p) => (
              <div
                key={p.nombre}
                className={`p-5 sm:p-6 ${p.destacado ? "card-soft-tint" : "card-soft"}`}
              >
                {p.destacado && <span className="chip mb-3">Recomendado</span>}
                <h3 className="text-lg font-medium text-ink">{p.nombre}</h3>
                <p className="mt-3 text-2xl font-medium text-ink">{p.setup}</p>
                <p className="text-xs text-ink/50">Setup</p>
                <p className="mt-1 text-lg font-medium text-dorado">{p.retainer}/mes retainer</p>
                <ul className="mt-4 space-y-2 text-sm text-ink/65">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-terracota"
                        strokeWidth={1.75}
                      />
                      <span className="leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink/50">
            El retainer cubre hosting, monitoreo, respaldos, ajustes y optimización — lo que
            sostiene el servicio funcionando. Los módulos de{" "}
            <Link
              href="/servicios/automatizacion"
              className="text-terracota-dark underline-offset-2 hover:underline"
            >
              automatización
            </Link>
            {" "}y{" "}
            <Link
              href="/servicios/datos-y-analitica"
              className="text-terracota-dark underline-offset-2 hover:underline"
            >
              datos y analítica
            </Link>
            {" "}también pueden contratarse por separado antes del paquete Integral.
          </p>
        </Reveal>
      </section>

      <div className="section-ink">
        <GarantiaSection condicion="la arquitectura no funciona como se acordó en el diagnóstico" variant="dark" />
      </div>

      <FAQSection items={FAQS} />

      <FinalCTA
        titulo="¿Ya tienes un asistente de WhatsApp conmigo?"
        textoSecundario="Este es el siguiente paso natural: integrar todo lo que ya funciona en una sola arquitectura que escala contigo."
        mensaje="Hola, ya trabajo con afynova y quiero conocer Infraestructura Digital Completa"
        textoBoton="Hablemos por WhatsApp"
      />
    </>
  );
}
