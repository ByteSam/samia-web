import type { Metadata } from "next";
import { MessageCircleMore, AlertTriangle, CalendarCheck, Check } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import GarantiaSection from "@/components/GarantiaSection";
import FAQSection from "@/components/FAQSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionGrid from "@/components/SolutionGrid";
import FinalCTA from "@/components/FinalCTA";

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
        <span className="chip">Especializado en derecho laboral</span>
        <h1 className="text-h1 mx-auto mt-6 max-w-3xl text-[2.5rem] text-ink sm:text-5xl md:text-[4rem]">
          Tu estudio deja de perder consultas laborales por no responder a
          tiempo.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/60">
          Un asistente por WhatsApp con IA que atiende a quien te escribe,
          prioriza los casos urgentes y agenda la primera consulta —
          configurado en días, no en meses.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <WhatsAppButton message="Hola, vi tu web y quiero el asistente para mi estudio de abogacía">
            Escríbeme por WhatsApp
          </WhatsAppButton>
        </div>
      </section>

      {/* 2. EL PROBLEMA */}
      <ProblemSection
        titulo="Cada consulta sin responder es un caso que se va a otro estudio."
        bullets={[
          "Consultas por despidos, liquidaciones u hostigamiento llegan a cualquier hora — muchas veces en medio de una crisis, y el trabajador no espera.",
          "Respondes siempre lo mismo (¿cuánto cobran?, ¿qué necesito?) en vez de dedicar ese tiempo a tus casos.",
          "Sin un primer filtro, cuesta distinguir una consulta real de alguien que solo pregunta por curiosidad.",
        ]}
        stat="Responder rápido aumenta las posibilidades de que esa consulta se convierta en cliente — mientras más tardas, más probable es que esa persona ya haya escrito a otro estudio."
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
          <h2 className="text-h2 text-ink">¿Cuánto cuesta?</h2>
          <div className="mt-8 card-soft-tint">
            <p className="text-2xl font-medium text-ink">S/1,500 – S/5,000</p>
            <p className="text-xs text-ink/50">
              Rango de referencia.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-ink/70">
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-terracota" strokeWidth={1.75} />
                El precio depende de las integraciones que necesites
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-terracota" strokeWidth={1.75} />
                También de las automatizaciones que quieras sumar
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-terracota" strokeWidth={1.75} />
                Y de las herramientas que ya usa tu estudio
              </li>
            </ul>
            <p className="mt-5 text-sm text-ink/60">
              Después del diagnóstico gratuito recibirás una propuesta cerrada
              y sin costos ocultos.
            </p>
            <div className="mt-6">
              <WhatsAppButton message="Hola, quiero solicitar un diagnóstico gratuito para mi estudio de abogacía">
                Solicitar diagnóstico gratuito
              </WhatsAppButton>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 5. COMO TRABAJAMOS */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <Reveal>
          <h2 className="text-h2 text-ink">Cómo trabajamos</h2>
        </Reveal>
        <ol className="mt-8 space-y-6">
          {[
            {
              t: "Diagnóstico",
              d: "Vemos qué tipo de consultas recibes y qué necesita tu estudio — 30 min por WhatsApp, sin costo.",
            },
            {
              t: "Configuración",
              d: "Entreno el asistente con la información real de tu estudio, para que responda igual que tú lo harías.",
            },
            {
              t: "Implementación",
              d: "Lo conecto a tu WhatsApp y lo probamos juntos antes de que hable con quienes te escriben.",
            },
            {
              t: "Soporte",
              d: "Ajustes y acompañamiento continuo — no desaparezco después de la entrega.",
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

      {/* 6. GARANTIA */}
      <GarantiaSection
        condicion="el asistente no te ahorra tiempo ni te ayuda a agendar más consultas"
        notaExtra="Así de seguro estoy de que funciona."
      />

      {/* 7. FAQ */}
      <FAQSection items={FAQS} />

      {/* 8. CTA FINAL */}
      <FinalCTA
        titulo="¿Cuántas consultas laborales vas a dejar sin responder esta semana?"
        mensaje="Hola, vi tu web y quiero el asistente para mi estudio de abogacía"
      />
    </>
  );
}
