# Estado del Proyecto — AFYNOVA Web

> Generado el 25 jul 2026. Refleja el estado real del repositorio al commit `baf182a`, verificado contra el código — no contra suposiciones ni documentación externa desactualizada.

---

## 1. Qué está terminado

- **Rebrand completo ICHAN → AFYNOVA** en código, metadata, Open Graph, SEO y documentación interna (`docs/`). Cero referencias residuales a "ichan" como texto de marca (solo quedan nombres de archivo históricos fuera de este repo, en `files/`, deliberadamente sin renombrar).
- **Logo oficial integrado**: SVG real (símbolo + wordmark) en `public/logo/afynova.svg`, usado en `Logo.tsx` (navbar/footer), favicon (`src/app/icon.svg`) y la imagen Open Graph — los tres puntos usan exactamente los mismos paths vectoriales. Color del wordmark corregido a `#241509` (token Ink) para coherencia con el resto del sitio.
- **Home**: 9 secciones completas (Hero con mockup de WhatsApp ilustrativo, Problema, Propuesta de valor, Servicios, Proceso + formulario en vivo, Casos reales + Fundador, Garantía + precio, FAQ, CTA final). Caso de estudio de Fortaleza Vinzos con problema/solución/resultado verificables y enlace real al sitio entregado. `LeadForm` con fallback de correo si WhatsApp no abre.
- **6 páginas de servicio/nicho** (`clinicas`, `servicios-locales`, `servicios-legales`, `servicios/agentes-ia`, `servicios/desarrollo-web`) migradas al Design System v2 y con el mismo nivel de estructura: Hero → Problema → Solución/Catálogo/Precio → Cómo trabajamos → Garantía → FAQ → CTA final.
- **SEO técnico**: `sitemap.ts`, `robots.ts`, JSON-LD `ProfessionalService`, `canonical` en las 8 rutas, `SITE_URL` centralizada.
- **Gobernanza de marca verificada**: "afynova" siempre en minúscula, primera persona singular, sin promesas absolutas, sin testimonios/métricas inventadas — auditado explícitamente más de una vez en este proyecto.
- **Refinamiento visual premium — Fase 3 completada** (sistema de botones): `.btn-pill` con sombra base permanente y elevación en hover (mismo lenguaje visual que las cards de la Fase 2); `.btn-pill-whatsapp` con halo verde sutil en reposo y hover para reforzar el CTA principal sin volverse promocional; `.btn-pill-ghost` con hover visible (antes dependía solo de `opacity`, casi imperceptible). Único archivo tocado: `src/app/globals.css`.

**Estado actual del sistema visual (refinamiento premium):**
- Tipografía premium ✅ (Fase 1 — escala `.text-h1`/`.text-h2` consistente en todo el sitio)
- Cards con profundidad ✅ (Fase 2 — sombra base + hover de elevación en `.card-soft`/`.card-soft-tint`/`.card-soft-dark`)
- Botones premium ✅ (Fase 3 — sombra base, halo WhatsApp, hover ghost corregido)

## 2. Qué está pendiente

Ver sección 9 (priorizado). Resumen:
- Dominio propio (sigue en `samia-lake.vercel.app`).
- Search Console (pendiente de verificación manual por Daniel).
- Tokens Success/Warning/Error (documentados, no implementados — correcto, nada los necesita aún).
- Escala H2 exacta del Design System (28px/36px) vs. implementación real — ni Home ni las páginas secundarias calzan exacto.
- `PricingTiers` no se usa en `infraestructura-digital` (decisión explícita, no un olvido).
- Manual de identidad formal (más allá del brief de `identidad-visual-ichan.md`).
- Apple Touch Icon y Web App Manifest — no existen, no evaluados formalmente.
- Open Graph: solo `/` tiene imagen propia (`opengraph-image.tsx`); las otras 7 rutas no generan una imagen específica.

## 3. Roadmap

**Corto plazo (sin bloqueadores técnicos):**
1. Cerrar el ciclo de "página de servicio completa" en las páginas restantes si se decide seguir el mismo patrón (Home, `infraestructura-digital`, `clinicas`, `servicios-locales` — evaluar si necesitan la misma profundidad que `agentes-ia`/`desarrollo-web`/`servicios-legales`).
2. Resolver Open Graph por página (impacta directamente cómo se ve el link al compartir por WhatsApp, canal principal del negocio).
3. Verificar Search Console tras confirmar el deploy.

**Mediano plazo (depende de decisiones de Daniel, no técnicas):**
4. Comprar dominio propio y migrar `SITE_URL`.
5. Definir si corresponde un Web App Manifest (el sitio no declara intención de ser instalable/PWA hoy).
6. Evaluar manual de identidad formal una vez que el uso del logo esté validado en producción.

**Sin fecha (esperan una condición real, no un plazo):**
7. Tokens Success/Warning/Error — solo cuando exista un formulario que los necesite.

## 4. Arquitectura

**Stack**: Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind v4 (`@theme inline`, sin `tailwind.config`), `lucide-react` para iconografía. Sin backend propio — `LeadForm` arma un mensaje y abre WhatsApp/mailto directamente, sin persistencia de datos.

**Rutas (8):**
```
/                              Home
/clinicas                      Nicho — clínicas
/servicios-locales             Nicho — servicios locales (gasfitería, cerrajería, etc.)
/servicios-legales             Nicho — estudios de abogacía laboral
/servicios/agentes-ia          Servicio — catálogo de agentes IA
/servicios/desarrollo-web      Servicio — catálogo de desarrollo web
/infraestructura-digital       Servicio — upgrade para clientes existentes
/politica-de-privacidad        Legal
```

**SEO/metadata generado por código** (no archivos estáticos): `sitemap.ts`, `robots.ts`, `icon.svg` (favicon estático desde el logo real), `opengraph-image.tsx` (dinámico, usa el logo real).

## 5. Componentes reutilizables

| Componente | Props clave | Usado en |
|---|---|---|
| `GarantiaSection` | `condicion`, `notaExtra?` | Home + las 6 páginas de servicio/nicho |
| `FAQSection` | `items`, `titulo?` | Home + las 6 páginas de servicio/nicho |
| `FinalCTA` | `titulo`, `mensaje`, `textoSecundario?`, `textoBoton?` | 5 páginas de servicio/nicho (no Home, no `infraestructura-digital`) |
| `ProblemSection` | `titulo`, `bullets[]`, `stat` | `clinicas`, `servicios-locales`, `servicios-legales`, `agentes-ia`, `desarrollo-web` |
| `SolutionGrid` | `titulo`, `items[]`, `children?` | `clinicas`, `servicios-locales`, `servicios-legales` |
| `PricingTiers` | `paquetes[]`, `titulo?`, `chipDestacado?`, `children?` | `clinicas`, `servicios-locales` (no `infraestructura-digital`, por decisión explícita) |
| `CatalogGrid` | `items[]` (con `descripcion?`, `entrega?`, `retainer?` opcionales), `columns?`, `pb?`, `children?` | `agentes-ia`, `desarrollo-web` |
| `WhatsAppMockup` | (sin props) | Home, `agentes-ia` |
| `WhatsAppButton` | `message`, `variant?` | Todas las páginas |
| `Logo` | `height?`, `className?` | `Header`, `Footer` |
| `Reveal` | `delay?`, `className?` | Prácticamente todos los bloques de contenido (fade-in-up al hacer scroll) |
| `ProblemaSection` *(con "a")* | — (contenido fijo) | Solo Home — **no confundir con `ProblemSection`** |
| `ServiciosGrid`, `ProcesoSection`, `FundadorBlock`, `LeadForm` | — | Exclusivos de Home |
| `Header`, `Footer`, `MobileMenu`, `NavDropdown` | — | Layout global |

⚠️ **Advertencia activa**: `ProblemaSection` (Home, contenido fijo) y `ProblemSection` (páginas de servicio, con props) son dos componentes distintos con nombres casi idénticos. Verificar siempre cuál se está editando.

## 6. Reglas del proyecto

De `AGENTS.md` (vigente, no modificado):
- Mostrar el plan (qué archivos, qué cambia) antes de ejecutar cambios de código y esperar aprobación explícita — **la regla más importante del proyecto**.
- No hacer más de lo pedido.
- Reutilizar clases/componentes existentes antes de crear nuevos.
- Nunca inventar precios, URLs o testimonios — usar placeholders explícitos (`null` + `TODO`) u omitir hasta tener el dato real.
- No reclamar títulos de trabajo como identidad pública.
- Validación ejecutable obligatoria antes de dar por terminada una tarea: `npm run lint` y `npm run build`.
- Verificación manual en navegador para cambios visuales/interactivos.
- Tareas que requieren cuentas externas (logos, dominios, Cal.com) las ejecuta Daniel; la asistencia da el cómo, no la ejecuta directamente.

De `brand-book-ichan.md` / gobernanza de marca (contenido reescrito para AFYNOVA, nombre de archivo histórico sin cambiar):
- "afynova" siempre en minúscula en texto de marca/wordmark. Mayúscula solo válida al referirse a la arquitectura de divisiones ("AFYNOVA Consulting").
- Primera persona singular — nunca "nosotros" ficticio mientras sea un solo operador.
- Azul excluido de cualquier superficie de marketing (reservado para un futuro producto).
- Nunca prometer un resultado no sostenible — sin "100%", sin claims absolutos no verificables.
- Nunca inventar testimonios, casos de éxito o métricas (Anti-valor #2).
- Ningún cambio importante de marca sin justificar qué parte del Brand Book se modifica y por qué.

## 7. Decisiones de diseño tomadas

- **Paleta**: terracota `#C1502E` + arena `#F6ECDA` como primario; ink `#241509` para texto (nunca negro puro); dorado `#C1892B` como acento de valor/precio, nunca como color de acción.
- **Tipografía**: Instrument Serif (headings/acentos) + Inter (cuerpo). El logo ya no depende de una fuente — es un SVG vectorial (símbolo + letras dibujadas como paths), no texto renderizado.
- **Símbolo de marca**: círculo con una intervención diagonal ("El Corte Preciso"), ya ejecutado como logo oficial — ya no es un concepto pendiente de Figma.
- **Botones**: pill-shaped, 3 variantes (`btn-pill-solid`, `btn-pill-ghost`, `btn-pill-whatsapp` con texto ink sobre verde por contraste WCAG AA).
- **Animación**: `Reveal` (fade-in-up sutil al hacer scroll) como única firma de movimiento del sitio — sin parallax, sin 3D, sin animaciones largas.
- **Precios**: dos patrones válidos según el servicio — catálogo de ítems individuales (`CatalogGrid`, para servicios à la carte) o paquetes por tier (`PricingTiers`, para nichos con combos). Servicios de cotización variable (legal) usan un bloque de precio único con rango + factores que lo definen, sin forzar tiers artificiales.
- **Mockup de WhatsApp**: siempre etiquetado explícitamente como "Ejemplo ilustrativo", con nombre de contacto genérico ("Recepcionista IA") — nunca se presenta como captura real de un cliente.

## 8. Convenciones de desarrollo

- Componentes con estado (`useState`, `onClick`) requieren `"use client"` al inicio del archivo.
- Props opcionales con valores por defecto inline (patrón usado en todos los componentes compartidos: `titulo = "..."`, `pb = "20"`, etc.) en vez de crear variantes nuevas.
- Extracción a componente compartido solo cuando el mismo bloque se repite en 2+ páginas — evitar abstracciones prematuras para un solo uso.
- Cambios en componentes compartidos deben verificarse contra **todos** sus usos antes de comitear (ej. cualquier cambio en `CatalogGrid` se revisa en `agentes-ia` y `desarrollo-web`, no solo en la página que motivó el cambio).
- Commits atómicos por tema — un commit por mejora/página, no cambios mezclados de distintas rondas.
- Nunca commitear ni pushear sin aprobación explícita del usuario en la conversación.

## 9. Pendientes priorizados

1. **Open Graph por página** — hoy solo `/` tiene imagen propia al compartir; las 7 páginas restantes no. Impacto directo en conversión (el canal principal es compartir por WhatsApp).
2. **Dominio propio** — `SITE_URL` sigue apuntando a `samia-lake.vercel.app`.
3. **Search Console** — pendiente de verificación manual por Daniel tras confirmar el deploy.
4. **Escala H2 del Design System (28px/36px)** — ni Home ni las páginas secundarias calzan exacto; implica tocar Home, fuera de alcance de las rondas recientes.
5. **Apple Touch Icon** — inexistente, nunca evaluado formalmente como pendiente hasta ahora.
6. **Manual de identidad formal** — más allá del brief actual, una vez validado el logo en producción real.
7. **Web App Manifest** — solo si se decide que el sitio debe ser instalable; no evaluado como necesidad real todavía.
8. **Tokens Success/Warning/Error** — esperan a que exista un formulario que realmente los necesite.
