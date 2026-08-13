import Link from "next/link";
import { Bell, UserPlus, Link2, MessageCircleMore, Layers } from "lucide-react";
import Reveal from "@/components/Reveal";

const CASOS = [
  {
    icon: Bell,
    titulo: "Aviso cuando llega un lead",
    descripcion: "Formulario en tu web → te avisa por WhatsApp sin que tengas que revisar el correo.",
  },
  {
    icon: UserPlus,
    titulo: "Seguimiento de consultas",
    descripcion: "Recordatorios automáticos cuando un prospecto no responde — sin depender de la memoria.",
  },
  {
    icon: Link2,
    titulo: "Integración entre sistemas",
    descripcion: "CRM, email, ERP u hojas de cálculo conectados para no duplicar datos.",
  },
];

/** Firma automatización — casos de uso (sin repetir compare del hero). */
export default function AutomatizacionUseCasesBridge() {
  return (
    <section className="py-14 pb-20 md:py-20 md:pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="section-eyebrow">Qué automatizamos</p>
          <h2 className="text-h2 mt-2 text-ink">Flujos que hoy te quitan tiempo</h2>
          <p className="mt-4 max-w-2xl text-ink/60">
            Muchas pymes en Perú venden por WhatsApp y anotan en Excel — el primer paso suele ser
            un flujo que no se te escape. También puede ir dentro de{" "}
            <Link href="/servicios/agentes-ia" className="text-terracota-dark underline-offset-2 hover:underline">
              Agentes IA
            </Link>{" "}
            o{" "}
            <Link
              href="/servicios/infraestructura-digital"
              className="text-terracota-dark underline-offset-2 hover:underline"
            >
              Infraestructura digital
            </Link>
            .
          </p>
        </Reveal>

        <Reveal delay={60}>
          <div className="card-soft mt-8 p-5 sm:p-6">
            <p className="text-sm font-medium text-ink">Este servicio es para ti si…</p>
            <ul className="mt-4 space-y-2 text-sm text-ink/65">
              <li>• Tu proceso empieza en un formulario y termina en un WhatsApp tuyo</li>
              <li>• Copias datos entre sistemas a mano</li>
              <li>• Un lead llega y nadie lo sigue automáticamente</li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {CASOS.map((caso) => (
              <div key={caso.titulo} className="card-compact bg-white p-5 sm:p-6">
                <caso.icon className="h-5 w-5 text-terracota" strokeWidth={1.5} />
                <p className="mt-3 font-medium text-ink">{caso.titulo}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">{caso.descripcion}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 px-1 text-sm text-ink/60">
            <span className="flex items-center gap-2">
              <MessageCircleMore className="h-4 w-4 shrink-0 text-terracota" strokeWidth={1.75} />
              WhatsApp como canal principal
            </span>
            <span className="flex items-center gap-2">
              <Layers className="h-4 w-4 shrink-0 text-terracota" strokeWidth={1.75} />
              Empiezas con un flujo, escalas después
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
