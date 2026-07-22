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
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import GarantiaSection from "@/components/GarantiaSection";
import FAQSection from "@/components/FAQSection";
import CatalogGrid from "@/components/CatalogGrid";
import FinalCTA from "@/components/FinalCTA";

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

const FAQS = [
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
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-20 text-center md:pt-28">
        <Reveal>
          <span className="chip">Servicio · Agentes IA</span>
          <h1 className="mx-auto mt-6 max-w-3xl text-[2.5rem] font-normal leading-[1.08] text-ink sm:text-5xl md:text-[4rem]">
            Un agente de IA para cada punto donde hoy pierdes clientes.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/60">
            Especializado en WhatsApp — no una suite omnicanal genérica.
            Desde un recepcionista simple hasta una suite multicanal
            completa, ajustado a lo que tu negocio necesita hoy.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <WhatsAppButton message="Hola, quiero información sobre agentes de IA">
              Conversar por WhatsApp
            </WhatsAppButton>
          </div>
        </Reveal>
      </section>

      <CatalogGrid items={CATALOGO}>
        <Reveal delay={240}>
          <p className="text-sm text-ink/50">
            ¿No sabes cuál te conviene? En el diagnóstico gratis vemos tu caso
            y te recomiendo el punto de partida.
          </p>
        </Reveal>
      </CatalogGrid>

      <GarantiaSection condicion="el agente no te ahorra tiempo ni recupera clientes" />

      <FAQSection items={FAQS} />

      {/* CTA FINAL */}
      <FinalCTA
        titulo="¿Cuántos clientes se te escapan por no responder a tiempo?"
        mensaje="Hola, quiero información sobre agentes de IA"
        textoBoton="Conversar por WhatsApp"
      />
    </>
  );
}
