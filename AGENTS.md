<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:context-engineering-rules -->
## Reglas del proyecto (Context Engineering)

Este proyecto usa el flujo `/generate-prp` → `/execute-prp` (ver `.claude/commands/`) para features grandes. Para cambios chicos, seguir estas reglas directamente.

### 🔄 Project Awareness & Context
- Revisar `docs/00-decisiones-vigentes.md` antes de cambiar oferta, mensaje de la web, embudo, precios o arquitectura.
- Consultar `~/Desktop/DANIEL/files/prd-samia.md` para el estado actual del producto (pendientes, roadmap, decisiones descartadas).

### 🧱 Code Structure & Modularity
- Componentes reutilizables en `src/components/`, páginas en `src/app/<ruta>/page.tsx`.
- Reutilizar clases de diseño existentes (`card-soft`, `card-soft-tint`, `card-soft-dark`, `btn-pill`, `chip`, `Reveal`) antes de crear una nueva.
- Componentes con estado (`useState`, `onClick`) necesitan `"use client"` al inicio del archivo.

### 🧪 Testing & Reliability
- Validación ejecutable: `npm run lint` y `npm run build` — ambos deben pasar antes de dar por terminada una tarea.
- Verificar manualmente en el navegador (Browser pane) los cambios visuales o interactivos — no basta con que compile.

### ✅ Task Completion
- **Siempre mostrar el plan (qué archivos, qué cambia) antes de ejecutar cambios de código, y esperar aprobación explícita.** Regla más importante del proyecto.
- No hacer más de lo pedido — si algo grande queda pendiente, dejarlo anotado en `prd-samia.md`, no ejecutarlo sin permiso.

### 📎 Style & Conventions
- TypeScript + Tailwind v4. Tokens de color en `src/app/globals.css` (`@theme inline`), no en `tailwind.config`.
- Tipografía: Instrument Serif (display/acentos) + Inter (cuerpo).
- Paleta: terracota `#C1502E`, rojo arcilla `#8C2F1B`, dorado `#C1892B`, tinta `#241509`, arena `#F6ECDA`.

### 🧠 AI Behavior Rules
- Nunca inventar precios, URLs o testimonios — usar placeholders explícitos (`null` + comentario `TODO`) o simplemente omitir hasta tener el dato real.
- No reclamar títulos de trabajo (Data Scientist/DevOps/SRE/Platform Engineer) como identidad pública — describir función, no título.
- Tareas que requieren cuentas externas (logos, dominios, Cal.com) las hace Daniel; Claude da el cómo/los prompts, no las ejecuta.
<!-- END:context-engineering-rules -->
