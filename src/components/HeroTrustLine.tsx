"use client";

import Image from "next/image";
import { useFundador } from "@/components/FundadorProvider";

/** Línea de confianza en Hero — avatar mini + texto; abre el panel al clic. */
export default function HeroTrustLine() {
  const { openPanel } = useFundador();

  return (
    <button
      type="button"
      onClick={openPanel}
      className="group flex items-center gap-2.5 rounded-full border border-ink/8 bg-white/60 py-1.5 pl-1.5 pr-4 text-left transition-colors hover:border-terracota/25 hover:bg-white"
      aria-label="Conoce a Daniel — abrir información del fundador"
    >
      <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-ink/10">
        <Image
          src="/daniel-avatar.jpg"
          alt=""
          fill
          sizes="32px"
          className="object-cover"
        />
      </span>
      <span className="text-sm text-ink/55 transition-colors group-hover:text-ink/70">
        Implementado directamente por{" "}
        <span className="font-medium text-ink/75">Daniel</span>
      </span>
    </button>
  );
}
