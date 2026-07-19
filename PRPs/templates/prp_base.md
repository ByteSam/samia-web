name: "Base PRP Template v2 (adaptado a Next.js/TypeScript) - Context-Rich with Validation Loops"
description: |

## Purpose
Template optimizado para que Claude Code implemente features en `samia-web` (Next.js 16 App Router + TypeScript + Tailwind v4) con suficiente contexto y validación propia.

## Core Principles
1. **Context is King**: incluir toda la documentación, ejemplos y advertencias necesarias.
2. **Validation Loops**: dar comandos de lint/build ejecutables que la IA pueda correr y corregir.
3. **Information Dense**: usar patrones y nombres reales de este codebase.
4. **Progressive Success**: empezar simple, validar, luego mejorar.
5. **Global rules**: seguir todas las reglas de `AGENTS.md` — incluye "mostrar el plan antes de ejecutar".

---

## Goal
[Qué hay que construir — sé específico sobre el estado final deseado]

## Why
- [Valor de negocio / impacto para el usuario]
- [Integración con features existentes]
- [Qué problema resuelve y para quién]

## What
[Comportamiento visible para el usuario y requerimientos técnicos]

### Success Criteria
- [ ] [Resultados medibles y específicos]

## All Needed Context

### Documentation & References
```yaml
# MUST READ - incluir en la ventana de contexto
- url: [URL de documentación oficial]
  why: [Secciones/métodos específicos que se necesitan]

- file: [ruta/al/archivo/ejemplo.tsx]
  why: [Patrón a seguir, gotchas a evitar]

- doc: [URL de documentación de librería]
  section: [Sección específica sobre problemas comunes]
  critical: [Insight clave que evita errores comunes]
```

### Current codebase tree (relevante)
```bash
src/app/            # rutas (App Router) — cada carpeta = una página
src/components/     # componentes reutilizables
src/lib/contact.ts  # constantes de contacto (WhatsApp, Cal.com)
docs/               # decisiones vigentes del producto
```

### Known Gotchas de este codebase
```ts
// CRITICAL: Next.js 16 tiene breaking changes vs. tu training data.
//           Lee node_modules/next/dist/docs/ antes de escribir código nuevo (ver AGENTS.md).
// CRITICAL: Tailwind v4 — los tokens de color viven en src/app/globals.css (@theme inline), no en tailwind.config.
// CRITICAL: Componentes con estado (useState, onClick) necesitan "use client" al inicio del archivo.
// CRITICAL: No inventar precios, URLs ni testimonios — usar placeholders explícitos o pedir el dato real.
```

## Implementation Blueprint

### Componentes/tipos a crear

Ejemplo de referencia real en este repo: `src/components/LeadForm.tsx` (client component con formulario + estado + integración a WhatsApp).

```tsx
// Estructura esperada, no código completo
```

### Lista de tareas en orden

```yaml
Task 1:
MODIFY src/app/page.tsx:
  - FIND sección: "..."
  - AGREGAR después de: "..."
  - PRESERVAR el resto de la sección igual

CREATE src/components/NuevoComponente.tsx:
  - MIRROR patrón de: src/components/LeadForm.tsx
  - Usar clases ya existentes: card-soft, btn-pill, chip

...

Task N:
...
```

### Pseudocódigo por tarea (si aplica)
```tsx
// Task 1
// Pseudocódigo con detalles CRÍTICOS, no escribas el código completo todavía
"use client";
export default function NuevoComponente() {
  // PATTERN: validar estado antes de submit (ver LeadForm.tsx)
  // GOTCHA: recordar "use client" si hay useState/onClick
}
```

### Integration Points
```yaml
NAV:
  - si agrega una ruta nueva, actualizar src/components/Header.tsx y MobileMenu.tsx

METADATA:
  - cada page.tsx nuevo necesita su propio `export const metadata`

ESTILOS:
  - reutilizar tokens de globals.css, no hardcodear colores nuevos sin necesidad
```

## Validation Loop

### Level 1: Lint & tipos
```bash
npm run lint
# Esperado: sin errores. Si hay errores, leerlos y corregir.
```

### Level 2: Build (incluye chequeo de TypeScript)
```bash
npm run build
# Esperado: compila y genera las páginas estáticas sin errores.
```

### Level 3: Verificación manual en navegador
```bash
# Levantar preview y revisar la funcionalidad real (no solo que compile)
# Usar las herramientas de Browser pane: console sin errores, interacción probada
```

## Final Validation Checklist
- [ ] `npm run lint` pasa sin errores
- [ ] `npm run build` pasa sin errores
- [ ] Verificado manualmente en el navegador (desktop y móvil)
- [ ] Sin errores en consola del navegador
- [ ] Sigue los patrones visuales existentes (card-soft, btn-pill, chip, paleta terracota/dorado)
- [ ] No inventa precios, URLs ni testimonios
- [ ] El plan se mostró y fue aprobado antes de tocar código

---

## Anti-Patterns to Avoid
- ❌ No crear un nuevo patrón visual cuando uno existente ya sirve
- ❌ No saltarse la validación porque "debería funcionar"
- ❌ No ignorar errores de lint/build — corregirlos
- ❌ No hardcodear colores/textos que deberían ser tokens o constantes
- ❌ No ejecutar cambios de código sin mostrar el plan primero (regla del proyecto)
