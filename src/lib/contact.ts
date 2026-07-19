export const WHATSAPP_NUMBER = "51939845408";

// TODO: reemplazar con tu link real de Cal.com cuando lo tengas.
// Mientras sea null, el CTA "Agendar diagnóstico gratis" usa WhatsApp en su lugar.
export const CAL_COM_URL: string | null = null;

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
