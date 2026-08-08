import { CalendarCheck, Bell } from "lucide-react";
import Reveal from "@/components/Reveal";

const REMINDER_CHAT = [
  {
    id: "rem-1",
    side: "left" as const,
    texto:
      "Hola María, mañana tienes cita de limpieza dental a las 10:00. ¿Confirmas tu asistencia?",
  },
  { id: "rem-2", side: "right" as const, texto: "Sí, confirmo" },
  {
    id: "rem-3",
    side: "left" as const,
    texto: "Perfecto. Te esperamos mañana 10:00am.",
  },
];

/** Firma clínicas — recordatorio (sin repetir comparación agenda del hero). */
export default function ClinicasAusenciasBlock() {
  return (
    <section className="py-14 pb-20 md:py-20 md:pb-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="section-eyebrow">Cómo confirma el turno</p>
          <h2 className="text-h2 mt-2 text-ink">El recordatorio que confirma la cita</h2>
          <p className="mt-4 max-w-2xl text-ink/60">
            Un día antes, el paciente responde en un mensaje — sin que recepción tenga que
            llamar.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 space-y-5">
            <div
              className="card-compact border-terracota/10 bg-gradient-to-br from-white to-terracota/[0.04] p-5 sm:p-6"
            >
              <div className="rounded-2xl bg-[#e5ddd0] p-4 sm:p-5">
                <div className="flex flex-col gap-2.5">
                  {REMINDER_CHAT.map((msg) => (
                    <div
                      key={msg.id}
                      className={`w-fit max-w-[92%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed shadow-sm ${
                        msg.side === "right"
                          ? "self-end bg-[#dcf8c6] text-ink/85"
                          : "self-start bg-white text-ink/80"
                      }`}
                    >
                      {msg.texto}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 px-1 text-sm text-ink/60">
              <span className="flex items-center gap-2">
                <CalendarCheck className="h-4 w-4 shrink-0 text-terracota" strokeWidth={1.75} />
                Recordatorio 24h antes
              </span>
              <span className="flex items-center gap-2">
                <Bell className="h-4 w-4 shrink-0 text-terracota" strokeWidth={1.75} />
                Confirmación en un mensaje
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
