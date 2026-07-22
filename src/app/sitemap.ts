import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/** Solo rutas públicas relevantes para conversión — se excluye política de privacidad (sin valor de indexación). */
const ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/clinicas", priority: 0.8, changeFrequency: "monthly" },
  { path: "/servicios-locales", priority: 0.8, changeFrequency: "monthly" },
  { path: "/servicios-legales", priority: 0.8, changeFrequency: "monthly" },
  { path: "/servicios/agentes-ia", priority: 0.7, changeFrequency: "monthly" },
  { path: "/servicios/desarrollo-web", priority: 0.7, changeFrequency: "monthly" },
  { path: "/infraestructura-digital", priority: 0.6, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
