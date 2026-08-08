# Revisión visual — `/clinicas`

> **Fecha:** 8 ago 2026  
> **Método:** Playwright (Chromium headless) + análisis de screenshots  
> **URL:** `http://localhost:3000/clinicas`  
> **Evidencia:** `docs/reviews/clinicas-visual/screenshots/`  
> **Consola:** sin warnings/errors en las 9 capturas (ver `console-warnings.txt`)

---

## Resumen ejecutivo

| Veredicto | Detalle |
|---|---|
| **Fuerte** | Mensaje claro (ausencias/agenda), bloque antes/después legible, diferenciación vs locales/legal en primer scroll |
| **Débil** | Timeline del hero con pasos 2–4 casi invisibles (bug Reveal), mobile sin mockup WhatsApp |
| **Prioridad** | P0: arreglar visibilidad del timeline · P1: mockup en mobile + ritmo de fondos |

---

## Evidencia generada

| Archivo | Contenido |
|---|---|
| `clinicas-{mobile,tablet,desktop}-hero.png` | Primer viewport |
| `clinicas-{mobile,tablet,desktop}-full.png` | Página completa |
| `locales-desktop-hero.png` | Comparación hero |
| `legal-desktop-hero.png` | Comparación hero |
| `capture.mjs` | Script reutilizable |
| `console-warnings.txt` | Log de consola |

Re-ejecutar capturas:

```bash
npm run dev   # en otra terminal
node docs/reviews/clinicas-visual/capture.mjs
```

---

## Checklist por sección

| Sección | Estado | Notas |
|---|---|---|
| Hero — H1 y CTA | **OK** | CTA verde visible; mensaje alineado a ausencias |
| Hero — timeline 4 pasos | **Crítico** | Pasos 2–4 con opacidad ~0 (Reveal no completa) |
| Hero — mockup | **Mejorar** | Desktop OK con `mockup-frame`; **mobile sin mockup** |
| Hero — gradiente | **OK** | Acento terracota suave, no compite con texto |
| Problema (band) | **OK** | Card blanca legible sobre banda |
| Firma antes/después | **OK** | Comparación clara; flecha vertical en mobile |
| Firma — recordatorio | **OK** | Strip horizontal legible en desktop |
| Firma — fondo | **Mejorar** | Bloque dentro de `section-band` (no blanco puro) |
| Solución (3 cards) | **OK** | `section-eyebrow` consistente |
| Precio | **OK** | Tier Profesional destacado; chip recordatorios |
| Implementación timeline | **OK** | Vertical clara |
| Garantía + FAQ + CTA | **OK** | CTA final alineado a ausencias |
| Chrome — fundador bubble | **Mejorar** | Avatar flotante compite con contenido inferior |
| Consola React | **OK** | Sin keys ni errores en esta revisión |

---

## Hallazgos detallados

### P0 — Timeline del hero casi invisible (pasos 2–4)

**Qué se ve:** En mobile, tablet y desktop, el paso 1 (“Consulta”) se lee bien; los pasos 2–4 aparecen **muy desvanecidos** o invisible.

**Causa probable:** `ClinicasCitaFlow.tsx` envuelve cada paso en `<Reveal className="contents">`. `display: contents` hace que el nodo observado por `IntersectionObserver` **no tenga caja** → la animación `reveal` no dispara o queda en `opacity: 0`.

**Archivos:** `src/components/nichos/ClinicasCitaFlow.tsx`, `src/components/Reveal.tsx`

**Fix propuesto:**
- Quitar `Reveal` del timeline del hero **o** no usar `className="contents"`; envolver el bloque completo en un solo `Reveal`, o usar timeline sin animación (números estáticos).

---

### P0 — Mobile sin mockup WhatsApp

**Qué se ve:** En 390px el hero muestra chip → H1 → rubros → CTA → timeline largo. **No hay mockup** hasta scroll profundo (solo desktop `lg:flex`).

**Impacto:** En mobile falta el “producto” visual; la página se lee como texto + timeline.

**Archivos:** `src/app/clinicas/page.tsx`

**Fix propuesto:**
- Bloque `lg:hidden` con mockup **entre CTA y timeline** (o entre párrafo y CTA), como en iteración anterior.

---

### P1 — Firma sobre `section-band` (ritmo)

**Qué se ve:** Problema y firma son dos bandas arena consecutivas; la firma no “descansa” en blanco.

**Archivos:** `src/app/clinicas/page.tsx` (wrapper `section-band` alrededor de `ClinicasAusenciasBlock`)

**Fix propuesto:**
- Quitar wrapper `section-band` del bloque firma; dejar fondo blanco/sand del body.

---

### P1 — Desktop hero: paso 4 fuera del primer viewport

**Qué se ve:** En 1440px el timeline horizontal muestra 3 pasos en hero; el 4to (“Confirmada”) queda bajo el fold del panel izquierdo.

**Fix propuesto:**
- Reducir a **3 pasos** en hero (consulta → recordatorio → confirmada) o compactar timeline (solo títulos, sin descripciones en desktop).

---

### P2 — Polish

| Item | Sugerencia |
|---|---|
| Rubros en una línea | En mobile puede wrap feo; considerar 2 líneas max o scroll horizontal suave |
| `mockup-frame` | Buen efecto; alinear caption con eyebrow “Ejemplo ilustrativo” |
| Fundador bubble | En mobile full-page, verificar que no tape CTA inferior |
| Playwright en repo | `playwright` añadido a `devDependencies` para esta revisión — decidir si mantener |

---

## Comparación de diferenciación (desktop hero)

| Página | Primer scroll distintivo |
|---|---|
| **Clínicas** | H1 ausencias + timeline numerado + mockup agenda dental |
| **Locales** | 3 cards flujo llamada perdida + CTA “recuperar llamadas” |
| **Legal** | Hero centrado sobrio + mockup debajo, sin grid 2 col |

**Veredicto:** Sí se distinguen en 5 segundos sin leer URL.

---

## Plan de fixes priorizado (sin implementar)

### P0 (hacer primero)
1. `ClinicasCitaFlow.tsx` — eliminar Reveal por paso o fix `contents`
2. `page.tsx` — mockup mobile en hero

### P1
3. `page.tsx` — firma en fondo blanco (quitar `section-band` wrapper)
4. `ClinicasCitaFlow.tsx` — 3 pasos o layout más compacto en desktop

### P2
5. Ajuste rubros mobile
6. Opcional: script `npm run review:clinicas` → `node docs/reviews/clinicas-visual/capture.mjs`

---

## Fixes aplicados (8 ago 2026)

- [x] P0: `ClinicasCitaFlow` sin `Reveal` por paso; timeline estático 3 pasos
- [x] P0: mockup mobile en hero (`lg:hidden` + `mockup-frame`)
- [x] P1: firma en fondo blanco (sin `section-band` wrapper)
- [x] P1: timeline compacto 3 columnas desktop
- [x] P2: rubros en `text-xs` con `max-w-md`
- [x] P2: `npm run review:clinicas`
- [x] Implementación: un solo `Reveal` en el bloque timeline

---

## Herramientas usadas

| Herramienta | Resultado |
|---|---|
| Skill `webapp-testing` | Playwright screenshots |
| MCP browser | No disponible en workspace |
| `playwright` npm | Instalado en `devDependencies` para esta revisión |

---

## Siguiente paso recomendado

Verificar en browser mobile 390px. Firma ya no duplica comparación agenda del hero.

---

## Actualización — Opción B hero + firma (8 ago 2026, tarde)

| Cambio | Detalle |
|---|---|
| Hero | Chip + H1 + CTA + mini agenda compare (`ClinicasHeroAgendaCompare`); sin `ClinicasCitaFlow` ni mockup duplicado |
| Post-hero | Un solo `WhatsAppMockup` (agenda cita) |
| Firma | **Solo recordatorio** — eliminada comparación sin/con duplicada; burbujas `w-fit`; chips dentro de la misma card |
| Review | Screenshots regenerados con `npm run review:clinicas` |

**Problema resuelto:** bloque “Antes y después” repetía el hero y mostraba chips cortados al borde inferior del viewport.
