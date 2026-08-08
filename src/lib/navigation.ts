/** Fuente única de nombres y rutas — Footer es la referencia de marca. */

export type NavLink = {
  label: string;
  href: string;
};

export type NavEntry = NavLink | { label: string; hint: string };

export function isNavLink(item: NavEntry): item is NavLink {
  return "href" in item;
}

/** Nichos con landing propia */
export const SOLUCIONES: NavLink[] = [
  { label: "Clínicas", href: "/clinicas" },
  { label: "Firmas legales", href: "/servicios-legales" },
  { label: "Negocios locales", href: "/servicios-locales" },
];

/** Catálogo de servicios — sin página propia = solo texto + hint */
export const SERVICIOS: NavEntry[] = [
  { label: "Agentes IA", href: "/servicios/agentes-ia" },
  { label: "Desarrollo web", href: "/servicios/desarrollo-web" },
  { label: "Infraestructura cloud", href: "/infraestructura-digital" },
  { label: "Automatización", hint: "Incluida en Agentes IA e Infraestructura cloud" },
  { label: "Datos y analítica", hint: "Módulo de Infraestructura cloud" },
];

/** Línea de rubros en Home — Reformas sin landing (caso Fortaleza Vinzos) */
export const RUBROS_HOME =
  "Clínicas · Firmas legales · Reformas · Negocios locales";

/** Solo enlaces con href — para Header dropdown y MobileMenu */
export const SERVICIOS_LINKS = SERVICIOS.filter(isNavLink);
