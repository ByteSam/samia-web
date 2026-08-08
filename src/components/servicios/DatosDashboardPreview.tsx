/** Vista previa ilustrativa de tablero — sin métricas inventadas. */
export default function DatosDashboardPreview() {
  const widgets = [
    { label: "Consultas esta semana", valor: "—" },
    { label: "Leads nuevos", valor: "—" },
    { label: "Citas confirmadas", valor: "—" },
    { label: "Tasa de respuesta", valor: "—" },
  ];

  return (
    <div className="card-compact border-terracota/10 bg-gradient-to-br from-white to-terracota/[0.04] p-5 sm:p-6">
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-medium text-ink">Tablero de ejemplo</p>
        <span className="rounded-full bg-ink px-2.5 py-0.5 text-[0.6rem] font-medium text-sand">
          Ejemplo ilustrativo
        </span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {widgets.map((w) => (
          <div
            key={w.label}
            className="rounded-xl border border-ink/8 bg-white px-3 py-4 text-center shadow-sm"
          >
            <p className="text-[0.65rem] font-medium uppercase tracking-wide text-ink/45">
              {w.label}
            </p>
            <p className="mt-2 font-display text-2xl italic text-ink/25">{w.valor}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-xl border border-dashed border-ink/12 bg-ink/[0.02] px-4 py-6 text-center text-xs text-ink/40">
        Gráfico de tendencia — datos de tu negocio en el diagnóstico
      </div>
    </div>
  );
}
