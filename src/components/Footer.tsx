import Link from "next/link";
import Logo from "./Logo";
import { whatsappLink, CONTACT_EMAIL } from "@/lib/contact";

type FooterLink = { label: string; href: string; external?: boolean };
type FooterColumn = {
  title: string;
  items: (FooterLink | { label: string; href?: undefined })[];
};

const COLUMNS: FooterColumn[] = [
  {
    title: "Soluciones",
    items: [
      { label: "Clínicas", href: "/clinicas" },
      { label: "Firmas legales", href: "/servicios-legales" },
      { label: "Negocios locales", href: "/servicios-locales" },
    ],
  },
  {
    title: "Servicios",
    items: [
      { label: "Desarrollo web", href: "/servicios/desarrollo-web" },
      { label: "Automatización" },
      { label: "Agentes IA", href: "/servicios/agentes-ia" },
      { label: "Datos y analítica" },
      { label: "Infraestructura cloud", href: "/infraestructura-digital" },
    ],
  },
  {
    title: "Contacto",
    items: [
      {
        label: "WhatsApp",
        href: whatsappLink("Hola, vi tu web y quiero conversar sobre mi negocio"),
        external: true,
      },
      { label: "Email", href: `mailto:${CONTACT_EMAIL}`, external: true },
    ],
  },
  {
    title: "Legal",
    items: [{ label: "Privacidad", href: "/politica-de-privacidad" }],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-sand shadow-[0_-8px_24px_rgba(36,21,9,0.03)]">
      <div className="mx-auto max-w-6xl px-6 py-12 text-sm">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Logo height={28} />
            <p className="mt-4 max-w-xs text-ink/50">
              Automatización y agentes de IA por WhatsApp para pymes peruanas.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">
                {column.title}
              </p>
              <ul className="mt-3 space-y-2">
                {column.items.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-ink/70 transition-colors hover:text-terracota"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link href={item.href} className="text-ink/70 transition-colors hover:text-terracota">
                          {item.label}
                        </Link>
                      )
                    ) : (
                      <span className="text-ink/40">{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 border-t border-ink/8 pt-6 text-ink/50">
          © {new Date().getFullYear()} afynova · Lima, Perú · Atención 100% remota
        </p>
      </div>
    </footer>
  );
}
