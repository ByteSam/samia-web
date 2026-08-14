import Link from "next/link";
import Logo from "./Logo";
import WhatsAppButton from "./WhatsAppButton";
import { whatsappLink, CONTACT_EMAIL, WHATSAPP_DIAGNOSTICO_MESSAGE } from "@/lib/contact";
import { SOLUCIONES, SERVICIOS } from "@/lib/navigation";

const CONTACTO = [
  {
    label: "WhatsApp",
    href: whatsappLink("Hola, vi tu web y quiero conversar sobre mi negocio"),
    external: true,
  },
  { label: "Email", href: `mailto:${CONTACT_EMAIL}`, external: true },
] as const;

const LEGAL = [{ label: "Privacidad", href: "/politica-de-privacidad" }] as const;

export default function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-sand shadow-footer">
      <div className="container-shell py-12 text-sm">
        <div className="card-soft-tint mb-10 flex flex-col items-start justify-between gap-6 p-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-medium text-ink">¿Listo para empezar?</p>
            <p className="mt-1 text-sm text-ink/55">
              Diagnóstico gratis de 30 min · Piloto de 14 días sin riesgo
            </p>
          </div>
          <WhatsAppButton
            message={WHATSAPP_DIAGNOSTICO_MESSAGE}
            source="footer"
            variant="terracota"
          >
            Diagnóstico gratis
          </WhatsAppButton>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Logo height={32} />
            <p className="mt-4 max-w-xs text-ink/50">
              Automatización y agentes de IA por WhatsApp para pymes peruanas.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">
              Soluciones
            </p>
            <ul className="mt-3 space-y-2">
              {SOLUCIONES.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink/70 transition-colors hover:text-terracota"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">
              Servicios
            </p>
            <ul className="mt-3 space-y-2">
              {SERVICIOS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink/70 transition-colors hover:text-terracota"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">
              Contacto
            </p>
            <ul className="mt-3 space-y-2">
              {CONTACTO.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink/70 transition-colors hover:text-terracota"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">
              Legal
            </p>
            <ul className="mt-3 space-y-2">
              {LEGAL.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink/70 transition-colors hover:text-terracota"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-ink/8 pt-6 text-ink/50">
          © {new Date().getFullYear()} afynova · Atiendo negocios en Perú
        </p>
      </div>
    </footer>
  );
}
