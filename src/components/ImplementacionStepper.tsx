import type { LucideIcon } from "lucide-react";
import { PackageCheck } from "lucide-react";
import Reveal from "@/components/Reveal";

export type PasoImplementacion = {
  t: string;
  d: string;
  icon: LucideIcon;
  entregable?: string;
};

type ImplementacionStepperProps = {
  titulo?: string;
  subtitulo?: string;
  /** `eyebrow` = section-eyebrow; `chip` = chip pill */
  labelStyle?: "eyebrow" | "chip";
  label?: string;
  pasos: PasoImplementacion[];
  columns?: 3 | 4;
  /** `stepper` = horizontal/vertical con íconos; `timeline` = numeración 01/02 */
  variant?: "stepper" | "timeline";
};

/** Stepper reutilizable — implementación en landings de servicio y nicho. */
export default function ImplementacionStepper({
  titulo = "Cómo trabajamos",
  subtitulo,
  labelStyle = "eyebrow",
  label = "Implementación",
  pasos,
  columns = pasos.length === 3 ? 3 : 4,
  variant = "stepper",
}: ImplementacionStepperProps) {
  const gridCols = columns === 3 ? "md:grid-cols-3" : "md:grid-cols-4";

  return (
    <section className="mx-auto max-w-5xl px-6 section-py">
      <Reveal>
        {labelStyle === "chip" ? (
          <span className="chip">{label}</span>
        ) : (
          <p className="section-eyebrow">{label}</p>
        )}
        <h2 className={`text-h2 text-ink ${labelStyle === "chip" ? "mt-4" : "mt-2"}`}>
          {titulo}
        </h2>
        {subtitulo && <p className="mt-3 max-w-lg text-ink/60">{subtitulo}</p>}
      </Reveal>

      {variant === "timeline" ? (
        <Reveal delay={80}>
          <ol className="mt-10 space-y-0">
            {pasos.map((step, i) => (
              <li key={step.t} className="flex gap-6 sm:gap-6">
                <div className="flex flex-col items-center">
                  <span className="font-display text-3xl italic text-terracota sm:text-4xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {i < pasos.length - 1 && (
                    <span className="my-2 min-h-10 w-px grow bg-ink/12 sm:min-h-14" aria-hidden />
                  )}
                </div>
                <div className="pb-10 sm:pb-12">
                  <div className="flex items-center gap-2">
                    <step.icon className="h-4 w-4 text-terracota" strokeWidth={1.5} />
                    <h3 className="font-medium text-ink">{step.t}</h3>
                  </div>
                  {step.entregable && (
                    <p className="mt-2 flex items-start gap-1.5 text-xs font-medium text-terracota-dark/80">
                      <PackageCheck className="mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                      <span>Entregable: {step.entregable}</span>
                    </p>
                  )}
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">{step.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      ) : (
        <Reveal delay={80}>
          <ol className={`mt-10 hidden md:grid ${gridCols} md:gap-0`}>
            {pasos.map((step, i) => (
              <li key={step.t} className="relative flex flex-col items-center px-3 text-center">
                {i < pasos.length - 1 && (
                  <span
                    className="absolute left-[calc(50%+1.25rem)] top-5 h-px w-[calc(100%-2.5rem)] bg-terracota/25"
                    aria-hidden
                  />
                )}
                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-terracota/25 bg-white shadow-sm">
                  <step.icon className="h-4 w-4 text-terracota" strokeWidth={1.5} aria-hidden />
                </span>
                <span className="mt-3 text-xs font-semibold uppercase tracking-wide text-terracota-dark/80">
                  Paso {i + 1}
                </span>
                <p className="mt-1 font-medium text-ink">{step.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">{step.d}</p>
              </li>
            ))}
          </ol>

          <ol className="mt-8 space-y-0 md:hidden">
            {pasos.map((step, i) => (
              <li key={step.t} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-terracota/25 bg-white shadow-sm">
                    <step.icon className="h-4 w-4 text-terracota" strokeWidth={1.5} aria-hidden />
                  </span>
                  {i < pasos.length - 1 && (
                    <span className="my-2 min-h-8 w-px grow bg-terracota/20" aria-hidden />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-xs font-semibold uppercase tracking-wide text-terracota-dark/80">
                    Paso {i + 1}
                  </p>
                  <p className="mt-0.5 font-medium text-ink">{step.t}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/55">{step.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      )}
    </section>
  );
}
