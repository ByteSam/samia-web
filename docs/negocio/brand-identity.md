# Identidad de Marca — AFYNOVA

> Documento unificado para el repo. Fuente: `brand-book-ichan.md` (v1.1, 21 jul 2026) + `identidad-visual-ichan.md` (cerrada 20 jul 2026).**Regla:** Ningún cambio importante en la marca puede hacerse sin justificar qué parte se modifica y por qué.

> **⚠️ Rama `exp/color-dorado`** — Este documento ha sido actualizado para reflejar la identidad visual "Marte / Espacio profundo" que se está probando. La versión original (paleta light/terracota) vive en `develop` y `main`.

---

## 1. Esencia de marca

| Atributo | Definición |
| --- | --- |
| **Misión** | "Que ningún negocio pierda tiempo, dinero o clientes por procesos lentos, manuales o desconectados — resolviéndolo con la tecnología correcta en cada momento." |
| **Visión** | Ser la referencia de confianza en implementación tecnológica para pymes de habla hispana. |
| **Posicionamiento** | "AFYNOVA resuelve los problemas de negocio que hacen perder tiempo, clientes o dinero — con la tecnología, automatización y solución digital que mejor encaje en cada caso." |
| **Personalidad** | El ingeniero de confianza, no el vendedor carismático. Calma competente. |
| **Propuesta de valor** | "Atiende mejor, vende más y deja de perder tiempo — con la tecnología correcta implementada por alguien que responde por el resultado." |

---

## 2. Valores y principios

1. **Evidencia antes que promesa.**
2. **Implementar antes que asesorar.** (diferenciación central)
3. **Una solución simple que funciona > una compleja que impresiona.**
4. **La tecnología es el medio, nunca el mensaje.**
5. **No crecer más rápido de lo que se puede sostener con calidad.**
6. **El cliente entiende el resultado, no la arquitectura.**

---

## 3. Tono de voz

- Cercano con criterio profesional
- Primera persona singular (Daniel) a nivel Consulting
- Institucional a nivel marca madre
- Nunca "nosotros" ficticio mientras sea 1 persona
- Test: "¿esto lo entendería un dueño de pyme sin conocimiento técnico?"
- Sin buzzwords, sin hype, sin promesas absolutas

---

## 4. Identidad visual

### Personalidad visual

**Profesional, exploradora, confiable, minimalista, moderna, premium.**
Posicionamiento: "ingeniería de misión — resolver problemas con precisión, como una operación espacial".
Referencias de sensación: Stripe, Linear, Amazon Quick, SpaceX (principios, no estilos).
Temática subyacente: Marte / espacio profundo — el logo como cuerpo celeste, la marca como misión.

### Paleta — Dark theme "Marte / Espacio"

| Token | Hex | Uso | Inspiración |
| --- | --- | --- | --- |
| **Espacio profundo** | `#1C1825` | Fondo principal | Cielo nocturno con matiz púrpura |
| **Vacío cósmico** | `#140F1E` | Fondo alternancia / bandas | Espacio más profundo |
| **Luz estelar** | `#F2E8DC` | Texto principal (sobre oscuro) | Estrellas con tono cálido |
| **Naranja marciano** | `#D4622B` | CTA / acento principal | Superficie de Marte iluminada |
| **Naranja sombra** | `#B34A1C` | CTA hover / variante oscura | Marte en sombra |
| **Rojo Tierra** | `#8C2F1B` | Acento fuerte / gradiente | Óxido de hierro marciano |
| **Cobre solar** | `#C1892B` | Acento secundario (dorado) | Sol reflejando en polvo |
| **Arena dorada** | `#E9C876` | Highlight sutil | Dunas marcianas al amanecer |
| **WhatsApp** | `#25D366` | Solo botón WhatsApp | — |

**Esquema:** Dark theme. Fondos oscuros (espacio), texto claro (luz estelar), acentos cálidos puntuales (naranja marciano, cobre solar).

**Regla:** Los naranjas/dorados son ACENTOS, no fondos. El 90% de la superficie visual es oscura. Los colores vibrantes se usan en: CTAs, logo, glows, bordes, íconos, links.

#### Tokens semánticos adicionales

| Token | Valor | Uso |
| --- | --- | --- |
| `--text-secondary` | `rgba(242, 232, 220, 0.72)` | Texto secundario |
| `--text-muted` | `rgba(242, 232, 220, 0.45)` | Texto terciario |
| `--border-subtle` | `rgba(209, 137, 43, 0.12)` | Bordes suaves (tinte dorado) |
| `--border-strong` | `rgba(209, 137, 43, 0.25)` | Bordes más visibles |
| `--surface-card` | `rgba(193, 137, 43, 0.04)` | Fondo cards (calidez sutil) |

### Tipografía

| Uso | Fuente |
| --- | --- |
| **Logo (wordmark)** | Space Grotesk |
| **Headings del sitio** | Instrument Serif |
| **Cuerpo** | Inter |

Logo y headings usan fuentes distintas a propósito: marca = precisión, contenido = calidez editorial.

### Iconografía

Lucide, estilo outline, 20/24/32px. Funcional y discreta, nunca decorativa ni 3D.
Color: naranja marciano o cobre solar sobre fondo oscuro.

### Ilustraciones

**Sin ilustraciones decorativas figurativas.** Si se usa algo gráfico: abstracto/geométrico. Nunca cartoon ni stock genérico.

### Fotografía

- ✅ Fotografía real (fundador, WhatsApp real, producto real, capturas reales)
- ❌ Personas generadas por IA
- ❌ Fotos corporativas de stock
- ❌ Estética futurista exagerada

---

## 5. Logo — decisión cerrada

### Concepto: "El Corte Preciso"

**Círculo geométrico casi completo, con una única intervención/corte diagonal.**

Sensación: precisión, no ruptura. La forma se sigue sintiendo entera. Interpretación ampliada: cuerpo celeste con un corte — como un planeta con un cráter o un eclipse parcial.

### Especificaciones del símbolo

| Variable | Decisión |
| --- | --- |
| Posición del corte | **Diagonal** (superior descartada = parece "power") |
| Tamaño de la muesca | **Media (28-32% del diámetro)** |
| Ángulo | **Diagonal (30-50°)** — curva suave descartada |
| Relación símbolo/wordmark | **Equilibrado** (dominante solo en favicon) |
| Tipografía wordmark | **Space Grotesk** |
| Color símbolo | **Gradiente animado:** Naranja marciano `#D4622B` → Cobre solar `#C1892B` → Rojo tierra `#8C2F1B` (rotación 360° en ~10-12s) |
| Color wordmark | Luz estelar `#F2E8DC` (sobre fondo oscuro) |
| Glow del símbolo | Resplandor naranja/dorado (blur ~25px, opacity 30%) — simula atmósfera planetaria |

### Efectos de marca (estilo Quick)

| Efecto | Descripción |
| --- | --- |
| **Gradiente animado** | El eclipse rota su gradiente lentamente — parece un planeta girando |
| **Glow atmosférico** | Resplandor difuso detrás del símbolo |
| **Shimmer en CTAs** | Destello dorado que recorre botones en hover |
| **Bordes gradiente** | Separadores con gradiente naranja→dorado (horizonte marciano) |
| **Micro-estrellas** | Puntos diminutos en fondo (opacity 0.1-0.2) — campo de estrellas |
| **Reducción de movimiento** | `prefers-reduced-motion` → todo estático, eclipse naranja sólido |

### Implementación actual

- SVG en `public/logo/afynova.svg`
- Componente `Logo.tsx` (símbolo con `<linearGradient>` + `gradientTransform` animado + wordmark)
- Favicon en `src/app/icon.svg` (naranja marciano sólido, sin gradiente)
- Open Graph usa SVG estático (naranja marciano sólido)

### Reglas de uso

| Contexto | Regla |
| --- | --- |
| Favicon (32px) | Solo símbolo, naranja marciano sólido. Validar en escala de grises |
| Navbar/Footer | Símbolo (con gradiente animado + glow) + wordmark luz estelar |
| Sobre fondo claro (impresión) | Símbolo naranja sólido, wordmark ink `#241509` |
| Sobre fondo oscuro (digital) | Símbolo con gradiente + glow, wordmark luz estelar |
| Monocromo | Blanco sobre oscuro ✅ / Negro sobre blanco ✅ (sin gradiente) |
| Bordado/serigrafia | Un solo color (naranja marciano). Sin ángulos internos <20° |

### Lo que fue descartado

- ❌ Nodo (muy tech genérico)
- ❌ Flujo continuo (muy automatización)
- ❌ Verificación (muy productividad)
- ❌ Monograma (se leía como "h", parecía marca personal)
- ❌ Corte superior (parece botón de encendido)
- ❌ Curva suave (contradice geometría pura)
- ❌ Referencia al mar/costa peruana (personal, ligada a Daniel)

### Pendiente

Refinamiento de ejecución del símbolo (proporciones exactas, probar variaciones del corte diagonal, validar favicon real, generar archivos finales). Bloqueado por disponibilidad de Figma — concepto cerrado, solo falta pulir.

---

## 6. Arquitectura de marca

**Modelo: Branded House.** AFYNOVA es la marca madre.

| División | Estado | Cuándo se activa |
| --- | --- | --- |
| **AFYNOVA Consulting** | 🟢 Activa (100% hoy) | Ya |
| **AFYNOVA Software** | 🔴 Reservada | Cuando un pedido se repita lo suficiente |
| **AFYNOVA Academy** | 🔴 Reservada | Con conocimiento acumulado real + demanda |
| **AFYNOVA Labs** | 🔴 Reservada | Cuando haya equipo para investigación pública |

---

## 7. Anti-valores (lo que nunca se hace)

1. Nunca vender algo que no hayamos probado nosotros mismos
2. Nunca inventar testimonios, casos de éxito o métricas
3. Nunca prometer un plazo o resultado insostenible
4. Nunca vender complejidad innecesaria para justificar precio
5. Nunca crecer aceptando trabajo que no podemos entregar con calidad
6. Nunca crear dependencia artificial del cliente (candados técnicos)

---

## 8. Cliente ideal

Pyme de 1-20 empleados, dueño/gerente que decide directamente, que ya pierde clientes o tiempo por procesos lentos/manuales. Perú, Chile o España. Rubros ancla: reformas/construcción, salud, servicios legales, servicios del hogar.

---

## 9. Reglas para Quick y Cursor

### Antes de generar contenido/copy:

- Revisar este documento (tono, valores, anti-valores)
- Test: "¿un dueño de pyme lo entendería?"
- Nunca inventar métricas, testimonios ni precios no validados

### Antes de tocar identidad visual:

- Consultar sección 4 y 5 de este documento
- Respetar: Dark theme, paleta Marte/Espacio, acentos puntuales
- Respetar: Lucide outline, sin ilustraciones figurativas, sin stock, sin IA generativa para personas
- Los fondos son SIEMPRE oscuros. Los colores vibrantes son SOLO acentos

### Antes de cambiar logo:

- El concepto "El Corte Preciso" está **cerrado**
- El gradiente animado y glow son parte de la identidad actual
- Solo queda refinamiento de ejecución (proporciones, pruebas)
- No explorar nuevos conceptos sin justificación contra este documento
