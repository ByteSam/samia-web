import Link from "next/link";
import { MessageSquareText, CalendarClock, Layers, Zap, Shield, TrendingUp } from "lucide-react";
import Reveal from "@/components/Reveal";

const PASOS = [
  {
    icon: MessageSquareText,
    titulo: "Recepcionista IA",
    descripcion: "Responde lo repetitivo en tu WhatsApp — horarios, precios, ubicación.",
    etiqueta: "Punto de partida",
  },
  {
    icon: CalendarClock,
    titulo: "Reservas y recordatorios",
    descripcion: "Agenda citas y manda avisos automáticos cuando ya filtras consultas.",
    etiqueta: "Siguiente paso",
  },
  {
    icon: Layers,
    titulo: "Módulos a medida",
    descripcion: "RAG, soporte web, missed-call, captación de leads o suite multicanal.",
    etiqueta: "Escala",
  },
];

/** Firma agentes IA — por dónde empezar (sin duplicar inbox del hero). */
export default function AgentesIACatalogBridge() {
  return (
    <section className="py-14 pb-20 md:py-20 md:pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="section-eyebrow">Por dónde empezar</p>
          <h2 className="text-h2 mt-2 text-ink">Empiezas simple, escalas cuando hace falta</h2>
          <p className="mt-4 max-w-2xl text-ink/60">
            La mayoría arranca con un recepcionista y suma módulos después. Para flujos sin IA
            conversacional — avisos, CRM, integraciones — revisa{" "}
            <Link
              href="/servicios/automatizacion"
              className="text-terracota-dark underline-offset-2 hover:underline"
            >
              Automatización
            </Link>
            . Abajo está el catálogo de agentes con rangos en soles. ¿Tienes una clínica o negocio de
            servicios locales? Hay una solución específica para{" "}
            <Link href="/clinicas" className="text-terracota-dark underline-offset-2 hover:underline">
              clínicas
            </Link>{" "}
            y para{" "}
            <Link href="/servicios-locales" className="text-terracota-dark underline-offset-2 hover:underline">
              negocios locales
            </Link>
            .
          </p>
        </Reveal>

        <Reveal delay={60}>
          <div className="card-soft mt-8 p-5 sm:p-6">
            <p className="text-sm font-medium text-ink">Este servicio es para ti si…</p>
            <ul className="mt-4 space-y-2 text-sm text-ink/65">
              <li>• Recibes consultas por WhatsApp pero no puedes responder al instante</li>
              <li>• Respondes siempre lo mismo — horarios, precios, disponibilidad</li>
              <li>• Quieres filtrar urgencias de curiosidades sin leer todo el chat</li>
            </ul>
          </div>
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
              <Zap className="h-4 w-4 shrink-0 text-terracota" strokeWidth={1.75} />
              Respuesta en segundos
            </span>
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 shrink-0 text-terracota" strokeWidth={1.75} />
              API oficial de WhatsApp
            </span>
            <span className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 shrink-0 text-terracota" strokeWidth={1.75} />
              Empiezas simple, escalas después
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
