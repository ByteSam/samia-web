# Plan rama `develop` — Experimentos visuales afynova

> Actualizado: 14 agosto 2026  
> Branch: `develop` (base estable; no tocar directamente para los experimentos)  
> Objetivo: 3 ramas hija de experimento; merge a `main` solo lo aprobado  
> Archivo vive en: `exp/color-dorado` (referencia central)  
> Ejecución: Cursor · Planificación: Quick

---

## Paleta actual (referencia)

```
--color-sand:          #f6ecda
--color-sand-dark:     #ecdcb9
--color-ink:           #241509
--color-terracota:     #c1502e   ← acento principal / CTA
--color-terracota-dark:#9c3d21
--color-rojo-tierra:   #8c2f1b
--color-dorado:        #c1892b   ← acento secundario
--color-dorado-light:  #e9c876
```

**Objetivo general:** cada rama debe verse claramente distinta al scrollear. No se buscan variantes sutiles del mismo esquema; se busca un **cambio de personalidad visual** notorio.

---

## Estado base (`develop`)

- [x] Lockup logo AFYNOVA (Space Grotesk, clearspace 19, eclipse terracota)
- [x] PRP Home #4–#7 completados
- [x] Spacing landings, OG images, favicon
- [ ] QA logo pendiente Daniel (375px + 1440px)

---

## Ramas de experimento (todas desde `develop`)

Cada rama es **independiente**. No mezclar entre ellas. Solo una gana.

```bash
exp/color-dorado    ← Paleta A: fría/sofisticada
exp/color-bandas    ← Paleta B: cálida/energética
exp/color-gradient  ← Paleta C: estilo Quick (gradiente naranja→rosa invertido)
```

---

### Rama 1 — `exp/color-dorado` · Paleta fría / sofisticada

**Hipótesis:** ¿Una paleta con base gris-azulada y acento frío transmite más premium/tech sin perder calidez?

**Logo:** eclipse intacto (terracota `#C1502E`). No tocar `Logo.tsx`.

#### Nueva paleta

| Token | Actual | Nuevo | Rol |
|-------|--------|-------|-----|
| `--color-sand` | `#f6ecda` (crema) | `#f0f2f5` (gris perla) | Fondo claro |
| `--color-sand-dark` | `#ecdcb9` (arena) | `#dfe3e8` (gris medio) | Banda de sección |
| `--color-ink` | `#241509` (marrón) | `#1a1f2e` (azul-noche) | Texto principal |
| `--color-terracota` | `#c1502e` (terracota) | `#2d5a7b` (azul petróleo) | CTA / acento principal |
| `--color-terracota-dark` | `#9c3d21` | `#1e3f5a` | CTA hover |
| `--color-dorado` | `#c1892b` (dorado) | `#7c9eb2` (azul claro) | Acento secundario |
| `--color-dorado-light` | `#e9c876` | `#b8d4e3` | Highlight sutil |

#### Qué cambia

| Elemento | Cambio | Archivo |
|----------|--------|---------|
| Variables CSS raíz | Reemplazar 8 tokens de color | `globals.css` |
| `section-band` | Usa `sand-dark` nuevo (gris medio) | `globals.css` |
| `section-ink` | Usa `ink` nuevo (azul-noche) | `globals.css` |
| `btn-pill-solid` | Fondo → azul petróleo | `globals.css` |
| Focus rings | Ajustar rgba a nueva paleta | `globals.css` |
| Chips / badges | `terracota/10` → nuevo acento/10 | componentes |

#### No tocar
- Logo eclipse (queda terracota `#C1502E`)
- Estructura HTML / layout
- Tipografía (Space Grotesk, etc.)
- WhatsApp color

#### Criterio de éxito
Al scrollear Home + `/clinicas`: ¿el sitio se siente premium/tech pero sigue siendo accesible y cálido (por el contraste del logo terracota sobre base fría)?

---

### Rama 2 — `exp/color-bandas` · Paleta cálida / energética

**Hipótesis:** ¿Una paleta vibrante con verdes y naranjas cálidos transmite más energía y modernidad?

**Logo:** eclipse intacto (terracota `#C1502E`). No tocar `Logo.tsx`.

#### Nueva paleta

| Token | Actual | Nuevo | Rol |
|-------|--------|-------|-----|
| `--color-sand` | `#f6ecda` | `#faf5ee` (marfil cálido) | Fondo claro |
| `--color-sand-dark` | `#ecdcb9` | `#e8dcc8` (camel suave) | Banda de sección |
| `--color-ink` | `#241509` | `#1b2421` (verde-carbón) | Texto principal |
| `--color-terracota` | `#c1502e` | `#d4622b` (naranja quemado) | CTA / acento principal |
| `--color-terracota-dark` | `#9c3d21` | `#b04d1e` | CTA hover |
| `--color-dorado` | `#c1892b` | `#3d7a5c` (verde bosque) | Acento secundario |
| `--color-dorado-light` | `#e9c876` | `#8fbfa3` (verde menta) | Highlight sutil |

#### Qué cambia

| Elemento | Cambio | Archivo |
|----------|--------|---------|
| Variables CSS raíz | Reemplazar 8 tokens de color | `globals.css` |
| `section-band` | Camel suave en bandas | `globals.css` |
| `section-ink` | Verde-carbón profundo | `globals.css` |
| `btn-pill-solid` | Naranja quemado vibrante | `globals.css` |
| Focus rings | Ajustar rgba | `globals.css` |
| Chips / badges | Verde bosque como segundo acento | componentes |
| Decorativos `::before/::after` | Naranja + verde menta | `globals.css` |

#### No tocar
- Logo eclipse (queda terracota `#C1502E`)
- Estructura HTML / layout
- Tipografía
- WhatsApp color

#### Criterio de éxito
Al scrollear: ¿la combinación naranja/verde da energía sin ser infantil? ¿El logo terracota sigue armonizando con el naranja quemado cercano?

---

### Rama 3 — `exp/color-gradient` · Estilo Amazon Quick (gradiente invertido)

**Hipótesis:** ¿Un gradiente rosa→naranja (invertido al de Quick) como identidad del logo + paleta derivada transmite modernidad y diferenciación tech?

**Referencia:** Amazon Quick usa un gradiente naranja (arriba) → rosa/magenta (abajo). Nosotros lo **invertimos**: rosa intenso arriba → naranja abajo.

**Logo:** SE MODIFICA el eclipse en `Logo.tsx`. Wordmark quieto. Favicon/OG estáticos.

#### Gradiente del eclipse

```
Rosa intenso (arriba):  #E8457C  (magenta-rosa)
Naranja (abajo):        #F5923A  (naranja cálido)
Dirección:              top → bottom (invertido a Quick)
```

#### Paleta derivada del gradiente

| Token | Nuevo | Rol |
|-------|-------|-----|
| `--color-sand` | `#fdf6f8` (rosa-blanco) | Fondo claro |
| `--color-sand-dark` | `#f5e8ec` (rosa pálido) | Banda de sección |
| `--color-ink` | `#2b1520` (burdeos-noche) | Texto principal |
| `--color-terracota` | `#E8457C` (rosa intenso) | CTA / acento principal |
| `--color-terracota-dark` | `#c93566` | CTA hover |
| `--color-dorado` | `#F5923A` (naranja) | Acento secundario |
| `--color-dorado-light` | `#fbc078` (naranja claro) | Highlight sutil |

#### Qué cambia

| Elemento | Cambio | Archivo |
|----------|--------|---------|
| Eclipse del logo | `fill` → `<linearGradient>` rosa→naranja (top→bottom) | `Logo.tsx` |
| Animación gradiente | `gradientTransform` animado ~10s, infinite, linear | `Logo.tsx` (SVG defs) |
| `prefers-reduced-motion` | Eclipse estático con rosa sólido | `globals.css` |
| Variables CSS raíz | Nueva paleta rosa/naranja | `globals.css` |
| `section-band` | Rosa pálido | `globals.css` |
| `section-ink` | Burdeos-noche | `globals.css` |
| `btn-pill-solid` | Rosa intenso (#E8457C) | `globals.css` |
| Decorativos `::before/::after` | Rosa + naranja | `globals.css` |
| Focus rings | rgba del rosa | `globals.css` |

#### No tocar
- Wordmark (solo el símbolo eclipse cambia)
- Favicon `icon.svg` (estático, usar rosa sólido)
- OG images (estáticas, rosa sólido)
- Estructura HTML / layout
- Tipografía
- WhatsApp color

#### Criterio de éxito
- ¿El eclipse sigue leyéndose como el mismo símbolo con el gradiente?
- ¿Da mareo en 10s de observación?
- ¿La paleta rosa/naranja se siente tech y moderna o se confunde con una app de dating?
- ¿El gradiente invertido (vs Quick) se distingue suficiente para no parecer copia?

---

## Implementación: reglas comunes a las 3 ramas

1. **Solo tocar `globals.css` + `Logo.tsx` (rama 3).** No crear archivos nuevos de paleta.
2. **No modificar HTML/JSX** salvo ajustes mínimos si un color está hardcodeado (no usa variable).
3. **Cada rama debe compilar limpia:** `npm run lint` + `npm run build` sin errores.
4. **Commits atómicos:** un commit = un grupo lógico (ej. "swap palette tokens", "animate eclipse gradient").
5. **Contraste WCAG AA** en texto sobre fondos nuevos — verificar antes de pedir QA.

---

## Pendientes en `develop` (no en las ramas de experimento)

### B. Screenshot Fortaleza Vinzos
`src/lib/casos.ts` tiene TODO. Daniel copia captura real a `public/casos/fortaleza-vinzos.png`.

### C. Decorativos geométricos
`public/decorative/` — generar con Quick. No figurativos.

---

## Criterios para merge a `main`

- [ ] `npm run lint` / `npm run build` sin errores
- [ ] QA visual 375px y 1440px (logo + home + una landing de nicho)
- [ ] Animaciones Reveal/stagger intactas
- [ ] Brand: sin ilustraciones figurativas
- [ ] Contraste WCAG AA verificado
- [ ] Daniel aprueba visualmente la rama elegida

Solo una rama gana. Las otras se archivan.

```bash
# Flujo de merge (solo la rama aprobada)
git checkout develop
git merge exp/<nombre-ganadora>
git checkout main
git pull origin main
git merge develop
git push origin main
```

---

## Fuera de alcance

Copy, SEO, casos inventados, Cal.com, fusionar landings de nicho. No mezclar los 3 experimentos en la misma rama.
