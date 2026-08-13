# Identidad de Marca — AFYNOVA

> Documento unificado para el repo. Fuente: `brand-book-ichan.md` (v1.1, 21 jul 2026) + `identidad-visual-ichan.md` (cerrada 20 jul 2026).**Regla:** Ningún cambio importante en la marca puede hacerse sin justificar qué parte se modifica y por qué.

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

**Profesional, cercana, confiable, minimalista, moderna, humana.**Posicionamiento: "ingeniería premium accesible".Referencias de sensación: Stripe, Linear, Anthropic, Basecamp (principios, no estilos).

### Paleta

| Token | Hex | Uso |
| --- | --- | --- |
| **Terracota** | `#C1502E` | Primario de marca, CTA, acentos |
| **Rojo Tierra** | `#8C2F1B` | Variante oscura terracota |
| **Dorado** | `#C1892B` | Acento secundario (cálido) |
| **Ink (Tinta)** | `#241509` | Texto principal, wordmark |
| **Arena** | `#F6ECDA` | Fondo claro, backgrounds |
| **Azul** | Reservado | NUNCA en sitio de marketing. Solo futuro Software/Academy |

### Tipografía

| Uso | Fuente |
| --- | --- |
| **Logo (wordmark)** | Space Grotesk |
| **Headings del sitio** | Instrument Serif |
| **Cuerpo** | Inter |

Logo y headings usan fuentes distintas a propósito: marca = precisión, contenido = calidez editorial.

### Iconografía

Lucide, estilo outline, 20/24/32px. Funcional y discreta, nunca decorativa ni 3D.

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

Sensación: precisión, no ruptura. La forma se sigue sintiendo entera.Interpretación abierta: sistema abierto, mejora continua, pieza que encaja.

### Especificaciones del símbolo

| Variable | Decisión |
| --- | --- |
| Posición del corte | **Diagonal** (superior descartada = parece "power") |
| Tamaño de la muesca | **Media (28-32% del diámetro)** |
| Ángulo | **Diagonal (30-50°)** — curva suave descartada |
| Relación símbolo/wordmark | **Equilibrado** (dominante solo en favicon) |
| Tipografía wordmark | **Space Grotesk** |
| Color símbolo | Terracota `#C1502E` |
| Color wordmark | Ink `#241509` |

### Implementación actual

- SVG en `public/logo/afynova.svg`
- Componente `Logo.tsx` (símbolo + wordmark como paths vectoriales)
- Favicon en `src/app/icon.svg`
- Open Graph usa el mismo SVG

### Reglas de uso

| Contexto | Regla |
| --- | --- |
| Favicon (32px) | Solo símbolo, nunca wordmark. Fill sólido. Validar en escala de grises |
| Navbar/Footer | Símbolo + wordmark equilibrado |
| Monocromo | Negro sobre blanco ✅ / Blanco sobre ink ✅ (validar). Nunca grises intermedios |
| Bordado/serigrafía | Un solo color. Corte "medio". Sin ángulos internos <20° |

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
- Justificar qué parte del brand identity se modifica y por qué
- Respetar: Lucide outline, sin ilustraciones figurativas, sin stock, sin IA generativa para personas

### Antes de cambiar logo:

- El concepto "El Corte Preciso" está **cerrado**
- Solo queda refinamiento de ejecución (proporciones, pruebas)
- No explorar nuevos conceptos sin justificación contra este documento

