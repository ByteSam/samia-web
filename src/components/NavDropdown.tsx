"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

type NavDropdownProps = {
  label: string;
  items: { href: string; label: string; description?: string }[];
};

export default function NavDropdown({ label, items }: NavDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 transition-colors hover:text-terracota"
        aria-expanded={open}
      >
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} strokeWidth={2} />
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3">
          <div className="rounded-2xl border border-ink/8 bg-white p-2 shadow-[0_12px_32px_rgba(36,21,9,0.12)]">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl px-3 py-2 text-sm font-medium text-ink/75 transition-colors hover:bg-sand hover:text-terracota-dark"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
