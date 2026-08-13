# Documentación — afynova / samia-web

Fuente de verdad del negocio, la web, y el sistema de entrega.

---

## 📂 Estructura

### `negocio/` — Decisiones de negocio y marca
Qué ofrece afynova, a quién, cómo, y a qué precio. **Leer antes de cambiar cualquier cosa comercial.**

| Archivo | Contenido |
|---|---|
| `00-decisiones-vigentes.md` | Reglas activas: embudo, CTA, precios, marca |
| `01-oferta-y-servicios.md` | Oferta completa (5 servicios, paquetes, pricing) |
| `02-web-y-conversion.md` | Estrategia de conversión del sitio |

### `web/` — Specs de páginas (para Cursor)
Especificaciones visuales y de contenido para cada página o sección del sitio.

| Carpeta/Archivo | Contenido |
|---|---|
| `nichos-landing.md` | Estrategia general de landings por nicho |
| `nichos/clinicas-visual-spec.md` | Spec visual de `/clinicas` |
| `servicios/*.md` | Specs visuales de cada página de servicio |

### `tech/` — Setup técnico
Documentación de infraestructura y configuración.

| Archivo | Contenido |
|---|---|
| `calcom-setup.md` | Configuración de Cal.com (agenda) |
| `domain-setup.md` | DNS, dominio, Vercel |

### `ops/` — Sistema de entrega a clientes
Todo lo que necesitas para ejecutar un proyecto de cliente de principio a fin.

| Carpeta | Contenido |
|---|---|
| `01-discovery/` | Cuestionarios de diagnóstico (general + por servicio) |
| `02-propuesta/` | Tabla de precios y guía de propuestas |
| `03-contrato/` | Notas para el contrato |
| `04-onboarding/` | Checklist de onboarding |
| `05-ejecucion/` | Playbooks por servicio |
| `06-entrega/` | Template de documento de entrega |
| `07-seguimiento/` | Template de reporte mensual |
| `08-templates-por-nicho/` | Adaptaciones por nicho (clínicas, legales, locales) |

> Los **DOCX editables** (propuesta, contrato, entrega, reporte) se generan bajo demanda con Quick.

### `reviews/` — QA visual
Screenshots y auditorías de diseño por página/sección. Se usa para verificar que Cursor implementó bien las specs.

---

## 🔑 Regla de actualización

Una decisión que afecte la oferta, el mensaje de la web, el embudo, los precios o la arquitectura debe actualizarse aquí **en el mismo cambio**. Las cifras no confirmadas se marcan como `por definir`; nunca se inventan.

---

## 🤖 Para Quick y Cursor

- **Quick consulta:** `negocio/` para contexto comercial, `ops/` para sistema de entrega
- **Cursor consulta:** `web/` para implementar páginas, `AGENTS.md` para reglas de código
- **Ambos consultan:** `negocio/00-decisiones-vigentes.md` como fuente de verdad
