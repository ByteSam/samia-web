import type { Metadata } from "next";
import { MessageSquareText, CalendarClock, BookOpenText, Headset, Layers } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Agentes y Chatbots con IA",
  description:
    "Recepcionista IA, agente de reservas, chatbot con base de conocimiento, soporte y suites multicanal — agentes de IA por WhatsApp para tu negocio, en soles.",
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
];

export default function AgentesIAPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-20 text-center md:pt-28">
        <Reveal>
          <span className="chip">Servicio · Agentes IA</span>
          <h1 className="mx-auto mt-6 max-w-3xl text-[2.5rem] font-normal leading-[1.08] text-ink sm:text-5xl md:text-6xl">
            Un agente de IA para cada punto donde hoy pierdes clientes.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/60">
            Desde un recepcionista simple hasta una suite multicanal completa
            — mismo motor, ajustado a lo que tu negocio necesita hoy.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <WhatsAppButton message="Hola, quiero información sobre agentes de IA">
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
            <Reveal key={p.nombre} delay={i * 70}>
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
        <Reveal delay={240}>
          <p className="mt-6 text-sm text-ink/50">
            ¿No sabes cuál te conviene? En el diagnóstico gratis vemos tu caso
            y te recomiendo el punto de partida.
          </p>
        </Reveal>
      </section>
    </>
  );
}
