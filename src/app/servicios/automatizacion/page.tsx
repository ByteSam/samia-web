import type { Metadata } from "next";
import { PhoneMissed, UserPlus, ScanText, Receipt, Plug, Workflow } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Automatización de Procesos",
  description:
    "Missed-call text-back, captación de leads, OCR, facturación electrónica SUNAT, integraciones y procesos end-to-end — automatización con n8n, en soles.",
};

const CATALOGO = [
  {
    icon: PhoneMissed,
    nombre: "Missed-call text-back",
    entrega: "1-2 días",
    setup: "S/500 – 1,200",
    retainer: "S/200 – 500",
  },
  {
    icon: UserPlus,
    nombre: "Captación + seguimiento de leads",
    entrega: "3-7 días",
    setup: "S/900 – 2,500",
    retainer: "S/300 – 700",
  },
  {
    icon: ScanText,
    nombre: "Procesamiento de documentos (OCR)",
    entrega: "1-2 semanas",
    setup: "S/2,500 – 7,000",
    retainer: "S/400 – 1,000",
  },
  {
    icon: Receipt,
    nombre: "Facturación electrónica SUNAT",
    entrega: "1-2 semanas",
    setup: "S/2,000 – 6,000",
    retainer: "S/300 – 800",
  },
  {
    icon: Plug,
    nombre: "Integración de apps (CRM ↔ ERP ↔ email)",
    entrega: "1-2 semanas",
    setup: "S/2,000 – 7,000",
    retainer: "S/400 – 1,000",
  },
  {
    icon: Workflow,
    nombre: "Proceso end-to-end",
    entrega: "3-6 semanas",
    setup: "S/8,000 – 15,000",
    retainer: "S/500 – 1,200",
  },
];

export default function AutomatizacionPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-20 text-center md:pt-28">
        <Reveal>
          <span className="chip">Servicio · Automatización</span>
          <h1 className="mx-auto mt-6 max-w-3xl text-[2.5rem] font-normal leading-[1.08] text-ink sm:text-5xl md:text-6xl">
            Horas administrativas que dejas de perder, para siempre.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/60">
            Automatizo lo repetitivo con n8n — de una llamada perdida a un
            proceso completo end-to-end.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <WhatsAppButton message="Hola, quiero información sobre automatización">
              Conversar por WhatsApp
            </WhatsAppButton>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-28">
        <Reveal>
          <h2 className="text-2xl font-normal text-ink md:text-3xl">Catálogo, en soles</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {CATALOGO.map((p, i) => (
            <Reveal key={p.nombre} delay={i * 60}>
              <div className="card-soft hover-lift flex h-full flex-col">
                <p.icon className="h-6 w-6 text-terracota" strokeWidth={1.5} />
                <h3 className="mt-4 font-medium text-ink">{p.nombre}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-terracota-dark/70">
                  Entrega: {p.entrega}
                </p>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <p className="text-xl font-medium text-ink">{p.setup}</p>
                    <p className="text-xs text-ink/50">Setup</p>
                  </div>
                  <p className="text-sm font-medium text-dorado">{p.retainer}/mes</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
