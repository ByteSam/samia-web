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

/** Catálogo de servicios — orden alineado al Footer (Fase 7) */
export const SERVICIOS: NavLink[] = [
  { label: "Desarrollo web", href: "/servicios/desarrollo-web" },
  { label: "Automatización", href: "/servicios/automatizacion" },
  { label: "Agentes IA", href: "/servicios/agentes-ia" },
  { label: "Datos y analítica", href: "/servicios/datos-y-analitica" },
  { label: "Infraestructura cloud", href: "/servicios/infraestructura-digital" },
];

/** Línea de rubros en Home — Reformas sin landing (caso Fortaleza Vinzos) */
export const RUBROS_HOME =
  "Clínicas · Firmas legales · Reformas · Negocios locales";

/** Solo enlaces con href — para Header dropdown y MobileMenu */
export const SERVICIOS_LINKS = SERVICIOS;
