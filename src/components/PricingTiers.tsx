import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";

type Paquete = {
  nombre: string;
  destacado?: boolean;
  setup: string;
  mensualidad: string;
  features: string[];
};

type PricingTiersProps = {
  paquetes: Paquete[];
  titulo?: string;
  chipDestacado?: string;
  /** CTA opcional bajo el grid (ej. botón de WhatsApp), mismo bloque que antes de extraer el componente. */
  children?: React.ReactNode;
};

/** Grid de paquetes por tier (Esencial/Profesional/Integral) — reutilizado en páginas de nicho. */
export default function PricingTiers({
  paquetes,
  titulo = "Precios claros. Sin sorpresas.",
  chipDestacado = "El más elegido",
  children,
}: PricingTiersProps) {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20">
      <Reveal>
        <h2 className="text-2xl font-medium text-ink md:text-3xl">{titulo}</h2>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {paquetes.map((p, i) => (
          <Reveal key={p.nombre} delay={i * 80}>
            <div className={`h-full ${p.destacado ? "card-soft-tint" : "card-soft"}`}>
              {p.destacado && <span className="chip mb-3">{chipDestacado}</span>}
              <h3 className="text-lg font-medium text-ink">{p.nombre}</h3>
              <p className="mt-3 text-2xl font-medium text-ink">{p.setup}</p>
              <p className="text-xs text-ink/50">Configuración</p>
              <p className="mt-1 text-lg font-medium text-dorado">{p.mensualidad}/mes</p>
              <ul className="mt-4 space-y-2 text-sm text-ink/65">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-terracota" strokeWidth={1.75} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      {children && <div className="mt-8 text-center">{children}</div>}
    </section>
  );
}
