"use client";

import Link from "next/link";
import Logo from "./Logo";
import HeaderNav from "./HeaderNav";
import { useFundador } from "@/components/FundadorProvider";

export default function Header() {
  const { open, openPanel } = useFundador();

  return (
    <div className="sticky top-4 z-40 px-4 md:top-6 md:px-6">
      <header className="relative mx-auto flex max-w-5xl items-center justify-between rounded-full border border-ink/8 bg-sand/95 px-5 py-2.5 shadow-[0_8px_30px_rgba(36,21,9,0.08)] backdrop-blur">
        <Link href="/" aria-label="Ir al inicio de afynova">
          <Logo height={30} />
        </Link>

        <HeaderNav fundadorOpen={open} onOpenFundador={openPanel} />
      </header>
    </div>
  );
}
