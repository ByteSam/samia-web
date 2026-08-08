import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const TERRACOTA = "#C1502E";
const ARENA = "#F6ECDA";
const INK = "#241509";

/** Logo oficial — mismos paths de public/logo/afynova.svg */
function AfynovaLogo({ height }: { height: number }) {
  const width = (height * 317) / 71;
  return (
    <svg width={width} height={height} viewBox="0 0 317 71" fill="none">
      <path
        d="M69.176 55L80.376 15.8H91.016L102.16 55H95.944L93.368 45.76H78.024L75.448 55H69.176ZM79.536 40.16H91.856L86.144 19.552H85.248L79.536 40.16ZM107.471 55V15.8H131.663V21.288H113.519V32.6H130.207V38.088H113.519V55H107.471ZM147.685 55V40.776L134.077 15.8H140.909L150.317 33.552H151.157L160.565 15.8H167.397L153.789 40.776V55H147.685ZM172.111 55V15.8H183.759L194.399 50.968H195.295V15.8H201.287V55H189.639L178.999 19.776H178.103V55H172.111ZM224.191 55.784C219.375 55.784 215.548 54.44 212.711 51.752C209.874 49.0267 208.455 45.1067 208.455 39.992V30.808C208.455 25.6933 209.874 21.792 212.711 19.104C215.548 16.3787 219.375 15.016 224.191 15.016C229.007 15.016 232.834 16.3787 235.671 19.104C238.546 21.792 239.983 25.6933 239.983 30.808V39.992C239.983 45.1067 238.546 49.0267 235.671 51.752C232.834 54.44 229.007 55.784 224.191 55.784ZM224.191 50.352C227.29 50.352 229.679 49.456 231.359 47.664C233.039 45.8347 233.879 43.352 233.879 40.216V30.584C233.879 27.448 233.039 24.984 231.359 23.192C229.679 21.3627 227.29 20.448 224.191 20.448C221.167 20.448 218.796 21.3627 217.079 23.192C215.362 24.984 214.503 27.448 214.503 30.584V40.216C214.503 43.352 215.362 45.8347 217.079 47.664C218.796 49.456 221.167 50.352 224.191 50.352ZM254.33 55L243.41 15.8H249.682L259.202 51.192H259.93L269.394 15.8H275.666L264.802 55H254.33ZM275.348 55L286.548 15.8H297.188L308.332 55H302.116L299.54 45.76H284.196L281.62 55H275.348ZM285.708 40.16H298.028L292.316 19.552H291.42L285.708 40.16Z"
        fill={INK}
      />
      <path
        d="M25 11C29.5732 11 33.859 12.2289 37.5469 14.373L31 18.6641L38.8828 26L45.4873 21.6719C48.3303 25.7295 50 30.6694 50 36C50 49.8071 38.8071 61 25 61C11.1929 61 0 49.8071 0 36C4.02661e-07 22.1929 11.1929 11 25 11Z"
        fill={TERRACOTA}
      />
    </svg>
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
