import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const TERRACOTA = "#C1502E";
const ARENA = "#F6ECDA";
const INK = "#241509";

/** Logo oficial — eclipse + wordmark HTML (satori no soporta <text> en SVG). */
function AfynovaLogo({ height }: { height: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: Math.round(height * 0.14) }}>
      <svg width={height} height={height} viewBox="0 0 120 120" fill="none">
        <defs>
          <mask id="og-eclipse-lockup">
            <rect width="120" height="120" fill="white" />
            <circle cx="84.19" cy="38.83" r="25.2" fill="black" />
          </mask>
        </defs>
        <circle cx="60" cy="60" r="50.4" fill={TERRACOTA} mask="url(#og-eclipse-lockup)" />
      </svg>
      <span
        style={{
          fontSize: Math.round(height * 0.68),
          fontWeight: 600,
          color: INK,
          letterSpacing: "0.02em",
          lineHeight: 1,
        }}
      >
        AFYNOVA
      </span>
    </div>
  );
}

/** Genera imagen Open Graph por ruta — título + subtítulo opcional. */
export function createOgImage(title: string, subtitle?: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          background: ARENA,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <AfynovaLogo height={48} />
        </div>
        <div style={{ display: "flex", marginTop: 48, maxWidth: 920 }}>
          <span style={{ fontSize: 52, color: INK, fontWeight: 600, lineHeight: 1.15 }}>
            {title}
          </span>
        </div>
        {subtitle ? (
          <div style={{ display: "flex", marginTop: 40 }}>
            <span style={{ fontSize: 26, color: TERRACOTA, fontWeight: 600, letterSpacing: 1 }}>
              {subtitle}
            </span>
          </div>
        ) : null}
      </div>
    ),
    { ...ogSize }
  );
}
