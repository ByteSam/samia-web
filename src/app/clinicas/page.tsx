import type { Metadata } from "next";
import { Check, Clock, CalendarCheck, UserCheck } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import GarantiaSection from "@/components/GarantiaSection";
import FAQSection from "@/components/FAQSection";

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
          <h1 className="text-[2.5rem] font-normal leading-[1.08] text-ink sm:text-5xl md:text-6xl">
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
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <Reveal>
          <div className="card-soft">
            <h2 className="text-2xl font-normal text-ink md:text-3xl">
              Cada mensaje sin responder es un paciente que se va a otra
              clínica.
            </h2>
            <ul className="mt-6 space-y-3 text-ink/65">
              <li>
                • Llegan consultas por WhatsApp fuera de horario y nadie
                contesta hasta el día siguiente.
              </li>
              <li>
                • Los pacientes no confirman y las citas se pierden: agenda
                con huecos y sillas vacías.
              </li>
              <li>
                • Recepción se satura respondiendo siempre lo mismo: precios,
                horarios, ubicación.
              </li>
            </ul>
            <p className="mt-6 text-sm text-ink/50">
              El 62% de las personas abandona si no le responden rápido. En
              salud, esa demora se traduce en pacientes y en dinero que no
              vuelven.
            </p>
          </div>
        </Reveal>
      </section>

      {/* 3. LA SOLUCION */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <Reveal>
          <h2 className="text-2xl font-normal text-ink md:text-3xl">
            Un asistente que trabaja por tu recepción, 24/7.
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
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
          ].map((item, i) => (
            <Reveal key={item.t} delay={i * 80}>
              <div className="card-soft hover-lift h-full">
                <item.icon className="h-6 w-6 text-terracota" strokeWidth={1.5} />
                <p className="mt-4 font-medium text-ink">{item.t}</p>
                <p className="mt-2 text-sm text-ink/60">{item.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-ink/60">
          No vendemos &quot;un chatbot con IA&quot;. Te devolvemos tiempo de
          recepción y pacientes que hoy se pierden.
        </p>
      </section>

      {/* 5. COMO FUNCIONA */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <Reveal>
          <h2 className="text-2xl font-normal text-ink md:text-3xl">Listo en 3 pasos.</h2>
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
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <Reveal>
          <h2 className="text-2xl font-normal text-ink md:text-3xl">
            Precios claros. Sin sorpresas.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PAQUETES.map((p, i) => (
            <Reveal key={p.nombre} delay={i * 80}>
              <div className={`h-full ${p.destacado ? "card-soft-tint" : "card-soft"}`}>
                {p.destacado && <span className="chip mb-3">El más elegido</span>}
                <h3 className="text-lg font-medium text-ink">{p.nombre}</h3>
                <p className="mt-3 text-2xl font-medium text-ink">{p.setup}</p>
                <p className="text-xs text-ink/50">Configuración</p>
                <p className="mt-1 text-lg font-medium text-dorado">{p.mensualidad}/mes</p>
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
        <div className="mt-8 text-center">
          <WhatsAppButton message="Hola, quiero el paquete Profesional para mi clínica">
            Quiero el Profesional
          </WhatsAppButton>
        </div>
      </section>

      {/* 8. GARANTIA */}
      <GarantiaSection
        condicion="el asistente no te ahorra tiempo ni recupera pacientes"
        notaExtra="Así de seguro estoy de que funciona."
      />

      {/* 9. FAQ */}
      <FAQSection items={FAQS} />

      {/* 10. CTA FINAL */}
      <section className="mx-auto max-w-3xl px-6 pb-28 text-center">
        <Reveal>
          <h2 className="text-2xl font-normal text-ink md:text-3xl">
            ¿Cuántos pacientes vas a dejar de perder este mes?
          </h2>
          <p className="mt-3 text-ink/60">
            Diagnóstico gratis de 30 minutos. Sin compromiso.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <WhatsAppButton message="Hola, vi tu web y quiero el asistente para mi clínica">
              Escríbeme por WhatsApp
            </WhatsAppButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
