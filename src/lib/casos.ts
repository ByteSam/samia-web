import type { LucideIcon } from "lucide-react";
import { Hammer, Scale } from "lucide-react";

export type CasoBase = {
  nombre: string;
  rubro: string;
  icon: LucideIcon;
  estado: "entregado" | "proximamente";
};

export type CasoSimple = CasoBase & { entregable: string };

export type CasoDetallado = CasoBase & {
  problema: string;
  solucion: string;
  resultado: string;
  url: string;
};

export type Caso = CasoSimple | CasoDetallado;

/**
 * Cambiar a `true` cuando el piloto legal esté entregado y tengas permiso
 * para publicar el caso. Completar CASO_LEGAL con datos reales antes de activar.
 * Ver files/soluciones/servicios-legales/piloto-seguimiento.md
 */
export const ACTIVAR_CASO_LEGAL = false;

const CASO_LEGAL: CasoDetallado = {
  nombre: "Estudio de abogacía laboral",
  rubro: "Derecho laboral",
  icon: Scale,
  estado: "entregado",
  problema:
    "TODO: describir el problema real del estudio en sus palabras (1–2 frases).",
  solucion:
    "TODO: web de captación + formulario con aviso WhatsApp + asistente FAQ (alcance real entregado).",
  resultado: "TODO: resultado verificable sin métricas inventadas (ej. sitio publicado, agente activo).",
  url: "TODO: URL del sitio entregado",
};

const CASO_LEGAL_PLACEHOLDER: CasoSimple = {
  nombre: "Servicios legales",
  rubro: "Abogacía",
  entregable: "Landing page a medida.",
  icon: Scale,
  estado: "proximamente",
};

export const CASOS: Caso[] = [
  {
    nombre: "Fortaleza Vinzos",
    rubro: "Reformas y remodelación",
    icon: Hammer,
    estado: "entregado",
    problema:
      "Fortaleza Vinzos necesitaba una presencia web profesional para captar solicitudes de presupuesto y transmitir confianza desde el primer contacto.",
    solucion:
      "Diseñamos y desarrollamos una landing orientada a conversión, con una propuesta de valor clara, servicios, proyectos, formulario de contacto y CTA a WhatsApp.",
    resultado: "Sitio web entregado y publicado.",
    url: "https://fortalezavinzos.es/",
  },
  ACTIVAR_CASO_LEGAL ? CASO_LEGAL : CASO_LEGAL_PLACEHOLDER,
];
