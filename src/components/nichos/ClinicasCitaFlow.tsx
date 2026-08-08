const STEPS = [
  {
    id: "consulta",
    t: "Consulta",
    d: "El paciente escribe por WhatsApp.",
  },
  {
    id: "cita",
    t: "Cita agendada",
    d: "Horario confirmado sin ida y vuelta.",
  },
  {
    id: "confirmada",
    t: "Turno confirmado",
    d: "Recordatorio 24h antes y confirmación por chat.",
  },
];

/** Timeline clínicas — sin Reveal (hero instantáneo; evita opacidad 0 en pasos). */
export default function ClinicasCitaFlow() {
  return (
    <div className="mt-8">
      <p className="section-eyebrow">El ciclo de una cita</p>

      {/* Desktop — 3 pasos */}
      <div className="mt-4 hidden sm:flex sm:items-stretch sm:gap-3">
        {STEPS.map((step, i) => (
          <div
            key={step.id}
            className="flex min-w-0 flex-1 flex-col items-center rounded-2xl border border-ink/8 bg-white/80 px-3 py-4 text-center"
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full border border-terracota/25 bg-white text-xs font-semibold text-terracota-dark shadow-sm"
            >
              {i + 1}
            </span>
            <p className="mt-3 text-sm font-medium text-ink">{step.t}</p>
            <p className="mt-1 text-xs leading-snug text-ink/50">{step.d}</p>
          </div>
        ))}
      </div>

      {/* Mobile — vertical */}
      <ol className="mt-4 space-y-0 sm:hidden">
        {STEPS.map((step, i) => (
          <li key={step.id} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-terracota/10 text-xs font-semibold text-terracota-dark"
              >
                {i + 1}
              </span>
              {i < STEPS.length - 1 && (
                <span className="my-1 min-h-4 w-px grow bg-ink/12" aria-hidden />
              )}
            </div>
            <div className="pb-4 pt-0.5">
              <p className="text-sm font-medium text-ink">{step.t}</p>
              <p className="mt-0.5 text-xs text-ink/55">{step.d}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
