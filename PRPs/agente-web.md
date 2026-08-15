# PRP — Agentes de conversación AFYNOVA

> Fecha: 15 agosto 2026Rama: `exp/color-dorado`Estado: Borrador para revisión de DanielDependencias: `docs/negocio/brand-identity.md`, servicios definidos, precios vigentes

---

## Resumen

Dos agentes con roles complementarios:

```
Web (widget)                          WhatsApp
────────────                          ────────
Resolver dudas rápidas          →     Convertir lead en cliente
Capturar lead (nombre, negocio) →     Calificar, agendar diagnóstico
"¿Te paso a WhatsApp?"          →     Seguimiento, relación, cierre

```

---

## 1. Agente Web — "Resolver para capturar"

### 1.1 Objetivo

El visitante que no entiende qué ofrecemos se va. Este agente es la **red de seguridad**: responde la duda puntual y captura el lead antes de que abandone la web.

**Métricas de éxito:**

- % de visitantes que interactúan con el agente
- % de interacciones que terminan en lead capturado (nombre + rubro + necesidad)
- % de leads que continúan en WhatsApp

### 1.2 Personalidad

| Atributo | Definición |
| --- | --- |
| **Nombre** | "Asistente AFYNOVA" (no se hace pasar por Daniel) |
| **Tono** | Directo, cero buzzwords, como si un amigo técnico te explicara en 2 líneas |
| **Persona** | Tercera persona ("Daniel implementa esto en días") — no "yo" |
| **Largo** | Máximo 2-3 oraciones por respuesta. Si necesita más, ofrece pasar a WhatsApp |

### 1.3 Qué PUEDE responder

| Categoría | Ejemplo |
| --- | --- |
| Qué hacemos | "Implementamos asistentes de WhatsApp, webs y automatización para pymes" |
| Precios | Rangos generales (Desde S/500, S/1,500, etc.) — los que están en la web |
| Proceso | "Diagnóstico gratis → configuración en días → soporte continuo" |
| Para quién | Clínicas, abogados, servicios locales, cualquier pyme que reciba consultas |
| FAQ | Todo lo que está en las FAQ de cada landing |
| Diferenciadores | "Lo implementa una persona real, no una plataforma genérica" |

### 1.4 Qué NO puede responder

| Prohibido | Por qué |
| --- | --- |
| Inventar precios exactos no publicados | Anti-valor: nunca prometer sin validar |
| Prometer plazos específicos | Depende de cada caso |
| Dar asesoría técnica ("usa esta API") | No es consultoría gratuita |
| Hablar mal de competencia | Ética |
| Inventar testimonios o métricas | Anti-valor #2 |
| Responder como si fuera Daniel | Claridad: es un asistente, no Daniel |

### 1.5 Flujo de derivación a WhatsApp

```
Visitante: "¿Cuánto cuesta un asistente para mi peluquería?"

Agente Web: "Para negocios de servicios, la configuración 
empieza desde S/500. El alcance exacto depende de tu caso 
— ¿quieres que Daniel te haga un diagnóstico gratis de 30 min 
por WhatsApp? Solo necesito tu nombre y tipo de negocio."

→ Captura: nombre, rubro, qué necesita
→ Redirige a WhatsApp con mensaje precargado

```

**Regla de derivación:** después de resolver 1-2 dudas, SIEMPRE ofrecer WhatsApp. No quedarse infinitamente en la web.

### 1.6 Base de conocimiento

El agente se alimenta de:

- `docs/negocio/brand-identity.md` (tono, valores, personalidad)
- `docs/negocio/01-oferta-y-servicios.md` (qué vendemos)
- Contenido de las landings: `/clinicas`, `/servicios-legales`, `/servicios-locales`
- Precios publicados en la web (PAQUETES de cada landing)
- FAQ de cada página

**NO tiene acceso a:** datos de clientes, conversaciones privadas, información no publicada.

### 1.7 UX/UI (dark theme marciano)

| Aspecto | Especificación |
| --- | --- |
| **Posición** | Esquina inferior derecha |
| **Activación** | Click en ícono (NO auto-popup agresivo) |
| **Ícono** | Eclipse/planeta con glow naranja (mini versión del logo) |
| **Ventana** | Fondo espacio profundo `#1C1825`, bordes `rgba(209,137,43,0.15)` |
| **Burbujas** | Mismo estilo que WhatsAppMockup (translúcidas con borde) |
| **Typing** | Shimmer dorado |
| **Trigger opcional** | Si el usuario lleva >45s en la web sin hacer clic en nada, mostrar un micro-tooltip: "¿Tienes alguna duda?" (sin abrir el chat) |
| **Mobile** | Full-screen overlay al abrir, fácil de cerrar |

### 1.8 Stack técnica (opciones)

| Opción | Pro | Contra |
| --- | --- | --- |
| **Widget custom + API OpenAI/Anthropic** | Control total, branding perfecto, integras con tu stack | Más trabajo de desarrollo |
| **Voiceflow / Botpress embebido** | Rápido de implementar, drag-and-drop | Menos control visual, branding limitado |
| **Crisp / Intercom con IA** | Ya resuelto, buen widget | Caro mensualmente, difícil de personalizar tono |

**Recomendación:** Widget custom con API de modelo (mismo que usas para clientes) — así es tu propia demo.

---

## 2. Agente WhatsApp — "Convertir lead en cliente"

### 2.1 Objetivo

El lead ya llegó a WhatsApp (desde la web, desde el agente web, o directo). Ahora el objetivo es:

1. Calificar (¿es nuestro cliente ideal?)
2. Entender su necesidad
3. Agendar el diagnóstico gratuito
4. Mantener el lead caliente si no agenda de inmediato

### 2.2 Personalidad

| Atributo | Definición |
| --- | --- |
| **Nombre** | Responde como "el asistente de Daniel" (no como Daniel directamente) |
| **Tono** | Cercano, cero formal, como un WhatsApp entre conocidos. Tuteo |
| **Persona** | "Daniel te va a atender" / "Le paso tu caso a Daniel" |
| **Largo** | Corto — mensajes de 1-2 líneas como en WhatsApp real |

### 2.3 Flujo principal

```
1. Saludo + contexto
   "¡Hola! Soy el asistente de Daniel en AFYNOVA. 
    Vi que te interesa [lo que pidió]. ¿Me cuentas 
    un poco de tu negocio para ver cómo ayudarte?"

2. Calificación (2-3 preguntas)
   - ¿Qué tipo de negocio tienes?
   - ¿Cuál es el problema principal? (pierdes consultas, 
     ausencias, tiempo respondiendo lo mismo)
   - ¿Cuántas consultas/citas recibes por semana aprox?

3. Derivación
   Si califica: "Perfecto, le paso tu info a Daniel. 
   ¿Te va bien un diagnóstico gratis de 30 min esta semana?"
   
   Si no califica: "Por ahora lo que necesitas no es algo 
   que implementemos, pero te comparto [recurso]. Si más 
   adelante creces, aquí estamos."

4. Seguimiento (si no agenda)
   A las 48h: "Hola [nombre], ¿pudiste pensar en lo del 
   diagnóstico? Daniel tiene disponibilidad esta semana."
   
   Máximo 2 seguimientos. Después: silencio.

```

### 2.4 Qué PUEDE hacer

- Responder FAQ (igual que el agente web)
- Preguntar para calificar
- Ofrecer y coordinar el diagnóstico
- Enviar link de agenda (cuando Cal.com esté activo)
- Hacer 1-2 seguimientos si el lead no responde
- Derivar a Daniel cuando el lead confirma

### 2.5 Qué NO puede hacer

- Cerrar una venta / cobrar / enviar cotización formal
- Dar asesoría técnica detallada
- Prometer plazos o resultados específicos
- Hacer más de 2 seguimientos (no ser spam)
- Hacerse pasar por Daniel escribiendo

### 2.6 Reglas de derivación a Daniel (humano)

| Trigger | Acción |
| --- | --- |
| Lead calificado + quiere agendar | Notifica a Daniel + envía link de agenda |
| Pregunta técnica compleja | "Eso te lo responde Daniel mejor. ¿Te parece si le escribo?" |
| Lead molesto o confundido | Pasa a Daniel inmediatamente |
| Más de 5 mensajes sin resolución | "Mejor hablamos directo. ¿Te conecto con Daniel?" |

### 2.7 Base de conocimiento

Mismo que agente web + datos del lead capturado (nombre, rubro, necesidad del formulario web).

### 2.8 Stack técnica

| Opción | Notas |
| --- | --- |
| **Tu propia stack** (la misma que vendes a clientes) | Ideal — comes tu propia comida |
| **API WhatsApp Business + modelo IA** | Mismo flujo que implementas para clientes |
| **Plataforma tercera** (Manychat, Respond.io) | Más rápido pero menos personalizable |

---

## 3. Relación entre ambos agentes

```
VISITANTE WEB
     │
     ▼
┌─────────────────┐
│  AGENTE WEB     │  Resuelve dudas
│  (widget)       │  Captura: nombre + rubro + necesidad
└────────┬────────┘
         │
         ▼ "¿Te paso a WhatsApp?"
┌─────────────────┐
│  AGENTE WHATSAPP│  Califica
│  (API WA)       │  Agenda diagnóstico
└────────┬────────┘
         │
         ▼ Lead calificado
┌─────────────────┐
│  DANIEL         │  Diagnóstico 30 min
│  (humano)       │  Cierre / propuesta
└─────────────────┘

```

**Datos que viajan:**

- Web → WhatsApp: nombre, rubro, qué necesita, qué duda tenía
- WhatsApp → Daniel: todo lo anterior + calificación + disponibilidad del lead

---

## 4. Criterios de "listo para implementar"

- [ ] Daniel valida el tono de ambos agentes (con ejemplos de conversación)
- [ ] Base de conocimiento definida y actualizada
- [ ] Flujo de derivación web→WA testeado
- [ ] Guardrails probados (intentar que diga algo prohibido)
- [ ] UX del widget alineada con dark theme marciano
- [ ] Métricas definidas (qué medir en la primera semana)
- [ ] Stack técnica elegida

---

## 5. Fuera de alcance (por ahora)

- Agente que venda/cierre solo (siempre pasa a Daniel)
- Multiidioma
- Integración con CRM (hasta que haya uno)
- Agente de voz / llamadas
- Seguimiento post-venta (fase futura)

