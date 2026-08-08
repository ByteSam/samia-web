import type { Metadata } from "next";
import {
  MessageCircleMore,
  AlertTriangle,
  CalendarCheck,
  Check,
  ClipboardList,
  Settings2,
  PackageCheck,
  Headset,
} from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import GarantiaSection from "@/components/GarantiaSection";
import FAQSection from "@/components/FAQSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionGrid from "@/components/SolutionGrid";
import FinalCTA from "@/components/FinalCTA";
import WhatsAppMockup from "@/components/WhatsAppMockup";
import LegalLimitsBlock from "@/components/nichos/LegalLimitsBlock";
import { MOCKUP_LEGAL } from "@/lib/nichos/mockups";

export const metadata: Metadata = {
  title: "Asistente de WhatsApp con IA para estudios de abogacía laboral en Perú",
  description:
    "Asistente por WhatsApp para estudios de abogacía laboral: atiende consultas, prioriza lo urgente y agenda la primera cita. Configurado en días. Diagnóstico gratis de 30 minutos.",
  alternates: { canonical: "/servicios-legales" },
};

const PASOS = [
  {
    t: "Diagnóstico",
    d: "Vemos qué tipo de consultas recibes y qué necesita tu estudio — 30 min por WhatsApp, sin costo.",
    icon: ClipboardList,
  },
  {
    t: "Configuración",
    d: "Configuro el asistente con la información real de tu estudio, para que responda con tu tono y tus datos — sin inventar respuestas legales.",
    icon: Settings2,
  },
  {
    t: "Implementación",
    d: "Lo conecto a tu WhatsApp y lo probamos juntos antes de que hable con quienes te escriben.",
    icon: PackageCheck,
  },
  {
    t: "Soporte",
    d: "Ajustes y acompañamiento continuo — no desaparezco después de la entrega.",
    icon: Headset,
  },
];

const FAQS = [
  {
    q: "¿El asistente reemplaza la asesoría legal?",
    a: "No. Solo atiende, filtra y agenda — la asesoría la sigues dando tú.",
  },
  {
    q: "¿El asistente interpreta el caso o da orientación legal?",
    a: "No. Clasifica y deriva según la información que configures (tipo de consulta, urgencia aparente, datos para agendar). La asesoría la das tú o tu equipo.",
  },
  {
    q: "¿Es confidencial la información que comparten mis clientes?",
    a: "Uso el canal oficial de WhatsApp, con acceso restringido. La información de tus clientes no se usa para entrenar modelos de terceros.",
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
      {/* 1. HERO — sobrio, sin mockup dominante */}
      <section className="mx-auto max-w-3xl px-6 pb-10 pt-20 text-center md:pt-28 md:pb-14">
        <span className="chip">Especializado en derecho laboral</span>

        <h1 className="text-h1 mt-6 text-[2.25rem] text-ink sm:text-4xl md:text-[3.25rem]">
          Organiza el primer contacto de tu estudio{" "}
          <span className="font-display italic text-terracota">sin dar asesoría automática</span>.
        </h1>
        <p className="mt-6 text-lg text-ink/60">
          Un asistente por WhatsApp que responde lo frecuente, te avisa cuando algo suena
          urgente y agenda la primera consulta — la asesoría legal sigue siendo tuya.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3">
          <WhatsAppButton
            message="Hola, vi tu web y quiero solicitar un diagnóstico para mi estudio de abogacía"
            source="servicios_legales_hero"
          >
            Solicitar diagnóstico para mi estudio
          </WhatsAppButton>
          <p className="text-sm text-ink/55">
            30 min sin costo · Hablarás directamente conmigo
          </p>
        </div>
      </section>

      {/* Mockup secundario — contexto, no protagonista */}
      <section className="section-band py-10 md:py-12">
        <div className="mx-auto max-w-sm px-6">
          <Reveal>
            <p className="mb-6 text-center text-sm font-medium text-ink/50">
              Ejemplo de primer contacto (sin consejo legal automático)
            </p>
            <WhatsAppMockup
              titulo={MOCKUP_LEGAL.titulo}
              subtitulo={MOCKUP_LEGAL.subtitulo}
              mensajes={MOCKUP_LEGAL.mensajes}
            />
          </Reveal>
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

      {/* 3. FIRMA — confianza antes de solución genérica */}
      <LegalLimitsBlock />

      {/* 4. LA SOLUCION */}
      <SolutionGrid
        titulo="Tu estudio deja de perderse en mensajes repetidos."
        items={[
          {
            icon: MessageCircleMore,
            t: "Responde al instante",
            d: "Horarios, tipo de casos que atiendes, cómo funciona la primera consulta.",
          },
          {
            icon: AlertTriangle,
            t: "Te avisa cuando suena urgente",
            d: "Si alguien menciona despido reciente, plazos o una situación sensible, te notifica para que revises el caso — sin dar consejo legal automático.",
          },
          {
            icon: CalendarCheck,
            t: "Agenda la primera consulta",
            d: "Coordina la consulta inicial sin ida y vuelta de mensajes.",
          },
        ]}
      />

      {/* 5. PRECIO */}
      <section className="section-band py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <h2 className="text-h2 text-ink">Precio según tu estudio</h2>
            <div className="mt-8 card-soft bg-white">
              <p className="text-2xl font-medium text-ink">S/1,500 – S/5,000</p>
              <p className="text-xs text-ink/50">Rango de referencia.</p>
              <ul className="mt-5 space-y-2 text-sm text-ink/70">
                <li className="flex items-start gap-2">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-terracota"
                    strokeWidth={1.75}
                  />
                  Complejidad del flujo (solo FAQ, agenda, integraciones)
                </li>
                <li className="flex items-start gap-2">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-terracota"
                    strokeWidth={1.75}
                  />
                  Herramientas que ya usas (agenda, CRM, formularios)
                </li>
                <li className="flex items-start gap-2">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-terracota"
                    strokeWidth={1.75}
                  />
                  Automatizaciones adicionales que quieras sumar después
                </li>
              </ul>
              <p className="mt-5 text-sm text-ink/60">
                Después del diagnóstico gratuito recibirás una propuesta cerrada y sin
                costos ocultos.
              </p>
              <div className="mt-6">
                <WhatsAppButton
                  message="Hola, quiero solicitar un diagnóstico gratuito para mi estudio de abogacía"
                >
                  Solicitar diagnóstico gratuito
                </WhatsAppButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. COMO LO IMPLEMENTAMOS */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <Reveal>
          <h2 className="text-h2 text-ink">Cómo lo implementamos</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PASOS.map((step, i) => (
            <Reveal key={step.t} delay={i * 80}>
              <div className="card-soft h-full">
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

      <GarantiaSection
        condicion="el asistente no te ahorra tiempo ni te ayuda a agendar más consultas"
        notaExtra="Lo pruebas en tu estudio antes de comprometerte con la configuración."
      />

      <FAQSection items={FAQS} />

      <FinalCTA
        titulo="¿Cuántas consultas por WhatsApp llegan fuera de horario en tu estudio cada semana?"
        mensaje="Hola, quiero solicitar un diagnóstico para mi estudio de abogacía"
        textoBoton="Solicitar diagnóstico para mi estudio"
      />
    </>
  );
}
