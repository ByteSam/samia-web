import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";

export type SolutionItem = {
  icon: LucideIcon;
  t: string;
  d: string;
};

type SolutionSectionProps = {
  titulo: string;
  subtitulo?: string;
  chip?: string;
  items: SolutionItem[];
  /** `compact` usa card-compact; `default` usa card-soft */
  cardVariant?: "default" | "compact";
};

/** Bloque "La solución" — chip + grid de 3 cards en section-band. */
export default function SolutionSection({
  titulo,
  subtitulo,
  chip = "La solución",
  items,
  cardVariant = "default",
}: SolutionSectionProps) {
  const cardClass =
    cardVariant === "compact"
      ? "card-compact hover-lift h-full bg-white p-5 sm:p-6"
      : "card-soft hover-lift h-full p-5 sm:p-6";

  return (
    <div className="section-band border-t border-ink/6">
      <section className="mx-auto max-w-5xl px-6 section-py">
        <Reveal>
          <span className="chip">{chip}</span>
          <h2 className="text-h2 mt-4 text-ink">{titulo}</h2>
          {subtitulo && <p className="mt-2 max-w-md text-sm text-ink/55">{subtitulo}</p>}
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {items.map((item) => (
              <div key={item.t} className={cardClass}>
                <item.icon
                  className={`text-terracota ${cardVariant === "compact" ? "h-5 w-5" : "h-6 w-6"}`}
                  strokeWidth={1.5}
                />
                <p className={`font-medium text-ink ${cardVariant === "compact" ? "mt-3" : "mt-4"}`}>
                  {item.t}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{item.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
