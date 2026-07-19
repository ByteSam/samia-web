import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Hexagon,
  ShieldCheck,
  Stethoscope,
  Building2,
  Wrench,
  MessageCircleMore,
  CalendarCheck,
  ClipboardList,
  Settings2,
  PackageCheck,
} from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import { CAL_COM_URL, whatsappLink } from "@/lib/contact";

// Mientras no exista un link real de Cal.com, "Agendar" cae a WhatsApp con mensaje precargado.
const AGENDAR_HREF =
  CAL_COM_URL ?? whatsappLink("Hola, quiero agendar un diagnóstico gratis");

const FLUJO = [
  {
    t: "Visita la web",
    d: "Un visitante llega a tu página desde redes, Google o un anuncio.",
    icon: Wrench,
  },
  {
    t: "Deja sus datos",
    d: "Completa un formulario simple: nombre, contacto y qué necesita.",
    icon: ClipboardList,
  },
  {
    t: "Recibes el aviso",
    d: "Te llega un mensaje de WhatsApp al instante — así no pierdes al lead.",
    icon: MessageCircleMore,
  },
];

const TECNOLOGIAS = [
  "AWS",
  "OpenAI",
  "Claude",
  "n8n",
  "WhatsApp Business",
  "Culqi",
  "Google Calendar",
  "Notion",
];

const NICHOS = [
  {
    href: "/clinicas",
    title: "Clínicas y salud",
    problema: "Pacientes que se pierden por no contestar a tiempo o citas que nadie confirma.",
    icon: Stethoscope,
  },
  {
    href: "/servicios-locales",
    title: "Servicios locales",
    problema: "Emergencias y consultas fuera de horario que se van a la competencia.",
    icon: Wrench,
  },
];

const NICHO_PROXIMAMENTE = {
  title: "Inmobiliarias",
  problema: "Leads que se enfrían porque nadie responde en los primeros minutos.",
  icon: Building2,
};

const PROCESO = [
  {
    t: "Diagnóstico gratuito",
    d: "Conversamos sobre tu negocio y detectamos qué procesos automatizar.",
    icon: ClipboardList,
  },
  {
    t: "Implementación",
    d: "Configuro el asistente e integro las herramientas necesarias.",
    icon: Settings2,
  },
  {
    t: "Entrega",
    d: "Probamos todo contigo hasta dejarlo funcionando.",
    icon: PackageCheck,
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative mx-auto max-w-6xl overflow-hidden px-6 pb-16 pt-20 md:pt-24">
        {/* blobs decorativos */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-terracota/25 via-dorado/20 to-transparent blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-16 top-52 h-[220px] w-[220px] rounded-full bg-dorado/20 blur-2xl"
        />

        <Reveal>
          <span className="chip">Webs que venden · automatización · WhatsApp</span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="relative mt-6 max-w-2xl text-[2.5rem] font-normal leading-[1.05] text-ink sm:text-6xl md:text-[4rem]">
            Una web que{" "}
            <span className="font-display italic text-terracota">convierte</span> visitas
            en clientes.
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="relative mt-6 max-w-xl text-lg text-ink/60">
            Diseño tu web, conecto tus formularios y te aviso por WhatsApp
            cuando llega un nuevo cliente potencial.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="relative mt-10 flex flex-col items-start gap-3">
            <div className="flex flex-wrap gap-4">
              <WhatsAppButton message="Hola, vi tu web y quiero un diagnóstico gratis">
                Diagnóstico gratis
              </WhatsAppButton>
              <a
                href={AGENDAR_HREF}
                target={CAL_COM_URL ? "_blank" : undefined}
                rel={CAL_COM_URL ? "noopener noreferrer" : undefined}
                className="btn-pill btn-pill-ghost"
              >
                Agendar diagnóstico gratis
              </a>
            </div>
            <p className="text-sm text-ink/55">
              Hablarás directamente conmigo, no con un call center.
            </p>
          </div>
        </Reveal>
      </section>

      {/* FLUJO */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="grid gap-6 sm:grid-cols-3">
          {FLUJO.map((step, i) => (
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

      {/* TECNOLOGIAS */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <Reveal>
          <p className="text-center text-xs font-medium uppercase tracking-[0.15em] text-ink/45">
            Construido sobre herramientas profesionales
          </p>
          <div className="mx-auto mt-5 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {TECNOLOGIAS.map((t) => (
              <span
                key={t}
                className="text-sm font-medium tracking-wide text-ink/60"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* GRID DE TARJETAS — lo que hace tu asistente */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <Reveal>
          <h2 className="text-3xl font-medium text-ink">Y tu web no se queda ahí</h2>
          <p className="mt-2 max-w-md text-ink/60">
            Una web es el inicio, no el final. Cuando tu negocio lo necesita,
            la conecto con WhatsApp y automatizaciones para que ninguna
            consulta se pierda.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3 md:auto-rows-fr">
          <Reveal className="md:col-span-1" delay={0}>
            <div className="card-soft hover-lift h-full">
              <span className="chip">capacidades</span>
              <ul className="mt-6 space-y-4 text-sm">
                {[
                  "Responde WhatsApp al instante",
                  "Agenda y confirma citas",
                  "Cobra por Yape, Plin o Culqi",
                  "Te avisa si algo se cae",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-between border-b border-ink/8 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-ink/75">{item}</span>
                    <ArrowUpRight className="h-4 w-4 text-terracota" strokeWidth={1.75} />
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="md:col-span-1" delay={100}>
            <div className="card-soft-tint hover-lift h-full">
              <div className="flex items-start justify-between">
                <span className="chip">objetivo de servicio</span>
                <div className="flex -space-x-2" aria-hidden>
                  <span className="h-6 w-6 rounded-full border-2 border-white bg-dorado-light/70" />
                  <span className="h-6 w-6 rounded-full border-2 border-white bg-terracota/60" />
                  <span className="h-6 w-6 rounded-full border-2 border-white bg-rojo-tierra/50" />
                </div>
              </div>
              <h3 className="mt-6 text-lg font-medium text-ink">Tiempo de primera respuesta</h3>
              <p className="mt-8 font-display text-6xl italic text-terracota-dark">
                &lt;30<span className="text-2xl not-italic font-sans"> seg</span>
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-medium text-terracota-dark/80">
                <Hexagon className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                Es lo que me propongo con cada cliente — lo compruebas desde
                la primera semana.
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 md:col-span-1">
            <Reveal delay={160}>
              <div className="card-soft-dark hover-lift">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium">Recepcionista IA</h3>
                    <p className="mt-1 inline-flex items-center gap-1.5 text-xs font-medium text-dorado-light underline underline-offset-2">
                      <MessageCircleMore className="h-3.5 w-3.5" strokeWidth={1.75} />
                      Atención 24/7
                    </p>
                  </div>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-sand/25 text-xs font-medium">
                    1
                  </span>
                </div>
                <p className="mt-3 text-sm text-sand/65">
                  Atiende consultas al instante, deriva a un humano solo
                  cuando hace falta.
                </p>
              </div>
            </Reveal>
            <Reveal delay={220}>
              <div className="card-soft hover-lift">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-ink">Agenda inteligente</h3>
                    <p className="mt-1 inline-flex items-center gap-1.5 text-xs font-medium text-terracota-dark underline underline-offset-2">
                      <CalendarCheck className="h-3.5 w-3.5" strokeWidth={1.75} />
                      Anti-ausencias
                    </p>
                  </div>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink/15 text-xs font-medium text-ink">
                    2
                  </span>
                </div>
                <p className="mt-3 text-sm text-ink/60">
                  Confirma y recuerda citas — menos ausencias, agenda llena.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* COMO TRABAJAMOS */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <Reveal>
          <h2 className="text-3xl font-medium text-ink">Cómo trabajamos</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PROCESO.map((step, i) => (
            <Reveal key={step.t} delay={i * 80}>
              <div className="card-soft hover-lift h-full">
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

      {/* SOBRE MI */}
      <section id="sobre-mi" className="mx-auto max-w-5xl px-6 pb-24">
        <Reveal>
          <div className="card-soft-dark grid gap-10 md:grid-cols-[220px_1fr] md:p-12">
            <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-2xl border border-sand/15 bg-sand/5 md:mx-0">
              <Image
                src="/daniel.jpg"
                alt="Daniel, fundador de SamIA"
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-medium">
                Soy Daniel — me dicen{" "}
                <span className="font-display italic text-dorado-light">Sam</span>.
              </h2>
              <p className="mt-4 max-w-2xl text-sand/70">
                Soy peruano, con formación en Ciencia de Datos y certificación
                en IA Generativa (DeepLearning.AI). Automatizo procesos y
                construyo agentes con LLMs sobre AWS — las mismas
                herramientas que pongo al servicio de negocios peruanos para
                que no pierdan clientes por no responder a tiempo.
              </p>
              <p className="mt-4 max-w-2xl text-sand/70">
                Te ayudo a construir rápido, a escalar sin fricción, y a que
                todo sea confiable desde el primer día.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* NICHOS */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <Reveal>
          <h2 className="text-3xl font-medium text-ink">Negocios donde trabajo</h2>
          <p className="mt-2 max-w-md text-ink/60">
            Mismo motor de IA, adaptado al problema real de tu rubro.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {NICHOS.map((n, i) => (
            <Reveal key={n.title} delay={i * 80}>
              <Link href={n.href} className="card-soft hover-lift group block h-full">
                <n.icon className="h-7 w-7 text-terracota" strokeWidth={1.5} />
                <h3 className="mt-5 text-lg font-medium text-ink">{n.title}</h3>
                <p className="mt-2 text-sm text-ink/60">{n.problema}</p>
              </Link>
            </Reveal>
          ))}
          <Reveal delay={NICHOS.length * 80}>
            <div className="card-soft h-full opacity-60">
              <NICHO_PROXIMAMENTE.icon className="h-7 w-7 text-ink/60" strokeWidth={1.5} />
              <div className="mt-5 flex items-center gap-2">
                <h3 className="text-lg font-medium text-ink">{NICHO_PROXIMAMENTE.title}</h3>
                <span className="chip !bg-ink/5 !text-ink/70 text-[0.65rem]">Próximamente</span>
              </div>
              <p className="mt-2 text-sm text-ink/60">{NICHO_PROXIMAMENTE.problema}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CUANTO CUESTA */}
      <section id="precios" className="mx-auto max-w-3xl px-6 pb-24">
        <Reveal>
          <h2 className="text-3xl font-medium text-ink">¿Cuánto cuesta?</h2>
          <div className="mt-8 card-soft-tint">
            <p className="text-ink/75">
              Cada negocio necesita una configuración distinta. El precio
              depende de las integraciones, automatizaciones y herramientas
              necesarias.
            </p>
            <p className="mt-4 text-ink/75">
              La mayoría de los proyectos comienzan entre{" "}
              <strong className="font-medium text-ink">S/1,500 y S/5,000</strong>. Después
              del diagnóstico gratuito recibirás una propuesta cerrada y sin
              costos ocultos.
            </p>
            <p className="mt-4 text-sm text-ink/60">
              ¿Ya tienes un asistente funcionando y quieres integrar pagos,
              datos y monitoreo en una sola arquitectura?{" "}
              <Link
                href="/infraestructura-digital"
                className="inline-flex items-center gap-1 font-medium text-terracota-dark hover:underline"
              >
                Conoce Infraestructura Digital Completa <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </p>
            <div className="mt-6">
              <WhatsAppButton message="Hola, quiero solicitar un diagnóstico gratuito">
                Solicitar diagnóstico gratuito
              </WhatsAppButton>
            </div>
          </div>
        </Reveal>
      </section>

      {/* GARANTIA */}
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <Reveal>
          <div className="card-soft-tint text-center">
            <ShieldCheck className="mx-auto h-8 w-8 text-terracota" strokeWidth={1.5} />
            <h2 className="mt-4 text-2xl font-medium text-ink md:text-3xl">
              Riesgo cero para ti.
            </h2>
            <p className="mt-4 text-ink/65">
              Piloto de <strong className="font-medium text-ink">14 días</strong>. Si el
              asistente no te ahorra tiempo ni recupera clientes,{" "}
              <strong className="font-medium text-ink">no pagas la configuración</strong>.
            </p>
          </div>
        </Reveal>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-3xl px-6 pb-28 text-center">
        <Reveal>
          <h2 className="text-3xl font-medium text-ink md:text-4xl">
            ¿Cuántos clientes estás dejando de atender esta semana?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink/60">
            Diagnóstico gratis de 30 minutos. Sin compromiso.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <WhatsAppButton message="Hola, vi tu web y quiero un diagnóstico gratis">
              Escríbeme por WhatsApp
            </WhatsAppButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
