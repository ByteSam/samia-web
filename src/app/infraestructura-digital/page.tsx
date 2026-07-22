import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Infraestructura Digital Completa para tu negocio",
  description:
    "Web que vende + pagos + automatización + datos + monitoreo, en una sola arquitectura moderna. El upgrade natural una vez que ya confías en ichan.",
};

const MODULOS = [
  { icon: Globe, t: "Web/app", d: "Landing o portal de cliente que vende, no solo informa." },
  { icon: Database, t: "Backend + auth", d: "Datos y usuarios ordenados, con panel de cliente si lo necesitas." },
  { icon: Wallet, t: "Pagos", d: "Cobra online y por WhatsApp (Culqi/Izipay/Yape)." },
  { icon: Workflow, t: "Automatización", d: "Leads, OCR de documentos, facturación electrónica SUNAT e integraciones entre tus sistemas (CRM↔ERP↔email)." },
  { icon: BarChart3, t: "Datos/BI", d: "Un tablero con tus KPIs reales, no una hoja de cálculo perdida." },
  { icon: Activity, t: "Analítica + monitoreo", d: "Mides lo que pasa y te avisa antes de que se caiga." },
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
    features: [
      "Web + captura de leads + automatización",
      "Pagos online (Culqi/Yape)",
    ],
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
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-20 text-center md:pt-28">
        <Reveal>
          <span className="chip">Para negocios que ya confían en ichan</span>
          <h1 className="mx-auto mt-6 max-w-3xl text-[2.5rem] font-normal leading-[1.08] text-ink sm:text-5xl md:text-6xl">
            La base digital completa de tu negocio, en una sola arquitectura.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/60">
            En vez de un dashboard suelto o una web aislada, integro web,
            pagos, automatización, datos y monitoreo — construido para crecer
            contigo, no para romperse cuando lo hace.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <WhatsAppButton message="Hola, quiero información sobre Infraestructura Digital Completa">
              Conversar por WhatsApp
            </WhatsAppButton>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <Reveal>
          <h2 className="text-2xl font-normal text-ink md:text-3xl">Qué incluye</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {MODULOS.map((m, i) => (
            <Reveal key={m.t} delay={i * 70}>
              <div className="card-soft hover-lift h-full">
                <m.icon className="h-6 w-6 text-terracota" strokeWidth={1.5} />
                <p className="mt-4 font-medium text-ink">{m.t}</p>
                <p className="mt-2 text-sm text-ink/60">{m.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <Reveal>
          <h2 className="text-2xl font-normal text-ink md:text-3xl">Paquetes, en soles</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PAQUETES.map((p, i) => (
            <Reveal key={p.nombre} delay={i * 80}>
              <div className={`h-full ${p.destacado ? "card-soft-tint" : "card-soft"}`}>
                {p.destacado && <span className="chip mb-3">Recomendado</span>}
                <h3 className="text-lg font-medium text-ink">{p.nombre}</h3>
                <p className="mt-3 text-2xl font-medium text-ink">{p.setup}</p>
                <p className="text-xs text-ink/50">Setup</p>
                <p className="mt-1 text-lg font-medium text-dorado">{p.retainer}/mes</p>
                <ul className="mt-4 space-y-2 text-sm text-ink/65">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-terracota" strokeWidth={1.75} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink/50">
          El retainer cubre hosting, monitoreo, respaldos, ajustes y
          optimización — lo que sostiene el servicio funcionando.
        </p>
      </section>

      <GarantiaSection condicion="la arquitectura no funciona como se acordó en el diagnóstico" />

      <FAQSection items={FAQS} />

      <section className="mx-auto max-w-3xl px-6 pb-28">
        <Reveal>
          <div className="card-soft-tint text-center">
            <h2 className="text-2xl font-normal text-ink md:text-3xl">
              ¿Ya tienes un asistente de WhatsApp con nosotros?
            </h2>
            <p className="mt-4 text-ink/65">
              Este es el siguiente paso natural: integrar todo lo que ya
              funciona en una sola arquitectura que escala contigo.
            </p>
            <div className="mt-8">
              <WhatsAppButton message="Hola, ya trabajo con ichan y quiero conocer Infraestructura Digital Completa">
                Hablemos por WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
