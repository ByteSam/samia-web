# Configurar Cal.com

> Cuando tengas tu cuenta Cal.com, sigue estos pasos para activar el CTA "Agendar diagnóstico" en la Home.

## 1. Crear evento en Cal.com

- Tipo: **Diagnóstico gratuito (30 min)**
- Preguntas de calificación (ver [`docs/02-web-y-conversion.md`](./02-web-y-conversion.md)):
  - Nombre del negocio
  - Rubro
  - Qué necesita resolver
  - Enlace a web actual (opcional)

## 2. Actualizar código

En [`src/lib/contact.ts`](../src/lib/contact.ts):

```ts
export const CAL_COM_URL: string | null = "https://cal.com/daniel-fernandez-gutierrez-44sphu";
```

## 3. Verificar

- Home muestra dos CTAs: WhatsApp + "Agendar diagnóstico" (enlace Cal.com)
- Evento `booking` con `channel: calcom` en Vercel Analytics
- Si `CAL_COM_URL` sigue en `null`, el botón dice "Agendar por WhatsApp" y usa fallback automático

## 4. No publicar link roto

Nunca poner una URL de Cal.com que no exista. El fallback a WhatsApp está implementado en [`BookingButton.tsx`](../src/components/BookingButton.tsx).
