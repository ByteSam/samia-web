"use client";

import NavDropdown from "@/components/NavDropdown";
import MobileMenu from "@/components/MobileMenu";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SOLUCIONES, SERVICIOS_LINKS } from "@/lib/navigation";

type HeaderNavProps = {
  fundadorOpen: boolean;
  onOpenFundador: () => void;
};

export default function HeaderNav({
  fundadorOpen,
  onOpenFundador,
}: HeaderNavProps) {
  return (
    <>
      <nav className="hidden items-center gap-7 text-sm font-medium text-ink/70 md:flex">
        <NavDropdown label="Soluciones" items={SOLUCIONES} />
        <NavDropdown label="Servicios" items={SERVICIOS_LINKS} />
        <button
          type="button"
          onClick={onOpenFundador}
          aria-expanded={fundadorOpen}
          className="transition-colors hover:text-terracota"
        >
          Conoce a Daniel
        </button>
      </nav>

      <div className="flex items-center gap-2">
        <MobileMenu
          groups={[
            { label: "Soluciones", items: SOLUCIONES },
            { label: "Servicios", items: SERVICIOS_LINKS },
          ]}
          onConoceDaniel={onOpenFundador}
        />
        <WhatsAppButton
          message="Hola, vi tu web y quiero conversar sobre mi negocio"
          className="!px-4 !py-2 !text-xs md:!px-5 md:!py-2.5 md:!text-sm"
        >
          Escríbeme
        </WhatsAppButton>
      </div>
    </>
  );
}
