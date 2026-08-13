# Sistema de Entrega de Servicios — afynova

## Framework operativo: del primer contacto al seguimiento

> Basado en mejores prácticas de consultoras de EEUU/Europa (GrowwStacks, Metaflow ACOS, ClientVenue, AgencyAnalytics) adaptado al modelo de consultor único de afynova.

---

## 📋 Índice de documentos del sistema

```
afynova-ops/
├── README.md                          ← Este archivo (visión general)
├── 01-discovery/
│   ├── cuestionario-general.md        ← Preguntas para todos los servicios
│   ├── cuestionario-web.md            ← Preguntas específicas: desarrollo web
│   ├── cuestionario-agente-ia.md      ← Preguntas específicas: agentes WhatsApp
│   ├── cuestionario-automatizacion.md ← Preguntas específicas: automatización
│   ├── cuestionario-datos.md          ← Preguntas específicas: datos y analítica
│   └── cuestionario-infraestructura.md← Preguntas específicas: infraestructura
├── 02-propuesta/
│   ├── template-propuesta.md          ← Template de propuesta comercial
│   ├── tabla-precios.md               ← Estructura de pricing por servicio
│   └── template-sow.md               ← Statement of Work / alcance
├── 03-contrato/
│   ├── contrato-servicios.md          ← Contrato marco (MSA)
│   ├── anexo-piloto-14-dias.md        ← Cláusula del piloto sin riesgo
│   └── politica-privacidad-datos.md   ← Manejo de credenciales/datos del cliente
├── 04-onboarding/
│   ├── checklist-onboarding.md        ← Checklist general de inicio
│   ├── credenciales-requeridas.md     ← Qué accesos pedir por servicio
│   └── template-kickoff.md            ← Agenda de la reunión de arranque
├── 05-ejecucion/
│   ├── workflow-por-servicio.md       ← Pasos de ejecución por cada servicio
│   ├── herramientas-stack.md          ← Herramientas que usas para entregar
│   └── template-update-semanal.md     ← Template de actualización al cliente
├── 06-entrega/
│   ├── template-entrega.md            ← Documento de entrega final
│   ├── documentacion-cliente.md       ← Qué docs darle al cliente
│   └── template-video-loom.md         ← Guión para video de entrega
├── 07-seguimiento/
│   ├── template-revision-mensual.md   ← Reporte mensual de resultados
│   ├── upsell-oportunidades.md        ← Cuándo y cómo proponer más servicios
│   └── offboarding.md                 ← Si el cliente se va
└── 08-templates-por-nicho/
    ├── clinicas/                       ← Adaptaciones para clínicas
    ├── firmas-legales/                 ← Adaptaciones para firmas legales
    └── negocios-locales/              ← Adaptaciones para negocios locales

```

---

## 🔄 Flujo completo: del contacto al seguimiento

```
[1. DIAGNÓSTICO GRATUITO]     30 min · gratis · sin compromiso
         │
         ▼
[2. PROPUESTA + SOW]          Precio cerrado · alcance claro
         │
         ▼
[3. CONTRATO + PAGO]          50% inicio / 50% entrega (o piloto 14d)
         │
         ▼
[4. ONBOARDING]               Credenciales · kickoff · expectativas
         │
         ▼
[5. EJECUCIÓN]                Implementación · updates semanales
         │
         ▼
[6. ENTREGA + DEMO]           Solución funcionando · documentación · video
         │
         ▼
[7. SEGUIMIENTO]              Ajustes · métricas · upsell natural

```

---

## 🎯 Resumen ejecutivo por servicio

### Desarrollo Web

| Fase | Qué haces | Herramientas |
| --- | --- | --- |
| Discovery | Preguntas sobre negocio, público, objetivos de conversión | Formulario/llamada |
| Propuesta | Wireframe + estructura + copy propuesto | Figma/Quick |
| Ejecución | Diseño + desarrollo + contenido | Next.js, Tailwind, Vercel |
| Entrega | Web live + docs + video walkthrough | Loom, Notion/MD |
| Seguimiento | Métricas de conversión, ajustes CRO | Vercel Analytics, Plausible |

### Agentes IA (WhatsApp)

| Fase | Qué haces | Herramientas |
| --- | --- | --- |
| Discovery | Preguntas frecuentes del negocio, flujos de atención, horarios | Formulario/llamada |
| Propuesta | Flujo conversacional visual + alcance | Whimsical/diagrama |
| Ejecución | Configurar agente + prompts + integraciones | API WhatsApp, n8n, OpenAI |
| Entrega | Agente live + FAQ docs + video demo | Loom, doc de flujos |
| Seguimiento | % consultas atendidas, derivaciones, ajustes de prompts | Dashboard |

### Automatización

| Fase | Qué haces | Herramientas |
| --- | --- | --- |
| Discovery | Mapear procesos manuales, repetitivos, puntos de dolor | Formulario/llamada |
| Propuesta | Diagrama de flujo before/after + ahorro estimado | Whimsical |
| Ejecución | Construir workflows + conectar sistemas | n8n, Make, APIs |
| Entrega | Automatización live + docs + troubleshooting guide | Loom, doc técnico |
| Seguimiento | Ejecuciones exitosas/fallidas, optimización | n8n dashboard |

### Datos y Analítica

| Fase | Qué haces | Herramientas |
| --- | --- | --- |
| Discovery | Qué KPIs importan, dónde están los datos hoy, qué decisiones toman | Formulario/llamada |
| Propuesta | Mockup de dashboard + fuentes de datos a conectar | Figma/screenshot |
| Ejecución | Conectar fuentes + construir tablero + validar datos | Metabase, Google Sheets, SQL |
| Entrega | Dashboard live + guía de lectura + video | Loom |
| Seguimiento | Nuevos KPIs, alertas, expansión de fuentes | Reunión mensual |

### Infraestructura Digital

| Fase | Qué haces | Herramientas |
| --- | --- | --- |
| Discovery | Auditar sistemas actuales, integraciones, pain points técnicos | Formulario/llamada |
| Propuesta | Diagrama de arquitectura propuesta + roadmap | Diagrama técnico |
| Ejecución | Conectar sistemas + migrar + documentar | Vercel, AWS, APIs, DNS |
| Entrega | Infra operativa + runbook + accesos documentados | Doc técnico |
| Seguimiento | Uptime, costos, escalabilidad | Monitoreo |

