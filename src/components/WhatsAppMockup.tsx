type Mensaje = {
  de: "cliente" | "asistente";
  texto: string;
};

const MENSAJES_DEFAULT: Mensaje[] = [
  { de: "cliente", texto: "Hola! ¿Tienen turnos para este sábado?" },
  {
    de: "asistente",
    texto: "¡Hola! Sí, tenemos disponibilidad el sábado de 9am a 1pm. ¿Te reservo un horario?",
  },
  { de: "cliente", texto: "Sí, a las 10am porfa" },
  {
    de: "asistente",
    texto: "Listo ✅ Quedaste agendado para el sábado 10:00am. Te mando un recordatorio un día antes.",
  },
];

type WhatsAppMockupProps = {
  mensajes?: Mensaje[];
  titulo?: string;
  subtitulo?: string;
};

/** Mockup ilustrativo del Recepcionista IA respondiendo por WhatsApp — no es una captura real. */
export default function WhatsAppMockup({
  mensajes = MENSAJES_DEFAULT,
  titulo = "Recepcionista IA",
  subtitulo = "en línea",
}: WhatsAppMockupProps) {
  return (
    <div className="relative w-full max-w-sm">
      <span className="absolute -top-3 right-4 z-10 rounded-full bg-ink px-3 py-1 text-[0.65rem] font-medium text-sand shadow-sm">
        Ejemplo ilustrativo
      </span>
      <div className="overflow-hidden rounded-3xl border border-ink/8 bg-white shadow-[0_20px_50px_rgba(36,21,9,0.12)]">
        <div className="flex items-center gap-3 bg-[var(--color-whatsapp)] px-4 py-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.51 2 12.04 2Zm5.8 14.02c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.95-.31-1.63-.6-2.87-1.24-4.75-4.14-4.9-4.33-.14-.19-1.17-1.56-1.17-2.98s.73-2.11 1-2.4c.24-.27.53-.34.71-.34.18 0 .35 0 .5.01.16.01.37-.06.58.44.24.56.8 1.94.87 2.08.07.14.11.3.02.48-.09.19-.14.3-.27.46-.14.16-.29.36-.41.48-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.61-.07.16-.19.7-.81.89-1.09.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.21.53.33.07.12.07.68-.17 1.36Z" />
            </svg>
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-white">{titulo}</p>
            <p className="text-xs text-white/80">{subtitulo}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 bg-[#e5ddd0] px-4 py-5">
          {mensajes.map((m, i) => (
            <div
              key={i}
              className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-sm leading-snug shadow-sm ${
                m.de === "asistente"
                  ? "self-end rounded-tr-sm bg-[#dcf8c6] text-ink"
                  : "self-start rounded-tl-sm bg-white text-ink"
              }`}
            >
              {m.texto}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
