/** Labels en lenguaje de beneficio — más legibles en motion que nombres técnicos */
const ITEMS = [
  "Webs que convierten",
  "Agente IA por WhatsApp",
  "Automatización",
  "Analítica de negocio",
  "Infraestructura digital",
];

/** Separador ✦ con glow — marquee marciano */
function StarSep() {
  return (
    <span className="marquee-star shrink-0 text-sm leading-none text-dorado-light" aria-hidden="true">
      ✦
    </span>
  );
}

/** Franja marquee de servicios — divider editorial entre hero y problema. */
export default function MarqueeStrip() {
  const track = [...ITEMS, ...ITEMS];

  return (
    <div
      className="marquee-band marquee-band-fade border-y border-ink/5 overflow-hidden py-3"
      aria-hidden="true"
    >
      <div className="marquee-track flex gap-10 whitespace-nowrap">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-10 text-sm font-medium tracking-wide text-secondary"
          >
            {item}
            <StarSep />
          </span>
        ))}
      </div>
    </div>
  );
}
