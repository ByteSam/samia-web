import Reveal from "@/components/Reveal";

type ProblemSectionProps = {
  titulo: string;
  bullets: string[];
  stat: string;
};

/** Bloque "El problema" (card-soft con título + bullets + stat de cierre) — reutilizado en páginas de nicho. */
export default function ProblemSection({ titulo, bullets, stat }: ProblemSectionProps) {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-20">
      <Reveal>
        <div className="card-soft">
          <h2 className="text-2xl font-medium text-ink md:text-3xl">{titulo}</h2>
          <ul className="mt-6 space-y-3 text-ink/65">
            {bullets.map((b) => (
              <li key={b}>• {b}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink/50">{stat}</p>
        </div>
      </Reveal>
    </section>
  );
}
