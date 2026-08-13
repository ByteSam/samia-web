import { Scale, Check, X } from "lucide-react";
import Reveal from "@/components/Reveal";

const HACE = [
  "Responde consultas frecuentes con la información de tu estudio.",
  "Clasifica el tipo de consulta según reglas que defines.",
  "Te avisa cuando algo suena urgente o sensible.",
  "Agenda la primera consulta sin ida y vuelta de mensajes.",
];

const NO_HACE = [
  "No da asesoría legal ni interpreta el caso del cliente.",
  "No recomienda estrategias, plazos legales ni resultados posibles.",
  "No reemplaza al abogado — solo atiende, filtra y agenda.",
];

/** Bloque firma legal — confianza: qué hace y qué no hace el asistente. */
export default function LegalLimitsBlock() {
  return (
    <section className="section-band section-py">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <span className="chip">Confianza · Límites claros</span>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Scale className="h-8 w-8 text-terracota" strokeWidth={1.5} />
            <h2 className="text-h2 text-ink">Qué hace y qué no hace</h2>
          </div>
          <p className="mt-4 max-w-2xl text-ink/60">
            Importante para estudios de abogacía: la herramienta organiza el primer
            contacto; la asesoría sigue siendo tuya.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Reveal delay={80}>
            <div className="card-soft-tint h-full">
              <p className="font-medium text-ink">El asistente hace</p>
              <ul className="mt-5 space-y-3 text-sm text-ink/70">
                {HACE.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-terracota"
                      strokeWidth={1.75}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="card-soft h-full border-ink/12">
              <p className="font-medium text-ink">El asistente no hace</p>
              <ul className="mt-5 space-y-3 text-sm text-ink/70">
                {NO_HACE.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <X
                      className="mt-0.5 h-4 w-4 shrink-0 text-terracota-dark/70"
                      strokeWidth={1.75}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
