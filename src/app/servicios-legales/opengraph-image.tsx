import { createOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Asistente WhatsApp para estudios de abogacía laboral | afynova";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage(
    "Tu estudio deja de perder consultas laborales por no responder a tiempo.",
    "Abogacía laboral · Primer contacto · Perú"
  );
}
