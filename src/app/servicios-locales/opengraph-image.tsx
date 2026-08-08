import { createOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Asistente WhatsApp para servicios locales | afynova";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage(
    "No pierdas otra llamada ni emergencia por no contestar a tiempo.",
    "Gasfitería · Cerrajería · Mantenimiento"
  );
}
