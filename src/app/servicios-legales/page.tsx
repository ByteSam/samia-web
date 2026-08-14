import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageCircleMore,
  AlertTriangle,
  CalendarCheck,
  CalendarClock,
  Workflow,
  Layers,
  Shield,
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
import WhatsAppMockup from "@/components/WhatsAppMockup";
import LegalLimitsBlock from "@/components/nichos/LegalLimitsBlock";
import LegalesHeroConsultaCompare from "@/components/nichos/LegalesHeroConsultaCompare";
import ImplementacionStepper from "@/components/ImplementacionStepper";
import SolutionSection from "@/components/SolutionSection";
import { MOCKUP_LEGAL } from "@/lib/nichos/mockups";

export const metadata: Metadata = {
  title: "Asistente de WhatsApp con IA para estudios de abogacía laboral en Perú",
  description:
    "Asistente por WhatsApp para estudios de abogacía laboral: atiende consultas, prioriza lo urgente y agenda la primera cita. Configurado en días. Diagnóstico gratis de 30 minutos.",
  alternates: { canonical: "/servicios-legales" },
};

const FACTORES_PRECIO = [
  {
    icon: MessageCircleMore,
    titulo: "Solo FAQ",
    descripcion: "Respuestas frecuentes y clasificación básica de consultas.",
  },
  {
    icon: CalendarClock,
    titulo: "FAQ + agenda",
    descripcion: "Agenda la primera consulta sin ida y vuelta de mensajes.",
  },
  {
    icon: Workflow,
    titulo: "Integraciones",
    descripcion: "Conexión con agenda, CRM o formularios que ya uses.",
  },
];

const SOLUCION_ITEMS = [
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
];

const PASOS_IMPLEMENTACION = [
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
    q: "¿Puedo ver un ejemplo de cómo responde antes de contratar?",
    a: "Sí — en el hero y en la comparación de esta página ves un ejemplo de primer contacto, y en el diagnóstico gratuito adaptamos el flujo a tu estudio antes de implementar nada.",
  },
  {
    q: "¿El asistente interpreta el caso o da orientación legal?",
    a: "No. Clasifica y deriva según la información que configures (tipo de consulta, urgencia aparente, datos para agendar). La asesoría la das tú o tu equipo.",
  },
  {
    q: "¿Funciona para estudios con más de un abogado?",
    a: "Sí — el asistente atiende el primer contacto y deriva según las reglas que configures. Lo ajustamos en el diagnóstico según cómo opera tu estudio.",
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
      {/* HERO — texto + mockup integrado */}
      <section className="landing-hero-accent mx-auto max-w-6xl px-6 pb-12 pt-20 md:pb-16 md:pt-28">
        <div className="grid gap-12 lg:grid-cols-[5fr_4fr] lg:items-center">
          <div className="text-center lg:text-left">
            <span className="chip">Especializado en derecho laboral</span>

            <h1 className="text-h1 text-balance mt-6 text-ink">
              Organiza el primer contacto de tu estudio{" "}
              <span className="font-display italic text-terracota">sin dar asesoría automática</span>.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-ink/60">
              Un asistente por WhatsApp que responde lo frecuente, te avisa cuando algo suena
              urgente y agenda la primera consulta — la asesoría legal sigue siendo tuya.
            </p>

            <div className="mt-10 flex flex-col items-center gap-3 lg:items-start">
              <WhatsAppButton
                message="Hola, vi tu web y quiero solicitar un diagnóstico para mi estudio de abogacía"
                source="servicios_legales_hero"
              >
                Solicitar diagnóstico para mi estudio
              </WhatsAppButton>
              <p className="text-sm text-ink/55">
                30 min sin costo · Hablarás directamente conmigo
              </p>
              <div className="mt-1 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-ink/50 lg:justify-start">
                <span className="flex items-center gap-1.5">
                  <Shield className="h-3.5 w-3.5 text-terracota" strokeWidth={1.75} aria-hidden />
                  API oficial de WhatsApp
                </span>
                <span className="flex items-center gap-1.5">
                  <Shield className="h-3.5 w-3.5 text-terracota" strokeWidth={1.75} aria-hidden />
                  Sin asesoría automática
                </span>
              </div>
            </div>
          </div>

          <Reveal delay={120} className="hidden lg:flex lg:justify-end">
            <div>
              <WhatsAppMockup
                framed
                titulo={MOCKUP_LEGAL.titulo}
                subtitulo={MOCKUP_LEGAL.subtitulo}
                mensajes={MOCKUP_LEGAL.mensajes}
              />
              <p className="mt-3 text-center text-xs text-ink/45">
                Ejemplo de primer contacto (sin consejo legal automático)
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-10 flex flex-col items-center lg:hidden">
          <p className="mb-4 text-center text-xs text-ink/45">
            Ejemplo de primer contacto (sin consejo legal automático)
          </p>
          <WhatsAppMockup
            compact
            titulo={MOCKUP_LEGAL.titulo}
            subtitulo={MOCKUP_LEGAL.subtitulo}
            mensajes={MOCKUP_LEGAL.mensajes}
          />
        </Reveal>
      </section>

      {/* PROBLEMA */}
      <div className="section-band">
        <ProblemSection
          variant="band"
          titulo="Cada consulta sin responder es un caso que se va a otro estudio."
          bullets={[
            "Consultas por despidos, liquidaciones u hostigamiento llegan a cualquier hora — muchas veces en medio de una crisis, y el trabajador no espera.",
            "Respondes siempre lo mismo (¿cuánto cobran?, ¿qué necesito?) en vez de dedicar ese tiempo a tus casos.",
            "Sin un primer filtro, cuesta distinguir una consulta real de alguien que solo pregunta por curiosidad.",
          ]}
          stat="Responder rápido aumenta las posibilidades de que esa consulta se convierta en cliente — mientras más tardas, más probable es que esa persona ya haya escrito a otro estudio."
        />
      </div>

      {/* COMPARACIÓN — sin vs con asistente */}
      <section className="mx-auto max-w-5xl px-6 section-py">
        <Reveal>
          <span className="chip">La misma consulta, dos resultados</span>
          <h2 className="text-h2 mt-4 text-ink">Sin responder vs. filtrar y agendar</h2>
          <p className="mt-3 max-w-lg text-ink/60">
            La consulta llega igual. La diferencia está en si alguien la atiende a tiempo — sin
            dar consejo legal automático.
          </p>
        </Reveal>
        <Reveal delay={80} className="mt-10">
          <LegalesHeroConsultaCompare />
        </Reveal>
      </section>

      {/* FIRMA — confianza antes de solución */}
      <LegalLimitsBlock />

      <SolutionSection
        titulo="Tu estudio deja de perderse en mensajes repetidos."
        subtitulo="Filtra, avisa y agenda — sin reemplazar tu criterio legal."
        items={SOLUCION_ITEMS}
      />

      {/* PRECIO */}
      <section className="section-band section-py">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <span className="chip">Precio según complejidad del estudio</span>
            <h2 className="text-h2 mt-4 text-ink">Inversión según tu estudio</h2>
            <div className="card-soft-tint mt-8 bg-white/80 p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-2xl font-medium text-ink">S/1,500 – S/5,000</p>
                  <p className="text-xs text-ink/50">Rango de referencia · setup</p>
                </div>
                <span className="chip text-[0.65rem]">Propuesta cerrada en diagnóstico</span>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {FACTORES_PRECIO.map((f) => (
                  <div
                    key={f.titulo}
                    className="rounded-xl border border-ink/8 bg-white px-3 py-4 shadow-sm"
                  >
                    <f.icon className="h-5 w-5 text-terracota" strokeWidth={1.5} />
                    <p className="mt-2 text-sm font-medium text-ink">{f.titulo}</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">{f.descripcion}</p>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm text-ink/60">
                Después del diagnóstico gratuito recibirás una propuesta cerrada y sin costos
                ocultos.
              </p>
              <div className="mt-6">
                <WhatsAppButton
                  message="Hola, quiero solicitar un diagnóstico gratuito para mi estudio de abogacía"
                  source="servicios_legales_precio"
                >
                  Solicitar diagnóstico gratuito
                </WhatsAppButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* IMPLEMENTACIÓN */}
      <ImplementacionStepper titulo="Cómo lo implementamos" pasos={PASOS_IMPLEMENTACION} columns={4} />

      {/* ESCALERA — qué servicio base incluye esto */}
      <section className="container-prose section-py">
        <Reveal>
          <div className="card-soft-tint p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <Layers className="mt-0.5 h-5 w-5 shrink-0 text-terracota" strokeWidth={1.75} />
              <div>
                <p className="text-sm font-medium text-ink">Qué hay detrás de esta solución</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  Esta solución combina{" "}
                  <Link
                    href="/servicios/agentes-ia"
                    className="font-medium text-terracota-dark underline-offset-2 hover:underline"
                  >
                    Agentes IA por WhatsApp
                  </Link>{" "}
                  para atender y clasificar consultas, y puede complementarse con{" "}
                  <Link
                    href="/servicios/desarrollo-web"
                    className="font-medium text-terracota-dark underline-offset-2 hover:underline"
                  >
                    Desarrollo web
                  </Link>{" "}
                  si tu estudio también necesita presencia profesional en línea.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <div className="section-ink">
        <GarantiaSection
          condicion="el asistente no te ahorra tiempo ni te ayuda a agendar más consultas"
          variant="dark"
          cta={{
            message: "Hola, quiero solicitar un diagnóstico con la garantía de 14 días para mi estudio",
            textoBoton: "Empezar con piloto de 14 días",
            source: "servicios_legales_garantia",
          }}
        />
      </div>

      <FAQSection items={FAQS} />
    </>
  );
}
