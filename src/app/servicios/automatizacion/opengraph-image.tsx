import { createOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Automatización de procesos | afynova";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage(
    "Automatiza avisos, leads e integraciones.",
    "WhatsApp · Seguimiento · CRM"
  );
}
