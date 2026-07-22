import { ImageResponse } from "next/og";

export const alt = "ichan — Tu negocio nunca deja pasar un cliente.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TERRACOTA = "#C1502E";
const ARENA = "#F6ECDA";
const INK = "#241509";

function CorteSymbol({ size: s }: { size: number }) {
  return (
    <div style={{ position: "relative", width: s, height: s, display: "flex" }}>
      <div style={{ width: s, height: s, borderRadius: "50%", background: TERRACOTA, display: "flex" }} />
      <div
        style={{
          position: "absolute",
          width: s * 0.34,
          height: s * 0.34,
          background: ARENA,
          top: -s * 0.02,
          right: -s * 0.02,
          transform: "rotate(40deg)",
          display: "flex",
        }}
      />
    </div>
  );
}

/** Imagen Open Graph — para compartir en WhatsApp, LinkedIn, X. Contenido simple: sin claims de IA, sin adjetivos vacíos. */
export default function Image() {
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
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <CorteSymbol size={56} />
          <span style={{ fontSize: 34, color: INK, fontWeight: 600 }}>ichan</span>
        </div>
        <div style={{ display: "flex", marginTop: 48, maxWidth: 920 }}>
          <span style={{ fontSize: 56, color: INK, fontWeight: 600, lineHeight: 1.15 }}>
            Tu negocio nunca deja pasar un cliente.
          </span>
        </div>
        <div style={{ display: "flex", marginTop: 40 }}>
          <span style={{ fontSize: 26, color: TERRACOTA, fontWeight: 600, letterSpacing: 1 }}>
            Automatización · WhatsApp · Web
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
