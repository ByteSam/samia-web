import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";

type CatalogItem = {
  icon: LucideIcon;
  nombre: string;
  entrega?: string;
  setup: string;
  retainer?: string;
};

type CatalogGridProps = {
  items: CatalogItem[];
  titulo?: string;
  columns?: 2 | 3;
  pb?: "16" | "20";
  /** Texto opcional bajo el grid, mismo bloque que antes de extraer el componente. */
  children?: React.ReactNode;
};

const GRID_CLASSES: Record<2 | 3, string> = {
  2: "mt-10 grid gap-6 md:grid-cols-2",
  3: "mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3",
};

const SECTION_CLASSES: Record<"16" | "20", string> = {
  "16": "mx-auto max-w-5xl px-6 pb-16",
  "20": "mx-auto max-w-5xl px-6 pb-20",
};

/** Grid de catálogo (ítems individuales con precio) — reutilizado en páginas de servicio. */
export default function CatalogGrid({
  items,
  titulo = "Catálogo, en soles",
  columns = 2,
  pb = "20",
  children,
}: CatalogGridProps) {
  return (
    <section className={SECTION_CLASSES[pb]}>
      <Reveal>
        <h2 className="text-2xl font-medium text-ink md:text-3xl">{titulo}</h2>
      </Reveal>
      <div className={GRID_CLASSES[columns]}>
        {items.map((p, i) =>
          p.entrega || p.retainer ? (
            <Reveal key={p.nombre} delay={i * 70}>
              <div className="card-soft hover-lift flex h-full flex-col">
                <p.icon className="h-6 w-6 text-terracota" strokeWidth={1.5} />
                <h3 className="mt-4 font-medium text-ink">{p.nombre}</h3>
                {p.entrega && (
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-terracota-dark/70">
                    Entrega: {p.entrega}
                  </p>
                )}
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <p className="text-xl font-medium text-ink">{p.setup}</p>
                    <p className="text-xs text-ink/50">Setup</p>
                  </div>
                  {p.retainer && (
                    <p className="text-sm font-medium text-dorado">{p.retainer}/mes</p>
                  )}
                </div>
              </div>
            </Reveal>
          ) : (
            <Reveal key={p.nombre} delay={i * 70}>
              <div className="card-soft hover-lift h-full">
                <p.icon className="h-6 w-6 text-terracota" strokeWidth={1.5} />
                <h3 className="mt-4 font-medium text-ink">{p.nombre}</h3>
                <p className="mt-3 text-xl font-medium text-ink">{p.setup}</p>
                <p className="text-xs text-ink/50">Setup</p>
              </div>
            </Reveal>
          )
        )}
      </div>
      {children && <div className="mt-6">{children}</div>}
    </section>
  );
}
