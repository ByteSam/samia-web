/** Fuente única de nombres y rutas — Footer es la referencia de marca. */

export type NavLink = {
  label: string;
  href: string;
  description?: string;
  /** Destaca el ítem en dropdown (ej. hub de servicios) */
  featured?: boolean;
};

export type NavEntry = NavLink | { label: string; hint: string };

export function isNavLink(item: NavEntry): item is NavLink {
  return "href" in item;
}

/** Nichos con landing propia — hints para header dropdown */
export const SOLUCIONES: NavLink[] = [
  {
    label: "Clínicas",
    href: "/clinicas",
    description: "Citas, recordatorios y WhatsApp 24/7",
  },
  {
    label: "Firmas legales",
    href: "/servicios-legales",
    description: "Filtra consultas y agenda la primera cita",
  },
  {
    label: "Negocios locales",
    href: "/servicios-locales",
    description: "Atiende urgencias y cotizaciones al instante",
  },
];

/** Catálogo de servicios — orden alineado al Footer */
export const SERVICIOS: NavLink[] = [
  {
    label: "Todos los servicios",
    href: "/servicios",
    description: "Catálogo completo y cómo elegir",
    featured: true,
  },
  {
    label: "Desarrollo web",
    href: "/servicios/desarrollo-web",
    description: "Web que convierte visitas en contactos",
  },
  {
    label: "Automatización",
    href: "/servicios/automatizacion",
    description: "Avisos, seguimiento e integraciones",
  },
  {
    label: "Agentes IA",
    href: "/servicios/agentes-ia",
    description: "Respuesta al instante por WhatsApp",
  },
  {
    label: "Datos y analítica",
    href: "/servicios/datos-y-analitica",
    description: "KPIs en un tablero, no en hojas sueltas",
  },
  {
    label: "Infraestructura cloud",
    href: "/servicios/infraestructura-digital",
    description: "Todo conectado en una arquitectura que escala",
  },
];

/** Línea de rubros en Home — Reformas sin landing (caso Fortaleza Vinzos) */
export const RUBROS_HOME =
  "Clínicas · Firmas legales · Reformas · Negocios locales";

/** Solo enlaces con href — para Header dropdown y MobileMenu */
export const SERVICIOS_LINKS = SERVICIOS;
