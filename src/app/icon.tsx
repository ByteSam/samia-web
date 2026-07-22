import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

const TERRACOTA = "#C1502E";
const ARENA = "#F6ECDA";

/**
 * Favicon temporal — símbolo "El Corte Preciso" (círculo con una única
 * intervención geométrica diagonal), monocromo. Provisional hasta tener
 * el logotipo final (ver files/identidad-visual-ichan.md, símbolo aprobado
 * conceptualmente, pendiente de refinamiento visual con capacidad de Figma).
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: ARENA,
        }}
      >
        <div style={{ position: "relative", width: 26, height: 26, display: "flex" }}>
          <div
            style={{
              width: 26,
              height: 26,
              borderRadius: "50%",
              background: TERRACOTA,
              display: "flex",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 9,
              height: 9,
              background: ARENA,
              top: -1,
              right: -1,
              transform: "rotate(40deg)",
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
