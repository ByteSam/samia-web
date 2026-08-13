# Template SOW (Statement of Work / Alcance del trabajo) — afynova

> Usar como anexo a la propuesta cuando el proyecto es más complejo  
> o cuando el cliente necesita más detalle antes de aprobar.  
> Para proyectos simples, la propuesta ya incluye suficiente alcance.

---

# ALCANCE DEL TRABAJO (SOW)

**Proyecto:** [Nombre descriptivo — ej: "Agente IA para consultas WhatsApp"]  
**Cliente:** [Nombre del negocio]  
**Fecha:** [DD/MM/YYYY]  
**Versión:** 1.0  

---

## 1. Contexto

[2-3 frases resumiendo el problema del cliente y por qué necesita este proyecto.
Ej: "La Clínica XYZ recibe ~40 consultas diarias por WhatsApp. Actualmente las responde la recepcionista manualmente, lo que genera demoras de 2-4 horas fuera de horario y pérdida estimada de 8-10 pacientes/semana por no-respuesta."]

---

## 2. Objetivo del proyecto

[1 frase clara del resultado esperado.
Ej: "Implementar un agente de IA que responda consultas frecuentes por WhatsApp en <30 segundos, 24/7, y agende citas automáticamente en el sistema de la clínica."]

---

## 3. Alcance detallado

### 3.1 Entregables

| # | Entregable | Descripción | Criterio de aceptación |
|---|-----------|-------------|----------------------|
| 1 | [ej: Agente WhatsApp] | [Descripción funcional] | [Ej: "Responde 10 FAQ correctamente en <30s"] |
| 2 | [ej: Integración Calendar] | [Descripción funcional] | [Ej: "Crea evento en Calendar con datos del paciente"] |
| 3 | [ej: Dashboard de métricas] | [Descripción funcional] | [Ej: "Muestra conversaciones/día, tasa de resolución"] |
| 4 | [ej: Documentación] | [Video + guía escrita] | [Ej: "Video Loom de <10 min + doc Markdown"] |

### 3.2 Fuera de alcance

- [Exclusión 1 — ej: "Integración con software de historia clínica (fase futura)"]
- [Exclusión 2 — ej: "Atención en idiomas distintos al español"]
- [Exclusión 3 — ej: "Diseño de chatbot para web (solo WhatsApp en esta fase)"]
- Cualquier funcionalidad no listada en 3.1

### 3.3 Supuestos

- [Supuesto 1 — ej: "El cliente tiene WhatsApp Business con número verificado"]
- [Supuesto 2 — ej: "El cliente entrega FAQ + respuestas aprobadas en ≤3 días"]
- [Supuesto 3 — ej: "El sistema de agenda del cliente tiene API disponible"]

Si algún supuesto no se cumple, el timeline y/o precio pueden ajustarse previo acuerdo.

---

## 4. Cronograma

| Fase | Actividad | Duración | Dependencia |
|------|-----------|----------|-------------|
| 1 | Onboarding + credenciales | 1-2 días | Pago recibido |
| 2 | [ej: Configuración del agente] | [X] días | Fase 1 completa |
| 3 | [ej: Integraciones] | [X] días | Fase 2 completa |
| 4 | Testing interno | 1-2 días | Fase 3 completa |
| 5 | Testing con cliente | 1-2 días | Fase 4 completa |
| 6 | Ajustes + entrega | 1-2 días | Fase 5 completa |
| 7 | Piloto monitoreado | 14 días | Fase 6 completa |

**Duración total estimada:** [X] días hábiles (sin contar piloto)

**Condiciones de timeline:**
- El reloj se pausa si el cliente demora >48h en entregar accesos, contenido o feedback
- Cambios de alcance durante ejecución requieren nueva estimación

---

## 5. Responsabilidades

### Daniel (Prestador):
- Diseñar, construir y entregar la solución según este alcance
- Enviar actualizaciones semanales de avance
- Testear exhaustivamente antes de entregar
- Documentar la solución (video + guía escrita)
- Monitorear durante el piloto de 14 días

### Cliente:
- Entregar accesos y credenciales en ≤[X] días desde el inicio
- Entregar contenido/información necesaria según checklist
- Responder feedback/preguntas en ≤48h hábiles
- Designar UNA persona de contacto para decisiones
- Probar la solución durante el piloto y reportar issues

---

## 6. Inversión

| Concepto | Monto |
|----------|-------|
| Implementación completa | $[monto] |
| **Total** | **$[monto] + IVA** |

Forma de pago: 50% al aprobar / 50% al entregar.

**Costos recurrentes del cliente (no incluidos en este proyecto):**
- [ej: API WhatsApp Meta: ~$0.05/conversación]
- [ej: API OpenAI: ~$10-20/mes según volumen]
- [ej: Hosting n8n cloud: $20/mes (o $0 si self-hosted)]

---

## 7. Rondas de revisión

- Se incluyen **[2-3]** rondas de ajustes dentro del alcance original
- Cada ronda tiene un máximo de [X] días para feedback del cliente
- Ajustes fuera de alcance se presupuestan por separado

---

## 8. Criterios de aceptación final

El proyecto se considera completado cuando:
- [ ] Todos los entregables de la sección 3.1 están live y funcionando
- [ ] El cliente ha validado cada criterio de aceptación
- [ ] La documentación (video + guía) ha sido entregada
- [ ] El piloto de 14 días ha concluido sin issues bloqueantes

---

## 9. Gestión de cambios

Si durante el proyecto surge una necesidad nueva:
1. Se documenta el cambio solicitado
2. Daniel evalúa impacto en timeline y costo
3. Se presenta mini-propuesta al cliente
4. Solo se implementa si el cliente aprueba por escrito

---

## Aprobación

| | Prestador | Cliente |
|---|---|---|
| Nombre | Daniel Fernández | [Nombre] |
| Firma | _______________ | _______________ |
| Fecha | _______________ | _______________ |

---

_Este SOW es un anexo a la Propuesta Comercial y al Contrato de Servicios._
