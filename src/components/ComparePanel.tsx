import type { LucideIcon } from "lucide-react";

type ComparePanelProps = {
  tone: "muted" | "accent";
  title: string;
  badge?: string;
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
};

/** Panel reutilizable para comparaciones antes/después en landings. */
export default function ComparePanel({
  tone,
  title,
  badge,
  icon: Icon,
  children,
  className = "",
}: ComparePanelProps) {
  const isAccent = tone === "accent";

  return (
    <div
      className={`compare-panel h-full p-5 sm:p-6 ${
        isAccent ? "compare-panel-accent" : "compare-panel-muted"
      } ${className}`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {Icon && (
            <Icon className="h-5 w-5 shrink-0 text-terracota" strokeWidth={1.5} aria-hidden />
          )}
          <p className="text-base font-medium text-ink">{title}</p>
        </div>
        {badge && (
          <span
            className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${
              isAccent ? "bg-terracota/12 text-terracota-dark" : "bg-ink/8 text-ink/55"
            }`}
          >
            {badge}
          </span>
        )}
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}
