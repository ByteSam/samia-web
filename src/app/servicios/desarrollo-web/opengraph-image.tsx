import { createOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Desarrollo web que convierte | afynova";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage(
    "Webs que convierten visitas en clientes.",
    "Landing · Corporativo · Captación"
  );
}
