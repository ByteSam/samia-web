"use client";

import NavDropdown from "@/components/NavDropdown";
import MobileMenu from "@/components/MobileMenu";
import WhatsAppButton from "@/components/WhatsAppButton";
import FundadorChip from "@/components/FundadorChip";
import { SOLUCIONES, SERVICIOS_LINKS } from "@/lib/navigation";
import { WHATSAPP_DIAGNOSTICO_MESSAGE } from "@/lib/contact";

type HeaderNavProps = {
  fundadorOpen: boolean;
};

export default function HeaderNav({ fundadorOpen }: HeaderNavProps) {
  return (
    <div className="flex flex-1 items-center justify-end gap-2 md:gap-3 lg:gap-4">
      <nav
        className="hidden items-center gap-5 text-sm font-medium text-ink/75 md:flex lg:gap-6"
        aria-label="Navegación principal"
      >
        <NavDropdown
          label="Soluciones"
          eyebrow="Por tipo de negocio"
          items={SOLUCIONES}
        />
        <NavDropdown
          label="Servicios"
          eyebrow="Qué implementamos"
          items={SERVICIOS_LINKS}
        />
      </nav>

      <FundadorChip
        variant="header-minimal"
        expanded={fundadorOpen}
        className="hidden lg:flex"
      />

      <MobileMenu
        groups={[
          { label: "Soluciones", eyebrow: "Por tipo de negocio", items: SOLUCIONES },
          { label: "Servicios", eyebrow: "Qué implementamos", items: SERVICIOS_LINKS },
        ]}
        fundadorOpen={fundadorOpen}
      />

      <WhatsAppButton
        message={WHATSAPP_DIAGNOSTICO_MESSAGE}
        variant="terracota"
        source="header"
        className="hidden !px-4 !py-2 !text-sm md:inline-flex lg:!px-5"
      >
        <span className="lg:hidden">Diagnóstico</span>
        <span className="hidden lg:inline">Diagnóstico gratis</span>
      </WhatsAppButton>
    </div>
  );
}
