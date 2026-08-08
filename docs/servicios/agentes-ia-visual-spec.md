# Spec visual — `/servicios/agentes-ia` (Opción B)

> Última actualización: agosto 2026

## Objetivo

Hero con **un protagonista visual**: inbox sin agente vs con agente.

## Viewport prioritario

390×844 (mobile). Hero ≤ ~1.5 scrolls antes del mockup / problema.

## Hero

Orden:

1. Chip — `Servicio · Agentes IA por WhatsApp`
2. H1 — consultas perdidas / respuesta al instante
3. Una línea de valor (sin catálogo de 7 ítems)
4. CTA + línea precio/diagnóstico
5. **Mini comparación inbox** (sin vs con agente)

**No en hero:** catálogo, mockup WhatsApp, timeline, lista de módulos.

## Mockup (sección inmediata post-hero)

- Un solo `WhatsAppMockup` centrado, con `mockup-frame`
- Mensajes: `MOCKUP_AGENTES` en `src/lib/nichos/mockups.ts`

## Firma post-problema (sin duplicar hero)

- `AgentesIACatalogBridge` — “Por dónde empezar” (3 pasos hacia catálogo)
- **No** repetir inbox sin/con

## Catálogo

- `CatalogGrid` sin `Reveal` por ítem (un `Reveal` en el grid)
- Cards sin `h-full` que comprime texto

## Fuera de alcance

- Convertir en landing de nicho
- `PricingTiers` de 3 paquetes (catálogo de 7 ítems es el producto)
