# afynova — samia-web

Sitio web comercial de [afynova.com](https://afynova.com). Webs, agentes IA y automatización para pymes.

## Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19 + Tailwind CSS v4
- **Lenguaje:** TypeScript
- **Deploy:** Vercel
- **Dominio:** afynova.com

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura del proyecto

```
samia-web/
├── src/                    ← Código fuente (Next.js App Router)
│   ├── app/                ← Rutas y páginas
│   ├── components/         ← Componentes React
│   └── lib/                ← Utilidades y constantes
│
├── docs/                   ← Documentación (ver docs/README.md)
│   ├── negocio/            ← Decisiones de marca, oferta, pricing
│   ├── web/                ← Specs visuales de páginas (para Cursor)
│   ├── tech/               ← Setup técnico (dominio, Cal.com)
│   ├── ops/                ← Sistema de entrega a clientes
│   └── reviews/            ← QA visual (screenshots, auditorías)
│
├── PRPs/                   ← Product Requirement Plans (features)
│   └── templates/          ← Templates para crear PRPs
│
├── AGENTS.md               ← Reglas para Cursor / Claude Code
├── CLAUDE.md               ← Alias → AGENTS.md
└── PROJECT_STATUS.md       ← Estado actual del proyecto (17 fases)
```

## Documentación

Toda la documentación vive en `docs/`. Ver [docs/README.md](./docs/README.md) para el índice completo.

## Workflow con IA

1. **Amazon Quick** → Pensar, planificar, generar specs y documentos
2. **Cursor** → Implementar código siguiendo las specs de `docs/web/`
3. **AGENTS.md** → Reglas que ambos respetan al tocar el código
