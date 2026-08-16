"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import type { NavLink } from "@/lib/navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import FundadorChip from "@/components/FundadorChip";
import { WHATSAPP_DIAGNOSTICO_MESSAGE } from "@/lib/contact";

type NavGroup = {
  label: string;
  eyebrow: string;
  items: NavLink[];
};

type MobileMenuProps = {
  groups: NavGroup[];
  fundadorOpen: boolean;
};

export default function MobileMenu({ groups, fundadorOpen }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        className="flex h-9 w-9 items-center justify-center rounded-full text-ink/70 transition-colors hover:bg-ink/5"
      >
        {open ? (
          <X className="h-5 w-5" strokeWidth={1.75} />
        ) : (
          <Menu className="h-5 w-5" strokeWidth={1.75} />
        )}
      </button>

      {open && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/80"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
          />
          <div
            className="panel-pop panel-elevated fixed left-3 right-3 top-[4.25rem] z-50 max-h-[calc(100dvh-5.25rem)] overflow-y-auto rounded-2xl border p-4"
            style={{ backgroundColor: "#140f1e" }}
          >
            <WhatsAppButton
              message={WHATSAPP_DIAGNOSTICO_MESSAGE}
              variant="terracota"
              source="header_mobile_menu"
              className="!w-full !py-3 !text-sm"
            >
              Diagnóstico gratis por WhatsApp
            </WhatsAppButton>

            {groups.map((group) => (
              <div key={group.label} className="mt-4">
                <p className="text-label px-3 py-1">
                  {group.eyebrow}
                </p>
                {group.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-xl px-3 py-2.5 hover:bg-sand ${
                        item.featured ? "border border-terracota/15 bg-terracota/5" : ""
                      } ${isActive ? "bg-sand/80" : ""}`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span
                        className={`text-sm font-medium ${
                          isActive ? "text-terracota-dark" : "text-ink/80"
                        }`}
                      >
                        {item.label}
                      </span>
                      {item.description && (
                        <span className="mt-0.5 block text-xs text-ink/50">
                          {item.description}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            ))}

            <div className="mt-4 border-t border-ink/8 pt-4">
              <FundadorChip
                variant="header"
                expanded={fundadorOpen}
                onOpen={() => setOpen(false)}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
