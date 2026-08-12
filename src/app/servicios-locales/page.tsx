import type { Metadata } from "next";
import {
  PhoneMissed,
  Clock3,
  MapPinned,
  ClipboardList,
  Settings2,
  PackageCheck,
} from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import GarantiaSection from "@/components/GarantiaSection";
import FAQSection from "@/components/FAQSection";
import PricingTiers from "@/components/PricingTiers";
import ProblemSection from "@/components/ProblemSection";
import SolutionGrid from "@/components/SolutionGrid";
import FinalCTA from "@/components/FinalCTA";
import WhatsAppMockup from "@/components/WhatsAppMockup";
import LocalesMissedCallBlock from "@/components/nichos/LocalesMissedCallBlock";
import { MOCKUP_LOCALES } from "@/lib/nichos/mockups";

export const metadata: Metadata = {
  title: "Asistente de WhatsApp con IA para servicios locales en Perú",
  description:
    "Gasfitería, cerrajería, mantenimiento: si no contestas, el asistente responde por WhatsApp, filtra urgencias y agenda visitas. Configurado en días. Diagnóstico gratis de 30 minutos.",
  alternates: { canonical: "/servicios-locales" },
};

const PAQUETES = [
  {
    nombre: "Esencial",
    setup: "S/500",
    mensualidad: "S/200",
    features: [
      "Si no contestas, responde por WhatsApp en segundos",
      "Respuesta automática a consultas frecuentes",
    ],
  },
  {
    nombre: "Profesional",
    destacado: true,
    setup: "S/1,500",
    mensualidad: "S/450",
    features: [
      "Todo lo del Esencial",
      "Filtrado de urgencias y aviso inmediato",
      "Captación de consultas antes de agendar la visita",
    ],
  },
  {
    nombre: "Integral",
    setup: "S/3,000",
    mensualidad: "S/800",
    features: [
      "Todo lo del Profesional",
      "Agenda de visitas + recordatorios",
      "Reportes básicos de consultas y trabajos",
    ],
  },
];

const PASOS = [
  {
    t: "Diagnóstico gratis (30 min)",
    d: "Vemos cuántas llamadas pierdes y qué consultas se repiten.",
    icon: ClipboardList,
  },
  {
    t: "Lo configuro en días",
    d: "Activo la respuesta automática y el asistente con la info de tu negocio.",
    icon: Settings2,
  },
  {
    t: "Recuperas clientes que hoy se pierden",
    d: "Mides la diferencia desde la primera semana.",
    icon: PackageCheck,
  },
];

const FAQS = [
  {
    q: "¿Sirve si trabajo solo, sin oficina?",
    a: "Se conecta a tu WhatsApp personal o de negocio — no necesitas local ni personal extra.",
  },
  {
    q: "¿Distingue una emergencia real de una consulta cualquiera?",
    a: "Según las palabras y reglas que configures, te avisa cuando algo suena urgente; el resto lo filtra solo. Tú validas si es emergencia real.",
  },
  {
    q: "¿Necesito cambiar mi número de WhatsApp?",
    a: "No. Se conecta a tu número actual mediante la API oficial de WhatsApp.",
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
      {/* 1. HERO — flujo llamada perdida como protagonista */}
      <section className="relative mx-auto max-w-6xl px-6 pb-12 pt-20 md:pb-16 md:pt-24">
        <div className="text-center lg:text-left">
          <span className="chip">
            Gasfitería · cerrajería · mantenimiento · emergencias del hogar
          </span>

          <h1 className="text-h1 mt-6 text-[2.5rem] text-ink sm:text-5xl md:text-[3.5rem] lg:max-w-3xl">
            Cada{" "}
            <span className="font-display italic text-terracota">llamada perdida</span>{" "}
            es un cliente que se va con la competencia.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/60 lg:mx-0 mx-auto">
            Si no puedes contestar, el asistente responde por WhatsApp en segundos — antes
            de que el cliente llame al siguiente en Google.
          </p>

          <LocalesMissedCallBlock variant="hero" />

          <div className="mt-10 flex flex-col items-center gap-3 lg:items-start">
            <WhatsAppButton
              message="Hola, vi tu web y quiero recuperar las llamadas perdidas de mi negocio"
              source="servicios_locales_hero"
            >
              Quiero recuperar llamadas perdidas
            </WhatsAppButton>
            <p className="text-sm text-ink/55">
              Desde S/500 de configuración · Hablarás directamente conmigo
            </p>
          </div>
        </div>

        <Reveal>
          <div className="mt-12 flex flex-col items-center gap-4">
            <p className="text-sm font-medium text-ink/50">Así se ve cuando el cliente escribe</p>
            <WhatsAppMockup
              titulo={MOCKUP_LOCALES.titulo}
              subtitulo={MOCKUP_LOCALES.subtitulo}
              mensajes={MOCKUP_LOCALES.mensajes}
            />
          </div>
        </Reveal>
      </section>

      {/* 2. EL PROBLEMA */}
      <div className="section-band">
        <ProblemSection
          titulo="Estás en un techo, debajo de un lavadero o manejando — y el teléfono suena."
          bullets={[
            "No puedes contestar en el momento y la llamada se pierde.",
            "El cliente no espera: llama al siguiente de la lista en Google.",
            "Las emergencias reales (fuga, corte, algo roto) llegan fuera de tu horario y nadie las atiende.",
          ]}
          stat="La mayoría de las personas abandona si no le responden rápido — y en emergencias del hogar, esa espera se siente peor."
        />
      </div>

      {/* 3. PRECIO TEMPRANO — ancla S/500 */}
      <section className="border-t border-ink/8 pt-4">
        <PricingTiers
          paquetes={PAQUETES}
          titulo="Desde S/500 — paquetes para negocios locales"
          chipDestacado="El más elegido"
        >
          <WhatsAppButton message="Hola, quiero el paquete Profesional para mi negocio local">
            Quiero el Profesional
          </WhatsAppButton>
        </PricingTiers>
      </section>

      {/* 4. LA SOLUCION */}
      <SolutionGrid
        titulo="No pierdes la llamada — ni la consulta que viene después."
        items={[
          {
            icon: PhoneMissed,
            t: "Responde si no contestas",
            d: "Si la llamada no se atiende, le escribe por WhatsApp en segundos — antes de que llame a otro.",
          },
          {
            icon: Clock3,
            t: "Atiende consultas frecuentes",
            d: "Horarios, tarifas, zona de trabajo — sin que estés disponible.",
          },
          {
            icon: MapPinned,
            t: "Te avisa lo urgente",
            d: "Si suena a emergencia (fuga, corte, algo roto), te notifica para que priorices.",
          },
        ]}
      />

      {/* 5. COMO LO IMPLEMENTAMOS */}
      <div className="section-band">
        <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <Reveal>
            <h2 className="text-h2 text-ink">Cómo lo implementamos</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {PASOS.map((step, i) => (
              <Reveal key={step.t} delay={i * 80}>
                <div className="card-soft h-full bg-white">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/15 text-sm font-medium text-ink">
                      {i + 1}
                    </span>
                    <step.icon className="h-5 w-5 text-terracota" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 font-medium text-ink">{step.t}</h3>
                  <p className="mt-2 text-sm text-ink/60">{step.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>

      {/* ESCALERA — qué servicio base incluye esto */}
      <section className="mx-auto max-w-3xl px-6 pb-12">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">
            Qué hay detrás de esta solución
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/65">
            Esta solución está construida sobre{" "}
            <a href="/servicios/agentes-ia" className="font-medium text-terracota-dark underline-offset-2 hover:underline">
              Agentes IA por WhatsApp
            </a>{" "}
            — el servicio que responde, filtra y agenda tus clientes de forma automática. Si necesitas
            conectar flujos más complejos con otras herramientas, también aplica{" "}
            <a href="/servicios/automatizacion" className="font-medium text-terracota-dark underline-offset-2 hover:underline">
              Automatización
            </a>
            .
          </p>
        </Reveal>
      </section>

      <div className="section-ink">
        <GarantiaSection
          condicion="el asistente no te ayuda a recuperar clientes que hoy pierdes"
          variant="dark"
        />
      </div>

      <FAQSection items={FAQS} />

      <FinalCTA
        titulo="¿Cuántas llamadas o mensajes por WhatsApp se quedan sin respuesta cada semana?"
        mensaje="Hola, vi tu web y quiero recuperar las llamadas perdidas de mi negocio"
        textoBoton="Quiero recuperar llamadas perdidas"
      />
    </>
  );
}
