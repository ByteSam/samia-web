import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { casosEntregadosVisibles } from "@/lib/casos";

type Props = {
  variant?: "full" | "compact";
};

function BrowserPreview({ imagen, alt }: { imagen: string; alt: string }) {
  return (
    <div className="browser-preview mb-5 overflow-hidden rounded-xl border shadow-rest">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={imagen} alt={alt} className="aspect-[16/10] w-full object-cover object-top" />
    </div>
  );
}

/** Sección de proyectos / casos reales — reutilizable en Home y landings. */
export default function ProyectosRecientes({ variant = "full" }: Props) {
  const entregados = casosEntregadosVisibles();

  if (entregados.length === 0) return null;

  return (
    <section id="casos-reales" className="section-depth-b mx-auto max-w-5xl px-6 section-py section-horizon">
      <Reveal>
        <span className="chip">Casos reales</span>
        <h2 className="text-h2 mt-4 text-ink">Proyectos realizados</h2>
        {variant === "full" && (
          <p className="mt-2 max-w-md text-ink/60">
            Trabajo entregado — sin métricas inventadas.
          </p>
        )}
      </Reveal>
      <div className="mt-10 grid gap-6">
        {entregados.map((c, i) => (
          <Reveal key={c.nombre} delay={i * 80}>
            {"problema" in c && (
              <div className="card-soft-tint hover-lift flex h-full flex-col">
                {c.imagen && (
                  <BrowserPreview imagen={c.imagen} alt={`Captura del sitio ${c.nombre}`} />
                )}
                <c.icon className="h-7 w-7 text-terracota" strokeWidth={1.5} />
                <h3 className="mt-5 text-lg font-medium text-ink">{c.nombre}</h3>
                <p className="mt-1 text-sm text-ink/50">{c.rubro}</p>
                <dl className="mt-5 space-y-4 text-sm md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-terracota-dark/70">
                      Problema
                    </dt>
                    <dd className="mt-1 text-ink/70">{c.problema}</dd>
                  </div>
                  {variant === "full" && (
                    <>
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
                    </>
                  )}
                </dl>
                {"url" in c && (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill btn-pill-ghost mt-6 inline-flex w-fit items-center gap-1.5"
                  >
                    Ver sitio
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
