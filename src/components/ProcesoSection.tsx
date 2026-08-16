import Link from "next/link";
import { ClipboardList, Settings2, TrendingUp, PackageCheck } from "lucide-react";
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
    d: "Ajustes, soporte y mejoras continuas. No desaparezco después de la entrega.",
    icon: TrendingUp,
  },
];

/** Sección "De diagnóstico a operación" — timeline numerado (Sobeklab/Lebel). */
export default function ProcesoSection() {
  return (
    <section className="container-prose section-py">
      <Reveal>
        <span className="chip">Cómo trabajamos</span>
        <h2 className="text-h2 mt-4 text-ink">De diagnóstico a operación</h2>
        <p className="mt-2 max-w-md text-ink/60">
          Tres pasos. Sin sorpresas. Aplica a cualquier servicio del catálogo.
        </p>
      </Reveal>
      <Reveal delay={80}>
        <ol className="mt-10 space-y-0">
          {PASOS.map((step, i) => (
            <li key={step.t} className="flex gap-6">
              <div className="flex flex-col items-center">
                <span className="font-display text-3xl italic text-terracota sm:text-4xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {i < PASOS.length - 1 && (
                  <>
                    <span className="timeline-marker mt-2" aria-hidden />
                    <span className="timeline-connector my-1 min-h-10 w-px grow sm:min-h-14" aria-hidden />
                    <span className="timeline-marker mb-1" aria-hidden />
                  </>
                )}
              </div>
              <div className="pb-10 sm:pb-12">
                <div className="flex items-center gap-2">
                  <step.icon className="h-4 w-4 text-terracota" strokeWidth={1.5} />
                  <h3 className="font-medium text-ink">{step.t}</h3>
                </div>
                <p className="timeline-entregable mt-3">
                  <PackageCheck className="mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                  <span>Entregable: {step.entregable}</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{step.d}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex justify-center">
          <Link href="#contacto" className="btn-pill btn-pill-solid">
            Empezar con diagnóstico gratis →
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
