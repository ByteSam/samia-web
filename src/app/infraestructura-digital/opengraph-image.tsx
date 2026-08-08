import { createOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Infraestructura digital completa | afynova";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage(
    "Infraestructura digital completa para tu negocio.",
    "Web · Pagos · Automatización · Datos"
  );
}
