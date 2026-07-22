import type { Metadata } from "next";
import { PhoneMissed, Clock3, MapPinned } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import GarantiaSection from "@/components/GarantiaSection";
import FAQSection from "@/components/FAQSection";
import PricingTiers from "@/components/PricingTiers";
import ProblemSection from "@/components/ProblemSection";
import SolutionGrid from "@/components/SolutionGrid";

export const metadata: Metadata = {
  title: "Asistente de WhatsApp con IA para servicios locales en Perú",
  description:
    "Gasfitería, cerrajería, mantenimiento, constructoras: no pierdas otra emergencia por no contestar a tiempo. Configurado en días. Diagnóstico gratis.",
  alternates: { canonical: "/servicios-locales" },
};

const PAQUETES = [
  {
    nombre: "Esencial",
    setup: "S/500",
    mensualidad: "S/200",
    features: ["Missed-call text-back automático", "Respuesta 24/7 a consultas frecuentes"],
  },
  {
    nombre: "Profesional",
    destacado: true,
    setup: "S/1,500",
    mensualidad: "S/450",
    features: [
      "Missed-call text-back automático",
      "Respuesta 24/7 a consultas frecuentes",
      "Captación y calificación de leads",
      "Deriva emergencias reales al instante",
    ],
  },
  {
    nombre: "Integral",
    setup: "S/3,000",
    mensualidad: "S/800",
    features: [
      "Missed-call text-back automático",
      "Respuesta 24/7 a consultas frecuentes",
      "Captación y calificación de leads",
      "Deriva emergencias reales al instante",
      "Agenda de visitas + reportes",
    ],
  },
];

const FAQS = [
  {
    q: "¿Sirve si trabajo solo, sin oficina?",
    a: "Sí — se conecta a tu WhatsApp personal o de negocio, no necesitas local ni personal.",
  },
  {
    q: "¿Distingue una emergencia real de una consulta cualquiera?",
    a: "Sí, prioriza y te avisa de inmediato cuando algo suena urgente; el resto lo filtra solo.",
  },
  {
    q: "¿Cuánto tarda en estar listo?",
    a: "Normalmente pocos días desde que tengo la información de tu negocio.",
  },
  {
    q: "¿Puedo perder una llamada y aun así no perder al cliente?",
    a: "Ese es el punto: si no contestas la llamada, el asistente le escribe solo por WhatsApp en segundos.",
  },
];

export default function ServiciosLocalesPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-20 text-center md:pt-28">
        <Reveal>
          <h1 className="text-[2.5rem] font-normal leading-[1.08] text-ink sm:text-5xl md:text-[4rem]">
            Cada llamada perdida es un cliente que se va con otro gasfitero.
          </h1>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/60">
            Un asistente por WhatsApp con IA que responde solo cuando no
            puedes contestar, filtra lo urgente y agenda visitas —
            configurado en días.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <WhatsAppButton message="Hola, vi tu web y quiero el asistente para mi negocio">
              Escríbeme
            </WhatsAppButton>
          </div>
        </Reveal>
      </section>

      {/* 2. EL PROBLEMA */}
      <ProblemSection
        titulo="Estás en un techo, debajo de un lavadero o manejando — y el teléfono suena."
        bullets={[
          "No puedes contestar en el momento y la llamada se pierde.",
          "El cliente no espera: llama al siguiente de la lista en Google.",
          "Las emergencias reales (fuga, corte, algo roto) llegan fuera de tu horario y nadie las atiende.",
        ]}
        stat="El 62% de las personas abandona si no le responden rápido — y en emergencias del hogar, esa espera se siente peor."
      />

      {/* 3. LA SOLUCION */}
      <SolutionGrid
        titulo="No contestas el teléfono — pero nunca dejas a nadie sin respuesta."
        items={[
          {
            icon: PhoneMissed,
            t: "Missed-call text-back",
            d: "Si no contestas, le escribe solo por WhatsApp en segundos.",
          },
          {
            icon: Clock3,
            t: "Responde 24/7",
            d: "Horarios, tarifas, zona de trabajo — sin que muevas un dedo.",
          },
          {
            icon: MapPinned,
            t: "Filtra lo urgente",
            d: "Te avisa de inmediato si suena a emergencia real.",
          },
        ]}
      />

      {/* 4. PAQUETES */}
      <PricingTiers paquetes={PAQUETES} />

      {/* 5. GARANTIA */}
      <GarantiaSection condicion="el asistente no te ayuda a recuperar clientes que hoy pierdes" />

      {/* 6. FAQ */}
      <FAQSection items={FAQS} />

      {/* 7. CTA FINAL */}
      <section className="mx-auto max-w-3xl px-6 pb-28 text-center">
        <Reveal>
          <h2 className="text-2xl font-medium text-ink md:text-3xl">
            ¿Cuántas llamadas vas a dejar pasar esta semana?
          </h2>
          <p className="mt-3 text-ink/60">
            Diagnóstico gratis de 30 minutos. Sin compromiso.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <WhatsAppButton message="Hola, vi tu web y quiero el asistente para mi negocio">
              Escríbeme por WhatsApp
            </WhatsAppButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
