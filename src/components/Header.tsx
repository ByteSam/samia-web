import Link from "next/link";
import Logo from "./Logo";
import NavDropdown from "./NavDropdown";
import MobileMenu from "./MobileMenu";
import WhatsAppButton from "./WhatsAppButton";

const SOLUCIONES = [
  { href: "/clinicas", label: "Clínicas" },
  { href: "/servicios-locales", label: "Servicios Locales" },
];

const SERVICIOS = [
  { href: "/servicios/agentes-ia", label: "Agentes IA" },
  { href: "/servicios/automatizacion", label: "Automatización" },
  { href: "/infraestructura-digital", label: "Infraestructura Digital" },
  { href: "/servicios/desarrollo-web", label: "Desarrollo Web" },
];

export default function Header() {
  return (
    <div className="sticky top-4 z-40 px-4 md:top-6 md:px-6">
      <header className="relative mx-auto flex max-w-5xl items-center justify-between rounded-full border border-ink/8 bg-sand/95 px-5 py-2.5 shadow-[0_8px_30px_rgba(36,21,9,0.08)] backdrop-blur">
        <Link href="/" aria-label="Ir al inicio de ichan">
          <Logo height={30} />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-ink/70 md:flex">
          <NavDropdown label="Soluciones" items={SOLUCIONES} />
          <NavDropdown label="Servicios" items={SERVICIOS} />
          <Link href="/#sobre-mi" className="transition-colors hover:text-terracota">
            Conoce a Daniel
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <MobileMenu
            groups={[
              { label: "Soluciones", items: SOLUCIONES },
              { label: "Servicios", items: SERVICIOS },
            ]}
          />
          <WhatsAppButton
            message="Hola, vi tu web y quiero conversar sobre mi negocio"
            className="!px-4 !py-2 !text-xs md:!px-5 md:!py-2.5 md:!text-sm"
          >
            Escríbeme
          </WhatsAppButton>
        </div>
      </header>
    </div>
  );
}
