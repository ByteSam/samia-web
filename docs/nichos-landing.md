# Landings de nicho (Soluciones)

> Última actualización: agosto de 2026

## Estrategia

Tres URLs separadas para SEO y ads por rubro — **no** una sola landing genérica:

| Ruta | Nicho | Precio | Experiencia visual (Plan B) |
|---|---|---|---|
| `/clinicas` | Salud / citas / ausencias | `PricingTiers` (S/1,500+) | Hero + chips + mockup; firma agenda antes/después |
| `/servicios-locales` | Gasfitería, cerrajería, urgencias hogar | `PricingTiers` (S/500+) | Hero = flujo 3 pasos llamada perdida; precio temprano |
| `/servicios-legales` | Abogacía laboral | Rango S/1,500–5,000 (sin tiers) | Hero sobrio centrado; tabla hace/no hace; mockup secundario |

Mismo producto base (asistente WhatsApp), **distinta historia y layout** por nicho.

## Estructura compartida (base)

Todas incluyen: Problema → bloque firma → Solución → Proceso → Precio → Garantía → FAQ → CTA — pero **orden y jerarquía** varían (legal: trust antes de solución; locales: precio antes de solución).

## Bloque distintivo por nicho

| Nicho | Componente | Ubicación |
|---|---|---|
| Clínicas | `ClinicasAusenciasBlock` | Tras problema (agenda sin/con recordatorios) |
| Locales | flujo en hero (`LocalesMissedCallBlock variant="hero"`) | Hero dominante |
| Legal | `LegalLimitsBlock` | Tras problema (tabla hace / no hace) |

## Mockups

Fuente única: `src/lib/nichos/mockups.ts` — un mockup por página (solo en Hero, sin sección demo duplicada).

## Mantenimiento

- Copy de nicho: editar `page.tsx` del rubro o extender `src/lib/nichos/`.
- Nuevo nicho: nueva ruta + mockup + bloque distintivo + entrada en `navigation.ts` y `sitemap.ts`.
- No fusionar URLs sin plan de redirects y actualización de footer/OG.

## Contexto para sesiones futuras

Al cerrar trabajo en nichos, actualizar:

1. `PROJECT_STATUS.md` — fase y archivos tocados
2. `~/Desktop/DANIEL/files/session-handoff-ichan.md` — estado operativo
3. Este archivo si cambia la estrategia de precio o rutas
