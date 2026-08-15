import { ShieldCheck } from "lucide-react";

type Props = {
  className?: string;
};

/** Línea de confianza visible — escalamiento a humano (Fase 8 #66 / Fase 9 #76). */
export default function AiSafetyLine({ className = "" }: Props) {
  return (
    <p className={`ai-safety-line ${className}`.trim()}>
      <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-terracota" strokeWidth={2} aria-hidden />
      Si no sabe la respuesta, te la pasa a ti directo.
    </p>
  );
}
