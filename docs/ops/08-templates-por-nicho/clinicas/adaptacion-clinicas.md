# Adaptaciones para Clínicas — afynova

> Variantes de discovery, propuesta y entrega para el nicho de salud.  
> Usar como complemento a los templates generales.

---

## 🏥 Contexto del nicho

**Dolor principal:** Citas que se caen, agenda con huecos, WhatsApp sin responder.  
**Decisor:** Dueño/a de clínica, director/a médico, administrador/a.  
**Servicios típicos que contratan:** Agente IA + Automatización (recordatorios) + Web.  
**Sensibilidad especial:** Datos médicos, compliance, trato empático del agente.

---

## 📋 Preguntas adicionales de discovery (clínicas)

Agregar al cuestionario general + el del servicio específico:

### Sobre la operación clínica
1. **¿Cuántos profesionales atienden?** (médicos, dentistas, kinesiólogos, etc.)
2. **¿Cuántos pacientes atienden por día/semana?**
3. **¿Qué especialidades ofrecen?**
4. **¿Tienen múltiples sedes?**
5. **¿Cuál es tu horario de atención?** ¿Y el horario en que reciben consultas?

### Sobre citas y agenda
6. **¿Qué sistema de agenda usan?** (software clínico, Google Calendar, papel)
7. **¿Cuál es tu tasa de no-show?** (% de pacientes que no llegan)
8. **¿Envían recordatorios hoy?** (manualmente, SMS, nada)
9. **¿Cuántas citas se pierden a la semana por no-shows?** → ¿cuánto representa en ingresos?
10. **¿Tienen lista de espera?** ¿Cómo la gestionan?
11. **¿Las citas tienen duración fija o variable?**

### Sobre consultas y atención
12. **¿Qué preguntas hacen los pacientes antes de agendar?**
    (precios, disponibilidad, preparación previa, si atienden su caso, convenios)
13. **¿Trabajan con seguros/isapres/convenios?** → ¿Es una pregunta frecuente?
14. **¿Hay consultas que requieren derivación urgente?** (emergencias → cómo manejarlas)
15. **¿El paciente necesita preparación previa?** (ayuno, exámenes, documentos)

### Sobre datos y compliance
16. **¿Manejan ficha clínica electrónica?** → ¿Qué software?
17. **¿El agente puede acceder a datos del paciente?** (o solo datos generales del negocio)
18. **¿Hay restricciones legales sobre qué puede decir un chatbot?** (no diagnósticos, no recomendaciones médicas)
19. **¿Necesitan consentimiento informado digital?**

---

## 🎯 Propuesta: secciones adaptadas para clínicas

### Situación actual (ejemplo de redacción):
> "La Clínica [Nombre] recibe ~[X] consultas diarias por WhatsApp — principalmente por disponibilidad, precios y preparación previa. Actualmente la recepcionista responde manualmente, lo que genera demoras de [X] horas fuera del horario de atención. Estimamos que [X] pacientes potenciales por semana se pierden por no recibir respuesta a tiempo, lo que representa ~$[X] en ingresos no captados."

### Solución típica para clínicas:

| Entregable | Descripción |
|---|---|
| Agente WhatsApp 24/7 | Responde FAQ (precios, horarios, convenios, preparación), agenda citas automáticamente |
| Recordatorios automáticos | WhatsApp 24h y 2h antes de la cita → reduce no-shows |
| Derivación inteligente | Urgencias → notifica al profesional / consultas complejas → pasa a humano |
| Integración con agenda | Conecta con [sistema del cliente] para ver disponibilidad real |
| Dashboard de métricas | Citas agendadas, no-shows, consultas atendidas, tiempos de respuesta |

### Lo que el agente NUNCA hace (explicitar en propuesta):
- ❌ No da diagnósticos ni recomendaciones médicas
- ❌ No accede a fichas clínicas de pacientes
- ❌ No confirma resultados de exámenes
- ❌ No prescribe medicamentos ni tratamientos

---

## 💰 Pricing referencia (clínicas)

| Paquete | Incluye | Rango |
|---|---|---|
| Básico | Agente FAQ + agenda manual derivada | $500 – $1.000 |
| Estándar | Agente + agenda automática + recordatorios | $1.200 – $2.000 |
| Completo | Agente + agenda + recordatorios + dashboard + web | $2.500 – $4.000 |
| Retainer | Monitoreo + ajustes + reporte mensual | $200 – $400/mes |

**Argumento de ROI:**
> "Si pierdes 8 pacientes/semana por no responder a tiempo, y tu ticket promedio es $[X], eso son $[X*8*4]/mes en ingresos no captados. La inversión se recupera en [X] semanas."

---

## 📄 Entrega: métricas específicas para clínicas

| Métrica | Qué mide | Meta |
|---|---|---|
| Tasa de respuesta automática | % consultas resueltas sin humano | ≥70% |
| Tiempo de primera respuesta | Segundos hasta la primera respuesta | <30 seg |
| Citas agendadas/semana | Citas creadas por el agente | [meta según volumen] |
| Tasa de no-show | % pacientes que no llegan | Reducir ≥30% vs. baseline |
| Recordatorios enviados | Mensajes de recordatorio exitosos | 100% de citas programadas |
| Derivaciones a humano | Consultas que requieren persona | <30% del total |

---

## 🗣️ Tono del agente para clínicas

```
Personalidad: Empático, profesional, cálido sin ser informal.
Ejemplo: "Hola 👋 Soy el asistente de [Clínica]. ¿En qué puedo ayudarte?"
NO: "Hola! Qué onda, en qué te ayudo?"
NO: "Estimado paciente, mediante la presente le informamos..."

Reglas de tono:
- Tutear o ustedear según preferencia del cliente (preguntar en discovery)
- Usar emojis con moderación (✅, 📅, 👋 — no 🤣🔥💯)
- Siempre cerrar con opción de hablar con una persona
- Si el paciente menciona dolor/urgencia → derivar inmediatamente
```

---

## ⚠️ Consideraciones legales (clínicas)

- **Datos sensibles:** Los datos de salud tienen protección especial en la mayoría de jurisdicciones
- **El agente NO es un profesional de salud** — dejarlo claro al paciente si pregunta algo médico
- **Consentimiento:** Informar al paciente que está hablando con un asistente automatizado
- **Almacenamiento:** No guardar datos médicos en el chatbot — solo nombre, teléfono, y motivo de consulta
- **Revisar regulación local:** Chile (Ley 20.584), España (LOPD/RGPD), etc.
