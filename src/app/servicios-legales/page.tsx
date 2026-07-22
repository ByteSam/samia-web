import type { Metadata } from "next";
import { MessageCircleMore, AlertTriangle, CalendarCheck } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import GarantiaSection from "@/components/GarantiaSection";
import FAQSection from "@/components/FAQSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionGrid from "@/components/SolutionGrid";

export const metadata: Metadata = {
  title: "Asistente de WhatsApp con IA para estudios de abogacía laboral en Perú",
  description:
    "Tu estudio de abogacía laboral atiende consultas automáticamente 24/7, prioriza los casos urgentes y agenda la primera consulta — configurado en días. Diagnóstico gratis.",
  alternates: { canonical: "/servicios-legales" },
};

const FAQS = [
  {
    q: "¿El asistente reemplaza la asesoría legal?",
    a: "No. Solo atiende, filtra y agenda — la asesoría la sigues dando tú.",
  },
  {
    q: "¿Es confidencial la información que comparten mis clientes?",
    a: "Sí: canal oficial, cifrado y control de acceso. No se usa para entrenar modelos.",
  },
  {
    q: "¿Necesito cambiar mi número de WhatsApp?",
    a: "No. Se conecta a tu número actual mediante la API oficial de WhatsApp.",
  },
  {
    q: "¿Cuánto tarda en estar listo?",
    a: "Normalmente pocos días desde que tengo la información de tu estudio.",
  },
];

export default function ServiciosLegalesPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-20 text-center md:pt-28">
        <Reveal>
          <span className="chip">Especializado en derecho laboral</span>
          <h1 className="mx-auto mt-6 max-w-3xl text-[2.5rem] font-normal leading-[1.08] text-ink sm:text-5xl md:text-[4rem]">
            Tu estudio deja de perder consultas laborales por no responder a
            tiempo.
          </h1>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/60">
            Un asistente por WhatsApp con IA que atiende a quien te escribe,
            prioriza los casos urgentes y agenda la primera consulta —
            configurado en días, no en meses.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <WhatsAppButton message="Hola, vi tu web y quiero el asistente para mi estudio de abogacía">
              Escríbeme por WhatsApp
            </WhatsAppButton>
          </div>
        </Reveal>
      </section>

      {/* 2. EL PROBLEMA */}
      <ProblemSection
        titulo="Cada consulta sin responder es un caso que se va a otro estudio."
        bullets={[
          "Consultas por despidos, liquidaciones u hostigamiento llegan a cualquier hora — muchas veces en medio de una crisis, y el trabajador no espera.",
          "Respondes siempre lo mismo (¿cuánto cobran?, ¿qué necesito?) en vez de dedicar ese tiempo a tus casos.",
          "Sin un primer filtro, cuesta distinguir una consulta real de alguien que solo pregunta por curiosidad.",
        ]}
        stat="Responder en menos de 5 minutos multiplica hasta 21 veces las probabilidades de conversión — por WhatsApp, contestar en menos de 1 minuto convierte 8 veces más."
      />

      {/* 3. LA SOLUCION */}
      <SolutionGrid
        titulo="Un asistente que atiende por tu estudio, 24/7."
        items={[
          {
            icon: MessageCircleMore,
            t: "Responde al instante",
            d: "Horarios, tipo de casos que atiendes, cómo funciona la primera consulta.",
          },
          {
            icon: AlertTriangle,
            t: "Prioriza lo urgente",
            d: "Detecta casos con plazos ajustados (ej. un despido reciente) y te avisa de inmediato.",
          },
          {
            icon: CalendarCheck,
            t: "Agenda la primera consulta",
            d: "Coordina la consulta inicial sin ida y vuelta de mensajes.",
          },
        ]}
      >
        <Reveal delay={240}>
          <p className="mt-8 text-ink/60">
            No vendemos &quot;un chatbot con IA&quot;. Te devolvemos tiempo
            para atender casos, no mensajes repetidos.
          </p>
        </Reveal>
      </SolutionGrid>

      {/* 4. CUANTO CUESTA */}
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <Reveal>
          <h2 className="text-2xl font-medium text-ink md:text-3xl">¿Cuánto cuesta?</h2>
          <div className="mt-8 card-soft-tint">
            <p className="text-ink/75">
              Cada estudio necesita una configuración distinta. El precio
              depende de las integraciones, automatizaciones y herramientas
              necesarias.
            </p>
            <p className="mt-4 text-ink/75">
              La mayoría de los proyectos comienzan entre{" "}
              <strong className="font-medium text-ink">S/1,500 y S/5,000</strong>. Después
              del diagnóstico gratuito recibirás una propuesta cerrada y sin
              costos ocultos.
            </p>
            <div className="mt-6">
              <WhatsAppButton message="Hola, quiero solicitar un diagnóstico gratuito para mi estudio de abogacía">
                Solicitar diagnóstico gratuito
              </WhatsAppButton>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 5. GARANTIA */}
      <GarantiaSection condicion="el asistente no te ahorra tiempo ni te ayuda a agendar más consultas" />

      {/* 6. FAQ */}
      <FAQSection items={FAQS} />

      {/* 7. CTA FINAL */}
      <section className="mx-auto max-w-3xl px-6 pb-28 text-center">
        <Reveal>
          <h2 className="text-2xl font-medium text-ink md:text-3xl">
            ¿Cuántas consultas laborales vas a dejar sin responder esta
            semana?
          </h2>
          <p className="mt-3 text-ink/60">
            Diagnóstico gratis de 30 minutos. Sin compromiso.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <WhatsAppButton message="Hola, vi tu web y quiero el asistente para mi estudio de abogacía">
              Escríbeme por WhatsApp
            </WhatsAppButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
