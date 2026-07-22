import type { Metadata } from "next";
import { Clock, CalendarCheck, UserCheck } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import GarantiaSection from "@/components/GarantiaSection";
import FAQSection from "@/components/FAQSection";
import PricingTiers from "@/components/PricingTiers";
import ProblemSection from "@/components/ProblemSection";
import SolutionGrid from "@/components/SolutionGrid";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Asistente de WhatsApp con IA para clínicas en Perú",
  description:
    "Tu clínica responde mensajes 24/7, confirma citas y reduce las ausencias. Configurado en días. Diagnóstico gratis.",
  alternates: { canonical: "/clinicas" },
};

const PAQUETES = [
  {
    nombre: "Esencial",
    setup: "S/1,500",
    mensualidad: "S/350",
    features: [
      "Respuesta 24/7 a consultas frecuentes",
      "Derivación a recepción cuando hace falta",
    ],
  },
  {
    nombre: "Profesional",
    destacado: true,
    setup: "S/2,500",
    mensualidad: "S/550",
    features: [
      "Respuesta 24/7 a consultas frecuentes",
      "Derivación a recepción cuando hace falta",
      "Agenda + recordatorios (anti-ausencias)",
      "Calificación de pacientes",
    ],
  },
  {
    nombre: "Integral",
    setup: "S/3,500",
    mensualidad: "S/800",
    features: [
      "Respuesta 24/7 a consultas frecuentes",
      "Derivación a recepción cuando hace falta",
      "Agenda + recordatorios (anti-ausencias)",
      "Calificación de pacientes",
      "Integración con tu sistema + reportes",
      "Videoconsulta / telemedicina",
    ],
  },
];

const FAQS = [
  {
    q: "¿Necesito cambiar mi número de WhatsApp?",
    a: "No. Se conecta a tu número actual mediante la API oficial de WhatsApp.",
  },
  {
    q: "¿Y si ya uso otro sistema de citas?",
    a: "Se integra con la mayoría. Lo vemos en el diagnóstico.",
  },
  {
    q: "¿El asistente reemplaza a mi recepción?",
    a: "No. La libera de lo repetitivo y le pasa solo lo que necesita atención humana.",
  },
  {
    q: "¿Cuánto tarda en estar listo?",
    a: "Normalmente pocos días desde que tengo la información de tu clínica.",
  },
  {
    q: "¿Los datos de mis pacientes están seguros?",
    a: "Sí: canal oficial, cifrado y control de acceso. No se usan para entrenar modelos.",
  },
];

export default function ClinicasPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-20 text-center md:pt-28">
        <Reveal>
          <h1 className="text-[2.5rem] font-normal leading-[1.08] text-ink sm:text-5xl md:text-[4rem]">
            Tu clínica deja de perder pacientes por no responder a tiempo.
          </h1>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/60">
            Un asistente por WhatsApp con IA que contesta 24/7, confirma y
            recuerda citas, y reduce las ausencias — configurado en días, no
            en meses.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <WhatsAppButton message="Hola, vi tu web y quiero el asistente para mi clínica">
              Escríbeme por WhatsApp
            </WhatsAppButton>
          </div>
        </Reveal>
      </section>

      {/* 2. EL PROBLEMA */}
      <ProblemSection
        titulo="Cada mensaje sin responder es un paciente que se va a otra clínica."
        bullets={[
          "Llegan consultas por WhatsApp fuera de horario y nadie contesta hasta el día siguiente.",
          "Los pacientes no confirman y las citas se pierden: agenda con huecos y sillas vacías.",
          "Recepción se satura respondiendo siempre lo mismo: precios, horarios, ubicación.",
        ]}
        stat="El 62% de las personas abandona si no le responden rápido. En salud, esa demora se traduce en pacientes y en dinero que no vuelven."
      />

      {/* 3. LA SOLUCION */}
      <SolutionGrid
        titulo="Un asistente que trabaja por tu recepción, 24/7."
        items={[
          {
            icon: Clock,
            t: "Responde al instante",
            d: "Consultas frecuentes: horarios, precios, servicios, ubicación.",
          },
          {
            icon: CalendarCheck,
            t: "Agenda y confirma citas",
            d: "Con recordatorios automáticos que reducen las ausencias.",
          },
          {
            icon: UserCheck,
            t: "Te pasa solo los pacientes listos",
            d: "Ya filtrados, para atender lo que de verdad necesita a un humano.",
          },
        ]}
      >
        <p className="mt-8 text-ink/60">
          No vendemos &quot;un chatbot con IA&quot;. Te devolvemos tiempo de
          recepción y pacientes que hoy se pierden.
        </p>
      </SolutionGrid>

      {/* 5. COMO FUNCIONA */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <Reveal>
          <h2 className="text-2xl font-medium text-ink md:text-3xl">Listo en 3 pasos.</h2>
        </Reveal>
        <ol className="mt-8 space-y-6">
          {[
            {
              t: "Diagnóstico gratis (30 min)",
              d: "Vemos las consultas y ausencias que más te cuestan.",
            },
            {
              t: "Lo configuro en días",
              d: "Entreno el asistente con la info de tu clínica y lo conecto a tu WhatsApp.",
            },
            {
              t: "Empiezas a no perder pacientes",
              d: "Mides la diferencia desde la primera semana.",
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

      {/* 6. PAQUETES */}
      <PricingTiers paquetes={PAQUETES}>
        <WhatsAppButton message="Hola, quiero el paquete Profesional para mi clínica">
          Quiero el Profesional
        </WhatsAppButton>
      </PricingTiers>

      {/* 8. GARANTIA */}
      <GarantiaSection
        condicion="el asistente no te ahorra tiempo ni recupera pacientes"
        notaExtra="Así de seguro estoy de que funciona."
      />

      {/* 9. FAQ */}
      <FAQSection items={FAQS} />

      {/* 10. CTA FINAL */}
      <FinalCTA
        titulo="¿Cuántos pacientes vas a dejar de perder este mes?"
        mensaje="Hola, vi tu web y quiero el asistente para mi clínica"
      />
    </>
  );
}
