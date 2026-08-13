# Web y conversión

> Última actualización: 12 de julio de 2026

## Home

La home debe vender la oferta de entrada: una web que convierte visitas en clientes y conecta los leads con WhatsApp.

Elementos requeridos:

- Promesa por resultado, no por herramienta.
- CTA principal a WhatsApp.
- CTA secundario para agendar diagnóstico. Usa Cal.com cuando su URL esté configurada; mientras tanto, redirige a WhatsApp con un mensaje precargado para solicitar la agenda.
- Explicación visual del flujo: `visita → formulario → aviso por WhatsApp`.
- Rango general de inversión, sin tabla rígida de paquetes.
- Prueba de confianza: presentación de Daniel, garantía y ejemplos de nicho.

## Demo

La demo debe probar la oferta específica que se está vendiendo:

- **Home:** no incluir una demo de chatbot. Puede mostrar una demostración visual o video corto del flujo de captación.
- **Landing de Clínicas:** sí incluir una demo conversacional de un asistente de WhatsApp, con información ficticia y sin simular que opera para un cliente real.

## Agenda

Cal.com permite que un prospecto reserve un diagnóstico sin coordinar mensajes. Debe incluir preguntas breves de calificación:

- Nombre del negocio.
- Rubro.
- Qué necesita resolver.
- Enlace a su web actual, si existe.

La URL se gestiona en `src/lib/contact.ts` mediante `CAL_COM_URL`. Mientras su valor sea `null`, la web debe usar WhatsApp como alternativa funcional; nunca debe publicar un enlace de agenda inexistente.

## Medición antes de anuncios

Medir al menos:

- `click_whatsapp`
- `booking`
- `lead`
- `demo_iniciada` (solo en las landings que tengan demo)

No lanzar anuncios pagados hasta que los eventos estén comprobados y los canales de contacto funcionen.
