/** Labels en lenguaje de beneficio — más legibles en motion que nombres técnicos */
const ITEMS = [
  "Webs que convierten",
  "Agente IA por WhatsApp",
  "Automatización",
  "Analítica de negocio",
  "Infraestructura digital",
];

/** Separador SVG circle — consistente en todos los OS (no depende de Unicode) */
function Dot() {
  return (
    <svg
      width="4"
      height="4"
      viewBox="0 0 4 4"
      fill="none"
      className="shrink-0 text-terracota/40"
      aria-hidden="true"
    >
      <circle cx="2" cy="2" r="2" fill="currentColor" />
    </svg>
  );
}

/** Franja marquee de servicios — divider editorial entre hero y problema. */
export default function MarqueeStrip() {
  const track = [...ITEMS, ...ITEMS];

  return (
    <div
      className="border-y border-ink/5 overflow-hidden py-3.5" style={{ background: "rgba(246,236,218,0.55)" }}
      aria-hidden="true"
    >
      <div className="marquee-track flex gap-10 whitespace-nowrap">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-10 text-sm font-medium tracking-wide text-ink/60"
          >
            {item}
            <Dot />
          </span>
        ))}
      </div>
    </div>
  );
}
