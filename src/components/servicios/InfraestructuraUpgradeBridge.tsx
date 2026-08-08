import Link from "next/link";
import { MessageCircleMore, Wallet, TrendingUp, Layers, Shield, RefreshCw } from "lucide-react";
import Reveal from "@/components/Reveal";

const CUANDO = [
  {
    icon: MessageCircleMore,
    titulo: "Ya validaste web o agente",
    descripcion: "Tienes algo funcionando y quieres conectar el resto sin empezar de cero.",
  },
  {
    icon: Wallet,
    titulo: "Necesitas pagos o panel",
    descripcion: "Cobrar en línea, portal de cliente o datos ordenados en un solo lugar.",
  },
  {
    icon: TrendingUp,
    titulo: "Quieres escalar sin rehacer",
    descripcion: "Paquetes Base → Integral diseñados para crecer sobre lo que ya existe.",
  },
];

/** Firma infraestructura — cuándo tiene sentido (sin repetir compare del hero). */
export default function InfraestructuraUpgradeBridge() {
  return (
    <section className="py-14 pb-20 md:py-20 md:pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="section-eyebrow">¿Cuándo tiene sentido?</p>
          <h2 className="text-h2 mt-2 text-ink">El siguiente paso después de validar</h2>
          <p className="mt-4 max-w-2xl text-ink/60">
            No es la oferta de entrada — es para cuando ya confías en afynova y quieres integrar
            todo en una arquitectura que escala. Si aún no integras todo, puedes validar primero con{" "}
            <Link
              href="/servicios/agentes-ia"
              className="text-terracota-dark underline-offset-2 hover:underline"
            >
              Agentes IA
            </Link>
            ,{" "}
            <Link
              href="/servicios/desarrollo-web"
              className="text-terracota-dark underline-offset-2 hover:underline"
            >
              Desarrollo web
            </Link>
            ,{" "}
            <Link
              href="/servicios/automatizacion"
              className="text-terracota-dark underline-offset-2 hover:underline"
            >
              Automatización
            </Link>
            {" "}o{" "}
            <Link
              href="/servicios/datos-y-analitica"
              className="text-terracota-dark underline-offset-2 hover:underline"
            >
              Datos y analítica
            </Link>
            .
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {CUANDO.map((item) => (
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
              Escala sin rehacer
            </span>
            <span className="flex items-center gap-2">
              <RefreshCw className="h-4 w-4 shrink-0 text-terracota" strokeWidth={1.75} />
              Base → Pro → Integral
            </span>
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 shrink-0 text-terracota" strokeWidth={1.75} />
              Retainer con soporte
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
