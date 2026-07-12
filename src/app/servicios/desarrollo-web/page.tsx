import type { Metadata } from "next";
import { LayoutTemplate, Building2, Briefcase, LayoutDashboard, ShoppingCart } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Desarrollo Web",
  description:
    "Landing, web corporativa, portafolio, portal de cliente y e-commerce — sitios que venden, construidos en código, en soles.",
};

const CATALOGO = [
  { icon: LayoutTemplate, nombre: "Landing", setup: "S/600 – 2,000" },
  { icon: Building2, nombre: "Web corporativa", setup: "S/1,800 – 6,000" },
  { icon: Briefcase, nombre: "Portafolio", setup: "S/1,200 – 4,000" },
  { icon: LayoutDashboard, nombre: "Portal de cliente", setup: "S/3,000 – 10,000" },
  { icon: ShoppingCart, nombre: "E-commerce", setup: "S/3,500 – 15,000" },
];

export default function DesarrolloWebPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-20 text-center md:pt-28">
        <Reveal>
          <span className="chip">Servicio · Desarrollo Web</span>
          <h1 className="mx-auto mt-6 max-w-3xl text-[2.5rem] font-normal leading-[1.08] text-ink sm:text-6xl">
            Un sitio que vende, no uno que solo se ve bonito.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/60">
            Construido en código (no plantillas genéricas), rápido, indexable
            en Google y conectado a tu WhatsApp desde el día uno.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <WhatsAppButton message="Hola, quiero información sobre desarrollo web">
              Conversar por WhatsApp
            </WhatsAppButton>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <Reveal>
          <h2 className="text-2xl font-normal text-ink md:text-3xl">Catálogo, en soles</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {CATALOGO.map((p, i) => (
            <Reveal key={p.nombre} delay={i * 70}>
              <div className="card-soft hover-lift h-full">
                <p.icon className="h-6 w-6 text-terracota" strokeWidth={1.5} />
                <h3 className="mt-4 font-medium text-ink">{p.nombre}</h3>
                <p className="mt-3 text-xl font-medium text-ink">{p.setup}</p>
                <p className="text-xs text-ink/50">Setup</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={280}>
          <p className="mt-6 text-sm text-ink/50">
            Mantenimiento: S/100 – 500/mes (hosting, dominio, respaldos y
            ajustes menores).
          </p>
        </Reveal>
      </section>
    </>
  );
}
