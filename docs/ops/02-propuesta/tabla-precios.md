# Tabla de Precios — afynova

> Referencia interna para armar propuestas. NO enviar al cliente directamente.  
> Los precios son orientativos — ajustar según complejidad del caso.

---

## 💰 Estructura de pricing

### Modelo principal: Proyecto cerrado + retainer opcional

```
[Pago único por implementación] + [Retainer mensual opcional por soporte/mejoras]
```

**Forma de pago del proyecto:**
- 50% al aprobar (para comenzar)
- 50% al entregar (cuando lo vea funcionando)
- Piloto de 14 días incluido en el precio

---

## 🌐 Desarrollo Web

| Tipo | Rango | Incluye | Timeline |
|------|-------|---------|----------|
| Landing page simple (1 página) | $400 – $800 USD | Diseño + desarrollo + copy + deploy + dominio | 5-7 días |
| Landing + 2-3 páginas internas | $800 – $1.500 USD | Multi-página + SEO básico + formulario | 7-10 días |
| Sitio completo (5+ páginas + blog) | $1.500 – $3.000 USD | Arquitectura completa + CMS + SEO + analytics | 10-20 días |

**Retainer web (opcional):** $100 – $300/mes
- Actualizaciones de contenido
- Mantenimiento técnico
- Reporte mensual de métricas
- 1-2 mejoras menores/mes

---

## 🤖 Agentes IA (WhatsApp)

| Tipo | Rango | Incluye | Timeline |
|------|-------|---------|----------|
| Agente básico (FAQ + derivación) | $500 – $1.000 USD | Responde preguntas frecuentes + deriva a humano | 3-5 días |
| Agente con agenda (FAQ + booking) | $1.000 – $1.800 USD | + Integración Calendar + confirmaciones | 5-7 días |
| Agente avanzado (multi-flujo) | $1.800 – $3.000 USD | + Seguimiento, recordatorios, múltiples servicios | 7-12 días |

**Retainer agente IA (opcional):** $150 – $400/mes
- Monitoreo de conversaciones
- Ajustes de prompts
- Nuevos flujos/respuestas
- Reporte mensual de métricas
- Costos de API incluidos hasta [X] conversaciones/mes

**Costos operativos del cliente (recurrentes):**
- API WhatsApp: ~$0.05/conversación (Meta cobra esto)
- API OpenAI: ~$5-20/mes según volumen
- Hosting n8n (si cloud): $20/mes — o $0 si self-hosted en infra del cliente

---

## ⚡ Automatización

| Tipo | Rango | Incluye | Timeline |
|------|-------|---------|----------|
| Automatización simple (1 flujo, 2-3 apps) | $300 – $700 USD | 1 workflow + testing + docs | 2-4 días |
| Automatización media (2-3 flujos, 4-5 apps) | $700 – $1.500 USD | Múltiples workflows conectados | 5-8 días |
| Automatización compleja (sistema completo) | $1.500 – $3.000 USD | Ecosistema de flujos + error handling + monitoreo | 8-15 días |

**Retainer automatización (opcional):** $100 – $300/mes
- Monitoreo de ejecuciones
- Fixes de errores
- 1-2 ajustes/ampliaciones menores por mes
- Reporte de ejecuciones

---

## 📊 Datos y Analítica

| Tipo | Rango | Incluye | Timeline |
|------|-------|---------|----------|
| Dashboard básico (1-2 fuentes, 5-8 KPIs) | $500 – $1.000 USD | Conexión de datos + tablero | 5-7 días |
| Dashboard completo (3+ fuentes, pipeline ETL) | $1.000 – $2.500 USD | ETL automatizado + dashboard interactivo | 7-12 días |

**Retainer datos (opcional):** $150 – $350/mes
- Mantenimiento del pipeline
- Nuevos KPIs/vistas
- Insights mensuales
- Alertas configuradas

---

## 🏗 Infraestructura Digital

| Tipo | Rango | Incluye | Timeline |
|------|-------|---------|----------|
| Conexión básica (2-3 sistemas) | $500 – $1.000 USD | Integrar sistemas existentes | 3-7 días |
| Arquitectura media (migración + conexiones) | $1.500 – $3.000 USD | Migrar + conectar + documentar | 10-15 días |
| Arquitectura completa (diseño desde cero) | $3.000 – $6.000 USD | Diseño + implementación + monitoreo | 15-30 días |

**Retainer infra (opcional):** $200 – $500/mes
- Monitoreo de uptime
- Actualizaciones de seguridad
- Soporte técnico
- Revisión trimestral de arquitectura

---

## 🎯 Paquetes combinados (descuento natural)

| Paquete | Servicios | Rango | Descuento vs. individual |
|---------|-----------|-------|--------------------------|
| "Presencia + captación" | Web + Agente IA | $800 – $2.500 USD | ~10-15% |
| "Operación automatizada" | Agente IA + Automatización | $700 – $2.500 USD | ~10-15% |
| "Todo conectado" | Web + Agente + Automatización + Dashboard | $2.500 – $6.000 USD | ~15-20% |

---

## 📏 Criterios para subir/bajar el precio

**Sube si:**
- Requiere integraciones con APIs complejas o sin documentación
- Tiene restricciones legales/compliance (datos médicos, financieros)
- Timeline apretado ("lo necesito para el lunes")
- Muchas fuentes de datos o sistemas legacy
- Requiere diseño custom de UX/UI (no template)

**Baja si:**
- Es un caso repetible (mismo nicho, mismo setup)
- El cliente trae todo listo (contenido, accesos, logo, claridad)
- Es un proyecto que puedo usar como caso de estudio público
- Es una referencia estratégica (cliente visible en su industria)

---

## ⚠️ Lo que NUNCA incluye el precio base

- Costos de terceros (dominio, hosting premium, APIs) — se le explican al cliente aparte
- Contenido que depende 100% del cliente (fotos profesionales, testimonios en video)
- Soporte ilimitado post-entrega (definido en contrato: 30 días bugs, después retainer)
- Cambios de alcance post-aprobación (se presupuestan aparte)

---

## 💡 Cómo presentar el precio al cliente

1. **Nunca dar precio sin diagnóstico** — siempre después de la llamada de 30 min
2. **Siempre precio cerrado** — no cobrar por hora (genera desconfianza en pymes)
3. **Incluir el "qué incluye"** — que se vea el valor, no solo el número
4. **Anclar con el costo de NO hacerlo** — "si pierdes 5 clientes al mes por no responder a tiempo, eso son $X en ingresos no captados"
5. **El piloto de 14 días reduce la objeción** — "si no funciona, no pagas la segunda mitad"
