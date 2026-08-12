export const WHATSAPP_NUMBER = "51939845408";
export const CONTACT_EMAIL = "danielsam.fgu@gmail.com";

// TODO: reemplazar con tu link real de Cal.com cuando lo tengas.
// Mientras sea null, el CTA "Agendar diagnóstico" usa WhatsApp en su lugar.
export const CAL_COM_URL: string | null = null;

export const BOOKING_WHATSAPP_MESSAGE =
  "Hola, quiero agendar un diagnóstico gratuito de 30 minutos.";

/** Mensaje unificado para CTAs de diagnóstico (hero, header, sticky). */
export const WHATSAPP_DIAGNOSTICO_MESSAGE =
  "Hola, vi tu web y quiero un diagnóstico gratis";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** CTA secundario de agenda: Cal.com si está configurado, si no WhatsApp. */
export function bookingLink() {
  return CAL_COM_URL ?? whatsappLink(BOOKING_WHATSAPP_MESSAGE);
}

export function isCalComConfigured() {
  return CAL_COM_URL !== null;
}
