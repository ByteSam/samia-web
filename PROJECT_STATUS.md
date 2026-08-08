# Estado del Proyecto — AFYNOVA Web

> Generado el 25 jul 2026. Actualizado 8 ago 2026 (Fases 14–15). Producción: `https://afynova.com`.

---

## 1. Qué está terminado

- **Rebrand completo ICHAN → AFYNOVA** en código, metadata, Open Graph, SEO y documentación interna (`docs/`). Cero referencias residuales a "ichan" como texto de marca (solo quedan nombres de archivo históricos fuera de este repo, en `files/`, deliberadamente sin renombrar).
- **Logo oficial integrado**: SVG real (símbolo + wordmark) en `public/logo/afynova.svg`, usado en `Logo.tsx` (navbar/footer), favicon (`src/app/icon.svg`) y la imagen Open Graph — los tres puntos usan exactamente los mismos paths vectoriales. Color del wordmark corregido a `#241509` (token Ink) para coherencia con el resto del sitio.
- **Home**: 9 secciones completas (Hero con mockup de WhatsApp ilustrativo, Problema, Propuesta de valor, Servicios, Proceso + formulario en vivo, Casos reales + Fundador, Garantía + precio, FAQ, CTA final). Caso de estudio de Fortaleza Vinzos con problema/solución/resultado verificables y enlace real al sitio entregado. `LeadForm` con fallback de correo si WhatsApp no abre.
- **6 páginas de servicio/nicho** (`clinicas`, `servicios-locales`, `servicios-legales`, `servicios/agentes-ia`, `servicios/desarrollo-web`) migradas al Design System v2 y con el mismo nivel de estructura: Hero → Problema → Solución/Catálogo/Precio → Cómo trabajamos → Garantía → FAQ → CTA final.
- **SEO técnico**: `sitemap.ts`, `robots.ts`, JSON-LD `ProfessionalService`, `canonical` en las 8 rutas, `SITE_URL` centralizada.
- **Gobernanza de marca verificada**: "afynova" siempre en minúscula, primera persona singular, sin promesas absolutas, sin testimonios/métricas inventadas — auditado explícitamente más de una vez en este proyecto.
- **Refinamiento visual premium — Fase 3 completada** (sistema de botones): `.btn-pill` con sombra base permanente y elevación en hover (mismo lenguaje visual que las cards de la Fase 2); `.btn-pill-whatsapp` con halo verde sutil en reposo y hover para reforzar el CTA principal sin volverse promocional; `.btn-pill-ghost` con hover visible (antes dependía solo de `opacity`, casi imperceptible). Único archivo tocado: `src/app/globals.css`.

## Fase 4 completada — Animation System

Cambios:
- Hero renderizado instantáneamente sin Reveal.
- Reveal optimizado con rootMargin para evitar contenido vacío durante scroll rápido.
- btn-pill limpiado eliminando transición opacity obsoleta.

**Estado sistema visual:**
- Tipografía premium ✅
- Cards con profundidad ✅
- Botones premium ✅
- Animaciones optimizadas ✅

**Pendientes:**
- Dropdown/menu mobile premium (M1).
- Tokens de duración/easing (M2).
- prefers-reduced-motion (B1).

## Fase 5 completada — Header/Navegación

Nuevos componentes/clases visuales:
- `.panel-pop` — animación de entrada (150ms, fade + `translateY(-4px) scale(0.98)` → normal, `transform-origin: top center`).
- `.panel-elevated` — sombra compartida de doble capa, misma familia visual que `.card-soft`/`.btn-pill`, aplicada al dropdown de escritorio (`NavDropdown`) y al menú mobile (`MobileMenu`) en reemplazo de sus sombras inline.

**Estado del sistema:**
- Tipografía ✅
- Cards ✅
- Botones ✅
- Animaciones/Reveals ✅
- Header/navegación ✅

**Pendiente** (sin cambios, fuera de alcance de la Fase 5): animación de salida del menú (M1 parcial, requiere estado adicional), tokens de duración/easing (M2), `prefers-reduced-motion` (B1).

## Fase 7 — Footer information architecture ✅

Cambios:
- Footer reorganizado según arquitectura de marca:
  - Soluciones:
    - Clínicas
    - Firmas legales
    - Negocios locales
  - Servicios:
    - Desarrollo web
    - Automatización
    - Agentes IA
    - Datos y analítica
    - Infraestructura cloud
  - Contacto:
    - WhatsApp
    - Email
  - Legal:
    - Privacidad

Decisiones:
- Servicios sin página propia (Automatización y Datos y analítica) quedan como texto no enlazado.
- Infraestructura cloud mantiene la ruta existente `/infraestructura-digital`.
- No se crearon rutas nuevas.
- No se modificó Header ni navegación principal.

**Estado actual:**
- Tipografía ✅
- Cards ✅
- Botones ✅
- Animaciones ✅
- Header/navegación ✅
- Footer visual ✅
- Footer architecture ✅

## Fase 8 — Home information architecture (reordenamiento de conversión) ✅

Contexto: auditoría de UX/conversión de la Home completa detectó que el formulario (`LeadForm`) pedía datos personales antes de mostrar prueba social o garantía, y que `FundadorBlock` — el activo de confianza más fuerte de la marca — estaba subordinado dentro de la sección "Casos reales" en vez de tener su propio momento.

Nuevo flujo de Home:
Hero → Problema → Propuesta de valor → Servicios → Proceso → **CTA ligero** → Casos reales → **Fundador** (sección propia) → Garantía → Señal de precio → **Formulario** → FAQ → CTA final.

Cambios:
- Nuevo bloque "CTA ligero" (línea contextual + `WhatsAppButton` "Habla conmigo por WhatsApp") entre Proceso y Casos reales, para visitantes ya convencidos que quieren contactar sin llenar el formulario.
- `FundadorBlock` extraído de la sección "Casos reales" a su propia `<section id="fundador">`, sin H2 nuevo (la foto + el texto en primera persona ya cumplen esa función).
- Formulario (`id="contacto"`) movido de after-Proceso a after-Garantía — ahora pide el compromiso más alto (nombre/negocio/necesidad) después del bloque de confianza (Casos reales + Fundador + Garantía), no antes.
- Anchor corregido: "Conoce a Daniel" (`Header.tsx`, `MobileMenu.tsx`) apuntaba a `/#casos-reales`; ahora apunta a `/#fundador`, que es lo que el link promete. `#casos-reales` queda reservado exclusivamente para la sección de casos.

Archivos modificados: `src/app/page.tsx`, `src/components/Header.tsx`, `src/components/MobileMenu.tsx`.

**Pendiente para una fase posterior** (detectado en la misma auditoría, no implementado aún):
- Sección "Propuesta de valor" mezcla varios tipos de contenido sin hilo narrativo único — requiere decisión de arquitectura de contenido (unificar vs. dividir), no un ajuste de copy simple.
- Prueba social delgada (1 caso completo) para el posicionamiento de "consultora" — no se resuelve con copy, requiere más casos reales en el tiempo.

## Fase 9 — Auditoría de copy y conversión (solo lectura) ✅

Auditoría de los 6 puntos pendientes de la Fase 8 (Hero, Formulario, Propuesta de valor, Garantía/CTA final, estadística del 62%, prueba social). Hallazgos priorizados 🔴/🟡/🟢, sin modificar código. Resultado: 4 hallazgos de alto/medio impacto y bajo riesgo se implementaron en la Fase 10; 2 quedaron pendientes de decisión de contenido (ver Fase 10).

## Fase 10 — Corrección de copy crítico y refuerzo de confianza ✅

Cambios implementados (todos exclusivos de Home salvo donde se indica):
- **Formulario**: corregida la referencia posicional rota por la Fase 8 — "así de simple es el paso 1 de arriba, en vivo" → "así empieza tu diagnóstico gratuito".
- **Estadística sin fuente**: "El 62% de las personas abandona..." → "La mayoría de las personas abandona si no le responden rápido" — se elimina la cifra no verificable manteniendo el mensaje, sin inventar atribución.
- **Segmentación del Hero**: chip actualizado a "Webs que venden · automatización · WhatsApp para pymes" — verificado visualmente antes de implementar (2 líneas en mobile 375px, sin romper jerarquía, CTA sigue visible en el primer viewport). H1 y estructura del hero sin cambios.
- **Mensaje diferencial reforzado**: "Hablarás directamente conmigo, no con un call center." añadido vía la prop `notaExtra` (ya existente) en la llamada a `GarantiaSection` desde `page.tsx` — exclusivo de Home, sin tocar `GarantiaSection.tsx` ni su H2 "Riesgo cero para ti.", sin afectar las 6 páginas de servicio/nicho que comparten el componente.

Archivos modificados: `src/app/page.tsx`, `src/components/ProblemaSection.tsx`.

**Pendiente** (sin cambios, fuera de alcance de la Fase 10):
- Sección "Propuesta de valor" — fase independiente de arquitectura de contenido.
- Prueba social — sin cambios, se mantiene la honestidad actual (1 caso real + 1 "Próximamente").

## Fase 11 — Auditoría e implementación de "Propuesta de valor" ✅

**Auditoría** (solo lectura): la sección "Y tu web no se queda ahí" mezclaba 3 tipos de contenido sin hilo narrativo único (lista de bullets genéricos, stat de velocidad, 2 mini-productos numerados), con redundancia literal entre un bullet y la card "Agenda inteligente", y un elemento decorativo (stack de avatares) en tensión con el posicionamiento de fundador único. Dirección aprobada: mantener una sola sección y reducir ruido (no dividir, para evitar redundancia con `ServiciosGrid`).

**Implementación**:
- Eliminados los bullets desconectados de la promesa principal: "Cobra por Yape, Plin o Culqi" y "Te avisa si algo se cae".
- Nuevo enfoque de beneficios alineado con captación, atención y seguimiento: "Responde WhatsApp al instante", "Organiza consultas y solicitudes", "Detecta y prioriza quién necesita seguimiento", "Recupera oportunidades que antes se perdían" — la tercera línea se redactó para complementar la card "Agenda inteligente" en vez de duplicarla.
- Eliminado el stack de avatares decorativo de la card de estadística (sugería un equipo, en tensión con "Hablarás directamente conmigo, no con un call center").
- Eliminada la numeración "1"/"2" de las cards "Recepcionista IA" y "Agenda inteligente" (podía confundirse con la numeración 1-2-3 de `ProcesoSection`).
- Mantenidos sin cambios: H2 "Y tu web no se queda ahí", subtítulo original, stat "<30 seg", contenido de ambas cards de mini-producto.

Archivo modificado: `src/app/page.tsx` (única sección afectada, sin componente propio).

**Pendiente** (sin cambios, fuera de alcance de la Fase 11):
- Prueba social — sin cambios, se mantiene la honestidad actual (1 caso real + 1 "Próximamente").

## Fase 12 — Auditoría de las 6 páginas de servicio/nicho (solo lectura) ✅

Primera auditoría completa de `clinicas`, `servicios-locales`, `servicios-legales`, `servicios/agentes-ia`, `servicios/desarrollo-web` e `infraestructura-digital` desde que Home terminó las Fases 1-11. Confirmado que la capa visual (tipografía, cards, botones, animaciones) se hereda automáticamente vía `globals.css`, sin trabajo adicional por página. Hallazgos principales:
- 3 páginas repetían la estadística "62%" sin fuente ya corregida en Home (Fase 10); `servicios-legales` tenía además dos cifras compuestas (21x, 8x) sin atribución — el caso de mayor riesgo de credibilidad de todo el sitio.
- El diferenciador "Hablarás directamente conmigo, no con un call center" (reforzado en Home en la Fase 10) no existe en ninguna de las 6 páginas internas — `FinalCTA.tsx` usa un `textoSecundario` genérico por defecto en todas.
- `servicios-locales` es la única página "Solución" sin sección de Proceso, y su H1 menciona solo "gasfitero" pese a que la página cubre más rubros.
- `infraestructura-digital` es la más atípica de las 6 (sin Problema/Solución/Proceso, CTA final propio en vez de `FinalCTA`) — evaluado como intencional dado que su audiencia son clientes existentes.
- La separación Soluciones/Servicios se entiende correctamente en la navegación; único matiz señalado: `infraestructura-digital` vive en el menú "Servicios" pese a ser explícitamente para clientes ya validados.

Decisión: implementar en fases separadas por impacto/riesgo. Fase 13 = estadísticas sin fuente (implementada). Fase 14 = propagación del diferenciador (en auditoría). Estructura de `servicios-locales` e `infraestructura-digital`: mantenidas sin cambios por ahora (decisión explícita).

## Fase 13 — Estadísticas sin fuente en páginas de servicio/nicho ✅

Mismo criterio aplicado en Home (Fase 10): reemplazar cifras no verificables por formulación direccional, sin inventar atribución.

Cambios realizados:
- Reemplazo de "El 62% de las personas abandona si no le responden rápido" por "La mayoría de las personas abandona si no le responden rápido" en `clinicas`, `servicios-locales` y `servicios/agentes-ia` (el resto de cada oración, con su matiz específico de sector, se mantuvo intacto).
- Eliminación de las cifras "21 veces" y "8 veces" en `servicios-legales`, reemplazadas por: "Responder rápido aumenta las posibilidades de que esa consulta se convierta en cliente — mientras más tardas, más probable es que esa persona ya haya escrito a otro estudio."

Archivos modificados: `src/app/clinicas/page.tsx`, `src/app/servicios-locales/page.tsx`, `src/app/servicios/agentes-ia/page.tsx`, `src/app/servicios-legales/page.tsx`. `ProblemSection.tsx` (el componente compartido) no se tocó — el texto vive como prop por página.

**Verificaciones realizadas**: `npm run lint` y `npm run build` limpios; confirmado por inspección de texto en el DOM de las 4 páginas en vivo que el texto nuevo está presente y ninguna cifra antigua ("62%", "21 veces", "8 veces") permanece.

**Estado**: cerrado. `git status` limpio, `HEAD` y `origin/main` sincronizados.

**Pendiente** (fuera de alcance de la Fase 13, ver Fase 12):
- Propagación del diferenciador "no con un call center" a las 6 páginas internas — en auditoría (Fase 14).
- Sección de Proceso ausente en `servicios-locales`.
- H1 de `servicios-locales` menciona solo "gasfitero".

## Fase 14 — Conversión, dominio y medición ✅

Cambios (commit `9722b2a`):
- Open Graph por ruta (7 landings de conversión + helper `src/lib/og-image.tsx`).
- Vercel Web Analytics + eventos `click_whatsapp`, `lead`, `booking`.
- `BookingButton` en Hero (Cal.com cuando `CAL_COM_URL` esté configurado; fallback WhatsApp).
- `FinalCTA` con mensaje de confianza en páginas internas.
- `servicios-locales`: H1 ampliado + sección Proceso.
- `SITE_URL` → `https://afynova.com` (dominio propio en producción).
- `src/lib/casos.ts` con flag `ACTIVAR_CASO_LEGAL` para publicar caso legal post-piloto.

**Cierre técnico manual (Daniel):**
- Google Search Console verificado + sitemap enviado ✅
- Vercel Web Analytics activo ✅
- Preview OG en WhatsApp — pospuesto

## Fase 15 — Navegación unificada + panel “Conoce a Daniel” ✅

Cambios:
- Fuente única `src/lib/navigation.ts` — Footer como referencia de nombres (Firmas legales, Negocios locales, Infraestructura cloud, etc.).
- Footer, Header, MobileMenu y línea de rubros en Home alineados.
- Servicios sin página propia (Automatización, Datos y analítica) muestran hint en footer, sin links rotos.
- `FundadorPanel` — panel lateral **derecho** al clic en “Conoce a Daniel”; overlay ligero para ver la Home detrás. Sección `#fundador` eliminada de la Home (bio solo en el panel).

Archivos nuevos: `navigation.ts`, `FundadorPanel.tsx`, `HeaderNav.tsx`.

## 2. Qué está pendiente

Ver sección 9 (priorizado). Resumen:
- Preview OG en WhatsApp (validar caché al compartir links) — pospuesto.
- Cal.com — `CAL_COM_URL` sigue `null`; CTA usa WhatsApp como fallback.
- Tokens Success/Warning/Error (documentados, no implementados — correcto, nada los necesita aún).
- Escala H2 exacta del Design System (28px/36px) vs. implementación real.
- `PricingTiers` no se usa en `infraestructura-digital` (decisión explícita).
- Manual de identidad formal (más allá del brief de `identidad-visual-ichan.md`).
- Apple Touch Icon y Web App Manifest — no evaluados formalmente.

**En pausa (no prioridad actual):** piloto legal estructurado, ads Meta/Google, publicar caso legal en Home (`ACTIVAR_CASO_LEGAL`).

## 3. Roadmap

**Prioridad actual:** pulir experiencia de navegación y conversión en sitio ya en producción (`https://afynova.com`).

**Corto plazo:**
1. Validar preview OG al compartir landings por WhatsApp (cuando se retome).
2. Configurar Cal.com cuando exista URL real (`docs/calcom-setup.md`).

**En pausa (operaciones / captación):**
3. Piloto legal estructurado — ver `files/soluciones/servicios-legales/piloto-seguimiento.md`.
4. Anuncios pagados — ver `files/marketing/ads-lanzamiento.md` (solo post-piloto).

**Mediano plazo (bajo impacto técnico):**
5. Web App Manifest / Apple Touch Icon — solo si se decide PWA.
6. Manual de identidad formal.

**Sin fecha:**
7. Tokens Success/Warning/Error — cuando un formulario los necesite.

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

**SEO/metadata generado por código**: `sitemap.ts`, `robots.ts`, `icon.svg`, `opengraph-image.tsx` por ruta (helper `og-image.tsx`), JSON-LD en `layout.tsx`.

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
| `ServiciosGrid`, `ProcesoSection`, `LeadForm` | — | Exclusivos de Home |
| `FundadorPanel` | `open`, `onClose` | Header — “Conoce a Daniel” |
| `Header`, `Footer`, `MobileMenu`, `NavDropdown`, `HeaderNav`, `FundadorPanel` | — | Layout global / navegación |

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

1. **Preview OG en WhatsApp** — imágenes por ruta ya en código; validar caché al compartir (pospuesto).
2. **Cal.com** — configurar URL en `contact.ts` cuando exista cuenta.
3. **Escala H2 del Design System (28px/36px)** — ajuste visual global, bajo impacto en conversión.
4. **Apple Touch Icon** — no evaluado formalmente.
5. **Manual de identidad formal** — post-validación del logo en producción.
6. **Web App Manifest** — solo si el sitio debe ser instalable.
7. **Tokens Success/Warning/Error** — cuando un formulario los necesite.

**En pausa:** piloto legal, caso de éxito en Home, campañas de ads.
