# Cuestionario de Discovery — Infraestructura Digital

> Complemento al cuestionario general. Usar cuando el diagnóstico apunta a conectar/unificar sistemas.  
> Este suele ser el servicio para clientes que ya trabajan contigo y quieren integrar todo.

---

## Inventario actual

1. **¿Qué herramientas/sistemas usas hoy en tu negocio?**
   (listar todas, incluso las que parecen básicas)
   - [ ] Web (¿en qué plataforma?)
   - [ ] WhatsApp Business
   - [ ] Email (¿Gmail, Outlook, otro?)
   - [ ] Google Calendar / agenda
   - [ ] Google Sheets / Excel
   - [ ] CRM (¿cuál?)
   - [ ] Software del rubro (¿cuál? — ej: gestión de citas, POS, facturación)
   - [ ] Redes sociales (¿cuáles?)
   - [ ] Plataforma de pagos (¿Stripe, Mercado Pago, transferencia manual?)
   - [ ] Almacenamiento (Google Drive, Dropbox, nada)
   - [ ] Otro: ___

2. **¿Cuáles de estas herramientas están conectadas entre sí?** (ej: "el formulario web me llega al email")
3. **¿Cuáles NO están conectadas pero deberían?** (ej: "cuando agendo una cita, debería llegar al Calendar automáticamente")
4. **¿Hay herramientas que pagas pero no usas?**
5. **¿Quién administra estos sistemas hoy?** (tú, un familiar, un proveedor, nadie)

---

## Problemas actuales

6. **¿Dónde sientes que los sistemas "no se hablan"?**
7. **¿Hay datos duplicados o inconsistentes entre sistemas?**
8. **¿Has perdido información por no tener backup?**
9. **¿Tu infraestructura aguantaría si mañana tuvieras 3x más clientes?**
10. **¿Hay algo que depende de UNA persona para funcionar?** (punto único de fallo)
11. **¿Cuánto tiempo pierdes a la semana por problemas técnicos?** (estimado)

---

## Objetivos de la infraestructura

12. **¿Qué quieres lograr con esto?**
    - [ ] Que todo esté conectado (no copiar datos manualmente)
    - [ ] Que sea más seguro (backups, accesos controlados)
    - [ ] Que funcione sin mí (si estoy de vacaciones, sigue operando)
    - [ ] Que pueda crecer sin romper todo
    - [ ] Reducir costos de herramientas
    - [ ] Tener un solo lugar donde ver todo
    - [ ] Otro: ___

13. **¿Hay algún sistema que NO quieres cambiar?** (ej: "el software de citas me gusta, no quiero migrarlo")
14. **¿Tienes dominio propio?** → ¿Quién lo administra? ¿Dónde está registrado?
15. **¿Tienes correo profesional (nombre@tudominio.com)?**

---

## Seguridad y accesos

16. **¿Usas contraseñas diferentes para cada servicio?**
17. **¿Tienes autenticación en 2 pasos (2FA) activada?**
18. **¿Alguien más tiene acceso a tus sistemas?** → ¿Con qué permisos?
19. **¿Hay datos sensibles que requieran tratamiento especial?** (datos médicos, financieros, menores de edad)
20. **¿Cumples con alguna regulación?** (protección de datos del país, GDPR si tienes clientes en Europa, etc.)

---

## Escala y futuro

21. **¿Planeas agregar empleados/colaboradores pronto?** (necesitarán acceso a sistemas)
22. **¿Planeas vender online o agregar e-commerce?**
23. **¿Quieres poder operar desde cualquier lugar?** (o solo desde tu local/oficina)
24. **¿Tienes planes de abrir más sedes/ubicaciones?**

---

## Entregables que Daniel produce para este servicio

| Entregable | Formato | Cuándo |
|---|---|---|
| Inventario de sistemas actual (as-is) | Diagrama + tabla | En la propuesta |
| Arquitectura propuesta (to-be) | Diagrama técnico | En la propuesta |
| Plan de migración/conexión por fases | Roadmap con dependencias | Pre-ejecución |
| Cada sistema configurado y conectado | Live | Durante ejecución |
| Runbook operativo | Markdown técnico | Entrega |
| Guía de accesos y credenciales | Doc seguro (cifrado) | Entrega |
| Video walkthrough de la arquitectura | Loom (10-15 min) | Entrega |
| Monitoreo de uptime configurado | UptimeRobot/similar | Entrega |
| Revisión trimestral de infraestructura | Reunión + doc | Cada 3 meses (si retainer) |

---

## Herramientas que usa Daniel para entregar

| Herramienta | Para qué |
|---|---|
| **Vercel** | Hosting frontend (web) |
| **Railway / Render** | Hosting backend / servicios |
| **Supabase** | Base de datos + Auth + Storage |
| **Cloudflare** | DNS + CDN + seguridad + SSL |
| **GitHub** | Control de versiones + CI/CD |
| **n8n** | Conectar sistemas entre sí |
| **UptimeRobot** | Monitoreo 24/7 |
| **1Password / Bitwarden** | Gestión segura de credenciales |
| **Excalidraw / Whimsical** | Diagramas de arquitectura |
