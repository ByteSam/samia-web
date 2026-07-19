## FEATURE:

Un formulario de captura de leads en la Home. No necesita backend: al enviarse, arma un mensaje de WhatsApp prellenado (nombre + negocio opcional + necesidad) y abre el chat directo al número de contacto (`WHATSAPP_NUMBER` en `src/lib/contact.ts`). Debe ir justo después de la sección "FLUJO" que explica visita→datos→WhatsApp, reforzando ese mismo flujo con algo funcional.

## EXAMPLES:

- `src/components/WhatsAppButton.tsx` — cómo se arma un link de WhatsApp con `whatsappLink()`.
- `src/app/page.tsx` sección "FLUJO" — el patrón de `Reveal` + `card-soft` que hay que respetar visualmente.

## DOCUMENTATION:

- `docs/00-decisiones-vigentes.md` — WhatsApp es el CTA principal del embudo oficial.
- `prd-samia.md` (en `~/Desktop/DANIEL/files/`) sección 13 — el checklist de lanzamiento marca el formulario de leads como bloqueante.

## OTHER CONSIDERATIONS:

- Es un client component (`"use client"`) porque necesita `useState` para los campos.
- No debe guardar nada en un backend por ahora — la opción "guardar en n8n/Notion" es una fase futura (opción C del PRD), no de esta tarea.
- Reusar `btn-pill btn-pill-whatsapp` para el botón de envío, no inventar un estilo nuevo.
- El botón debe deshabilitarse si faltan los campos obligatorios (nombre, necesidad).
