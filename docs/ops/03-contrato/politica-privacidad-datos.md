# Política de Privacidad y Manejo de Datos del Cliente — afynova

> Documento interno + anexo al contrato.  
> Define cómo Daniel maneja credenciales, datos y accesos de los clientes.

---

# POLÍTICA DE PRIVACIDAD Y MANEJO DE DATOS

**Última actualización:** [fecha]  
**Responsable:** Daniel Fernández González · afynova

---

## 1. Propósito

Esta política define cómo afynova recopila, almacena, usa y elimina datos y credenciales de sus clientes durante y después de la prestación de servicios.

---

## 2. Datos que se recopilan

### 2.1 Datos del cliente (persona/negocio)
- Nombre, email, WhatsApp (para comunicación del proyecto)
- Nombre del negocio, rubro, dirección (para la solución)
- Logo, fotos, textos (para implementar la web/servicio)

### 2.2 Credenciales y accesos
- Contraseñas de plataformas (Google, Meta, hosting, etc.)
- API keys (OpenAI, WhatsApp Business API, etc.)
- Accesos a paneles de administración

### 2.3 Datos de los clientes del cliente
- Datos que fluyen a través de las automatizaciones/agentes (nombres, teléfonos, consultas)
- Métricas de uso (conversaciones, visitas, conversiones)

---

## 3. Cómo se almacenan los datos

| Tipo de dato | Dónde se guarda | Cifrado | Acceso |
|---|---|---|---|
| Credenciales | Gestor de contraseñas (1Password/Bitwarden) | Sí (AES-256) | Solo Daniel |
| Archivos del proyecto | Repositorio privado (GitHub) | En tránsito (HTTPS) | Solo Daniel |
| Datos de comunicación | WhatsApp / Email | Cifrado del proveedor | Solo Daniel |
| Datos del agente IA | Servidor del workflow (n8n) | Depende del hosting | Solo Daniel + cliente |
| Backups | Almacenamiento cifrado | Sí | Solo Daniel |

**Reglas:**
- ❌ Nunca se guardan credenciales en texto plano (archivos .txt, emails, notas)
- ❌ Nunca se comparten credenciales por canales no seguros
- ✅ Se usa siempre un gestor de contraseñas con 2FA
- ✅ Los accesos se otorgan con el mínimo privilegio necesario

---

## 4. Uso de los datos

Los datos del cliente se usan **exclusivamente** para:
- Implementar la solución contratada
- Monitorear y mantener el servicio (durante piloto/retainer)
- Generar reportes de métricas acordados

**Nunca se usan para:**
- Compartir con terceros sin autorización
- Marketing/publicidad sin consentimiento
- Entrenar modelos de IA propios (los datos pasan por APIs de terceros como OpenAI según su política de datos)

---

## 5. APIs de terceros y procesamiento de datos

Cuando el servicio involucra APIs de IA (OpenAI, Anthropic, etc.):

- Los datos del cliente pasan por estas APIs para procesamiento en tiempo real
- **OpenAI (API):** según su [política de datos API](https://openai.com/policies/api-data-usage-policies), los datos enviados vía API NO se usan para entrenar sus modelos
- No se almacenan conversaciones en servidores de IA más allá del procesamiento inmediato
- Si el cliente tiene restricciones sobre procesamiento en cloud, se buscan alternativas (modelos locales, reglas sin IA)

---

## 6. Retención y eliminación

| Momento | Qué pasa con los datos |
|---------|----------------------|
| Durante el proyecto | Se mantienen todos los accesos necesarios |
| Al entregar (fin de piloto) | Se transfieren credenciales al cliente si son suyas |
| Sin retainer (30 días post-entrega) | Se eliminan credenciales del gestor de contraseñas |
| Con retainer activo | Se mantienen mientras dure el acuerdo |
| Al terminar relación | Se eliminan TODOS los accesos en ≤7 días |

**Proceso de eliminación:**
1. Revocar accesos en todas las plataformas
2. Eliminar entradas del gestor de contraseñas
3. Eliminar datos locales del proyecto (si no son código entregado)
4. Confirmar al cliente por escrito que se eliminó todo

---

## 7. Seguridad del Prestador

Daniel mantiene las siguientes prácticas de seguridad:
- [x] Gestor de contraseñas con 2FA en todos los servicios
- [x] Disco cifrado en equipo de trabajo
- [x] Conexión segura (no WiFi públicas sin VPN)
- [x] Actualizaciones de seguridad regulares
- [x] Repositorios privados para código de clientes

---

## 8. Derechos del cliente

El cliente tiene derecho a:
- **Saber** qué datos suyos tiene Daniel en cualquier momento (preguntar por WhatsApp/email)
- **Pedir eliminación** de sus datos en cualquier momento (se ejecuta en ≤7 días)
- **Revocar accesos** sin previo aviso (puede afectar soporte activo)
- **Solicitar exportación** de todos sus datos en formato legible

---

## 9. Incidentes de seguridad

Si ocurre una brecha de seguridad que afecte datos del cliente:
1. Daniel notifica al cliente en ≤24 horas
2. Se detalla qué datos se vieron afectados
3. Se toman medidas correctivas inmediatas (rotación de credenciales, etc.)
4. Se documenta el incidente y las acciones tomadas

---

## 10. Datos de clientes del cliente (datos end-user)

Cuando la solución procesa datos de personas (pacientes, clientes, leads):
- Daniel NO es responsable del tratamiento de datos personales del cliente
- El **cliente es el responsable** ante sus usuarios según la ley aplicable
- Daniel actúa como **encargado del tratamiento** según instrucciones del cliente
- Si el rubro requiere compliance específico (salud, legal), se define en el contrato principal

---

## Aceptación

Al firmar el Contrato de Servicios que referencia esta política, el cliente acepta las condiciones aquí descritas.

---

_Esta política puede actualizarse. La versión vigente siempre está disponible bajo solicitud._
