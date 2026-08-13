# Stack de herramientas — afynova

> Herramientas que Daniel usa para entregar cada servicio.  
> Actualizar cuando se agregue o reemplace algo.

---

## 🔧 Por servicio

### Desarrollo Web

| Herramienta | Función | Coste |
|---|---|---|
| **Next.js** (App Router) | Framework principal | Free |
| **React** | UI components | Free |
| **Tailwind CSS v4** | Estilos | Free |
| **TypeScript** | Tipado | Free |
| **Vercel** | Hosting + deploy | Free tier / $20/mo pro |
| **Figma** | Wireframes / diseño | Free tier |
| **Lucide** | Iconos | Free |
| **Vercel Analytics / Plausible** | Métricas | Free tier / $9/mo |

### Agentes IA (WhatsApp)

| Herramienta | Función | Coste |
|---|---|---|
| **API WhatsApp Business** (Meta) | Canal de comunicación | ~$0.05/conversación |
| **n8n** (self-hosted) | Orquestación de flujos | Free (self-hosted) |
| **OpenAI API** (GPT-4o-mini) | Inteligencia del agente | ~$0.15/1K msgs |
| **Google Calendar API** | Agenda | Free |
| **Google Sheets API** | Registro de leads | Free |
| **Supabase / PostgreSQL** | Estado de conversaciones | Free tier |

### Automatización

| Herramienta | Función | Coste |
|---|---|---|
| **n8n** (self-hosted / cloud) | Motor de automatización | Free / $20/mo cloud |
| **Make** (si cliente ya lo usa) | Alternativa | Desde $9/mo |
| **Webhooks** | Conexión entre sistemas | Free |
| **Google APIs** (Sheets, Gmail, Calendar) | Integraciones comunes | Free |
| **Slack / Discord / Telegram APIs** | Notificaciones | Free |
| **OpenAI API** | Procesamiento inteligente | Variable |

### Datos y Analítica

| Herramienta | Función | Coste |
|---|---|---|
| **Metabase** (self-hosted) | Dashboards | Free |
| **Google Looker Studio** | Alternativa visual | Free |
| **PostgreSQL** | Base de datos | Free (Supabase) |
| **Google Sheets** | Fuente de datos simple | Free |
| **n8n** | ETL / data pipelines | Free |

### Infraestructura Digital

| Herramienta | Función | Coste |
|---|---|---|
| **Vercel** | Frontend hosting | Free-$20/mo |
| **Railway / Render** | Backend hosting | Desde $5/mo |
| **Supabase** | BaaS (DB + Auth + Storage) | Free tier |
| **Cloudflare** | DNS + CDN + seguridad | Free |
| **GitHub** | Código fuente | Free |
| **UptimeRobot** | Monitoreo | Free tier |

---

## 🛠 Herramientas transversales (para todos los proyectos)

| Herramienta | Función |
|---|---|
| **Amazon Quick** | Planificación, research, copy, auditorías, documentación |
| **Cursor** | Implementación de código |
| **Loom** | Videos de entrega y documentación |
| **Whimsical / Excalidraw** | Diagramas de flujo |
| **Git + GitHub** | Control de versiones |
| **1Password / Bitwarden** | Gestión segura de credenciales |
| **Stripe** | Cobros y facturación |
| **Cal.com** (pendiente) | Agenda de diagnósticos |

---

## 💡 Criterio de selección

1. **Prefiero self-hosted** cuando es viable (n8n, Metabase) — más control, menos costo recurrente
2. **Prefiero free tiers generosos** para clientes chicos — no pagar $50/mo por un dashboard simple
3. **Si el cliente ya usa algo**, no fuerzo migración (Make, WordPress, etc.)
4. **Todo versionado en Git** cuando es código
5. **APIs oficiales siempre** — nada de scrapers o integraciones no soportadas
