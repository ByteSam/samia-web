import { CalendarX, CalendarDays, ArrowRight } from "lucide-react";

type Slot = { id: string; time: string | null };

const SLOTS_SIN: Slot[] = [
  { id: "h-sin-1", time: "10:00" },
  { id: "h-sin-2", time: null },
  { id: "h-sin-3", time: "14:30" },
  { id: "h-sin-4", time: null },
];

const SLOTS_CON: Slot[] = [
  { id: "h-con-1", time: "10:00" },
  { id: "h-con-2", time: "11:30" },
  { id: "h-con-3", time: "14:30" },
  { id: "h-con-4", time: "15:00" },
];

function AgendaMiniHero({
  titulo,
  slots,
  vacio,
  icon: Icon,
}: {
  titulo: string;
  slots: Slot[];
  vacio: boolean;
  icon: typeof CalendarX;
}) {
  const filled = slots.filter((s) => s.time !== null).length;
  const empty = slots.length - filled;

  return (
    <div
      className={`h-full rounded-[20px] border p-5 sm:p-6 ${
        vacio
          ? "border-dashed border-ink/12 bg-ink/[0.02]"
          : "border-terracota/15 bg-terracota/[0.06] shadow-[0_1px_2px_rgba(36,21,9,0.04),0_6px_18px_rgba(36,21,9,0.03)]"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5 shrink-0 text-terracota" strokeWidth={1.5} />
          <p className="text-base font-medium text-ink">{titulo}</p>
        </div>
        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${
            vacio ? "bg-ink/8 text-ink/55" : "bg-terracota/12 text-terracota-dark"
          }`}
        >
          {vacio ? `${empty} huecos` : `${filled} ok`}
        </span>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2 sm:gap-2.5">
        {slots.map((slot) => (
          <div
            key={slot.id}
            className={`rounded-lg px-1.5 py-2.5 text-center text-xs font-medium sm:py-3 sm:text-sm ${
              slot.time === null
                ? "border border-dashed border-ink/12 text-ink/30"
                : "bg-white text-ink shadow-sm"
            }`}
          >
            {slot.time ?? "—"}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Mini comparación agenda para el hero — sin vs con recordatorios. */
export default function ClinicasHeroAgendaCompare() {
  return (
    <div className="mt-10 pb-1 sm:mt-12">
      <p className="section-eyebrow text-center text-[0.72rem] lg:text-left">
        Sin vs con recordatorios
      </p>
      <div className="mt-4 grid items-stretch gap-4 sm:grid-cols-[1fr_auto_1fr] sm:gap-5">
        <AgendaMiniHero
          titulo="Sin recordatorios"
          slots={SLOTS_SIN}
          vacio={true}
          icon={CalendarX}
        />
        <div className="flex items-center justify-center py-2 sm:py-0">
          <ArrowRight
            className="h-5 w-5 rotate-90 text-ink/35 sm:rotate-0"
            strokeWidth={1.5}
            aria-hidden
          />
        </div>
        <AgendaMiniHero
          titulo="Con recordatorios"
          slots={SLOTS_CON}
          vacio={false}
          icon={CalendarDays}
        />
      </div>
    </div>
  );
}
