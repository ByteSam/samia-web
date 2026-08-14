"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import HeaderNav from "./HeaderNav";
import { useFundador } from "@/components/FundadorProvider";

export default function Header() {
  const { open } = useFundador();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`sticky z-40 px-4 transition-[top] duration-200 md:px-6 ${
        scrolled ? "top-2 md:top-3" : "top-4 md:top-6"
      }`}
    >
      <header
        className={`site-header container-shell relative flex items-center gap-4 rounded-full border px-5 py-2.5 backdrop-blur-md transition-shadow duration-200 md:px-6 ${
          scrolled ? "site-header--scrolled" : ""
        }`}
      >
        <Link href="/" className="block shrink-0" aria-label="Ir al inicio de afynova">
          <Logo height={32} />
        </Link>

        <HeaderNav fundadorOpen={open} />
      </header>
    </div>
  );
}
