import { ClipboardList, Settings2, PackageCheck } from "lucide-react";
import Reveal from "@/components/Reveal";

const PASOS = [
  {
    t: "Diagnóstico gratuito",
    d: "Conversamos 30 min sobre tu negocio y detectamos qué automatizar.",
    icon: ClipboardList,
  },
  {
    t: "Implementación en días",
    d: "Configuro el asistente, conecto tus herramientas, y lo probamos juntos.",
    icon: Settings2,
  },
  {
    t: "Empiezas a no perder clientes",
    d: "Recibes el aviso por WhatsApp cada vez que llega alguien nuevo — mides la diferencia desde la primera semana.",
    icon: PackageCheck,
  },
];

/** Sección "Proceso" — fusión de "Flujo" y "Cómo trabajamos" (antes duplicados). */
export default function ProcesoSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-16">
      <Reveal>
        <h2 className="text-3xl font-medium text-ink">Cómo trabajamos</h2>
      </Reveal>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
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
  );
}
