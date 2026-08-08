/** Mensajes ilustrativos por nicho — fuente única para landings de Soluciones. */

export type MockupMensaje = {
  de: "cliente" | "asistente";
  texto: string;
};

export type NichoMockup = {
  titulo: string;
  subtitulo: string;
  mensajes: MockupMensaje[];
};

export const MOCKUP_CLINICA: NichoMockup = {
  titulo: "Recepción Clínica",
  subtitulo: "en línea",
  mensajes: [
    { de: "cliente", texto: "Hola, ¿tienen cita para limpieza dental este sábado?" },
    {
      de: "asistente",
      texto: "¡Hola! Sí, tenemos horarios el sábado de 9am a 1pm. ¿Te reservo uno?",
    },
    { de: "cliente", texto: "Sí, a las 10am" },
    {
      de: "asistente",
      texto: "Listo ✅ Cita agendada para el sábado 10:00am. Te mando recordatorio un día antes.",
    },
  ],
};

export const MOCKUP_LEGAL: NichoMockup = {
  titulo: "Estudio laboral",
  subtitulo: "en línea",
  mensajes: [
    { de: "cliente", texto: "Hola, me despidieron hoy. ¿Puedo consultar con un abogado?" },
    {
      de: "asistente",
      texto: "Hola. Lamento la situación. Puedo ayudarte a agendar una primera consulta. ¿Qué día te conviene esta semana?",
    },
    { de: "cliente", texto: "¿Cuánto cuesta la consulta?" },
    {
      de: "asistente",
      texto: "Te confirmo el costo y los documentos en la primera consulta. ¿Te agendo para el martes 3pm?",
    },
  ],
};

export const MOCKUP_AGENTES: NichoMockup = {
  titulo: "Recepcionista IA",
  subtitulo: "en línea",
  mensajes: [
    { de: "cliente", texto: "Hola, ¿a qué hora abren y tienen estacionamiento?" },
    {
      de: "asistente",
      texto: "¡Hola! Abrimos de 9am a 7pm. Sí, tenemos estacionamiento en la sede.",
    },
    { de: "cliente", texto: "Perfecto, gracias" },
    {
      de: "asistente",
      texto: "Con gusto. Si necesitas agendar, dime el día y te ayudo.",
    },
  ],
};

export const MOCKUP_CAPTACION_WEB: NichoMockup = {
  titulo: "Tu negocio",
  subtitulo: "aviso de captación",
  mensajes: [
    {
      de: "asistente",
      texto:
        "📩 Nuevo contacto desde tu web\n\nMaría · 987 654 321\n\"Quiero información sobre sus servicios\"",
    },
  ],
};

export const MOCKUP_AUTOMATIZACION: NichoMockup = {
  titulo: "Tu negocio",
  subtitulo: "flujo automatizado",
  mensajes: [
    {
      de: "asistente",
      texto:
        "⏰ Lead sin respuesta · Carlos pidió cotización hace 48h\n\n¿Envío seguimiento automático por WhatsApp?",
    },
  ],
};

export const MOCKUP_LOCALES: NichoMockup = {
  titulo: "Gasfitería Express",
  subtitulo: "en línea",
  mensajes: [
    { de: "cliente", texto: "Hola, te llamé pero no contestaste. Tengo una fuga en el baño." },
    {
      de: "asistente",
      texto: "Hola. Gracias por escribir. ¿En qué distrito estás? Te confirmo si podemos ir hoy.",
    },
    { de: "cliente", texto: "Surco, es urgente" },
    {
      de: "asistente",
      texto: "Anotado ✅ Te aviso al técnico y te confirmo horario por aquí.",
    },
  ],
};
