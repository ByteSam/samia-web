import { createOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Servicios | afynova";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage(
    "Web, automatización y agentes IA para tu negocio.",
    "Desarrollo web · Agentes IA · Automatización · Datos"
  );
}
