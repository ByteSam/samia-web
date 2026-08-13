import type { Metadata } from "next";
import Link from "next/link";
import {
  Clock,
  CalendarCheck,
  UserCheck,
  ClipboardList,
  Settings2,
  PackageCheck,
  Layers,
} from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import GarantiaSection from "@/components/GarantiaSection";
import FAQSection from "@/components/FAQSection";
import PricingTiers from "@/components/PricingTiers";
import ProblemSection from "@/components/ProblemSection";
import WhatsAppMockup from "@/components/WhatsAppMockup";
import HeroTrustLine from "@/components/HeroTrustLine";
import ClinicasAusenciasBlock from "@/components/nichos/ClinicasAusenciasBlock";
import ClinicasHeroAgendaCompare from "@/components/nichos/ClinicasHeroAgendaCompare";
import ImplementacionStepper from "@/components/ImplementacionStepper";
import SolutionSection from "@/components/SolutionSection";
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

const SOLUCION_ITEMS = [
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
];

const PASOS = [
  {
    t: "Diagnóstico gratis",
    entregable: "Recomendación y propuesta con precio cerrado",
    d: "30 min para ver consultas repetidas y citas que se caen.",
    icon: ClipboardList,
  },
  {
    t: "Configuración",
    entregable: "Asistente con horarios, servicios y reglas de recordatorio",
    d: "Horarios, servicios y reglas de recordatorio en tu WhatsApp.",
    icon: Settings2,
  },
  {
    t: "Primeras semanas",
    entregable: "Diferencia medida en huecos de agenda",
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
      {/* HERO — texto + mockup (desktop); agenda compare va después del problema */}
      <section
        className="landing-hero-accent mx-auto max-w-6xl px-6 pb-12 pt-20 md:pb-16 md:pt-28"
      >
        <div className="grid gap-12 lg:grid-cols-[5fr_4fr] lg:items-center">
          <div className="text-center lg:text-left">
            <span className="chip">Clínicas · citas por WhatsApp</span>

            <h1 className="text-h1 text-balance mt-6 text-ink">
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
                className="w-full sm:w-auto"
              >
                Quiero reducir ausencias
              </WhatsAppButton>
              <p className="text-sm text-ink/50">
                Desde S/1,500 · Diagnóstico gratis · Sin compromiso
              </p>
              <div className="mt-1">
                <HeroTrustLine />
              </div>
            </div>
          </div>

          <Reveal delay={120} className="hidden lg:flex lg:justify-end">
            <WhatsAppMockup
              framed
              titulo={MOCKUP_CLINICA.titulo}
              subtitulo={MOCKUP_CLINICA.subtitulo}
              mensajes={MOCKUP_CLINICA.mensajes}
            />
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-10 flex justify-center lg:hidden">
          <div className="max-h-[360px] overflow-hidden">
            <WhatsAppMockup
              compact
              titulo={MOCKUP_CLINICA.titulo}
              subtitulo={MOCKUP_CLINICA.subtitulo}
              mensajes={MOCKUP_CLINICA.mensajes}
            />
          </div>
        </Reveal>
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

      {/* Comparación timeline — después del problema */}
      <section className="mx-auto max-w-3xl px-6 section-py">
        <Reveal>
          <span className="chip">El mismo turno, dos resultados</span>
          <h2 className="text-h2 mt-4 text-ink">Lo que pasa con y sin recordatorio</h2>
          <p className="mt-3 max-w-lg text-ink/60">
            La cita se agenda igual. La diferencia está en lo que ocurre antes del turno.
          </p>
        </Reveal>
        <Reveal delay={80} className="mt-10">
          <ClinicasHeroAgendaCompare />
        </Reveal>
      </section>

      {/* Recordatorio — fondo blanco */}
      <ClinicasAusenciasBlock />

      <SolutionSection
        titulo="Recepción libre de lo repetitivo"
        items={SOLUCION_ITEMS}
        cardVariant="compact"
      />

      {/* PAQUETES */}
      <section className="border-t border-ink/8">
        <PricingTiers
          paquetes={PAQUETES}
          chip="Precios claros"
          titulo="Paquetes para clínicas"
          subtitulo="Sin costos ocultos — el alcance exacto lo cerramos en el diagnóstico."
          chipDestacado="Incluye recordatorios"
        >
          <WhatsAppButton message="Hola, quiero el paquete Profesional para mi clínica">
            Quiero el Profesional
          </WhatsAppButton>
        </PricingTiers>
      </section>

      {/* IMPLEMENTACIÓN */}
      <div className="section-band border-t border-ink/6">
        <ImplementacionStepper
          labelStyle="chip"
          label="Implementación"
          titulo="Cómo lo implementamos en tu clínica"
          subtitulo="Configurado con la información real de tu clínica — sin plantillas genéricas."
          pasos={PASOS}
          columns={3}
        />
      </div>

      {/* ESCALERA */}
      <section className="mx-auto max-w-3xl px-6 pb-12">
        <Reveal>
          <div className="card-soft-tint p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <Layers className="mt-0.5 h-5 w-5 shrink-0 text-terracota" strokeWidth={1.75} />
              <div>
                <p className="text-sm font-medium text-ink">Qué hay detrás de esta solución</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  Esta solución está construida sobre{" "}
                  <Link
                    href="/servicios/agentes-ia"
                    className="font-medium text-terracota-dark underline-offset-2 hover:underline"
                  >
                    Agentes IA por WhatsApp
                  </Link>{" "}
                  — el servicio que forma la base del asistente de reservas y recordatorios. Si necesitas
                  conectar tu asistente con otros sistemas, también aplica{" "}
                  <Link
                    href="/servicios/automatizacion"
                    className="font-medium text-terracota-dark underline-offset-2 hover:underline"
                  >
                    Automatización
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <div className="section-ink">
        <GarantiaSection
          condicion="el asistente no te ahorra tiempo ni recupera pacientes"
          variant="dark"
          cta={{
            message: "Hola, quiero probar el asistente con la garantía de 14 días para mi clínica",
            textoBoton: "Empezar con piloto de 14 días",
            source: "clinicas_garantia",
          }}
        />
      </div>

      <FAQSection items={FAQS} />
    </>
  );
}
