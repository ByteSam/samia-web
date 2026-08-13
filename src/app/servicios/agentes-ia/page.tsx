import type { Metadata } from "next";
import {
  MessageSquareText,
  CalendarClock,
  BookOpenText,
  Headset,
  Layers,
  PhoneMissed,
  UserPlus,
  ClipboardList,
  Settings2,
  Plug,
} from "lucide-react";
import Link from "next/link";
import ProyectosRecientes from "@/components/ProyectosRecientes";
import WhatsAppButton from "@/components/WhatsAppButton";
import GarantiaSection from "@/components/GarantiaSection";
import FAQSection from "@/components/FAQSection";
import CatalogGrid from "@/components/CatalogGrid";
import ProblemSection from "@/components/ProblemSection";
import AgentesHeroInboxCompare from "@/components/servicios/AgentesHeroInboxCompare";
import AgentesIACatalogBridge from "@/components/servicios/AgentesIACatalogBridge";
import ImplementacionStepper from "@/components/ImplementacionStepper";

export const metadata: Metadata = {
  title: "Agentes de WhatsApp con IA para negocios en Perú",
  description:
    "Recepcionista IA, agente de reservas, chatbot con base de conocimiento, soporte y suites multicanal — agentes de IA por WhatsApp para tu negocio, en soles.",
  alternates: { canonical: "/servicios/agentes-ia" },
};

const CATALOGO_BASICO = [
  {
    icon: MessageSquareText,
    nombre: "Recepcionista IA WhatsApp",
    entrega: "3-7 días",
    setup: "S/1,500 – 3,500",
    retainer: "S/350 – 800",
    badge: "Punto de partida",
  },
  {
    icon: CalendarClock,
    nombre: "Agente de reservas + recordatorios",
    entrega: "1 semana",
    setup: "S/1,500 – 3,000",
    retainer: "S/300 – 700",
  },
  {
    icon: PhoneMissed,
    nombre: "Missed-call text-back",
    entrega: "1-2 días",
    setup: "S/500 – 1,200",
    retainer: "S/200 – 500",
  },
];

const CATALOGO_AVANZADO = [
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
    icon: UserPlus,
    nombre: "Captación + seguimiento de leads",
    entrega: "3-7 días",
    setup: "S/900 – 2,500",
    retainer: "S/300 – 700",
  },
  {
    icon: Layers,
    nombre: "Suite multicanal",
    entrega: "3-6 semanas",
    setup: "S/9,000 – 20,000",
    retainer: "S/700 – 1,500",
  },
];

const PASOS_IMPLEMENTACION = [
  {
    t: "Diagnóstico",
    d: "Vemos juntos dónde estás perdiendo clientes y qué necesita tu negocio — 30 min por WhatsApp, sin costo.",
    icon: ClipboardList,
  },
  {
    t: "Configuración",
    d: "Entreno el agente con la información real de tu negocio: precios, horarios, servicios, tono.",
    icon: Settings2,
  },
  {
    t: "Implementación",
    d: "Lo conecto a tu WhatsApp y lo probamos juntos antes de que hable con tus clientes.",
    icon: Plug,
  },
  {
    t: "Soporte",
    d: "Ajustes, monitoreo y mejoras continuas — no desaparezco después de la entrega.",
    icon: Headset,
  },
];

const FAQS = [
  {
    q: "¿Cuál agente me conviene?",
    a: "En el diagnóstico gratis vemos tu caso y te recomiendo el punto de partida — casi siempre un Recepcionista IA, y después sumas reservas, RAG u otros módulos si hace falta.",
  },
  {
    q: "¿Puedo ver un ejemplo antes de contratar?",
    a: "Sí — arriba en la página ves cómo responde un agente en WhatsApp, y en el diagnóstico gratuito te muestro un flujo adaptado a tu negocio antes de implementar nada.",
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
      {/* HERO — inbox sin/con agente + mockup integrado */}
      <section className="landing-hero-accent mx-auto max-w-3xl px-6 pb-12 pt-20 md:pb-16 md:pt-28 lg:max-w-5xl">
        <div className="text-center lg:text-left">
          <span className="chip">Servicio · Agentes IA por WhatsApp</span>

          <h1 className="text-h1 mt-6 text-ink">
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
        <CatalogGrid
          titulo="Catálogo de agentes, en soles"
          groups={[
            { label: "Para empezar", items: CATALOGO_BASICO, columns: 3 },
            { label: "Para escalar", items: CATALOGO_AVANZADO, columns: 2 },
          ]}
        >
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
        <ImplementacionStepper pasos={PASOS_IMPLEMENTACION} columns={4} />
      </div>

      <ProyectosRecientes variant="compact" />

      <div className="section-ink">
        <GarantiaSection
          condicion="el agente no te ahorra tiempo ni recupera clientes"
          variant="dark"
          cta={{
            message: "Hola, quiero probar el agente con la garantía de 14 días",
            textoBoton: "Empezar con piloto de 14 días",
            source: "agentes_ia_garantia",
          }}
        />
      </div>

      <FAQSection items={FAQS} />
    </>
  );
}
