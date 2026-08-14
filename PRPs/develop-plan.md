# Plan rama `develop` — Experimentos visuales afynova

> Actualizado: 14 agosto 2026  
> Branch: `develop` (existe; no recrear)  
> Objetivo: experimentos visuales; merge a `main` solo lo aprobado

---

## Estado

| Capa | Qué hay |
|---|---|
| `main` / producción | Logo eclipse E6c inicial (`ecb13d5`). Puede no tener el polish de `0a104dc` si aún no se mergeó. |
| `develop` | Lockup AFYNOVA corregido, PRP Home #4–#7, spacing de landings (`0a104dc`) |

---

## Hecho en `develop` (no repetir)

- [x] **Lockup logo** — `AFYNOVA` mayúsculas, clearspace 19, Ø 50 vs cap-height ~78%, viewBox 348×71, header/footer `height={32}`, `py-2.5` en nav. Favicon solo símbolo.
- [x] **#4** Íconos con fondo `bg-terracota/10` en `ServiciosGrid` y `SolucionesGrid`
- [x] **#5** Acento decorativo en `ProblemaSection`
- [x] **#6** Glow sutil detrás del mockup del hero
- [x] **#7** Bandas más contrastadas + hairline
- [x] **Spacing landings** — `FAQSection` y bloques “Qué hay detrás” con `.section-py`; sin dos `section-band` seguidas
- [x] **OG lockup** — eclipse + AFYNOVA en `src/lib/og-image.tsx` (las rutas `opengraph-image.tsx` solo llaman `createOgImage`)
- [x] Assets `public/logo/afynova.svg` y `afynova-dark.svg` alineados al componente

**QA logo pendiente de Daniel:** 375px y 1440px, header + footer. Si se ve bien, no seguir iterando el SVG.

---

## Siguiente (por implementar)

Orden: un experimento por commit cuando se pueda.

### A. Tipografía del wordmark — Space Grotesk

Brand identity pide Space Grotesk. Hoy el logo usa Inter (sí está en `layout.tsx`).

| Qué | Cómo | Archivos |
|---|---|---|
| Cargar fuente | `next/font/google` → `--font-wordmark` | `src/app/layout.tsx` |
| Aplicar al lockup | `fontFamily` / CSS var en el `<text>` | `src/components/Logo.tsx` |
| Fallback | Inter si Grotesk no carga | ya en stack |
| Peso | 600 (el lockup actual) | no bajar a 400 sin QA |
| Paths SVG | Opcional después: más estable en OG/Satori. No bloquea A. | — |

### B. Screenshot Fortaleza Vinzos

`src/lib/casos.ts` tiene TODO. No hay archivo en `public/casos/`. **Daniel copia la captura real**; no inventar captura.

Cuando exista `public/casos/fortaleza-vinzos.png`:

```ts
imagen: "/casos/fortaleza-vinzos.png",
```

### C. Decorativos geométricos

`public/decorative/` — generar con Quick. No figurativos. No crear carpeta vacía ni SVGs de relleno sin uso en una sección.

### D. Color (especulativo — un cambio a la vez)

| Experimento | Riesgo | Nota de marca |
|---|---|---|
| Hover CTA → `terracota-dark` | Bajo | Alineado al token hover; no es paleta nueva |
| Fondos dark/light más marcados | Bajo | Ya hay `section-band` / `section-ink` |
| Dorado como segundo accent en UI | Medio | Brand: dorado raro, no en botones |
| Tonos distintos card-soft vs tint | Bajo | Tint ya es terracota 6% |

---

## Criterios para merge a `main`

- [x] `npm run lint` / `npm run build` (sesión 14 ago)
- [ ] QA visual 375 y 1440 (logo + home + una landing)
- [ ] Animaciones Reveal/stagger intactas
- [ ] Brand: sin ilustraciones figurativas; sin hex de marca nuevos
- [ ] Daniel aprueba visualmente
- [x] Logo: clearspace; header y footer el mismo componente

```bash
git checkout main
git pull origin main
git merge develop
git push origin main
git checkout develop
```

---

## Fuera de alcance aquí

Copy, SEO, casos inventados, Cal.com, fusionar landings de nicho.
