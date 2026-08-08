import { createOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Asistente WhatsApp para clínicas | afynova";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage(
    "Tu clínica deja de perder pacientes por no responder a tiempo.",
    "Clínicas · WhatsApp · Perú"
  );
}
