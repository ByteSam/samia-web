import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";

type SolutionItem = {
  icon: LucideIcon;
  t: string;
  d: string;
};

type SolutionGridProps = {
  titulo: string;
  items: SolutionItem[];
  /** Contenido opcional bajo el grid (ej. párrafo de cierre), mismo bloque que antes de extraer el componente. */
  children?: React.ReactNode;
};

/** Grid de 3 cards (ícono + título + descripción) para la sección "La solución" — reutilizado en páginas de nicho. */
export default function SolutionGrid({ titulo, items, children }: SolutionGridProps) {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-20">
      <Reveal>
        <h2 className="text-2xl font-medium text-ink md:text-3xl">{titulo}</h2>
      </Reveal>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.t} delay={i * 80}>
            <div className="card-soft hover-lift h-full">
              <item.icon className="h-6 w-6 text-terracota" strokeWidth={1.5} />
              <p className="mt-4 font-medium text-ink">{item.t}</p>
              <p className="mt-2 text-sm text-ink/60">{item.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
      {children}
    </section>
  );
}
