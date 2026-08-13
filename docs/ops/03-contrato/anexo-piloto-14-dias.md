# Anexo: Piloto de 14 Días — afynova

> Cláusula que se incluye en el contrato como anexo.  
> Define las condiciones exactas de la garantía "riesgo cero".

---

# ANEXO B — PILOTO DE 14 DÍAS (GARANTÍA DE SATISFACCIÓN)

---

## 1. Definición

El "Piloto de 14 días" es un periodo de prueba monitoreada que comienza el día en que la solución se entrega funcionando en producción. Durante este periodo, el Prestador supervisa el rendimiento y realiza ajustes sin costo adicional dentro del alcance original del proyecto.

---

## 2. Duración

- **Inicio:** fecha de entrega de la solución funcionando (confirmada por ambas partes)
- **Fin:** 14 días naturales después del inicio
- **Extensión:** si hay una incidencia técnica grave (caída total >24h), el piloto se extiende los días afectados

---

## 3. Qué incluye el piloto (sin costo adicional)

- Monitoreo activo del funcionamiento de la solución
- Corrección de bugs o errores técnicos
- Ajustes de configuración dentro del alcance original (ej: refinar un prompt, corregir un flujo)
- 1 reporte intermedio (día 7) y 1 reporte final (día 14)
- Soporte por WhatsApp/email con respuesta en <24h hábiles

---

## 4. Qué NO incluye el piloto

- Funcionalidades nuevas no contempladas en la propuesta/SOW
- Cambios de alcance (ej: "ahora quiero que también haga X")
- Integración con sistemas no mencionados en el acuerdo original
- Contenido que el cliente no entregó a tiempo

Estos se presupuestan como proyecto adicional o retainer.

---

## 5. Criterios de éxito del piloto

El piloto se considera exitoso si la solución cumple los criterios de aceptación definidos en la propuesta/SOW. Específicamente:

**Para Web:**
- La web está live, carga en <3 segundos, es responsive
- El formulario/CTA funciona y las notificaciones llegan
- No hay errores visibles en navegación

**Para Agente IA:**
- Responde correctamente ≥80% de las consultas dentro de su alcance
- Deriva a humano cuando corresponde (no inventa respuestas)
- Tiempo de respuesta <60 segundos
- Las integraciones funcionan (agenda, notificaciones)

**Para Automatización:**
- Los workflows se ejecutan sin errores en ≥90% de los casos
- Los datos fluyen correctamente entre sistemas
- Los errores se notifican (no fallan en silencio)

**Para Datos/Analítica:**
- El dashboard refleja datos reales y actualizados
- Los KPIs acordados están visibles y correctos
- El cliente entiende cómo leer el tablero (validado en la entrega)

**Para Infraestructura:**
- Todos los sistemas están conectados y operativos
- Uptime ≥99% durante el piloto
- La documentación permite operar sin Daniel

---

## 6. Escenario: el piloto NO es exitoso

Si al final de los 14 días la solución **no cumple** los criterios de éxito por causa atribuible al Prestador:

- El **segundo pago (50%) no se cobra**
- El primer pago (50%) **no se reembolsa** (cubre el tiempo de trabajo invertido)
- El Prestador puede proponer una extensión del piloto (+7 días) para corregir
- Si después de la extensión sigue sin funcionar, el proyecto se cierra sin segundo pago

**Excepciones (no aplica la garantía si):**
- El cliente no entregó accesos/contenido necesario para el correcto funcionamiento
- El cliente modificó la solución sin consultar al Prestador
- El fallo es de un servicio de terceros fuera del control del Prestador (ej: caída de Meta API, cambio de términos de un proveedor)
- El cliente no reportó el problema durante el piloto (no puede reclamar post-piloto por algo que no comunicó)

---

## 7. Escenario: el piloto ES exitoso

Si la solución cumple los criterios:

- Se factura el segundo pago (50%)
- El soporte post-piloto se rige por el contrato principal:
  - Bugs graves: corrección sin costo durante 30 días adicionales
  - Mejoras/cambios: requieren propuesta nueva o retainer
- El cliente puede optar por un retainer mensual (términos según propuesta)

---

## 8. Comunicación durante el piloto

| Día | Qué pasa |
|-----|----------|
| Día 1 | Entrega + activación + confirmación de inicio de piloto |
| Día 3-4 | Check-in por WhatsApp ("¿todo bien? ¿alguna duda?") |
| Día 7 | Mini-reporte intermedio (métricas si aplica) |
| Día 12-13 | Aviso: "el piloto cierra en 2 días, ¿algo pendiente?" |
| Día 14 | Reporte final + decisión: éxito/extensión/cierre |

---

## Firma

Este anexo forma parte integral del Contrato de Servicios firmado entre las partes.

| Prestador | Cliente |
|-----------|---------|
| Daniel Fernández | [Nombre] |
| Firma: _______________ | Firma: _______________ |
| Fecha: _______________ | Fecha: _______________ |
