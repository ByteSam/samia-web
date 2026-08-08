import { createOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Agentes de IA por WhatsApp | afynova";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage(
    "Agentes de IA que atienden por WhatsApp 24/7.",
    "Recepcionista IA · Reservas · Soporte"
  );
}
