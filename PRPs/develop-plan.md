# Plan rama `develop` — Experimentos visuales afynova

> Creado: 13 agosto 2026  
> Branch: `develop` (crear desde `main` DESPUES de pushear el logo)  
> Objetivo: probar cambios visuales sin afectar produccion

---

## Que ya se hizo en `main`

- [x] Logo E6c (eclipse) reemplazado en `Logo.tsx`, `icon.svg`, `public/logo/`
- [x] Documentacion reorganizada (`docs/negocio/`, `docs/web/`, `docs/tech/`, `docs/ops/`)
- [x] PRP de mejoras visuales creado (`PRPs/mejoras-visuales-home-prp.md`)
- [x] Brand identity documentada (`docs/negocio/brand-identity.md`)

---

## Que se prueba en `develop`

### 1. Ajustes de color (explorar si el tema actual se beneficia de cambios)

| Experimento | Que probar | Riesgo |
|---|---|---|
| Fondo de secciones | Alternar mas entre dark/light para mejor contraste | Bajo |
| Accent colors | Probar si el dorado `#C1892B` funciona como segundo accent | Medio |
| Cards background | Probar tonos ligeramente distintos entre `card-soft` y `card-soft-tint` | Bajo |
| CTA hover states | Variantes de color en hover del btn-pill | Bajo |

### 2. Mejoras visuales (del PRP ya creado)

| # | Mejora | Archivo | Prioridad |
|---|---|---|---|
| 4 | Iconos con fondo circular en cards | `ServiciosGrid.tsx`, `SolucionesGrid.tsx` | Alta |
| 5 | Visual decorativo en ProblemaSection | `ProblemaSection.tsx` | Media |
| 6 | Glow sutil en hero detras del mockup | `page.tsx` | Baja |
| 7 | Mayor contraste entre secciones | `globals.css` | Media |
| 8 | Lockup logo: clearspace + alineacion (header y footer) | `Logo.tsx` (+ QA Header/Footer; OG despues) | **Alta** |

### 3. Imagenes reales

| Tarea | Archivo destino | Dependencia |
|---|---|---|
| Screenshot de fortalezavinzos.es | `public/casos/fortaleza-vinzos.png` | Ninguna — listo para copiar |
| Elementos geometricos decorativos | `public/decorative/` | Generar con Quick |
| Open Graph image actualizada (con logo nuevo) | `src/app/opengraph-image.tsx` | Logo ya en main |

### 4. Tipografia del wordmark

| Experimento | Que probar |
|---|---|
| Space Grotesk en Logo.tsx | Verificar que la fuente se carga correctamente o usar paths SVG |
| Fallback a Inter | Si Space Grotesk no esta disponible, como se ve con Inter |
| Tamano/peso del wordmark | Probar font-weight 400 vs 500 vs 600 |

### 5. Lockup del logo (header + footer) — prioridad Alta

**Problema.** El simbolo eclipse y el wordmark se pisan: la "a" entra en el recorte blanco del circulo y el texto no esta centrado verticalmente. Se ve en header y footer porque ambos usan `Logo.tsx` (`height={28}`). No es un gap de flex: es geometria del SVG (`<text x="85" y="68">` vs circulo que llega a ~x 110). Space Grotesk no esta cargada en `layout.tsx`.

**Solucion.** Corregir el lockup en un solo archivo; header y footer se actualizan solos.

| Que | Como | Archivos |
|---|---|---|
| Clearspace simbolo → wordmark | Mover `x` del `<text>` a la derecha del circulo + gap fijo. El circulo termina ~x 110; el texto no puede empezar antes. | `src/components/Logo.tsx` |
| Alineacion vertical | Centrar opticamente el wordmark con el eje del eclipse (`dominant-baseline` + `y` del circulo). | `src/components/Logo.tsx` |
| Tipografia real | Usar Inter (ya cargada) o paths. No depender de Space Grotesk hasta que este en `layout.tsx`. | `src/components/Logo.tsx` |
| Asset canonico | Actualizar `public/logo/` para que coincida con el SVG del componente. | `public/logo/afynova.svg`, `afynova-dark.svg` |
| Footer | Mismo `Logo`. Verificar en 375 y 1440 que no recorte ni se pegue al copy debajo. | `src/components/Footer.tsx` (QA) |
| Header | Mismo componente. Verificar en navbar sticky (28px) que el gap se lea. | `src/components/Header.tsx` (QA) |
| Open Graph | `AfynovaLogo` en `src/lib/og-image.tsx` sigue el lockup viejo. Actualizar tras aprobar el logo. | `src/lib/og-image.tsx` |

**Criterio de exito**
- [ ] Gap visible entre eclipse y "a" (sin overlap ni tension)
- [ ] Wordmark centrado opticamente con el simbolo
- [ ] Header y footer identicos
- [ ] Mobile 375px y desktop 1440px
- [ ] Favicon / `icon.svg` no se toca (solo simbolo, sin wordmark)

---

## Comandos para crear la rama

```powershell
cd "C:\Users\dfernandezg\OneDrive - SoluforB S.A\Escritorio\qick\samia-web"

# Primero: push del logo a main
git add -A
git commit -m "brand: reemplazar logo por E6c (eclipse) — simbolo + lockup + favicon"
git push origin main

# Despues: crear rama develop
git checkout -b develop
git push -u origin develop
```

---

## Workflow en `develop`

1. **Quick** genera specs/PRPs de cada experimento
2. **Cursor** implementa en la rama `develop`
3. Verificar visualmente en `localhost:3000`
4. Si un cambio se aprueba → merge a `main` (cherry-pick o merge completo)
5. Si no convence → descartar o iterar

---

## Criterios para merge a `main`

- [ ] `npm run lint` sin errores
- [ ] `npm run build` compila
- [ ] Se ve bien en mobile (375px) y desktop (1440px)
- [ ] No rompe las animaciones (Reveal, stagger)
- [ ] Respeta brand-identity.md (colores, tono, sin ilustraciones figurativas)
- [ ] Daniel lo aprueba visualmente
- [ ] Logo: simbolo y wordmark con clearspace; header y footer coinciden
