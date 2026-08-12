import type { Metadata } from "next";
import {
  MessageSquareText,
  CalendarClock,
  BookOpenText,
  Headset,
  Layers,
  PhoneMissed,
  UserPlus,
} from "lucide-react";
import Link from "next/link";
import ProyectosRecientes from "@/components/ProyectosRecientes";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import GarantiaSection from "@/components/GarantiaSection";
import FAQSection from "@/components/FAQSection";
import CatalogGrid from "@/components/CatalogGrid";
import FinalCTA from "@/components/FinalCTA";
import ProblemSection from "@/components/ProblemSection";
import WhatsAppMockup from "@/components/WhatsAppMockup";
import AgentesHeroInboxCompare from "@/components/servicios/AgentesHeroInboxCompare";
import AgentesIACatalogBridge from "@/components/servicios/AgentesIACatalogBridge";
import { MOCKUP_AGENTES } from "@/lib/nichos/mockups";

export const metadata: Metadata = {
  title: "Agentes de WhatsApp con IA para negocios en Perú",
  description:
    "Recepcionista IA, agente de reservas, chatbot con base de conocimiento, soporte y suites multicanal — agentes de IA por WhatsApp para tu negocio, en soles.",
  alternates: { canonical: "/servicios/agentes-ia" },
};

const CATALOGO = [
  {
    icon: MessageSquareText,
    nombre: "Recepcionista IA WhatsApp",
    entrega: "3-7 días",
    setup: "S/1,500 – 3,500",
    retainer: "S/350 – 800",
  },
  {
    icon: CalendarClock,
    nombre: "Agente de reservas + recordatorios",
    entrega: "1 semana",
    setup: "S/1,500 – 3,000",
    retainer: "S/300 – 700",
  },
  {
    icon: BookOpenText,
    nombre: "Chatbot con base de conocimiento (RAG)",
    entrega: "1-3 semanas",
    setup: "S/2,500 – 7,000",
    retainer: "S/400 – 1,000",
  },
  {
    icon: Headset,
    nombre: "Agente de soporte (web + WhatsApp)",
    entrega: "1-2 semanas",
    setup: "S/3,000 – 9,000",
    retainer: "S/400 – 1,200",
  },
  {
    icon: Layers,
    nombre: "Suite multicanal",
    entrega: "3-6 semanas",
    setup: "S/9,000 – 20,000",
    retainer: "S/700 – 1,500",
  },
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
];

const PASOS = [
  {
    t: "Diagnóstico",
    d: "Vemos juntos dónde estás perdiendo clientes y qué necesita tu negocio — 30 min por WhatsApp, sin costo.",
  },
  {
    t: "Configuración",
    d: "Entreno el agente con la información real de tu negocio: precios, horarios, servicios, tono.",
  },
  {
    t: "Implementación",
    d: "Lo conecto a tu WhatsApp y lo probamos juntos antes de que hable con tus clientes.",
  },
  {
    t: "Soporte",
    d: "Ajustes, monitoreo y mejoras continuas — no desaparezco después de la entrega.",
  },
];

const FAQS = [
  {
    q: "¿Cuál agente me conviene?",
    a: "En el diagnóstico gratis vemos tu caso y te recomiendo el punto de partida — casi siempre un Recepcionista IA, y después sumas reservas, RAG u otros módulos si hace falta.",
  },
  {
    q: "¿El agente reemplaza mi atención al cliente?",
    a: "No. Filtra lo repetitivo y te pasa solo las conversaciones que de verdad necesitan a una persona.",
  },
  {
    q: "¿Cuánto tarda en estar listo?",
    a: "Normalmente pocos días desde que tengo la información de tu negocio.",
  },
  {
    q: "¿Necesito cambiar mi número de WhatsApp?",
    a: "No. Se conecta a tu número actual mediante la API oficial de WhatsApp.",
  },
  {
    q: "¿Puedo empezar simple e ir sumando funciones?",
    a: "Sí — la mayoría empieza con un Recepcionista IA y va agregando agenda, calificación de leads u otros módulos después.",
  },
];

export default function AgentesIAPage() {
  return (
    <>
      {/* HERO — Opción B: inbox sin/con agente */}
      <section className="landing-hero-accent mx-auto max-w-3xl px-6 pb-12 pt-20 md:pb-16 md:pt-28 lg:max-w-4xl">
        <div className="text-center lg:text-left">
          <span className="chip">Servicio · Agentes IA por WhatsApp</span>

          <h1 className="text-h1 mt-6 text-[2.5rem] text-ink sm:text-5xl md:text-[3.5rem]">
            Menos consultas{" "}
            <span className="font-display italic text-terracota">perdidas</span>, más clientes
            atendidos.
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-ink/60">
            Un agente responde en tu WhatsApp al instante — sin que tengas que estar pegado al
            teléfono.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 lg:items-start">
            <WhatsAppButton
              message="Hola, quiero ver qué agente de IA me conviene para mi negocio"
              source="agentes_ia_hero"
            >
              Quiero ver qué agente me conviene
            </WhatsAppButton>
            <p className="text-sm text-ink/50">
              Desde S/500 · Diagnóstico gratis · Hablarás directamente conmigo
            </p>
          </div>

          <AgentesHeroInboxCompare />
        </div>
      </section>

      {/* Mockup — una sola instancia, debajo del hero */}
      <section className="mx-auto max-w-sm px-6 pb-14 md:pb-20">
        <div className="mockup-frame">
          <WhatsAppMockup
            titulo={MOCKUP_AGENTES.titulo}
            subtitulo={MOCKUP_AGENTES.subtitulo}
            mensajes={MOCKUP_AGENTES.mensajes}
          />
        </div>
        <p className="mt-3 text-center text-xs text-ink/45">
          Así responde el agente en tu WhatsApp — sin que tengas que estar pegado al teléfono.
        </p>
      </section>

      {/* PROBLEMA */}
      <div className="section-band">
        <ProblemSection
          variant="band"
          titulo="Cada minuto sin responder es un cliente que se va con otro negocio."
          bullets={[
            "Las consultas llegan a toda hora — fuera de tu horario, en fin de semana, mientras atiendes a alguien más — y quedan sin responder.",
            "Respondes siempre lo mismo: horarios, precios, disponibilidad — tiempo que no dedicas a lo que sí requiere tu criterio.",
            "Sin un filtro, no distingues una consulta real de una que solo pregunta por curiosidad — y las urgencias se mezclan con el resto.",
          ]}
          stat="La mayoría de las personas abandona si no le responden rápido — y cada canal nuevo (web, redes, WhatsApp) es una fuente más de mensajes sin responder."
        />
      </div>

      {/* FIRMA — por dónde empezar */}
      <AgentesIACatalogBridge />

      {/* CATÁLOGO */}
      <div className="section-band border-t border-ink/6">
        <CatalogGrid items={CATALOGO} titulo="Catálogo de agentes, en soles">
          <p className="text-sm text-ink/50">
            ¿No sabes cuál te conviene? En el diagnóstico gratis vemos tu caso y te recomiendo
            el punto de partida. Para avisos, CRM o integraciones sin chatbot, revisa{" "}
            <Link
              href="/servicios/automatizacion"
              className="text-terracota-dark underline-offset-2 hover:underline"
            >
              Automatización
            </Link>
            .
          </p>
        </CatalogGrid>
      </div>

      {/* CÓMO TRABAJAMOS */}
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

      <ProyectosRecientes variant="compact" />

      <div className="section-ink">
        <GarantiaSection condicion="el agente no te ahorra tiempo ni recupera clientes" variant="dark" />
      </div>

      <FAQSection items={FAQS} />

      <FinalCTA
        titulo="¿Cuántos clientes se te escapan por no responder a tiempo?"
        mensaje="Hola, quiero ver qué agente de IA me conviene para mi negocio"
        textoBoton="Quiero ver qué agente me conviene"
      />
    </>
  );
}
