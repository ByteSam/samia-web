import type { Metadata } from "next";
import Link from "next/link";
import {
  PhoneMissed,
  Clock3,
  MapPinned,
  Layers,
  Shield,
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
import WhatsAppMockup from "@/components/WhatsAppMockup";
import LocalesMissedCallBlock from "@/components/nichos/LocalesMissedCallBlock";
import ImplementacionStepper from "@/components/ImplementacionStepper";
import SolutionSection from "@/components/SolutionSection";
import { MOCKUP_LOCALES } from "@/lib/nichos/mockups";

export const metadata: Metadata = {
  title: "Asistente de WhatsApp con IA para servicios locales en Perú",
  description:
    "Gasfitería, cerrajería, mantenimiento: si no contestas, el asistente responde por WhatsApp, filtra urgencias y agenda visitas. Configurado en días. Diagnóstico gratis de 30 minutos.",
  alternates: { canonical: "/servicios-locales" },
};

const PAQUETES = [
  {
    nombre: "Esencial",
    setup: "S/500",
    mensualidad: "S/200",
    features: [
      "Si no contestas, responde por WhatsApp en segundos",
      "Respuesta automática a consultas frecuentes",
    ],
  },
  {
    nombre: "Profesional",
    destacado: true,
    setup: "S/1,500",
    mensualidad: "S/450",
    features: [
      "Todo lo del Esencial",
      "Filtrado de urgencias y aviso inmediato",
      "Captación de consultas antes de agendar la visita",
    ],
  },
  {
    nombre: "Integral",
    setup: "S/3,000",
    mensualidad: "S/800",
    features: [
      "Todo lo del Profesional",
      "Agenda de visitas + recordatorios",
      "Reportes básicos de consultas y trabajos",
    ],
  },
];

const SOLUCION_ITEMS = [
  {
    icon: PhoneMissed,
    t: "Responde si no contestas",
    d: "Si la llamada no se atiende, le escribe por WhatsApp en segundos — antes de que llame a otro.",
  },
  {
    icon: Clock3,
    t: "Atiende consultas frecuentes",
    d: "Horarios, tarifas, zona de trabajo — sin que estés disponible.",
  },
  {
    icon: MapPinned,
    t: "Te avisa lo urgente",
    d: "Si suena a emergencia (fuga, corte, algo roto), te notifica para que priorices.",
  },
];

const PASOS_IMPLEMENTACION = [
  {
    t: "Diagnóstico gratis",
    d: "Vemos cuántas llamadas pierdes y qué consultas se repiten — 30 min por WhatsApp, sin costo.",
    icon: ClipboardList,
  },
  {
    t: "Configuración",
    d: "Activo la respuesta automática y el asistente con la info real de tu negocio.",
    icon: Settings2,
  },
  {
    t: "Clientes recuperados",
    d: "Mides la diferencia desde la primera semana — menos llamadas perdidas, más visitas agendadas.",
    icon: PackageCheck,
  },
];

const FAQS = [
  {
    q: "¿Sirve si trabajo solo, sin oficina?",
    a: "Se conecta a tu WhatsApp personal o de negocio — no necesitas local ni personal extra.",
  },
  {
    q: "¿Puedo ver un ejemplo de cómo responde antes de contratar?",
    a: "Sí — en el hero de esta página ves un ejemplo de fuga urgente y cómo responde el asistente. En el diagnóstico gratuito adaptamos el flujo a tu negocio antes de implementar nada.",
  },
  {
    q: "¿Distingue una emergencia real de una consulta cualquiera?",
    a: "Según las palabras y reglas que configures, te avisa cuando algo suena urgente; el resto lo filtra solo. Tú validas si es emergencia real.",
  },
  {
    q: "¿Funciona si tengo varios técnicos en el equipo?",
    a: "Sí — el asistente atiende el primer contacto y deriva según las reglas que configures (zona, tipo de trabajo, urgencia). Lo ajustamos en el diagnóstico según cómo opera tu negocio.",
  },
  {
    q: "¿Necesito cambiar mi número de WhatsApp?",
    a: "No. Se conecta a tu número actual mediante la API oficial de WhatsApp.",
  },
  {
    q: "¿Cuánto tarda en estar listo?",
    a: "Normalmente pocos días desde que tengo la información de tu negocio.",
  },
  {
    q: "¿Puedo perder una llamada y aun así no perder al cliente?",
    a: "Ese es el punto: si no contestas la llamada, el asistente le escribe solo por WhatsApp en segundos.",
  },
];

export default function ServiciosLocalesPage() {
  return (
    <>
      {/* HERO — texto + flujo llamada perdida + mockup en grid */}
      <section className="landing-hero-accent mx-auto max-w-6xl px-6 pb-12 pt-20 md:pb-16 md:pt-28">
        <div className="grid gap-12 lg:grid-cols-[5fr_4fr] lg:items-start">
          <div className="text-center lg:text-left">
            <span className="chip">
              Gasfitería · cerrajería · mantenimiento · emergencias del hogar
            </span>

            <h1 className="text-h1 text-balance mt-6 text-ink">
              Cada{" "}
              <span className="font-display italic text-terracota">llamada perdida</span>{" "}
              es un cliente que se va con la competencia.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-ink/60">
              Si no puedes contestar, el asistente responde por WhatsApp en segundos — antes
              de que el cliente llame al siguiente en Google.
            </p>

            <div className="mt-10 flex flex-col items-center gap-3 lg:items-start">
              <WhatsAppButton
                message="Hola, vi tu web y quiero recuperar las llamadas perdidas de mi negocio"
                source="servicios_locales_hero"
              >
                Quiero recuperar llamadas perdidas
              </WhatsAppButton>
              <p className="text-sm text-ink/55">
                Desde S/500 de configuración · Hablarás directamente conmigo
              </p>
              <div className="mt-1 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-ink/50 lg:justify-start">
                <span className="flex items-center gap-1.5">
                  <Shield className="h-3.5 w-3.5 text-terracota" strokeWidth={1.75} aria-hidden />
                  API oficial de WhatsApp
                </span>
                <span className="flex items-center gap-1.5">
                  <Shield className="h-3.5 w-3.5 text-terracota" strokeWidth={1.75} aria-hidden />
                  Respuesta en segundos
                </span>
              </div>
            </div>
          </div>

          <Reveal delay={120} className="hidden lg:flex lg:justify-end">
            <div>
              <WhatsAppMockup
                framed
                titulo={MOCKUP_LOCALES.titulo}
                subtitulo={MOCKUP_LOCALES.subtitulo}
                mensajes={MOCKUP_LOCALES.mensajes}
              />
              <p className="mt-3 text-center text-xs text-ink/45">
                Ejemplo: fuga urgente — el asistente responde mientras trabajas
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-10 flex flex-col items-center lg:hidden">
          <p className="mb-4 text-center text-xs text-ink/45">
            Ejemplo: fuga urgente — el asistente responde mientras trabajas
          </p>
          <WhatsAppMockup
            compact
            titulo={MOCKUP_LOCALES.titulo}
            subtitulo={MOCKUP_LOCALES.subtitulo}
            mensajes={MOCKUP_LOCALES.mensajes}
          />
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-4">
        <Reveal>
          <LocalesMissedCallBlock variant="hero" />
        </Reveal>
      </section>

      {/* PROBLEMA */}
      <div className="section-band">
        <ProblemSection
          variant="band"
          titulo="Estás en un techo, debajo de un lavadero o manejando — y el teléfono suena."
          bullets={[
            "No puedes contestar en el momento y la llamada se pierde.",
            "El cliente no espera: llama al siguiente de la lista en Google.",
            "Las emergencias reales (fuga, corte, algo roto) llegan fuera de tu horario y nadie las atiende.",
          ]}
          stat="La mayoría de las personas abandona si no le responden rápido — y en emergencias del hogar, esa espera se siente peor."
        />
      </div>

      {/* PRECIO — ancla S/500 */}
      <section>
        <PricingTiers
          paquetes={PAQUETES}
          titulo="Desde S/500 — paquetes para negocios locales"
          chip="Servicios · Precios orientativos"
          chipDestacado="El más elegido"
        >
          <WhatsAppButton
            message="Hola, quiero el paquete Profesional para mi negocio local"
            source="servicios_locales_precio"
          >
            Quiero el Profesional
          </WhatsAppButton>
        </PricingTiers>
      </section>

      <SolutionSection
        titulo="No pierdes la llamada — ni la consulta que viene después."
        subtitulo="Responde, filtra urgencias y captura datos — sin que tengas que estar pegado al teléfono."
        items={SOLUCION_ITEMS}
      />

      {/* IMPLEMENTACIÓN */}
      <div className="section-band">
        <ImplementacionStepper titulo="Cómo lo implementamos" pasos={PASOS_IMPLEMENTACION} columns={3} />
      </div>

      {/* ESCALERA — qué servicio base incluye esto */}
      <section className="container-prose section-py">
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
                  — el servicio que responde, filtra y agenda tus clientes de forma automática. Si necesitas
                  conectar flujos más complejos con otras herramientas, también aplica{" "}
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
          condicion="el asistente no te ayuda a recuperar clientes que hoy pierdes"
          variant="dark"
          cta={{
            message: "Hola, quiero probar el asistente con la garantía de 14 días para mi negocio local",
            textoBoton: "Empezar con piloto de 14 días",
            source: "servicios_locales_garantia",
          }}
        />
      </div>

      <FAQSection items={FAQS} />
    </>
  );
}
