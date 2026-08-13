import { ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import WhatsAppButton from "@/components/WhatsAppButton";

type GarantiaSectionProps = {
  condicion: string;
  notaExtra?: string;
  /** "dark" renders open text on section-ink background (no card wrapper) */
  variant?: "default" | "dark";
  cta?: {
    message: string;
    textoBoton: string;
    source?: string;
  };
};

/** Bloque de garantía (piloto 14 días) — reutilizado en Home y en páginas de servicio/nicho. */
export default function GarantiaSection({
  condicion,
  notaExtra,
  variant = "default",
  cta,
}: GarantiaSectionProps) {
  if (variant === "dark") {
    return (
      <section className="container-prose section-py text-center">
        <Reveal>
          <ShieldCheck className="mx-auto h-6 w-6 text-terracota" strokeWidth={1.5} />
          <h2 className="text-h2 mt-4 text-sand">Riesgo cero para ti.</h2>
          <p className="mt-4 text-sand/70">
            Piloto de <strong className="font-medium text-sand">14 días</strong>. Si{" "}
            {condicion},{" "}
            <strong className="font-medium text-sand">no pagas la configuración</strong>.
            {notaExtra ? ` ${notaExtra}` : ""}
          </p>
          {cta && (
            <div className="mt-8 flex justify-center">
              <WhatsAppButton
                message={cta.message}
                source={cta.source}
                variant="outline"
                className="border-sand/30 text-sand hover:bg-sand/10"
              >
                {cta.textoBoton}
              </WhatsAppButton>
            </div>
          )}
        </Reveal>
      </section>
    );
  }

  return (
    <section className="container-prose section-py">
      <Reveal>
        <div className="card-soft-tint text-center">
          <ShieldCheck className="mx-auto h-8 w-8 text-terracota" strokeWidth={1.5} />
          <h2 className="text-h2 mt-4 text-ink">Riesgo cero para ti.</h2>
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
