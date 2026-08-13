# Decisiones vigentes

> Última actualización: 8 de agosto de 2026

## Propósito

afynova ayuda a negocios peruanos a convertir visitas y consultas en clientes mediante una web clara, captura de leads por WhatsApp y automatización útil.

## Enfoque de lanzamiento

La primera oferta comercial es una **web de captación**: una web que comunica la propuesta de valor, recibe datos del interesado y avisa al negocio por WhatsApp.

La IA y la automatización son diferenciadores de la oferta, no la única promesa de la página principal.

## Público inicial

- Pymes peruanas que dependen de WhatsApp para recibir consultas.
- Primeros nichos: clínicas y salud; servicios locales.
- Inmobiliarias quedan como siguiente vertical, aún no prioritaria para campañas.

## Embudo oficial

```text
Web o anuncio → landing → WhatsApp o agenda → diagnóstico → propuesta cerrada → entrega → retainer
```

- WhatsApp es el CTA principal.
- La agenda es el CTA secundario para prospectos listos para reservar un diagnóstico. Mientras no exista una URL de Cal.com configurada, este CTA se redirige a WhatsApp con un mensaje de solicitud de agenda.
- El diagnóstico tiene una duración objetivo de 30 minutos.

## Decisiones de navegación

- “Conoce a Daniel” abre un **panel lateral derecho** (foto, bio, CTA WhatsApp). La Home permanece visible detrás con overlay ligero. No hay sección `#fundador` en la Home.
- Nombres de Soluciones y Servicios centralizados en `src/lib/navigation.ts` — **Footer es la referencia de marca**.

## Decisiones pendientes

- Definir la URL real de Cal.com y reemplazar `CAL_COM_URL = null` en `src/lib/contact.ts`.
- Definir precios mínimos de las ofertas productizadas de web y automatización.
- Confirmar el nicho y la oferta exactos antes de lanzar publicidad pagada.
