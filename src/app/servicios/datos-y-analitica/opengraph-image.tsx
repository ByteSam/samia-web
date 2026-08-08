import { createOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Datos y analítica | afynova";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage(
    "Tableros y KPIs con tus datos reales.",
    "Dashboard · Reportes · Monitoreo"
  );
}
