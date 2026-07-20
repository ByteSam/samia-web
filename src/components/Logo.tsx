import { Waves } from "lucide-react";

type LogoProps = {
  className?: string;
  /** Altura en px de referencia para escalar el logo */
  height?: number;
};

/** Marca ichan — wordmark en texto (el archivo logo.png tenía un halo que lo hacía ilegible a tamaño navbar; queda como wordmark hasta tener un archivo nuevo sin ese problema). */
export default function Logo({ className, height = 40 }: LogoProps) {
  const fontSize = height * 0.72;
  const iconSize = height * 0.44;
  const badgeSize = height * 0.78;
  return (
    <span
      className={`inline-flex items-center gap-2 font-display text-ink ${className ?? ""}`}
      style={{ fontSize }}
    >
      <span
        className="inline-flex shrink-0 items-center justify-center rounded-full bg-dorado/15"
        style={{ width: badgeSize, height: badgeSize }}
      >
        <Waves className="text-dorado" style={{ width: iconSize, height: iconSize }} strokeWidth={2} />
      </span>
      ichan
    </span>
  );
}
