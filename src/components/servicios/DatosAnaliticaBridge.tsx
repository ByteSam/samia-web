import Link from "next/link";
import {
  BarChart3,
  FileText,
  Activity,
  Layers,
  Shield,
  FileSpreadsheet,
  HelpCircle,
  LayoutDashboard,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const PARA_TI = [
  {
    icon: FileSpreadsheet,
    texto: "Tus KPIs están en varias hojas de cálculo que armás cada semana",
  },
  {
    icon: HelpCircle,
    texto: "No sabes qué canal trae más clientes",
  },
  {
    icon: LayoutDashboard,
    texto: "Quieres ver el negocio sin tener que abrir cuatro herramientas",
  },
];

const OFERTAS = [
  {
    icon: BarChart3,
    titulo: "Tablero de KPIs",
    descripcion: "Ventas, consultas, citas o leads — los indicadores que ya usas, en un solo lugar.",
  },
  {
    icon: FileText,
    titulo: "Reportes periódicos",
    descripcion: "Resúmenes automáticos para que no armes el mismo Excel cada semana.",
  },
  {
    icon: Activity,
    titulo: "Monitoreo y alertas",
    descripcion: "Te avisa cuando algo cambia — antes de que sea un problema operativo.",
  },
];

/** Firma datos — cuándo pedir BI (sin repetir compare del hero). */
export default function DatosAnaliticaBridge() {
  return (
    <section className="py-14 pb-20 md:py-20 md:pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="section-eyebrow">¿Cuándo tiene sentido?</p>
          <h2 className="text-h2 mt-2 text-ink">Cuando necesitas ver el negocio con claridad</h2>
          <p className="mt-4 max-w-2xl text-ink/60">
            Datos y analítica suele ir como módulo del paquete Integral de{" "}
            <Link
              href="/servicios/infraestructura-digital"
              className="text-terracota-dark underline-offset-2 hover:underline"
            >
              Infraestructura digital
            </Link>
            , o como proyecto puntual si ya tienes datos pero no un tablero.
          </p>
        </Reveal>

        <Reveal delay={60}>
          <div className="card-soft-tint mt-8 p-5 sm:p-6">
            <p className="text-sm font-medium text-ink">Este servicio es para ti si…</p>
            <ul className="mt-4 space-y-3">
              {PARA_TI.map((item) => (
                <li key={item.texto} className="flex items-start gap-3 text-sm text-ink/70">
                  <item.icon
                    className="mt-0.5 h-4 w-4 shrink-0 text-terracota"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <span>{item.texto}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {OFERTAS.map((item) => (
              <div key={item.titulo} className="card-compact bg-white p-5 sm:p-6">
                <item.icon className="h-5 w-5 text-terracota" strokeWidth={1.5} />
                <p className="mt-3 font-medium text-ink">{item.titulo}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">{item.descripcion}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 px-1 text-sm text-ink/60">
            <span className="flex items-center gap-2">
              <Layers className="h-4 w-4 shrink-0 text-terracota" strokeWidth={1.75} />
              Incluido en Infra Integral
            </span>
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 shrink-0 text-terracota" strokeWidth={1.75} />
              Sin métricas inventadas — tus KPIs reales
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
