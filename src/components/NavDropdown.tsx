"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import type { NavLink } from "@/lib/navigation";

type NavDropdownProps = {
  label: string;
  eyebrow: string;
  items: NavLink[];
};

function isItemActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function NavDropdown({ label, eyebrow, items }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isGroupActive = items.some((item) => isItemActive(pathname, item.href));

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1 transition-colors hover:text-terracota ${
          isGroupActive ? "text-terracota-dark" : ""
        }`}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        {label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          strokeWidth={2}
        />
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-2">
          <div
            className="panel-pop panel-elevated rounded-2xl border p-2"
            role="menu"
          >
            <p className="text-label px-3 pb-1 pt-1">
              {eyebrow}
            </p>
            {items.map((item) => {
              const isActive = isItemActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  className={`block rounded-xl px-3 py-2.5 transition-colors hover:bg-sand ${
                    item.featured
                      ? "mb-1 border border-terracota/15 bg-terracota/5 hover:border-terracota/25"
                      : ""
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
                    <span className="mt-0.5 block text-xs leading-snug text-ink/50">
                      {item.description}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
