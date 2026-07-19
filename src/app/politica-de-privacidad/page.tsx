import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Cómo ichan recopila, usa y protege tus datos personales.",
};

export default function PoliticaDePrivacidadPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-28 pt-20 md:pt-28">
      <Reveal>
        <h1 className="text-3xl font-medium text-ink md:text-4xl">
          Política de Privacidad
        </h1>
        <p className="mt-3 text-sm text-ink/50">
          Última actualización: julio de 2026.
        </p>

        <div className="mt-10 space-y-8 text-ink/75">
          <div>
            <h2 className="text-lg font-medium text-ink">1. Quién trata tus datos</h2>
            <p className="mt-2 text-sm leading-relaxed">
              ichan es un servicio unipersonal operado por Daniel — atención
              100% remota desde Perú. Como responsable del tratamiento, cumplo
              con la Ley N° 29733 de Protección de Datos Personales de Perú.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-ink">2. Qué datos recopilo</h2>
            <ul className="mt-2 space-y-1 text-sm leading-relaxed">
              <li>• Tu número de WhatsApp y el contenido de la conversación, cuando nos escribes.</li>
              <li>• Datos que nos compartes voluntariamente en un diagnóstico o consulta (nombre, negocio, correo).</li>
              <li>• Datos de navegación anónimos (páginas visitadas, dispositivo) mediante herramientas de analítica, cuando estén activas.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-medium text-ink">3. Para qué los uso</h2>
            <ul className="mt-2 space-y-1 text-sm leading-relaxed">
              <li>• Responder tus consultas y coordinar el servicio que solicitas.</li>
              <li>• Configurar y operar el asistente de IA que contrates para tu negocio.</li>
              <li>• Medir y mejorar el sitio (qué páginas funcionan, de dónde llega el tráfico).</li>
            </ul>
            <p className="mt-2 text-sm leading-relaxed">
              Tus datos <strong className="font-medium text-ink">no se usan para entrenar modelos de IA</strong> de
              terceros ni se venden a otras empresas.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-ink">4. Con quién los comparto</h2>
            <p className="mt-2 text-sm leading-relaxed">
              Solo con los proveedores necesarios para operar el servicio
              (por ejemplo, la API oficial de WhatsApp, el proveedor de
              hosting, y el proveedor del modelo de IA usado en tu asistente).
              Ninguno de ellos está autorizado a usar tus datos con fines
              propios.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-ink">5. Tus derechos</h2>
            <p className="mt-2 text-sm leading-relaxed">
              Puedes pedirme acceder, rectificar o eliminar tus datos en
              cualquier momento escribiendo por WhatsApp. Atiendo estas
              solicitudes en un plazo razonable.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-ink">6. Contacto</h2>
            <p className="mt-2 text-sm leading-relaxed">
              Para cualquier consulta sobre esta política, escríbeme
              directamente por WhatsApp desde el botón &quot;Escríbeme&quot;
              en cualquier página del sitio.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
