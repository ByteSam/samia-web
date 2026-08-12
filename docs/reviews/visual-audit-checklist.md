# Checklist de auditoría visual — afynova

## Criterios por página

### Jerarquía

- [ ] H1 solo en Instrument Serif (via italic span) + Inter weight 500 — no en chips ni eyebrows
- [ ] H2 distinguible del body (28–36px, letterSpacing -0.01em)
- [ ] Chips/eyebrows: max 1 por sección; no stacked chip+eyebrow

### Ritmo de secciones

- [ ] Fondos alternan: sand → section-band → section-white → sand → section-ink (máx 1 ink por página)
- [ ] Separadores visibles entre secciones (border-y o cambio de fondo)
- [ ] Padding vertical uniforme con `.section-py` (64–80px desktop)

### Saturación de cards

- [ ] Cards con sombra solo en fondo sand — en section-white usar solo borde hairline
- [ ] No más de 3 variantes de card por página (card-soft / card-soft-tint / card-compact)
- [ ] Bloques informativos sin card cuando el fondo ya provee contraste (section-band, section-ink)

### CTAs

- [ ] Home: máx 2 WhatsAppButton visibles a la vez (hero + final); sticky a parte
- [ ] Landings de servicio: máx 1 CTA primario antes del catálogo
- [ ] Nichos: hero CTA + tiers CTA + final CTA (3 total, OK)

### Mobile 390px

- [ ] StickyCTA no solapa formulario (#contacto)
- [ ] Bubble fundador sube cuando sticky visible (bottom ≥ 5.5rem)
- [ ] Marquee legible (no texto cortado, sin overflow horizontal)
- [ ] Texto body ≥ 15px, line-height ≥ 1.5

### Conteo de secciones

| Página | Objetivo | Estado |
|--------|----------|--------|
| Home | ≤ 9 secciones distintas | pendiente |
| /servicios hub | ≤ 6 | pendiente |
| Service landings | ≤ 8 | pendiente |
| Nicho landings | ≤ 7 | pendiente |

---

## Resultado post-rediseño editorial (2026-08-12)

Capturas generadas con `npm run review:home` y `npm run review:full-site`.

- Home secciones contadas: **9** (hero, problema, propuesta, soluciones, servicios, proof, proceso, garantía+ink, form+FAQ)
- CTAs en Home: 2 visibles (hero + final) + sticky (a parte) — sin spam de botones intermedios
- Variantes de card en Home: 2 (card-soft, card-soft-tint) — bajó de 4
- section-band visible vs sand: **sí** ✓
- section-white visible vs sand: **sí** ✓
- Bloque oscuro (section-ink): **sí** ✓ (garantía + precio en todos los hubs/landings)
- lint/build: **✓** sin errores
- section-ink aplicado en: Home, /servicios hub, 5 service landings, 3 nicho landings
