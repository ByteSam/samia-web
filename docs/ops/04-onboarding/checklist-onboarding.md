# Checklist de Onboarding — afynova

> Usar después de firmar contrato + recibir primer pago.  
> Objetivo: tener todo lo necesario para empezar a construir en ≤2 días.

---

## ✅ Antes de empezar a trabajar

### Administrativo
- [ ] Contrato firmado por ambas partes
- [ ] Primer pago recibido (50%)
- [ ] Canal de comunicación definido (WhatsApp / email)
- [ ] Expectativa de respuesta acordada (ej: "respondo en menos de 24h hábiles")

### Del cliente (lo que necesito que me entregue)

#### Para TODOS los servicios:
- [ ] Logo en formato SVG o PNG alta resolución
- [ ] Colores de marca (si los tiene definidos)
- [ ] Fotos del negocio/equipo (si las tiene)
- [ ] Acceso a Google Account (si se integra con Calendar/Sheets)
- [ ] Número de WhatsApp Business (si aplica)

#### Para DESARROLLO WEB:
- [ ] Dominio (o confirmar que lo compro yo)
- [ ] Contenido de cada sección (o confirmación de que lo genero yo)
- [ ] Referencias visuales (webs que le gustan)
- [ ] Acceso a hosting actual (si hay migración)
- [ ] Acceso a DNS del dominio

#### Para AGENTE IA:
- [ ] Lista de preguntas frecuentes + respuestas correctas
- [ ] Horarios del negocio
- [ ] Servicios/precios que el agente puede mencionar
- [ ] Reglas de derivación ("si preguntan X, pásalo a humano")
- [ ] Acceso a WhatsApp Business API (o Meta Business Suite)
- [ ] Acceso a sistema de agenda (Google Calendar, software, etc.)

#### Para AUTOMATIZACIÓN:
- [ ] Accesos a cada sistema involucrado (con permisos de admin o edición)
- [ ] Descripción del proceso actual paso a paso
- [ ] Ejemplos de datos reales (emails tipo, planillas, etc.)
- [ ] API keys necesarias (OpenAI, etc.)
- [ ] Persona de contacto técnico (si hay alguien más que gestiona los sistemas)

#### Para DATOS Y ANALÍTICA:
- [ ] Acceso a fuentes de datos (Google Analytics, Sheets, BD, CRM)
- [ ] Definición de KPIs que quiere ver
- [ ] Periodicidad del reporte (diario, semanal, mensual)

#### Para INFRAESTRUCTURA:
- [ ] Inventario de herramientas/sistemas actuales
- [ ] Accesos de admin a cada servicio
- [ ] Documentación técnica existente (si hay)

---

## 📞 Reunión de kickoff (15-30 min)

**Agenda:**
1. Confirmar que recibí todos los accesos ✅
2. Repasar el timeline (cuándo esperar cada cosa)
3. Definir cómo comunicamos avances (WhatsApp directo / email semanal)
4. Resolver dudas del cliente
5. Confirmar: "si necesito algo más, te escribo por [canal]"

**Post-kickoff:**
- [ ] Enviar resumen por escrito de lo acordado
- [ ] Crear carpeta del proyecto en mi sistema
- [ ] Comenzar implementación

---

## 📁 Estructura interna por cliente

```
clientes/
└── [nombre-cliente]/
    ├── brief.md              ← Resumen del diagnóstico
    ├── propuesta.md          ← Propuesta enviada
    ├── contrato.pdf          ← Contrato firmado
    ├── accesos.md            ← Credenciales (seguro)
    ├── assets/               ← Logo, fotos, contenido recibido
    ├── entregables/          ← Lo que voy construyendo
    └── notas.md              ← Notas de llamadas, decisiones
```
