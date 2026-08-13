# PRP: Mejoras visuales Home — afynova.com

> Generado: 13 agosto 2026Fuente: Auditoría visual verificada con códigoEjecuta: CursorAlcance: Solo CSS/Tailwind + markup ligero. No agregar imágenes externas ni cambiar estructura de secciones.

---

## Contexto

La Home tiene un design system sólido (`card-soft`, `chip`, `Reveal`, etc.) y el flujo de conversión es correcto. Estas mejoras son **polish visual** para subir el nivel de profesionalismo percibido sin alterar contenido ni estructura.

**Archivos relevantes:**

- `src/components/ServiciosGrid.tsx` → mejora #4
- `src/components/ProblemaSection.tsx` → mejora #5
- `src/app/page.tsx` (hero section) → mejora #6
- `src/app/globals.css` → mejora #7

---

## Mejora #4: Reforzar presencia visual de íconos en cards de servicios

### Problema

Los íconos Lucide (`strokeWidth={1.5}`, 28px) en las cards de `ServiciosGrid` y `SolucionesGrid` son delgados y se pierden contra el fondo oscuro de las cards. El ojo no los detecta rápido al escanear.

### Solución propuesta

Agregar un fondo circular/pill sutil detrás del ícono para darle más peso visual.

### Implementación sugerida

**En **`ServiciosGrid.tsx`** — componente **`ServicioCard`**:**

```tsx
// ANTES:
<s.icon className={`${compact ? "mt-4 h-6 w-6" : "mt-5 h-7 w-7"} text-terracota`} strokeWidth={1.5} />

// DESPUÉS:
<span className={`inline-flex items-center justify-center rounded-xl bg-terracota/10 ${compact ? "mt-4 h-10 w-10" : "mt-5 h-12 w-12"}`}>
  <s.icon className={`${compact ? "h-5 w-5" : "h-6 w-6"} text-terracota`} strokeWidth={1.5} />
</span>

```

**En **`SolucionesGrid.tsx`** — componente **`NichoCard`**:**

```tsx
// ANTES:
<n.icon className={`text-terracota ${featured ? "h-8 w-8" : "h-6 w-6"}`} strokeWidth={1.5} />

// DESPUÉS:
<span className={`inline-flex items-center justify-center rounded-xl bg-terracota/10 ${featured ? "h-14 w-14" : "h-10 w-10"}`}>
  <n.icon className={`text-terracota ${featured ? "h-7 w-7" : "h-5 w-5"}`} strokeWidth={1.5} />
</span>

```

### Criterio de aceptación

- Los íconos son más visibles al escanear rápido en desktop y mobile
- El fondo circular es sutil (10% opacity del terracota) — no compite con el texto
- No rompe la alineación vertical de las cards
- `npm run build` pasa sin errores

---

## Mejora #5: Agregar contexto visual a ProblemaSection

### Problema

`ProblemaSection.tsx` es una card blanca con lista de 4 pain points + blockquote. Es 100% texto. Entre el hero animado (con mockup) y las secciones con íconos/cards, genera un "valle visual" plano.

### Solución propuesta

Agregar un ícono decorativo grande (semitransparente) en la esquina superior derecha de la card, como acento visual que contextualiza el dolor sin competir con la lectura.

### Implementación sugerida

**En **`ProblemaSection.tsx`**:**

```tsx
import { AlertTriangle } from "lucide-react";

// Dentro del <div className="card-soft bg-white">, agregar antes del <h2>:
<AlertTriangle 
  className="absolute -right-4 -top-4 h-24 w-24 text-terracota/5 rotate-12 pointer-events-none" 
  strokeWidth={1} 
  aria-hidden 
/>

```

Y hacer el contenedor `relative`:

```tsx
<div className="card-soft bg-white relative overflow-hidden">

```

### Alternativa más conservadora

Si el ícono decorativo no encaja con la estética:

- Agregar un `border-l-4 border-terracota` al lado izquierdo de la card (sin ícono)
- O un gradiente sutil en la parte superior de la card (`bg-gradient-to-b from-terracota/3 to-transparent`)

### Criterio de aceptación

- La sección ya no se siente como un bloque de texto plano
- El elemento visual es decorativo, no distrae de la lectura
- Se ve bien en mobile (375px) y desktop
- No afecta accesibilidad (aria-hidden en el decorativo)

---

## Mejora #6: Glow sutil en hero detrás del WhatsAppMockup

### Problema

El `WhatsAppMockup` en el hero flota sobre un fondo plano oscuro. Visualmente correcto pero sin profundidad — el mockup podría "destacar" más con un halo de luz.

### Solución propuesta

Agregar un gradiente radial muy sutil (glow) detrás del mockup para darle profundidad y atraer el ojo al producto.

### Implementación sugerida

**En **`src/app/page.tsx`** — la columna del mockup (desktop):**

```tsx
// ANTES:
<Reveal delay={80} className="hidden lg:flex lg:-translate-y-2 lg:justify-end">
  <WhatsAppMockup framed />
</Reveal>
// DESPUÉS:
<Reveal delay={80} className="hidden lg:flex lg:-translate-y-2 lg:justify-end">
  <div className="relative">
    <div className="absolute inset-0 -inset-x-8 -inset-y-8 rounded-full bg-terracota/6 blur-3xl pointer-events-none" aria-hidden />
    <WhatsAppMockup framed />
  </div>
</Reveal>

```

### Variante más intensa (evaluar visualmente)

```css
/* En globals.css como clase reutilizable */
.glow-accent {
  position: relative;
}
.glow-accent::before {
  content: '';
  position: absolute;
  inset: -2rem;
  border-radius: 50%;
  background: radial-gradient(ellipse at center, var(--color-terracota) 0%, transparent 70%);
  opacity: 0.06;
  filter: blur(40px);
  pointer-events: none;
}

```

### Criterio de aceptación

- El glow es SUTIL — apenas perceptible, no un efecto "neón"
- Solo aparece en desktop (el mockup mobile no lo necesita — es más pequeño)
- No afecta performance (es un div con blur, no un canvas)
- `prefers-reduced-motion` no aplica (es estático)

---

## Mejora #7: Mayor contraste entre secciones al scrollear

### Problema

Las secciones alternan entre dark (`section-band`) y light (`section-white`), pero al scrollear rápido la diferencia no siempre es evidente. Algunas secciones consecutivas se sienten visualmente continuas.

### Solución propuesta

Reforzar el separador visual entre secciones con un borde sutil o un cambio de tono más marcado.

### Implementación sugerida

**Opción A — Separador sutil entre secciones (en **`globals.css`**):**

```css
.section-band + .section-white,
.section-white + .section-band {
  border-top: 1px solid var(--color-ink-8, rgba(36, 21, 9, 0.08));
}

```

**Opción B — Gradiente de transición:**

```css
.section-white {
  background: linear-gradient(to bottom, 
    rgba(246, 236, 218, 0.04) 0%,   /* arena muy tenue */
    transparent 100px
  );
}

```

**Opción C — Más padding vertical (la más conservadora):** Verificar que `section-py` tenga al menos `py-16 md:py-24`. Si ya lo tiene, esta mejora no aplica.

### Criterio de aceptación

- Al scrollear rápido, se distingue claramente dónde empieza y termina cada sección
- No introduce un elemento visual que se sienta ajeno al design system
- Las secciones `section-band` y `section-white` se diferencian sin esfuerzo

---

## Orden de implementación sugerido

1. **#4 (íconos)** → cambio más simple y de mayor impacto visual
2. **#7 (contraste secciones)** → solo CSS, riesgo cero
3. **#6 (glow hero)** → cosmético, fácil de revertir
4. **#5 (ProblemaSection)** → requiere decisión estética (ícono vs. borde vs. gradiente)

---

## Validación

Después de cada mejora:

1. `npm run lint` → sin errores
2. `npm run build` → compila
3. Verificar visualmente en 375px (mobile) y 1440px (desktop)
4. Verificar que `Reveal` sigue funcionando (no romper animaciones)
5. Verificar dark/light: las mejoras deben respetar el sistema de color existente

