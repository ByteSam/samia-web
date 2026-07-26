import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Hexagon, MessageCircleMore, CalendarCheck, Hammer, Scale } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import WhatsAppMockup from "@/components/WhatsAppMockup";
import LeadForm from "@/components/LeadForm";
import ProblemaSection from "@/components/ProblemaSection";
import ServiciosGrid from "@/components/ServiciosGrid";
import ProcesoSection from "@/components/ProcesoSection";
import FundadorBlock from "@/components/FundadorBlock";
import GarantiaSection from "@/components/GarantiaSection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Automatización y tecnología para negocios | afynova",
  description:
    "Te ayudo a responder a tus clientes más rápido con WhatsApp, automatización y web — implementado directamente, con diagnóstico gratis.",
  alternates: { canonical: "/" },
};

type CasoBase = {
  nombre: string;
  rubro: string;
  icon: LucideIcon;
  estado: "entregado" | "proximamente";
};
type CasoSimple = CasoBase & { entregable: string };
type CasoDetallado = CasoBase & {
  problema: string;
  solucion: string;
  resultado: string;
  url: string;
};
type Caso = CasoSimple | CasoDetallado;

const CASOS: Caso[] = [
  {
    nombre: "Fortaleza Vinzos",
    rubro: "Reformas y remodelación",
    icon: Hammer,
    estado: "entregado",
    problema:
      "Fortaleza Vinzos necesitaba una presencia web profesional para captar solicitudes de presupuesto y transmitir confianza desde el primer contacto.",
    solucion:
      "Diseñamos y desarrollamos una landing orientada a conversión, con una propuesta de valor clara, servicios, proyectos, formulario de contacto y CTA a WhatsApp.",
    resultado: "Sitio web entregado y publicado.",
    url: "https://fortalezavinzos.es/",
  },
  {
    nombre: "Servicios legales",
    rubro: "Abogacía",
    entregable: "Landing page a medida.",
    icon: Scale,
    estado: "proximamente",
  },
];

const FAQS_HOME = [
  {
    q: "¿Necesito cambiar mi número de WhatsApp?",
    a: "No. Se conecta a tu número actual mediante la API oficial de WhatsApp.",
  },
  {
    q: "¿Reemplaza a mi equipo?",
    a: "No. Filtra lo repetitivo y te pasa solo las conversaciones que de verdad necesitan a una persona.",
  },
  {
    q: "¿Cuánto tarda en estar listo?",
    a: "Normalmente pocos días desde que tengo la información de tu negocio.",
  },
  {
    q: "¿Qué pasa si no funciona para mi caso?",
    a: "No pagas la configuración — es literalmente lo que cubre el piloto de 14 días.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative mx-auto max-w-6xl overflow-hidden px-6 pb-16 pt-20 md:pt-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <span className="chip">Webs que venden · automatización · WhatsApp para pymes</span>

            <h1 className="text-h1 relative mt-6 max-w-2xl text-[2.5rem] text-ink sm:text-6xl md:text-[4rem]">
              Tu negocio nunca deja pasar un{" "}
              <span className="font-display italic text-terracota">cliente</span>.
            </h1>
            <p className="relative mt-6 max-w-xl text-lg text-ink/60">
              Atiendo mejor a tus clientes por WhatsApp, te ahorro trabajo
              manual, y respondo por el resultado — implementado directamente
              por mí, con garantía de 14 días.
            </p>
            <div className="relative mt-10 flex flex-col items-start gap-3">
              <div className="flex flex-wrap gap-4">
                <WhatsAppButton message="Hola, vi tu web y quiero un diagnóstico gratis">
                  Diagnóstico gratis por WhatsApp
                </WhatsAppButton>
              </div>
              <p className="text-sm text-ink/55">
                Hablarás directamente conmigo, no con un call center.
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            <WhatsAppMockup />
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <ProblemaSection />

      {/* PROPUESTA DE VALOR */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <Reveal>
          <h2 className="text-h2 text-ink">Y tu web no se queda ahí</h2>
          <p className="mt-2 max-w-md text-ink/60">
            Una web es el inicio, no el final. Cuando tu negocio lo necesita,
            la conecto con WhatsApp y automatizaciones para que ninguna
            consulta se pierda.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3 md:auto-rows-fr">
          <Reveal className="md:col-span-1" delay={0}>
            <div className="card-soft hover-lift h-full">
              <span className="chip">beneficios</span>
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

      {/* SERVICIOS */}
      <ServiciosGrid />

      {/* PROCESO */}
      <ProcesoSection />

      {/* CTA LIGERO */}
      <section className="mx-auto max-w-md px-6 pb-24 text-center">
        <Reveal>
          <p className="text-ink/60">¿Quieres ver qué podríamos mejorar en tu negocio?</p>
          <div className="mt-4">
            <WhatsAppButton message="Hola, vi tu web y quiero un diagnóstico gratis">
              Habla conmigo por WhatsApp
            </WhatsAppButton>
          </div>
        </Reveal>
      </section>

      {/* CASOS REALES */}
      <section id="casos-reales" className="mx-auto max-w-5xl px-6 pb-24">
        <Reveal>
          <h2 className="text-h2 text-ink">Casos reales</h2>
          <p className="mt-2 max-w-md text-ink/60">
            Negocios peruanos donde ya estoy poniendo esto en práctica.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {CASOS.map((c, i) => (
            <Reveal key={c.nombre} delay={i * 80}>
              {"problema" in c ? (
                <div className="card-soft-tint hover-lift flex h-full flex-col">
                  <c.icon className="h-7 w-7 text-terracota" strokeWidth={1.5} />
                  <h3 className="mt-5 text-lg font-medium text-ink">{c.nombre}</h3>
                  <p className="mt-1 text-sm text-ink/50">{c.rubro}</p>
                  <dl className="mt-5 space-y-4 text-sm">
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wide text-terracota-dark/70">
                        Problema
                      </dt>
                      <dd className="mt-1 text-ink/70">{c.problema}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wide text-terracota-dark/70">
                        Solución
                      </dt>
                      <dd className="mt-1 text-ink/70">{c.solucion}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wide text-terracota-dark/70">
                        Resultado
                      </dt>
                      <dd className="mt-1 text-ink/70">{c.resultado}</dd>
                    </div>
                  </dl>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill btn-pill-ghost mt-6 inline-flex w-fit items-center gap-1.5"
                  >
                    Ver sitio
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              ) : (
                <div
                  className={`card-soft-tint hover-lift h-full ${c.estado === "proximamente" ? "opacity-60" : ""}`}
                >
                  <c.icon className="h-7 w-7 text-terracota" strokeWidth={1.5} />
                  <div className="mt-5 flex items-center gap-2">
                    <h3 className="text-lg font-medium text-ink">{c.nombre}</h3>
                    {c.estado === "proximamente" && (
                      <span className="chip !bg-ink/5 !text-ink/70 text-[0.65rem]">
                        Próximamente
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-ink/50">{c.rubro}</p>
                  <p className="mt-2 text-sm text-ink/60">{c.entregable}</p>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      {/* FUNDADOR */}
      <section id="fundador" className="mx-auto max-w-3xl px-6 pb-24">
        <FundadorBlock />
      </section>

      {/* GARANTIA */}
      <GarantiaSection
        condicion="el asistente no te ahorra tiempo ni recupera clientes"
        notaExtra="Hablarás directamente conmigo, no con un call center."
      />

      {/* SEÑAL DE PRECIO — breve, no es tabla ni catálogo */}
      <p className="mx-auto -mt-12 max-w-3xl px-6 pb-20 text-center text-sm text-ink/55">
        Implementaciones desde <strong className="font-medium text-ink">S/1,500</strong>. El
        precio final depende de tu caso y lo definimos después del
        diagnóstico gratuito.
      </p>

      {/* FORMULARIO EN VIVO */}
      <section id="contacto" className="mx-auto max-w-md px-6 pb-24 text-center">
        <Reveal>
          <h3 className="text-xl font-medium text-ink">Pruébalo tú mismo</h3>
          <p className="mt-2 text-sm text-ink/60">
            Completa el formulario — así empieza tu diagnóstico gratuito.
          </p>
          <div className="mt-6 text-left">
            <LeadForm />
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <FAQSection items={FAQS_HOME} />

      {/* CTA FINAL */}
      <section className="mx-auto max-w-3xl px-6 pb-28 text-center">
        <Reveal>
          <h2 className="text-h2 text-ink">
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
          <a
            href="#contacto"
            className="mt-4 inline-block text-sm text-ink/55 underline underline-offset-2 hover:text-terracota"
          >
            o deja tus datos en el formulario ↑
          </a>
        </Reveal>
      </section>
    </>
  );
}
