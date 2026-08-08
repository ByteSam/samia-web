/** Eventos de conversión — ver docs/02-web-y-conversion.md */
export type AnalyticsEvent = "click_whatsapp" | "lead" | "booking";

export function trackEvent(
  name: AnalyticsEvent,
  properties?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return;

  void import("@vercel/analytics")
    .then(({ track }) => track(name, properties))
    .catch(() => {
      /* analytics opcional — no bloquear UX */
    });
}
