import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";

export type CatalogItem = {
  icon: LucideIcon;
  nombre: string;
  descripcion?: string;
  entrega?: string;
  setup: string;
  retainer?: string;
  badge?: string;
};

export type CatalogGroup = {
  label: string;
  items: CatalogItem[];
  columns?: 2 | 3;
};

type CatalogGridProps = {
  items?: CatalogItem[];
  groups?: CatalogGroup[];
  titulo?: string;
  chip?: string;
  subtitulo?: string;
  columns?: 2 | 3;
  /** Texto opcional bajo el grid, mismo bloque que antes de extraer el componente. */
  children?: React.ReactNode;
};

const GRID_CLASSES: Record<2 | 3, string> = {
  2: "grid gap-6 md:grid-cols-2",
  3: "grid gap-6 sm:grid-cols-2 md:grid-cols-3",
};

function CatalogCard({ item }: { item: CatalogItem }) {
  const hasPricingDetails = item.entrega || item.retainer;

  return (
    <div
      className={`card-soft hover-lift relative flex flex-col p-5 sm:p-6 ${
        item.badge ? "ring-1 ring-terracota/20" : ""
      }`}
    >
      {item.badge && (
        <span className="chip absolute right-4 top-4 text-caption">{item.badge}</span>
      )}
      <item.icon className="h-6 w-6 text-terracota" strokeWidth={1.5} />
      <h3 className={`text-h3 text-ink ${item.badge ? "mt-4 pr-24" : "mt-4"}`}>
        {item.nombre}
      </h3>
      {item.entrega && (
        <span className="chip text-caption mt-2 w-fit">Entrega: {item.entrega}</span>
      )}
      {item.descripcion && (
        <p className="mt-2 text-sm leading-relaxed text-ink/60">{item.descripcion}</p>
      )}
      {hasPricingDetails ? (
        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-xl font-medium text-ink">{item.setup}</p>
            <p className="text-xs text-ink/50">Setup</p>
          </div>
          {item.retainer && (
            <p className="text-sm font-medium text-dorado">{item.retainer}/mes</p>
          )}
        </div>
      ) : (
        <>
          <p className="mt-3 text-xl font-medium text-ink">{item.setup}</p>
          <p className="text-xs text-ink/50">Setup</p>
        </>
      )}
    </div>
  );
}

function CatalogItemsGrid({
  items,
  columns,
}: {
  items: CatalogItem[];
  columns: 2 | 3;
}) {
  return (
    <div className={GRID_CLASSES[columns]}>
      {items.map((item) => (
        <CatalogCard key={item.nombre} item={item} />
      ))}
    </div>
  );
}

/** Grid de catálogo (ítems individuales con precio) — reutilizado en páginas de servicio. */
export default function CatalogGrid({
  items,
  groups,
  titulo = "Catálogo, en soles",
  chip,
  subtitulo,
  columns = 2,
  children,
}: CatalogGridProps) {
  return (
    <section className="mx-auto max-w-5xl px-6 section-py">
      <Reveal>
        {chip && <span className="chip">{chip}</span>}
        <h2 className={`text-h2 text-ink ${chip ? "mt-4" : ""}`}>{titulo}</h2>
        {subtitulo && <p className="mt-2 max-w-md text-ink/60">{subtitulo}</p>}
      </Reveal>
      <Reveal delay={80}>
        {groups ? (
          <div className="mt-10 space-y-12">
            {groups.map((group) => (
              <div key={group.label}>
                <p className="section-eyebrow">{group.label}</p>
                <CatalogItemsGrid
                  items={group.items}
                  columns={group.columns ?? columns}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-10">
            <CatalogItemsGrid items={items ?? []} columns={columns} />
          </div>
        )}
        {children && <div className="mt-6">{children}</div>}
      </Reveal>
    </section>
  );
}
