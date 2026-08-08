import {
  LayoutTemplate,
  Building2,
  ShoppingCart,
  Code2,
  MessageCircle,
  Wrench,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const PASOS = [
  {
    icon: LayoutTemplate,
    titulo: "Landing",
    descripcion: "Arrancas rápido o lanzas una oferta puntual con un solo objetivo claro.",
    etiqueta: "Empieza aquí",
  },
  {
    icon: Building2,
    titulo: "Corporativa o portafolio",
    descripcion: "Presencia completa o galería de proyectos para negocios ya establecidos.",
    etiqueta: "Presencia",
  },
  {
    icon: ShoppingCart,
    titulo: "Portal o e-commerce",
    descripcion: "Clientes con login o venta en línea con catálogo, carrito y pagos.",
    etiqueta: "Escala",
  },
];

/** Firma desarrollo web — tipo de sitio según objetivo (sin duplicar hero). */
export default function DesarrolloWebCatalogBridge() {
  return (
    <section className="py-14 pb-20 md:py-20 md:pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="section-eyebrow">Por dónde empezar</p>
          <h2 className="text-h2 mt-2 text-ink">El tipo de sitio según tu objetivo</h2>
          <p className="mt-4 max-w-2xl text-ink/60">
            No todos necesitan lo mismo. Abajo está el catálogo completo con rangos en soles.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {PASOS.map((paso) => (
              <div key={paso.titulo} className="card-compact bg-white p-5 sm:p-6">
                <span className="chip-muted text-[0.65rem]">{paso.etiqueta}</span>
                <paso.icon className="mt-4 h-5 w-5 text-terracota" strokeWidth={1.5} />
                <p className="mt-3 font-medium text-ink">{paso.titulo}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">{paso.descripcion}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 px-1 text-sm text-ink/60">
            <span className="flex items-center gap-2">
              <Code2 className="h-4 w-4 shrink-0 text-terracota" strokeWidth={1.75} />
              Código real
            </span>
            <span className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 shrink-0 text-terracota" strokeWidth={1.75} />
              WhatsApp integrado
            </span>
            <span className="flex items-center gap-2">
              <Wrench className="h-4 w-4 shrink-0 text-terracota" strokeWidth={1.75} />
              Mantenimiento opcional
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
