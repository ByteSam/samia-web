import Link from "next/link";
import { ClipboardList, Settings2, TrendingUp, PackageCheck, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const PASOS = [
  {
    t: "Diagnóstico gratuito",
    entregable: "Recomendación de servicio y propuesta con precio cerrado",
    d: "Conversamos 30 min sobre tu negocio y definimos el servicio que te conviene.",
    icon: ClipboardList,
  },
  {
    t: "Implementación en días",
    entregable: "Solución funcionando, conectada y probada",
    d: "Implemento lo acordado, conecto los canales necesarios y lo probamos juntos antes de que opere.",
    icon: Settings2,
  },
  {
    t: "Seguimiento",
    entregable: "Diferencia medida desde la primera semana",
    d: "Ajustes, soporte y mejoras continuas — no desaparezco después de la entrega.",
    icon: TrendingUp,
  },
];

/** Sección "De diagnóstico a operación" — timeline numerado (Sobeklab/Lebel). */
export default function ProcesoSection() {
  return (
    <section className="mx-auto max-w-3xl px-6 section-py">
      <Reveal>
        <span className="chip">Cómo trabajamos</span>
        <h2 className="text-h2 mt-4 text-ink">De diagnóstico a operación</h2>
        <p className="mt-2 max-w-md text-ink/60">
          Tres pasos, sin sorpresas — aplica para cualquier servicio del catálogo.
        </p>
      </Reveal>
      <Reveal delay={80}>
        <ol className="mt-10 space-y-0">
          {PASOS.map((step, i) => (
            <li key={step.t} className="flex gap-5 sm:gap-6">
              <div className="flex flex-col items-center">
                <span className="font-display text-3xl italic text-terracota sm:text-4xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {i < PASOS.length - 1 && (
                  <span className="my-2 min-h-10 w-px grow bg-ink/12 sm:min-h-14" aria-hidden />
                )}
              </div>
              <div className="pb-10 sm:pb-12">
                <div className="flex items-center gap-2">
                  <step.icon className="h-4 w-4 text-terracota" strokeWidth={1.5} />
                  <h3 className="font-medium text-ink">{step.t}</h3>
                </div>
                <p className="mt-2 flex items-start gap-1.5 text-xs font-medium text-terracota-dark/80">
                  <PackageCheck className="mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                  <span>Entregable: {step.entregable}</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{step.d}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-2 border-t border-ink/8 pt-8">
          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 text-sm font-medium text-terracota-dark hover:text-terracota"
          >
            Empezar con el diagnóstico gratuito
            <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
          </Link>
        </p>
      </Reveal>
    </section>
  );
}
