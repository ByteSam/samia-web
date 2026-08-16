# Plan visual — AFYNOVA · Temática Marte / Espacio

> Actualizado: 16 agosto 2026  
> Branch: `exp/color-dorado`  
> Ejecución: Cursor · Planificación: Quick  
> Brand identity: `docs/negocio/brand-identity.md` (actualizado en esta rama)

---

## Paleta — Dark theme "Marte / Espacio"

```css
--color-sand:          #1C1825;  /* Espacio profundo — fondo principal */
--color-sand-dark:     #140F1E;  /* Vacío cósmico — alternancia/bandas */
--color-ink:           #F2E8DC;  /* Luz estelar — texto principal */
--color-terracota:     #D4622B;  /* Naranja marciano — CTA */
--color-terracota-dark:#B34A1C;  /* Naranja sombra — CTA hover */
--color-rojo-tierra:   #8C2F1B;  /* Óxido de hierro — acento fuerte */
--color-dorado:        #C1892B;  /* Cobre solar — acento secundario */
--color-dorado-light:  #E9C876;  /* Arena dorada — highlight sutil */
--color-whatsapp:      #25D366;

--text-secondary: rgba(242, 232, 220, 0.72);
--text-muted:     rgba(242, 232, 220, 0.45);
--border-subtle:  rgba(209, 137, 43, 0.12);
--border-strong:  rgba(209, 137, 43, 0.25);
--surface-card:   rgba(193, 137, 43, 0.04);
```

**Regla:** naranjas/dorados son ACENTOS (CTAs, logo, glows, bordes, links). El 90% de la superficie es oscura.

---

## Logo — Eclipse con gradiente animado

```
Naranja marciano (arriba):  #D4622B
Cobre solar (centro):       #C1892B
Rojo tierra (abajo):        #8C2F1B
Animación:                  rotación 360° en ~10-12s
Glow:                       blur ~25px, naranja/dorado, opacity 30%
Wordmark:                   Luz estelar #F2E8DC
```

---

## Estado actual (implementado)

- [x] Paleta dark marciana en `globals.css`
- [x] Logo con gradiente animado en `Logo.tsx`
- [x] Wordmark blanco/estelar
- [x] Cards con bordes dorados
- [x] Secciones oscuras
- [x] CTA naranja marciano

### Progreso por fase

| Fase | Estado | Notas |
|------|--------|-------|
| **FASE 1** — Fixes críticos | ✅ Hecho | WhatsApp mockup, compare, proyectos, botón WA |
| **FASE 2** — Efectos premium | ✅ Hecho | Glows, shimmer, header, estrellas, noise, glass |
| **FASE 3** — Ritmo y profundidad | ✅ Hecho | Alternancia, horizonte, radial, nebulosa, timeline, FAQ |
| **FASE 4** — Hero enhancements | ✅ Hecho | Gradiente texto, float, shadow, ring, chip, parallax, logo breathe |
| **FASE 5** — Detalles premium | ✅ Hecho | Commitment glow, soluciones/servicios, CTA timeline, inputs, hovers, marquee, compare |
| **FASE 6** — Opcional | ✅ Hecho | Scroll indicator, page transition, cursor trail hero |
| **FASE 7** — UX y copy | ✅ Hecho | Copy hero, precio visible, mockup, secciones, proyectos ocultos, sin testimonios inventados |
| **FASE 8** — Landings nicho | ✅ Hecho | Dark theme, precios legales, seguridad IA, mockup recordatorio, flujo locales, FAQs |
| **FASE 9** — Pre-merge polish | ✅ Hecho | Header glass, línea fade, shimmer, timeline, glows, compare, compromiso, mockup choice |
| **FASE 10** — Copy/estructura | ✅ Hecho | Hero resultado, precio S/500, piloto arriba, core badges, ganchos nicho; sin testimonios inventados |
| **FASE 10b** — Doc↔web | ✅ Hecho | #110–122; #117 combo S/1,800 (tabla-precios + Home); #113/#105–106 post-merge |

---

## FASE 1 — Fixes críticos (coherencia dark)

| # | Elemento | Problema | Fix |
|---|----------|----------|-----|
| 1 | **Card WhatsApp del hero** | Fondo crema/blanco choca con dark | Fondo → `rgba(255,255,255,0.05)`, borde → `rgba(209,137,43,0.12)`. Burbujas → fondo translúcido oscuro |
| 2 | **Cards "Sin respuesta vs. atendida"** | Fondos blancos puros | Ambas cards → fondo oscuro translúcido. "Con asistente" → borde gradiente naranja→dorado |
| 3 | **Card "Proyectos realizados"** | Gradiente rosado | Fondo → `rgba(193,137,43,0.03)` (dorado sutil) |
| 4 | **Botón "Continuar en WhatsApp"** | Gris/apagado, parece deshabilitado | Color → verde WhatsApp `#25d366` sólido |

---

## FASE 2 — Efectos premium (estilo Quick)

| # | Elemento | Qué agregar | Archivo |
|---|----------|-------------|---------|
| 5 | **Glows del hero** | Orbes más grandes (blur 60-80px, opacity 15-20%) naranja + dorado, asimétricos | Hero / `globals.css` |
| 6 | **Shimmer en CTAs** | Destello dorado en hover en todos los `.btn-pill-solid` | `globals.css` |
| 7 | **Borde gradiente header** | `border-bottom: 1px` gradiente naranja→dorado→transparente | `globals.css` |
| 8 | **Micro-estrellas fondo** | `background-image` con dots 1-2px, opacity 0.1-0.2 — campo de estrellas | `globals.css` |
| 9 | **Noise texture** | Grain sutil (opacity 2-3%) sobre el fondo — elimina look "digital plano" | `globals.css` |
| 10 | **Glassmorphism header** | `backdrop-filter: blur(12px)` + fondo `rgba(28,24,37,0.85)` al scroll | `globals.css` / Nav |

---

## FASE 3 — Ritmo y profundidad

| # | Elemento | Propuesta | Archivo |
|---|----------|-----------|---------|
| 11 | **Alternancia fondos** | `#1c1825` ↔ `#140f1e` entre secciones — capas de profundidad | `globals.css` |
| 12 | **Separadores de sección** | Líneas horizontales gradiente naranja→dorado→transparente (horizonte marciano) | `globals.css` |
| 13 | **Gradiente radial sutil** | Radial-gradient desde el centro (ligeramente más claro) hacia bordes — no plano | `globals.css` |
| 14 | **Nebulosa sutil** | Blob 200-300px, blur ~100px, naranja/dorado opacity 3-5% en una esquina | `globals.css` |
| 15 | **Timeline línea conectora** | Gradiente naranja→dorado (no gris) — se lee como "camino" | componente |
| 16 | **FAQ separadores** | Bordes → `rgba(209,137,43,0.1)` (tinte cálido) | `globals.css` |

---

## FASE 4 — Hero enhancements

| # | Elemento | Propuesta | Archivo |
|---|----------|-----------|---------|
| 17 | **Texto hero con gradiente** | Heading con gradiente sutil naranja→luz estelar en palabras clave | Hero component |
| 18 | **Floating mockup** | WhatsApp card con float animation (translate-y 3-5px, loop 4-5s) | Hero / CSS |
| 19 | **Drop-shadow cálido** | Mockup con `drop-shadow` naranja/dorado (no negro) | CSS |
| 20 | **Avatar Daniel con ring** | Borde gradiente animado sutil alrededor del avatar (como mini-logo) | CSS |
| 21 | **Chip "PARA PYMES EN PERÚ"** | Fondo `rgba(212,98,43,0.08)` + borde naranja sutil | CSS |
| 22 | **Parallax en glows** | Orbes se mueven ligeramente al scroll (10-20% diferencia) | JS/CSS |
| 23 | **Logo glow que "respira"** | Opacity pulsa 20-35% en ~4s — da vida | CSS keyframe |

---

## FASE 5 — Detalles que elevan

| # | Elemento | Propuesta |
|---|----------|-----------|
| 24 | **"<30 seg" glow** | Resplandor naranja difuso detrás del número grande |
| 25 | **Soluciones por rubro — borde top** | Variar color: naranja / dorado / rojo tierra por card |
| 26 | **Servicios — íconos** | Variar color: uno naranja, uno dorado, uno rojo tierra |
| 27 | **Servicios — chip interno** | Cambiar "Empieza aquí" → mini-tag categoría: "Web", "IA", "Automatización" |
| 28 | **CTA final timeline** | "Empezar con diagnóstico" → `.btn-pill-solid` (no link text) |
| 29 | **Inputs formulario** | Bordes → `rgba(209,137,43,0.2)`, focus → naranja marciano sólido |
| 30 | **Hover cards** | Leve elevación (translate-y -2px) + glow naranja sutil en borde |
| 31 | **Marquee separadores** | Dots → glyph ✦ con glow / fade en bordes izq/derecha |
| 32 | **Flecha "→" entre cards** | Pulso/shimmer sutil que atrae la mirada al antes/después |
| 33 | **Card "Con asistente" glow** | Glow exterior naranja sutil — comunica "esto es lo bueno" |
| 34 | **Checks animados** | ✓ aparecen con stagger al entrar en viewport |

---

## FASE 6 — Opcional / polish final

| # | Elemento | Propuesta |
|---|----------|-----------|
| 35 | **Indicador de scroll** | Dot/línea mínima animada debajo del header — desaparece al scrollear |
| 36 | **Page transition** | Fade sutil al navegar entre rutas (Next.js) |
| 37 | **Cursor trail** (si no es mucho) | Trail muy sutil dorado al mover mouse en hero — spacey |

---

## FASE 7 — UX y copy (mejoras de conversión)

Basado en análisis como público objetivo (dueño de pyme, no técnico).

##### A. Copy que confunde — simplificar

| # | Dónde | Actual | Propuesta |
|---|-------|--------|-----------|
| 38 | **Hero subtitle** | "Webs, agentes IA y automatización por WhatsApp" | "Webs, asistentes de WhatsApp y automatización" — habla el idioma del cliente |
| 39 | **Hero subtitle (alternativa)** | — | "Tu negocio responde solo — web, WhatsApp y automatización" |

##### B. Precio más visible

| # | Propuesta |
|---|-----------|
| 40 | Agregar "Desde S/1,500 · implementación completa" en la sección "Qué ganas" o justo después del hero (antes de scrollear mucho). Puede ser un chip o línea sutil |

##### C. Prueba social / confianza

| # | Propuesta |
|---|-----------|
| 41 | Agregar 1-2 testimonios (aunque sea de Fortaleza Vinzos). Puede ser una línea tipo: `"En 3 días ya estaba respondiendo solo" — Fortaleza Vinzos, España` |
| 42 | Si no hay testimonios reales aún, agregar un contador sutil: "X negocios implementados" (solo si es real, nunca inventar) |
| 43 | La sección "Proyectos realizados" — ocultar si solo hay 1 caso sin screenshot. Mejor mostrar cuando haya 2-3 con imagen |

##### D. Claridad sobre el asistente IA

| # | Dónde | Propuesta |
|---|-------|-----------|
| 44 | **Hero o debajo del mockup** | Agregar una línea: "Si no sabe la respuesta, te la pasa a ti directo" — reduce el miedo a "qué pasa si el bot dice tonterías" |
| 45 | **Mockup del hero** | Hacer el ejemplo más realista/complejo: incluir pregunta de precios y respuesta con horarios + precio. Muestra la potencia mejor que solo "¿tienen citas?" |

##### E. Estructura / navegación

| # | Problema | Propuesta |
|---|----------|-----------|
| 46 | "Soluciones por rubro" y "Servicios" se confunden | Renombrar una: "Soluciones por rubro" → "¿En qué rubro estás?" / Servicios → "Qué incluye" o fusionar ambas secciones |
| 47 | Falta indicador de que hay más contenido abajo del hero | Agregar scroll indicator o anchor sutil (puede ser parte de FASE 6 #35) |

##### F. Refuerzo personal (Daniel = confianza)

| # | Propuesta |
|---|-----------|
| 48 | "Implementado por mí" → expandir levemente: "Implementado por mí · soporte directo después de la entrega" — reduce el miedo de "¿y si se enferma?" |

##### Prioridad UX/copy

```
1. #38 (simplificar "agentes IA") — impacto inmediato en comprensión
2. #40 (precio visible) — reduce la duda principal
3. #44 (seguridad del bot) — reduce el miedo #1
4. #45 (mockup más realista) — muestra mejor el valor
5. #41-43 (prueba social) — cuando haya material real
6. #46-48 (estructura/copy menores) — polish
```

---

## FASE 8 — Mejoras por landing de nicho

### `/clinicas`

| # | Tipo | Propuesta |
|---|------|-----------|
| 49 | **Contenido** | Agregar segundo mockup o línea que muestre el RECORDATORIO: "Hola María, te recuerdo tu cita mañana a las 3pm. ¿Confirmas? ✅/❌" — ahora solo se ve el flujo de agendar, no el de recordar |
| 50 | **Confianza** | Agregar estadística real del sector: "Clínicas con recordatorios por WhatsApp reducen ausencias hasta un 40%" (solo si hay fuente verificable) |
| 51 | **Claridad** | Agregar línea: "Responde como si fuera tu recepción — con tu nombre y tu tono" — reduce miedo a "suena robótico" |
| 52 | **Especificidad** | Mencionar qué tipos de clínica aplica: dental, médica, estética, fisio — o dejarlo claro con "cualquier clínica con agenda de citas" |

### `/servicios-legales`

| # | Tipo | Propuesta |
|---|------|-----------|
| 53 | **Precio** | Agregar paquetes de precio (como clínicas y locales tienen). Al menos un rango "Desde S/X" en el hero. Actualmente es la única landing sin precios claros |
| 54 | **Alcance** | Considerar ampliar de "derecho laboral" a "estudios de abogacía" — o dejar claro que el mismo sistema se adapta a cualquier área del derecho |
| 55 | **Confianza** | Hacer más prominente la garantía de "0% consejo legal automatizado" — quizá un badge visual en el hero además de la mención en texto |
| 56 | **Visual** | Agregar un paso visual que muestre "urgencia detectada → notificación al abogado" — ahora solo se ve el chat pero no la alerta |
| 57 | **Claridad** | Explicar brevemente cómo funciona la clasificación de urgencia: "Tú defines las reglas — palabras, contexto, tipo de caso. No es IA inventando prioridades" |

### `/servicios-locales`

| # | Tipo | Propuesta |
|---|------|-----------|
| 58 | **Visual** | Agregar diagrama/visual inline del flujo completo: Llamada perdida → WhatsApp automático → Respuesta → Cita agendada. El flujo del CLIENTE, no los pasos de implementación |
| 59 | **FAQ** | Agregar: "¿Necesito internet todo el tiempo?" → "No — el asistente funciona en la nube. Aunque estés en un sótano sin señal, responde por ti" |
| 60 | **FAQ** | Agregar: "¿Lo puedo apagar cuando estoy de vacaciones?" → "Sí — lo pausas y lo reactivas cuando vuelvas" |
| 61 | **Claridad** | Agregar mención de zona de cobertura: "Configuras tu zona de trabajo — el asistente avisa al cliente si estás fuera de rango" |
| 62 | **Chip hero** | Simplificar "Gasfitería · cerrajería · mantenimiento · emergencias del hogar" → "Servicios del hogar y emergencias" (más corto, misma idea) |

### Mejoras comunes a las 3 landings

| # | Tipo | Propuesta |
|---|------|-----------|
| 63 | **Prueba social** | Agregar al menos 1 testimonio real por landing cuando exista. Mientras tanto, NO mostrar sección vacía |
| 64 | **Consistencia** | Las 3 landings deben tener precios visibles en el hero (legales no lo tiene) |
| 65 | **Dark theme** | Verificar que mockups, cards y comparadores se vean coherentes con el dark theme marciano (mismo fix que Home: sin fondos blancos sueltos) |
| 66 | **Seguridad IA** | Cada landing debe tener visible (no solo en FAQ) la línea: "Si no sabe la respuesta, te la pasa a ti directo" |

### Prioridad landings

```
1. #65 (dark theme coherente en landings) — visual
2. #64 (precios en legales) — conversión
3. #66 (seguridad IA visible) — confianza
4. #53 (paquetes legales) — conversión
5. #49 (mockup recordatorio clínicas) — demostrar valor
6. #58 (diagrama flujo locales) — claridad
7. Resto — polish progresivo
```

---

## Reglas de implementación

1. **Archivos principales:** `globals.css` + `Logo.tsx` + componente Hero + Nav
2. **No modificar HTML/JSX** salvo ajustes mínimos si un color está hardcodeado
3. **Cada fase debe compilar limpia:** `npm run lint` + `npm run build`
4. **Commits atómicos:** un commit por fase o sub-grupo lógico
5. **Contraste WCAG AA** — verificar texto claro sobre fondos oscuros
6. **`prefers-reduced-motion`** en TODA animación nueva
7. **Mobile-first check** — cada efecto debe verse bien en 375px sin saturar

---

## Orden de ejecución sugerido

```
FASE 1 → sin esto el dark no es coherente
FASE 2 → la promesa de "estilo Quick" se cumple
FASE 3 → deja de verse "dark theme genérico"
FASE 4 → el hero se vuelve memorable
FASE 5 → detalles que hacen decir "esto es premium"
FASE 6 → cherry on top
```

---

## Criterios de QA (antes de merge)

- [x] `npm run lint` / `npm run build` sin errores
- [ ] QA visual 375px y 1440px (Home completa)
- [ ] Animaciones Reveal/stagger intactas
- [ ] Sin ilustraciones figurativas
- [ ] Contraste WCAG AA verificado
- [ ] `prefers-reduced-motion` funcional
- [ ] Cards y mockups coherentes con dark theme (ningún fondo claro suelto)
- [ ] Efectos no causan mareo en 10s de observación
- [ ] Daniel aprueba visualmente

---

## Fuera de alcance

Copy, SEO, casos inventados, Cal.com, landings de nicho, otras ramas experimentales. Este plan es exclusivo para `exp/color-dorado`.

---

## FASE 9 — Mejoras pre-merge a main (último polish)

Estas mejoras se hacen DESPUÉS de las fases anteriores, justo antes de mergear a main.

### Hero section

| # | Mejora | Detalle | Prioridad |
|---|--------|---------|-----------|
| 67 | **Glassmorphism en header** | `backdrop-filter: blur(12px)` + fondo `rgba(28,24,37,0.85)` + border-bottom gradiente naranja→dorado | 🔴 |
| 68 | **Línea naranja debajo del header** | Se ve como cursor/error. Hacerla 100% ancho con fade o eliminarla | 🔴 |
| 69 | **Shimmer en botón CTA** | Destello dorado en hover en "Diagnóstico gratis" | 🔴 |
| 70 | **Glow detrás del mockup** | Radial-gradient naranja/dorado (blur 60px, opacity 10-15%) | 🟡 |
| 71 | **Chip "PARA PYMES EN PERÚ"** | Fondo más visible `rgba(212,98,43,0.1)` + borde naranja más marcado | 🟡 |
| 72 | **Ring naranja en avatar Daniel** | Borde 2px gradiente naranja — refuerza "persona real" | 🟡 |
| 73 | **"Gratis · 30 min · sin compromiso"** | Subir opacidad o agregar spacing extra antes | Fácil |
| 74 | **Chip "Desde S/1,500"** | Reducir bordes para que no compita visualmente con el CTA real | Fácil |
| 75 | **Burbuja "Consulta inicial" en mockup** | Hacerla más visible como botón (borde más marcado) | Fácil |
| 76 | **"Si no sabe la respuesta..."** | Agregar ícono (✓ o 🔒) antes + subir opacidad | Fácil |
| 77 | **Fondo hero plano** | Agregar radial-gradient sutil o nebulosa en esquina | 🟡 |

### Sección "Sin respuesta vs. atendida"

| # | Mejora | Detalle | Prioridad |
|---|--------|---------|-----------|
| 78 | **Card izquierda borde punteado** | Cambiar a sólido `rgba(255,255,255,0.08)` — se ve menos "wireframe" | Fácil |
| 79 | **Flecha "→" entre cards** | Más grande (24px) + color naranja + pulso sutil opacity | Fácil |
| 80 | **Card derecha gradiente** | Reducir saturación o usar gradiente más direccional (naranja→cobre) | 🟡 |
| 81 | **Separadores items card izquierda** | Border-bottom `rgba(255,255,255,0.05)` entre cada item | Fácil |

### Sección "Problema"

| # | Mejora | Detalle | Prioridad |
|---|--------|---------|-----------|
| 82 | **Ícono ⚠️ esquina** | Glow naranja sutil (opacity 20%, blur 10px) o más grande | Fácil |
| 83 | **Frase final itálica naranja** | Más margin-top + borde-top gradiente antes | Fácil |
| 84 | **Bullets "•"** | Color naranja marciano en vez de blanco | Fácil |
| 85 | **Card general** | Drop-shadow tenue naranja `0 4px 20px rgba(212,98,43,0.08)` | Fácil |

### Sección "Qué ganas / Mi compromiso"

| # | Mejora | Detalle | Prioridad |
|---|--------|---------|-----------|
| 86 | **"<30 seg" glow** | Glow naranja difuso detrás (blur 30px, opacity 15%) | 🟡 |
| 87 | **Card "Mi compromiso" fondo** | Gradiente sutil `rgba(193,137,43,0.03)` → transparente | Fácil |
| 88 | **Separadores entre items de la card** | Border-bottom sutil entre Recepcionista/Agenda/Implementado | Fácil |
| 89 | **Primer bullet izquierda** | Hacerlo bold o con ícono diferenciador | Fácil |

### Sección "Cómo trabajamos" (Timeline)

| # | Mejora | Detalle | Prioridad |
|---|--------|---------|-----------|
| 90 | **Línea vertical conectora** | Gradiente naranja→dorado→naranja (no gris) | 🔴 |
| 91 | **Milestone markers** | Dots/circles donde la línea conecta cada número | 🟡 |
| 92 | **"Entregable:" en chip** | Envolver en badge con fondo `rgba(212,98,43,0.08)` + borde | 🟡 |
| 93 | **CTA al final del timeline** | Botón `.btn-pill-solid` "Empezar con diagnóstico gratis →" | 🔴 |

### Prioridad pre-merge (hacer en este orden)

```
IMPRESCINDIBLE (sin esto no mergear):
1. #67 Glassmorphism header
2. #68 Arreglar línea naranja
3. #69 Shimmer en CTA
4. #90 Timeline línea gradiente
5. #93 CTA final timeline

ALTO IMPACTO (recomendado):
6. #70 Glow mockup
7. #86 Glow "<30 seg"
8. #72 Ring avatar Daniel
9. #78 Card sin respuesta → borde sólido
10. #84 Bullets naranja en Problema

NICE TO HAVE (si da tiempo):
11-93. El resto
```

---

## FASE 10 — Auditoría de copy, ejemplos y estructura (pre-merge)

Resultado de auditoría como público objetivo. Mejoras de texto, claridad y profesionalismo.

### Copy que mejorar

| # | Dónde | Actual | Propuesta | Por qué |
|---|-------|--------|-----------|---------|
| 94 | **Hero subtitle** | "Webs, asistentes de WhatsApp y automatización — para que ninguna consulta se pierda mientras tú atiendes lo que importa." | "Tu negocio responde solo — web, WhatsApp y automatización que trabajan por ti mientras atiendes lo que importa." | El actual lista servicios. El nuevo comunica el beneficio |
| 95 | **"Qué ganas" heading** | "Del primer contacto al negocio integrado" | "Lo que cambia en tu negocio" o "Qué ganas desde el día 1" | "Negocio integrado" es jerga — un gasfitero no entiende qué significa |
| 96 | **Metadata title** | "Webs, automatización y agentes IA para pymes" | "Tu negocio responde solo — webs y asistentes WhatsApp para pymes | afynova" | Más beneficio, menos lista de servicios |
| 97 | **"Implementado por mí" (card)** | "Soporte directo después de la entrega — no desaparezco cuando el proyecto termina." | "Soporte directo después de la entrega — no desaparezco. Punto." | Más contundente, memorable |

### Estructura que reorganizar

| # | Propuesta | Por qué | Prioridad |
|---|-----------|---------|-----------|
| 98 | **Mover mención de "Piloto 14 días" más arriba** — agregar una línea debajo del hero o en la comparación: "Si no funciona, no pagas la configuración" | Es el argumento más fuerte y está muy escondido (scroll largo) | 🟡 |
| 99 | **Fusionar o diferenciar "Soluciones" y "Servicios"** | Se confunden — parecen lo mismo. Opciones: (a) renombrar Soluciones → "¿En qué rubro estás?" / (b) eliminar una y dejar solo la otra | 🟡 |
| 100 | **Reducir largo de página** (opcional) | Mucho scroll antes del formulario. El StickyCTA compensa pero evaluar si "Proyectos realizados" con 1 solo caso sin imagen debería estar | 🟢 |

### Profesionalismo visual

| # | Problema | Fix | Prioridad |
|---|----------|-----|-----------|
| 101 | **Card "Con asistente" naranja muy saturada** | Reducir saturación del gradiente o usar dirección más diagonal (no tan uniforme) | 🟡 |
| 102 | **Botón formulario "Continuar en WhatsApp" apagado** | Color → verde WhatsApp `#25d366` o naranja marciano sólido | 🔴 |
| 103 | **"Proyectos realizados" con 1 solo caso sin screenshot** | Ocultar sección hasta tener ≥2 casos con imagen. O expandir el caso actual con más detalle/screenshot | 🟡 |
| 104 | **Texto "Ejemplo ilustrativo" debajo del mockup** | Se ve como disclaimer legal — reducir tamaño o cambiar a gris más sutil | Fácil |

### Confianza / prueba social

| # | Propuesta | Cuándo |
|---|-----------|--------|
| 105 | **Agregar línea tipo "X negocios ya usan esto"** debajo del CTA (solo si es real) | Cuando haya ≥3 clientes |
| 106 | **Agregar 1 testimonio real** (aunque sea del piloto gratis) | Después de entregar a María/Mauricio |
| 107 | **Badge "Piloto 14 días sin riesgo"** en el hero o post-comparación — no solo al fondo | Ahora (solo mover texto existente) |

### Ejemplos que mejorar

| # | Ejemplo | Problema | Fix |
|---|---------|----------|-----|
| 108 | **Mockup WA: burbuja "Consulta inicial"** | Parece texto cortado, no se entiende que es un botón de respuesta rápida | Darle borde más visible + fondo diferenciado |
| 109 | **Comparación "Sin respuesta"** | Los textos son buenos pero el formato "— sin respuesta" parece metadata técnica | Cambiar a: "❌ Sin respuesta" o "→ perdida" con ícono visual |

### Prioridad FASE 10

```
ANTES DE MERGE:
1. #102 Botón formulario → color real (se ve deshabilitado)
2. #94 Hero subtitle → beneficio en vez de lista
3. #95 Heading "Qué ganas" → lenguaje simple
4. #107 Mención piloto 14 días más arriba
5. #103 Ocultar/mejorar "Proyectos realizados" si solo 1 caso

RECOMENDADO:
6. #98 Garantía más visible arriba
7. #101 Card naranja menos saturada
8. #97 "No desaparezco. Punto."
9. #99 Fusionar/diferenciar Soluciones vs Servicios

POST-MERGE (cuando haya material):
10. #105-106 Prueba social real
```

---

## FASE 10b — Brechas documentación vs web (alinear)

Resultado de cruzar los 12 documentos de `docs-empresa/` contra lo que la web muestra actualmente. Estas son contradicciones o cosas que la documentación define bien pero la web no refleja.

### Brechas CRÍTICAS (la web contradice lo documentado)

| # | Doc fuente | Lo que dice | Lo que la web hace | Fix |
|---|-----------|-------------|-------------------|-----|
| 110 | Brand Identity | "La tecnología es el medio, nunca el mensaje" | Hero dice "Webs, asistentes, automatización" = TECH como mensaje | Hero subtitle → "Tu negocio responde solo" (resultado, no herramientas) |
| 111 | Catálogo/Pricing | "Esencial a S/500 es la puerta de entrada" | Hero dice "Desde S/1,500" (solo web, excluye Esencial) | Cambiar a "Desde S/500" o "Desde S/500/mes" para bajar barrera percibida |
| 112 | Catálogo | "80% del esfuerzo en Asistentes + Webs (CORE)" | Los 5 servicios aparecen al mismo nivel visual en el grid | Destacar 2 core con badge "Más popular" o tamaño mayor. Los otros como "también hacemos" |
| 113 | Marketing | "Evidencia antes que promesa" | 0 testimonios, 0 ROI visible, 0 números reales | Agregar cuando exista. MIENTRAS: no prometr lo que no hay |

### Brechas IMPORTANTES (la doc es más clara que la web)

| # | Doc fuente | Lo que falta en la web | Fix |
|---|-----------|----------------------|-----|
| 114 | Brand Identity | Propuesta de valor "Atiende mejor, vende más, deja de perder tiempo" NO aparece en ningún lugar visible | Agregar como sub-heading, badge o línea debajo del hero |
| 115 | Estrategia Ventas | No hay diferenciación "esto es a medida, no genérico" de forma prominente | Agregar línea: "No es un bot genérico. Está configurado para TU negocio." |
| 116 | ICP / Marketing | En la Home, las cards de "Soluciones por rubro" no tienen la frase-dolor de cada nicho | Agregar subtítulo: "¿Pierdes llamadas?" / "¿Pacientes no confirman?" / "¿Consultas fuera de horario?" |
| 117 | Pricing | No se mencionan bundles/combos en la Home | Agregar chip: "Combo web + asistente desde S/1,800" |
| 118 | Pricing | No hay justificación de ROI ("si recuperas 2 clientes, se paga solo") | Agregar línea de ROI cerca del precio |
| 119 | Estrategia Ventas | "Piloto 14 días sin riesgo" escondido al fondo (mucho scroll) | Mover mención a post-hero o post-comparación |
| 120 | ICP | La Home no habla el idioma de ningún nicho específico (genérica) | En Soluciones, usar la frase exacta del dolor (#116) |

### Brechas MENORES

| # | Fix |
|---|-----|
| 121 | Meta title "agentes IA" → cambiar a lenguaje del ICP ("asistentes WhatsApp para pymes") |
| 122 | "Qué ganas" heading → lenguaje simple ("Lo que cambia en tu negocio") |
| 123 | Card "Mi compromiso" → "Implementado por mí" necesita subtítulo más contundente |

### Prioridad FASE 10b (alinear doc↔web)

```
ANTES DE MERGE (imprescindible):
1. #110 Hero subtitle → resultado, no tech (viola principio #1 de marca)
2. #111 Precio "Desde S/500" (o "Desde S/500/mes") — bajar barrera
3. #112 Destacar 2 servicios core visualmente
4. #115 Línea "No es genérico. Configurado para TU negocio."
5. #119 Piloto 14 días mencionado más arriba

RECOMENDADO:
6. #114 Propuesta de valor visible
7. #116 Frase-dolor por nicho en cards Soluciones
8. #118 ROI visible ("se paga solo en mes 1")
9. #117 Mención de bundle
10. #121 Meta title sin jerga

POST-MERGE (cuando haya material real):
11. #113 Testimonios/casos/números
```

---

## FASE 11 — Tests de usuario simulados: modificaciones al inicio

Resultado de 8 simulaciones como buyer personas visitando la Home por primera vez. Patrones detectados y fixes.

### Las 5 barreras más comunes (de 8 tests)

| # | Barrera | Personas afectadas | Impacto |
|---|---------|-------------------|---------|
| 1 | "S/1,500 parece caro" — no ven el Esencial a S/500 | 4 de 8 | 50% de visitantes se van |
| 2 | "No habla MI idioma / no soy nicho listado" | 3 de 8 | Se sienten excluidos |
| 3 | "No encuentro paquetes/precio exacto en la Home" | 3 de 8 | Abandonan buscando |
| 4 | "¿Es solo 1 persona? ¿Y si desaparece?" | 2 de 8 | Desconfianza |
| 5 | "0 testimonios = 0 confianza" | 2 de 8 | No contactan sin referido |

### Modificaciones al inicio (Hero + primer scroll)

| # | Cambio | Actual | Propuesta | Personas que ayuda |
|---|--------|--------|-----------|-------------------|
| 124 | **Hero subtitle → resultado** | "Webs, asistentes de WhatsApp y automatización — para que ninguna consulta se pierda..." | "Tu negocio responde solo — mientras tú trabajas. Web, WhatsApp y automatización que atienden por ti." | Todos (8/8) |
| 125 | **Precio visible → "Desde S/500"** | "Desde S/1,500 · implementación completa" | "Desde S/500/mes · implementación en días" (o "Desde S/500 config + S/200/mes") | Jorge, Roberto, Ana, Valentina |
| 126 | **Mini-pricing en Home** | No existe — solo "Desde S/X" | Agregar bloque con 3 niveles: "Esencial S/500 · Profesional S/1,500 · Integral S/3,500" con 1 línea cada uno | Ana, Valentina, Marco |
| 127 | **"¿Otro rubro?"** en Soluciones | Solo 3 nichos listados | Agregar card/link: "¿Otro rubro? También funciona — conversemos" con link al diagnóstico | Pedro + cualquier no-listado |
| 128 | **Frase-dolor por nicho** en cards Soluciones | Solo nombre del rubro | Subtítulo: "¿Pierdes llamadas?" / "¿Pacientes no confirman?" / "¿Consultas fuera de horario?" | Jorge, Carla, Roberto |
| 129 | **Línea de continuidad** | Solo "Implementado por mí" | Agregar: "Soporte directo por WhatsApp. Si dejo de operar, te entrego todo configurado." | Lucía, Marco |
| 130 | **Badges de confianza** en el hero o post-hero | Solo "API oficial" en landings de nicho | Agregar en Home: "🔒 API oficial WhatsApp" + "Operando desde 2026" + "Piloto 14 días sin riesgo" | Marco, Roberto |
| 131 | **Mockup más variado** | Solo ejemplo de "citas" | Cambiar a ejemplo que incluya precios + horarios (no solo agendar) para que más rubros se identifiquen | Roberto, Pedro |
| 132 | **ROI visible** | No hay justificación de precio | Agregar línea: "Si recuperas 2 clientes al mes, se paga solo" cerca del precio | Jorge, Roberto, Ana |
| 133 | **"No es un bot genérico"** | No se dice explícitamente | Agregar línea prominente: "No es un bot genérico. Está configurado con la info real de TU negocio." | Todos |

### Lo que SÍ funciona (NO tocar)

- ✅ "Ninguna consulta sin respuesta" (heading) — todos entienden el dolor
- ✅ "Diagnóstico gratis, 30 min, sin compromiso" — bajo riesgo
- ✅ "Si no sabe la respuesta, te la pasa a ti" — resuelve miedo al bot
- ✅ "Piloto 14 días" — genera seguridad (pero mover más arriba)
- ✅ Mockup WhatsApp — se entiende visualmente
- ✅ "Sin respuesta vs. atendida" — la sección más potente
- ✅ "<30 seg" — concreto y diferenciador
- ✅ Dark theme — se ve profesional/premium

### Prioridad FASE 11

```
IMPRESCINDIBLE (sin esto pierdes 50%+ de visitantes):
1. #124 Hero subtitle → resultado ("tu negocio responde solo") ✅ (Fase 10)
2. #125 Precio → "Desde S/500" (no S/1,500) ✅ (Fase 10)
3. #133 "No es genérico, configurado para TU negocio" ✅ (Fase 10)
4. #130 Badges confianza (API oficial + piloto 14 días + desde 2026) ✅

ALTO IMPACTO:
5. #126 Mini-pricing (3 niveles visibles en Home) ✅
6. #128 Frase-dolor por nicho en cards ✅ (Fase 10)
7. #132 ROI visible ("se paga solo si recuperas 2 clientes") ✅
8. #127 "¿Otro rubro? También funciona" ✅

RECOMENDADO:
9. #129 Línea de continuidad
10. #131 Mockup más variado
```

---

## FASE 12 — Splash "Eclipse Formation" + Performance + Polish premium

### Optimización rendimiento (URGENTE — la web se siente lenta)

| # | Fix | Detalle |
|---|-----|---------|
| 134 | Desactivar en mobile (<768px) | ✅ HeroCursorTrail + HeroParallaxEffect + animaciones loop. En mobile NO hay cursor |
| 135 | Optimizar animaciones | ✅ TODAS deben usar transform/opacity (GPU). NUNCA animar width/height/margin/box-shadow |
| 136 | will-change: transform | ✅ Solo en elementos que se mueven, no en todo |
| 137 | Lazy load secciones debajo del fold | ✅ dynamic import FAQ/Sticky/trail/parallax (sin ssr:false en RSC Next 16) |
| 138 | Splash no blocking | ✅ Web carga en background, splash es CSS overlay (pointer-events: none) |
| 139 | Lighthouse | ⏳ Meta: Performance >80 — pendiente (sin Chrome en el entorno del agente; correr en local: `npm run build && npm start` + Lighthouse) |

### Splash — Concepto "Eclipse Formation"

Idea: como un eclipse real. Sol naranja aparece → luna oscura se interpone → se forma el logo.

| Paso | Tiempo | Detalle |
|------|--------|---------|
| Círculo naranja GRANDE | 0–0.8s | ✅ Círculo #D4622B aparece al centro (scale 0.5→1.0) + glow pulsante |
| Círculo oscuro se acerca | 0.8–1.8s | ✅ Círculo #1C1825 se mueve desde la derecha, superpone al naranja → forma el "corte" |
| Se forma el eclipse | 1.8–2.3s | ✅ Superposición completa = logo. Se achica al tamaño real |
| Wordmark aparece | 2.0–2.5s | ✅ "AFYNOVA" en fade debajo |
| Fade out → web | 2.5–3.0s | ✅ Splash fade out, web se revela |

Reglas:
- Duración: 2.5–3 seg
- Solo 1 vez por sesión (sessionStorage)
- prefers-reduced-motion: skip, logo estático 0.5s → web
- CSS @keyframes, mínimo JS
- Overlay position: fixed; z-index: 9999
- Componente: SplashScreen.tsx en layout.tsx

### Detalles premium

| # | Detalle |
|---|---------|
| 145 | ✅ Grain/noise texture fondo (opacity ~2.5%) |
| 146 | ✅ Sombras con color en cards (rgba naranja, no negro) |
| 147 | ✅ Hover cards borde ilumina (0.08→0.2) |
| 148 | ✅ Más whitespace secciones (64-80px) |
| 149 | ✅ Font size 17px en dark (`.text-body`) |
| 150 | ✅ Number counter "<30 seg" al entrar viewport |
| 151 | ✅ Tracking eyebrows 0.05em |
| 152 | ✅ Botón hover scale(1.02) |
| 153 | ✅ Line-height 1.7 párrafos |
| 154 | ✅ "Configurado en 5 días" (FAQ Home) |
| 155 | ✅ Email footer info@afynova.com |
| 156 | ✅ Hover links nav underline crece |

### Prioridad:
1. PRIMERO: #134-139 (performance — la web está lenta)
2. DESPUÉS: #140-144 (splash Eclipse Formation)
3. LUEGO: #145-156 (polish premium)
