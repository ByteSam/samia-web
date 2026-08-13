import Reveal from "@/components/Reveal";

type ProblemSectionProps = {
  titulo: string;
  bullets: string[];
  stat: string;
  /** `band` = dentro de section-band (card blanca, menos padding inferior). */
  variant?: "default" | "band";
};

/** Bloque "El problema" — reutilizado en páginas de nicho. */
export default function ProblemSection({
  titulo,
  bullets,
  stat,
  variant = "default",
}: ProblemSectionProps) {
  const isBand = variant === "band";

  return (
    <section
      className={`mx-auto max-w-4xl px-6 ${isBand ? "py-16 md:py-20" : "pb-20"}`}
    >
      <Reveal>
        <div className={`card-soft ${isBand ? "bg-white" : ""}`}>
          <h2 className="text-h2 text-ink">{titulo}</h2>
          <ul className="mt-6 space-y-3 text-ink/65">
            {bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="text-terracota/70" aria-hidden>•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <blockquote className="mt-6 border-t border-ink/8 pt-5">
            <p className="font-display text-base italic leading-relaxed text-terracota-dark sm:text-lg">
              {stat}
            </p>
          </blockquote>
        </div>
      </Reveal>
    </section>
  );
}
