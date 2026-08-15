import { CalendarCheck, Bell } from "lucide-react";
import Reveal from "@/components/Reveal";
import WhatsAppMockup from "@/components/WhatsAppMockup";
import { MOCKUP_CLINICA_RECORDATORIO } from "@/lib/nichos/mockups";

/** Firma clínicas — recordatorio con mockup dark (Fase 8 #49). */
export default function ClinicasAusenciasBlock() {
  return (
    <section className="section-white section-horizon">
      <div className="mx-auto max-w-4xl px-6 section-py">
        <Reveal>
          <span className="chip">Cómo confirma el turno</span>
          <h2 className="text-h2 mt-4 text-ink">El recordatorio que confirma la cita</h2>
          <p className="mt-3 max-w-2xl text-secondary">
            Un día antes, el paciente responde en un mensaje — sin que recepción tenga que
            llamar.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 space-y-5">
            <div className="card-compact card-hover-mars mx-auto max-w-sm p-4 sm:p-5">
              <WhatsAppMockup
                compact
                titulo={MOCKUP_CLINICA_RECORDATORIO.titulo}
                subtitulo={MOCKUP_CLINICA_RECORDATORIO.subtitulo}
                mensajes={MOCKUP_CLINICA_RECORDATORIO.mensajes}
              />
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 px-1 text-sm text-secondary">
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
