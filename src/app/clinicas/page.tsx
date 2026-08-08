import type { Metadata } from "next";
import {
  Clock,
  CalendarCheck,
  UserCheck,
  ClipboardList,
  Settings2,
  PackageCheck,
} from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import GarantiaSection from "@/components/GarantiaSection";
import FAQSection from "@/components/FAQSection";
import PricingTiers from "@/components/PricingTiers";
import ProblemSection from "@/components/ProblemSection";
import FinalCTA from "@/components/FinalCTA";
import WhatsAppMockup from "@/components/WhatsAppMockup";
import ClinicasAusenciasBlock from "@/components/nichos/ClinicasAusenciasBlock";
import ClinicasHeroAgendaCompare from "@/components/nichos/ClinicasHeroAgendaCompare";
import { MOCKUP_CLINICA } from "@/lib/nichos/mockups";

export const metadata: Metadata = {
  title: "Asistente de WhatsApp con IA para clínicas en Perú",
  description:
    "Asistente por WhatsApp para clínicas: responde consultas, agenda citas y manda recordatorios. Configurado en días. Diagnóstico gratis de 30 minutos.",
  alternates: { canonical: "/clinicas" },
};

const PAQUETES = [
  {
    nombre: "Esencial",
    setup: "S/1,500",
    mensualidad: "S/350",
    features: [
      "Respuesta automática a consultas frecuentes (horarios, precios, servicios)",
      "Derivación a recepción cuando hace falta una persona",
    ],
  },
  {
    nombre: "Profesional",
    destacado: true,
    setup: "S/2,500",
    mensualidad: "S/550",
    features: [
      "Todo lo del Esencial",
      "Agenda de citas + recordatorios por WhatsApp",
      "Filtrado de consultas antes de pasar a recepción",
    ],
  },
  {
    nombre: "Integral",
    setup: "S/3,500",
    mensualidad: "S/800",
    features: [
      "Todo lo del Profesional",
      "Integración con tu agenda o sistema (según diagnóstico)",
      "Reportes básicos de consultas y citas",
    ],
  },
];

const PASOS = [
  {
    t: "Diagnóstico gratis",
    d: "30 min para ver consultas repetidas y citas que se caen.",
    icon: ClipboardList,
  },
  {
    t: "Configuración",
    d: "Horarios, servicios y reglas de recordatorio en tu WhatsApp.",
    icon: Settings2,
  },
  {
    t: "Primeras semanas",
    d: "Ves menos huecos en agenda y medimos la diferencia.",
    icon: PackageCheck,
  },
];

const FAQS = [
  {
    q: "¿Los recordatorios reducen ausencias de verdad?",
    a: "Ayudan a que el paciente confirme o cancele antes del turno — menos sillas vacías y menos tiempo de recepción persiguiendo confirmaciones.",
  },
  {
    q: "¿Necesito cambiar mi número de WhatsApp?",
    a: "No. Se conecta a tu número actual mediante la API oficial de WhatsApp.",
  },
  {
    q: "¿Y si ya uso otro sistema de citas?",
    a: "Depende de la agenda o sistema que uses hoy. Lo revisamos en el diagnóstico y te digo qué se puede conectar sin prometer integraciones que no hemos validado.",
  },
  {
    q: "¿El asistente reemplaza a mi recepción?",
    a: "No. La libera de lo repetitivo y le pasa solo lo que necesita atención humana.",
  },
  {
    q: "¿El asistente da diagnósticos o recomienda tratamientos?",
    a: "No. Responde información de tu clínica (horarios, servicios, citas) y deriva a tu equipo cuando hace falta una persona.",
  },
  {
    q: "¿Los datos de mis pacientes están seguros?",
    a: "Uso el canal oficial de WhatsApp, con acceso restringido. Los datos de tus pacientes no se usan para entrenar modelos de terceros.",
  },
];

export default function ClinicasPage() {
  return (
    <>
      {/* HERO — Opción B: comparación agenda protagonista */}
      <section className="landing-hero-accent mx-auto max-w-3xl px-6 pb-12 pt-20 md:pb-16 md:pt-28 lg:max-w-4xl">
        <div className="text-center lg:text-left">
          <span className="chip">Clínicas · citas por WhatsApp</span>

          <h1 className="text-h1 mt-6 text-[2.5rem] text-ink sm:text-5xl md:text-[3.5rem]">
            Menos{" "}
            <span className="font-display italic text-terracota">ausencias</span>, agenda más
            llena.
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-ink/60">
            Recordatorios por WhatsApp que confirman el turno — sin saturar recepción.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 lg:items-start">
            <WhatsAppButton
              message="Hola, vi tu web y quiero reducir las ausencias en mi clínica"
              source="clinicas_hero"
            >
              Quiero reducir ausencias
            </WhatsAppButton>
            <p className="text-sm text-ink/50">
              Desde S/1,500 · Diagnóstico gratis · Hablarás directamente conmigo
            </p>
          </div>

          <ClinicasHeroAgendaCompare />
        </div>
      </section>

      {/* Mockup — una sola instancia, debajo del hero */}
      <section className="mx-auto max-w-sm px-6 pb-14 md:pb-20">
        <div className="mockup-frame">
          <WhatsAppMockup
            titulo={MOCKUP_CLINICA.titulo}
            subtitulo={MOCKUP_CLINICA.subtitulo}
            mensajes={MOCKUP_CLINICA.mensajes}
          />
        </div>
        <p className="mt-3 text-center text-xs text-ink/45">
          Así se agenda la cita — el recordatorio y la confirmación van solos.
        </p>
      </section>

      {/* PROBLEMA */}
      <div className="section-band">
        <ProblemSection
          variant="band"
          titulo="En salud, una cita sin confirmar suele convertirse en una silla vacía."
          bullets={[
            "Consultas por WhatsApp fuera de horario que nadie contesta hasta el día siguiente.",
            "Pacientes que no confirman: la agenda queda con huecos a último momento.",
            "Recepción persiguiendo confirmaciones en vez de atender quien ya está en clínica.",
          ]}
          stat="Responder rápido ayuda a captar el paciente; confirmar la cita ayuda a que realmente llegue."
        />
      </div>

      {/* FIRMA — fondo blanco para contraste */}
      <ClinicasAusenciasBlock />

      {/* SOLUCIÓN */}
      <div className="section-band border-t border-ink/6">
        <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <Reveal>
            <p className="section-eyebrow">La solución</p>
            <h2 className="text-h2 mt-2 text-ink">Recepción libre de lo repetitivo</h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {[
                {
                  icon: Clock,
                  t: "Consultas frecuentes",
                  d: "Horarios, precios, servicios y ubicación — al instante.",
                },
                {
                  icon: CalendarCheck,
                  t: "Citas y recordatorios",
                  d: "Agenda el turno y manda el aviso 24h antes.",
                },
                {
                  icon: UserCheck,
                  t: "Derivación inteligente",
                  d: "Solo pasa a una persona lo urgente o complejo.",
                },
              ].map((item) => (
                <div
                  key={item.t}
                  className="card-compact hover-lift bg-white p-5 sm:p-6"
                >
                  <item.icon className="h-5 w-5 text-terracota" strokeWidth={1.5} />
                  <p className="mt-3 font-medium text-ink">{item.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/55">{item.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>
      </div>

      {/* PAQUETES */}
      <section className="border-t border-ink/8">
        <PricingTiers
          paquetes={PAQUETES}
          titulo="Paquetes para clínicas"
          chipDestacado="Incluye recordatorios"
        >
          <WhatsAppButton message="Hola, quiero el paquete Profesional para mi clínica">
            Quiero el Profesional
          </WhatsAppButton>
        </PricingTiers>
      </section>

      {/* IMPLEMENTACIÓN — timeline vertical */}
      <section className="section-band border-t border-ink/6">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <Reveal>
            <p className="section-eyebrow">Implementación</p>
            <h2 className="text-h2 mt-2 text-ink">Cómo lo implementamos en tu clínica</h2>
            <p className="mt-3 text-ink/60">
              Configurado con la información real de tu clínica — sin plantillas genéricas.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <ol className="mt-10 space-y-0">
              {PASOS.map((step, i) => (
                <li key={step.t} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-terracota/20 bg-white text-sm font-medium text-terracota-dark shadow-sm">
                      {i + 1}
                    </span>
                    {i < PASOS.length - 1 && (
                      <span className="my-2 min-h-8 w-px grow bg-ink/12" aria-hidden />
                    )}
                  </div>
                  <div className="pb-8">
                    <div className="flex items-center gap-2">
                      <step.icon className="h-4 w-4 text-terracota" strokeWidth={1.5} />
                      <h3 className="font-medium text-ink">{step.t}</h3>
                    </div>
                    <p className="mt-1.5 text-sm text-ink/55">{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <GarantiaSection
        condicion="el asistente no te ahorra tiempo ni recupera pacientes"
        notaExtra="Lo pruebas en tu clínica antes de comprometerte con la configuración."
      />

      <FAQSection items={FAQS} />

      <FinalCTA
        titulo="¿Cuántas citas se caen cada semana por ausencias en tu clínica?"
        mensaje="Hola, vi tu web y quiero reducir las ausencias en mi clínica"
        textoBoton="Quiero reducir ausencias"
      />
    </>
  );
}