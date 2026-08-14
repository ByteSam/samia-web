import { useId } from "react";

type LogoProps = {
  className?: string;
  height?: number;
};

/**
 * Lockup alineado al logo anterior (viewBox 317×71):
 * - Símbolo Ø 50 en caja de 71 (~11 px de aire arriba/abajo)
 * - Wordmark AFYNOVA con cap-height ~39 (≈ 78% del diámetro)
 * - Clearspace ~19 entre eclipse y la A
 */
const VIEWBOX_W = 348;
const VIEWBOX_H = 71;
const CX = 25;
const CY = 36;
const R = 25;
const CLEARSPACE = 19;
const WORDMARK_SIZE = 56;

/** Marca afynova — eclipse E6c + wordmark AFYNOVA. Header y footer. */
export default function Logo({ className, height = 32 }: LogoProps) {
  const maskId = `eclipse-lockup-${useId().replace(/:/g, "")}`;
  const moonR = R * 0.5;
  const moonCx = CX + R * 0.48;
  const moonCy = CY + R * -0.42;
  const wordmarkX = CX + R + CLEARSPACE;
  const width = (height / VIEWBOX_H) * VIEWBOX_W;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="afynova"
      overflow="visible"
    >
      <defs>
        <mask id={maskId}>
          <rect width={VIEWBOX_W} height={VIEWBOX_H} fill="white" />
          <circle cx={moonCx} cy={moonCy} r={moonR} fill="black" />
        </mask>
      </defs>
      <circle cx={CX} cy={CY} r={R} fill="#C1502E" mask={`url(#${maskId})`} />
      <text
        x={wordmarkX}
        y={CY + 1}
        dominantBaseline="central"
        style={{ fontFamily: "var(--font-wordmark), Inter, system-ui, sans-serif" }}
        fontSize={WORDMARK_SIZE}
        fontWeight="600"
        fill="currentColor"
        letterSpacing="0.4"
      >
        AFYNOVA
      </text>
    </svg>
  );
}
