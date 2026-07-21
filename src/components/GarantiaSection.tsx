import { ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";

type GarantiaSectionProps = {
  /** Frase después de "Si ", sin punto final. Ej: "el asistente no te ahorra tiempo ni recupera clientes" */
  condicion: string;
  /** Oración extra opcional al final, ej. "Así de seguro estoy de que funciona." */
  notaExtra?: string;
};

/** Bloque de garantía (piloto 14 días) — reutilizado en Home y en todas las páginas de servicio/nicho. */
export default function GarantiaSection({ condicion, notaExtra }: GarantiaSectionProps) {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-20">
      <Reveal>
        <div className="card-soft-tint text-center">
          <ShieldCheck className="mx-auto h-8 w-8 text-terracota" strokeWidth={1.5} />
          <h2 className="mt-4 text-2xl font-normal text-ink md:text-3xl">
            Riesgo cero para ti.
          </h2>
          <p className="mt-4 text-ink/65">
            Piloto de <strong className="font-medium text-ink">14 días</strong>. Si{" "}
            {condicion},{" "}
            <strong className="font-medium text-ink">no pagas la configuración</strong>.
            {notaExtra ? ` ${notaExtra}` : ""}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
