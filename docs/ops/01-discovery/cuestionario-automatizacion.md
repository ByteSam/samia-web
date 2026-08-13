# Cuestionario de Discovery — Automatización

> Complemento al cuestionario general. Usar cuando el diagnóstico apunta a automatización.

---

## Procesos actuales

1. **¿Qué tareas haces cada día/semana que sientes repetitivas?**
   (copiar datos entre sistemas, enviar emails manuales, actualizar planillas, etc.)
2. **¿Cuánto tiempo dedicas a estas tareas por semana?** (estimado en horas)
3. **¿Qué sistemas/herramientas usas hoy?**
   - [ ] Gmail / Outlook
   - [ ] Google Sheets / Excel
   - [ ] Google Calendar
   - [ ] WhatsApp (manual)
   - [ ] CRM (¿cuál?)
   - [ ] Software de facturación (¿cuál?)
   - [ ] Redes sociales (¿cuáles?)
   - [ ] Otro: ___

4. **¿Alguna vez has intentado automatizar algo?** → ¿Qué pasó?
5. **¿Hay datos que copias manualmente de un sistema a otro?** (ej: del email al Excel)

---

## Puntos de dolor específicos

6. **¿Se te olvidan seguimientos con clientes?** (cuántas veces al mes)
7. **¿Pierdes tiempo buscando información que ya tienes en otro lado?**
8. **¿Envías los mismos emails/mensajes repetidamente?** (bienvenida, confirmación, cobro, etc.)
9. **¿Tienes procesos que dependen de que TÚ estés disponible para avanzar?**
10. **¿Qué error recurrente te genera más problemas?** (doble agenda, factura sin enviar, lead sin seguimiento)

---

## Priorización

11. **Si pudiera automatizar UNA cosa mañana, ¿cuál elegiría?**
12. **¿Qué automatización te ahorraría más dinero?** (por tiempo liberado o clientes no perdidos)
13. **¿Qué tan cómodo estás con que un sistema tome decisiones sin ti?**
    - Solo avisos/recordatorios
    - Puede hacer cosas simples solo (enviar un mensaje, mover un dato)
    - Confío en que haga cosas más complejas si yo reviso después
    - Quiero automatización total

---

## Integraciones y accesos

14. **¿Qué necesita conectarse con qué?** (ej: "cuando alguien llena el formulario, que me llegue a WhatsApp Y se anote en mi Google Sheet")
15. **¿Tienes acceso de administrador a tus herramientas?** (o alguien te las gestiona)
16. **¿Algún sistema tiene API o es todo manual/visual?**
17. **¿Hay restricciones de seguridad/compliance?** (datos médicos, datos financieros, etc.)

---

## Entregables que Daniel produce para este servicio

| Entregable | Formato | Cuándo |
|---|---|---|
| Mapa de procesos antes/después | Diagrama visual (Whimsical) | En la propuesta |
| Estimación de ahorro de tiempo | Tabla comparativa | En la propuesta |
| Automatización(es) configuradas y testeadas | n8n / Make workflows | Entrega |
| Documentación de cada workflow | Markdown con screenshots | Entrega |
| Video walkthrough de los flujos | Loom (5-10 min) | Entrega |
| Guía de troubleshooting | Doc con "si pasa X, haz Y" | Entrega |
| Reporte de ejecuciones (mes 1) | Dashboard / email semanal | Post-entrega |

---

## Herramientas que usa Daniel para entregar

| Herramienta | Para qué |
|---|---|
| **n8n** (self-hosted o cloud) | Motor principal de automatización |
| **Make** (si el cliente ya lo usa) | Alternativa visual |
| **API WhatsApp Business** | Mensajes automatizados |
| **Google APIs** (Calendar, Sheets, Gmail) | Integraciones comunes |
| **Webhooks** | Conectar sistemas que no tienen integración nativa |
| **OpenAI API** | Si hay procesamiento inteligente (clasificar, resumir, responder) |
