"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type NavGroup = {
  label: string;
  items: { href: string; label: string }[];
};

type MobileMenuProps = {
  groups: NavGroup[];
};

export default function MobileMenu({ groups }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        className="flex h-9 w-9 items-center justify-center rounded-full text-ink/70"
      >
        {open ? <X className="h-5 w-5" strokeWidth={1.75} /> : <Menu className="h-5 w-5" strokeWidth={1.75} />}
      </button>

      {open && (
        <div className="absolute left-4 right-4 top-full mt-3 rounded-2xl border border-ink/8 bg-white p-4 shadow-[0_12px_32px_rgba(36,21,9,0.12)]">
          {groups.map((group) => (
            <div key={group.label} className="mt-2">
              <p className="px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink/40">
                {group.label}
              </p>
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2 text-sm text-ink/75 hover:bg-sand hover:text-terracota-dark"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
          <Link
            href="/#casos-reales"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-xl px-3 py-2 font-medium text-ink hover:bg-sand"
          >
            Conoce a Daniel
          </Link>
        </div>
      )}
    </div>
  );
}
