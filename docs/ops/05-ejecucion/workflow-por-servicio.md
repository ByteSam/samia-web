# Workflow de ejecución por servicio — afynova

> Pasos internos que sigo para cada tipo de proyecto.  
> No es para el cliente — es mi playbook operativo.

---

## 🌐 Desarrollo Web

### Timeline típico: 5-10 días hábiles

| Día | Paso | Output |
|-----|------|--------|
| 1 | Revisar brief + assets recibidos | Checklist completo ✅ |
| 1-2 | Definir estructura (páginas, secciones, flujo) | Wireframe / sitemap |
| 2-3 | Generar copy con Amazon Quick | Markdown por sección |
| 3-5 | Implementar con Cursor (Next.js + Tailwind) | Código en repo |
| 5-6 | Integrar contenido real (fotos, logo, textos) | Web visual completa |
| 6-7 | Conectar formulario/WhatsApp + analytics | Funcionalidades live |
| 7 | QA interno (mobile, desktop, velocidad) | Fix de issues |
| 8 | Deploy a producción + DNS | Web live |
| 8 | Grabar video Loom de entrega | Video listo |
| 8-9 | Enviar entrega al cliente | Doc + video |
| 9-10 | Ronda de ajustes | Versión final |

### Herramientas en cada paso:
- **Quick:** copy, SEO (meta tags, schema), auditoría final
- **Cursor:** todo el código, componentes, deploy
- **Vercel:** hosting, preview deploys para mostrar avance
- **Loom:** documentación visual

---

## 🤖 Agente IA por WhatsApp

### Timeline típico: 3-7 días hábiles

| Día | Paso | Output |
|-----|------|--------|
| 1 | Mapear FAQ + flujos con Amazon Quick | Documento de flujos |
| 1-2 | Diseñar árbol conversacional | Diagrama visual |
| 2-3 | Escribir prompts del agente | Prompt system + few-shot examples |
| 3-4 | Configurar n8n: trigger WhatsApp → AI → respuesta | Workflow funcional |
| 4-5 | Conectar integraciones (Calendar, Sheets, etc.) | Integraciones live |
| 5 | Testing interno (simular 20+ conversaciones) | Log de pruebas |
| 5-6 | Testing con el cliente (prueba real controlada) | Feedback |
| 6-7 | Ajustes de prompts + edge cases | Versión final |
| 7 | Entrega + documentación + video | Entregado |

### Herramientas en cada paso:
- **Quick:** diseño de flujos, redacción de prompts, análisis de edge cases
- **n8n:** orquestación (webhook → AI → WhatsApp → Calendar)
- **OpenAI API:** motor de respuestas
- **Meta Business API:** canal WhatsApp
- **Cursor:** si hay código custom (webhook endpoints, etc.)

---

## ⚡ Automatización

### Timeline típico: 3-10 días hábiles (depende de complejidad)

| Día | Paso | Output |
|-----|------|--------|
| 1 | Mapear proceso actual (as-is) | Diagrama before |
| 1-2 | Diseñar proceso automatizado (to-be) | Diagrama after |
| 2-3 | Configurar workflow en n8n/Make | Workflow draft |
| 3-5 | Conectar sistemas + APIs + credenciales | Integraciones |
| 5-6 | Testing con datos reales | Log de pruebas (20+ escenarios) |
| 6-7 | Error handling (¿qué pasa si falla X?) | Fallbacks configurados |
| 7-8 | Documentar + grabar video | Docs + Loom |
| 8 | Entrega + activar en producción | Live |

### Herramientas en cada paso:
- **Quick:** análisis de procesos, diseño before/after, documentación
- **n8n / Make:** construcción de workflows
- **APIs variadas:** depende del caso
- **Cursor:** si necesito endpoints custom o scripts

---

## 📊 Datos y Analítica

### Timeline típico: 5-10 días hábiles

| Día | Paso | Output |
|-----|------|--------|
| 1 | Definir KPIs con el cliente | Lista priorizada |
| 1-2 | Auditar fuentes de datos disponibles | Mapa de datos |
| 2-4 | Conectar fuentes → base de datos centralizada | Pipeline ETL |
| 4-6 | Construir dashboard | Tablero funcional |
| 6-7 | Validar datos con el cliente | Correcciones |
| 7-8 | Documentar + enseñar a leer el dashboard | Video + guía |
| 8 | Entrega | Live |

### Herramientas en cada paso:
- **Quick:** definir KPIs, análisis de datos, generar insights del primer reporte
- **n8n:** ETL (extraer, transformar, cargar datos)
- **Metabase / Looker Studio:** dashboards
- **PostgreSQL / Supabase:** almacenamiento
- **Cursor:** scripts de transformación si son complejos

---

## 🏗 Infraestructura Digital

### Timeline típico: 5-15 días hábiles (el más variable)

| Día | Paso | Output |
|-----|------|--------|
| 1-2 | Auditar infraestructura actual | Inventario + diagrama |
| 2-3 | Diseñar arquitectura objetivo | Diagrama técnico |
| 3-5 | Plan de migración/conexión | Roadmap con dependencias |
| 5-10 | Implementar paso a paso | Cada sistema conectado |
| 10-12 | Testing de integración end-to-end | Todo funciona junto |
| 12-13 | Documentar runbook operativo | Doc técnico |
| 13-15 | Entrega + transferencia de conocimiento | Video + docs |

### Herramientas en cada paso:
- **Quick:** análisis de arquitectura, documentación, planificación
- **Cursor:** código de integración, scripts, configuración
- **Vercel/Railway/Render:** hosting
- **Supabase/PostgreSQL:** datos
- **Cloudflare:** DNS, CDN, seguridad
- **GitHub:** todo versionado

---

## 📏 Reglas generales de ejecución

1. **Nunca empezar sin accesos completos** — si falta algo, el timeline se pausa
2. **Update semanal al cliente** (viernes) — aunque sea un "todo va bien"
3. **Testing antes de entrega** — mínimo 20 escenarios por servicio
4. **Video Loom de entrega** — siempre, sin excepción
5. **No hacer más de lo acordado** — si veo oportunidades, las propongo como siguiente fase
6. **Documentar decisiones** — todo lo importante queda por escrito
