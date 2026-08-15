import { PhoneMissed, MessageCircleMore, ArrowRight, UserCheck } from "lucide-react";
import Reveal from "@/components/Reveal";

type LocalesMissedCallBlockProps = {
  /** `hero` = flujo dominante en el hero; `section` = bloque standalone. */
  variant?: "hero" | "section";
};

const STEPS = [
  {
    id: "llamada",
    icon: PhoneMissed,
    t: "1. Llamada perdida",
    d: "Estás en ruta, en un techo o con las manos ocupadas.",
    tint: false,
  },
  {
    id: "whatsapp",
    icon: MessageCircleMore,
    t: "2. WhatsApp automático",
    d: "El cliente recibe un mensaje en segundos — antes de llamar a otro.",
    tint: true,
  },
  {
    id: "respuesta",
    icon: MessageCircleMore,
    t: "3. Respuesta al cliente",
    d: "Horarios, tarifas y zona — sin que estés disponible.",
    tint: false,
  },
  {
    id: "cita",
    icon: UserCheck,
    t: "4. Cita agendada",
    d: "Filtra urgencia, captura distrito y confirma la visita.",
    tint: false,
  },
];

function MissedCallFlow({ isHero }: { isHero: boolean }) {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] sm:items-stretch">
      {STEPS.map((step, i) => (
        <Reveal key={step.id} delay={i * 80} className="contents">
          <div
            className={`h-full text-center sm:text-left ${
              step.tint ? "card-soft-tint" : "card-soft"
            } ${isHero ? "py-5" : ""}`}
          >
            <step.icon
              className={`mx-auto h-6 w-6 text-terracota sm:mx-0 ${isHero ? "h-7 w-7" : ""}`}
              strokeWidth={1.5}
            />
            <p className={`mt-3 font-medium text-ink ${isHero ? "text-base" : ""}`}>
              {step.t}
            </p>
            <p className="mt-2 text-sm text-ink/60">{step.d}</p>
          </div>
          {i < STEPS.length - 1 && (
            <ArrowRight
              className="mx-auto hidden h-5 w-5 self-center text-ink/30 sm:block"
              strokeWidth={1.5}
              aria-hidden
            />
          )}
        </Reveal>
      ))}
    </div>
  );
}

/** Bloque distintivo negocios locales — llamada perdida → WhatsApp automático. */
export default function LocalesMissedCallBlock({
  variant = "section",
}: LocalesMissedCallBlockProps) {
  const isHero = variant === "hero";

  if (isHero) {
    return <MissedCallFlow isHero={true} />;
  }

  return (
    <section className="section-band section-py">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h2 className="text-h2 text-ink">Llamada perdida → WhatsApp automático</h2>
          <p className="mt-2 max-w-2xl text-ink/60">
            El diferenciador para técnicos y servicios del hogar: no dependes de estar
            disponible para contestar.
          </p>
        </Reveal>
        <MissedCallFlow isHero={false} />
      </div>
    </section>
  );
}
