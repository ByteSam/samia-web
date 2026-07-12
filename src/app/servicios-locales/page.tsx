import type { Metadata } from "next";
import { Check, ShieldCheck, PhoneMissed, Clock3, MapPinned } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Asistente de WhatsApp con IA para servicios locales en Perú",
  description:
    "Gasfitería, cerrajería, mantenimiento, constructoras: no pierdas otra emergencia por no contestar a tiempo. Configurado en días. Diagnóstico gratis.",
};

const PAQUETES = [
  {
    nombre: "Esencial",
    setup: "S/500",
    mensualidad: "S/200",
    features: ["Missed-call text-back automático", "Respuesta 24/7 a consultas frecuentes"],
  },
  {
    nombre: "Profesional",
    destacado: true,
    setup: "S/1,500",
    mensualidad: "S/450",
    features: [
      "Missed-call text-back automático",
      "Respuesta 24/7 a consultas frecuentes",
      "Captación y calificación de leads",
      "Deriva emergencias reales al instante",
    ],
  },
  {
    nombre: "Integral",
    setup: "S/3,000",
    mensualidad: "S/800",
    features: [
      "Missed-call text-back automático",
      "Respuesta 24/7 a consultas frecuentes",
      "Captación y calificación de leads",
      "Deriva emergencias reales al instante",
      "Agenda de visitas + reportes",
    ],
  },
];

const FAQS = [
  {
    q: "¿Sirve si trabajo solo, sin oficina?",
    a: "Sí — se conecta a tu WhatsApp personal o de negocio, no necesitas local ni personal.",
  },
  {
    q: "¿Distingue una emergencia real de una consulta cualquiera?",
    a: "Sí, prioriza y te avisa de inmediato cuando algo suena urgente; el resto lo filtra solo.",
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
      {/* 1. HERO */}
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-20 text-center md:pt-28">
        <Reveal>
          <h1 className="text-[2.5rem] font-normal leading-[1.08] text-ink sm:text-5xl md:text-6xl">
            Cada llamada perdida es un cliente que se va con otro gasfitero.
          </h1>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/60">
            Un asistente por WhatsApp con IA que responde solo cuando no
            puedes contestar, filtra lo urgente y agenda visitas —
            configurado en días.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <WhatsAppButton message="Hola, vi tu web y quiero el asistente para mi negocio">
              Escríbeme
            </WhatsAppButton>
          </div>
        </Reveal>
      </section>

      {/* 2. EL PROBLEMA */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <Reveal>
          <div className="card-soft">
            <h2 className="text-2xl font-normal text-ink md:text-3xl">
              Estás en un techo, debajo de un lavadero o manejando — y el
              teléfono suena.
            </h2>
            <ul className="mt-6 space-y-3 text-ink/65">
              <li>• No puedes contestar en el momento y la llamada se pierde.</li>
              <li>
                • El cliente no espera: llama al siguiente de la lista en
                Google.
              </li>
              <li>
                • Las emergencias reales (fuga, corte, algo roto) llegan fuera
                de tu horario y nadie las atiende.
              </li>
            </ul>
            <p className="mt-6 text-sm text-ink/50">
              El 62% de las personas abandona si no le responden rápido — y
              en emergencias del hogar, esa espera se siente peor.
            </p>
          </div>
        </Reveal>
      </section>

      {/* 3. LA SOLUCION */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <Reveal>
          <h2 className="text-2xl font-normal text-ink md:text-3xl">
            No contestas el teléfono — pero nunca dejas a nadie sin
            respuesta.
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: PhoneMissed,
              t: "Missed-call text-back",
              d: "Si no contestas, le escribe solo por WhatsApp en segundos.",
            },
            {
              icon: Clock3,
              t: "Responde 24/7",
              d: "Horarios, tarifas, zona de trabajo — sin que muevas un dedo.",
            },
            {
              icon: MapPinned,
              t: "Filtra lo urgente",
              d: "Te avisa de inmediato si suena a emergencia real.",
            },
          ].map((item, i) => (
            <Reveal key={item.t} delay={i * 80}>
              <div className="card-soft hover-lift h-full">
                <item.icon className="h-6 w-6 text-terracota" strokeWidth={1.5} />
                <p className="mt-4 font-medium text-ink">{item.t}</p>
                <p className="mt-2 text-sm text-ink/60">{item.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4. PAQUETES */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <Reveal>
          <h2 className="text-2xl font-normal text-ink md:text-3xl">
            Precios claros. Sin sorpresas.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PAQUETES.map((p, i) => (
            <Reveal key={p.nombre} delay={i * 80}>
              <div className={`h-full ${p.destacado ? "card-soft-tint" : "card-soft"}`}>
                {p.destacado && <span className="chip mb-3">El más elegido</span>}
                <h3 className="text-lg font-medium text-ink">{p.nombre}</h3>
                <p className="mt-3 text-2xl font-medium text-ink">{p.setup}</p>
                <p className="text-xs text-ink/50">Configuración</p>
                <p className="mt-1 text-lg font-medium text-dorado">{p.mensualidad}/mes</p>
                <ul className="mt-4 space-y-2 text-sm text-ink/65">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-terracota" strokeWidth={1.75} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. GARANTIA */}
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <Reveal>
          <div className="card-soft-tint text-center">
            <ShieldCheck className="mx-auto h-8 w-8 text-terracota" strokeWidth={1.5} />
            <h2 className="mt-4 text-2xl font-normal text-ink md:text-3xl">
              Riesgo cero para ti.
            </h2>
            <p className="mt-4 text-ink/65">
              Piloto de <strong className="font-medium text-ink">14 días</strong>. Si el
              asistente no te ayuda a recuperar clientes que hoy pierdes,{" "}
              <strong className="font-medium text-ink">no pagas la configuración</strong>.
            </p>
          </div>
        </Reveal>
      </section>

      {/* 6. FAQ */}
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <Reveal>
          <h2 className="text-2xl font-normal text-ink md:text-3xl">Preguntas frecuentes</h2>
        </Reveal>
        <div className="mt-8 space-y-6">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <div className="border-b border-ink/8 pb-6 last:border-0">
                <p className="font-medium text-ink">{f.q}</p>
                <p className="mt-1 text-sm text-ink/60">{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 7. CTA FINAL */}
      <section className="mx-auto max-w-3xl px-6 pb-28 text-center">
        <Reveal>
          <h2 className="text-2xl font-normal text-ink md:text-3xl">
            ¿Cuántas llamadas vas a dejar pasar esta semana?
          </h2>
          <p className="mt-3 text-ink/60">
            Diagnóstico gratis de 30 minutos. Sin compromiso.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <WhatsAppButton message="Hola, vi tu web y quiero el asistente para mi negocio">
              Escríbeme por WhatsApp
            </WhatsAppButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
