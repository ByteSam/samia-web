"use client";

import Image from "next/image";
import { useFundador } from "@/components/FundadorProvider";

type FundadorChipProps = {
  variant?: "hero" | "header" | "header-minimal";
  /** Para aria-expanded cuando el panel está abierto (header) */
  expanded?: boolean;
  /** Callback tras abrir el panel (ej. cerrar menú mobile) */
  onOpen?: () => void;
  className?: string;
};

/** Chip de confianza — avatar + Daniel; abre panel del fundador. */
export default function FundadorChip({
  variant = "hero",
  expanded,
  onOpen,
  className = "",
}: FundadorChipProps) {
  const { openPanel } = useFundador();

  function handleClick() {
    openPanel();
    onOpen?.();
  }

  if (variant === "header-minimal") {
    return (
      <button
        type="button"
        onClick={handleClick}
        aria-expanded={expanded}
        title="Daniel · fundador"
        className={`group flex shrink-0 items-center gap-2 rounded-full border border-ink/8 bg-white/80 py-1 pl-1 pr-3 transition-colors hover:border-ink/15 hover:bg-white ${className}`}
        aria-label="Conoce a Daniel. Abrir información del fundador"
      >
        <span className="relative block h-8 w-8 overflow-hidden rounded-full border border-ink/10">
          <Image
            src="/daniel-avatar.jpg"
            alt=""
            fill
            sizes="32px"
            className="object-cover object-[center_22%]"
          />
        </span>
        <span className="text-sm font-medium text-ink/65 transition-colors group-hover:text-ink/80">
          Daniel
        </span>
      </button>
    );
  }

  if (variant === "header") {
    return (
      <button
        type="button"
        onClick={handleClick}
        aria-expanded={expanded}
        className={`group flex items-center gap-2 rounded-full border border-ink/8 bg-sand/50 py-1 pl-1 pr-3 text-left transition-colors hover:border-ink/15 hover:bg-white ${className}`}
        aria-label="Conoce a Daniel. Abrir información del fundador"
      >
        <span className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full border border-ink/10">
          <Image
            src="/daniel-avatar.jpg"
            alt=""
            fill
            sizes="28px"
            className="object-cover object-[center_22%]"
          />
        </span>
        <span className="text-sm text-ink/60 transition-colors group-hover:text-ink/75">
          <span className="font-medium text-ink/80">Daniel</span>
          <span className="text-ink/50"> · Fundador</span>
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="group flex items-center gap-2 text-left transition-opacity hover:opacity-90"
      aria-label="Conoce a Daniel. Abrir información del fundador"
    >
      <span className="fundador-avatar-ring relative block h-9 w-9 shrink-0 rounded-full p-[2px]">
        <span className="relative block h-full w-full overflow-hidden rounded-full bg-sand">
          <Image
            src="/daniel-avatar.jpg"
            alt=""
            fill
            sizes="32px"
            className="object-cover object-[center_22%]"
            priority
          />
        </span>
      </span>
      <span className="text-small text-muted transition-colors group-hover:text-secondary">
        <span className="font-medium text-ink/70">Daniel</span>
        <span> · fundador</span>
      </span>
    </button>
  );
}
