"use client";

import { useId, useSyncExternalStore } from "react";

type LogoProps = {
  className?: string;
  height?: number;
};

const ECLIPSE_MAGENTA = "#E8457C";
const ECLIPSE_PURPLE = "#9B30FF";
const WORDMARK_FILL = "#f0f0f5";

/**
 * Lockup alineado al logo anterior (viewBox 317×71):
 * - Símbolo Ø 50 en caja de 71 (~11 px de aire arriba/abajo)
 * - Wordmark AFYNOVA con cap-height ~39 (≈ 78% del diámetro)
 * - Clearspace ~19 entre eclipse y la A
 */
const VIEWBOX_W = 348;
const VIEWBOX_H = 71;
const CX = 25;
const CY = 36;
const R = 25;
const CLEARSPACE = 19;
const WORDMARK_SIZE = 56;
const GRADIENT_SPIN_S = 11;

function subscribeReducedMotion(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
}

/** Marca afynova — eclipse gradiente magenta→púrpura (exp/color-gradient) + wordmark AFYNOVA. */
export default function Logo({ className, height = 32 }: LogoProps) {
  const maskId = `eclipse-lockup-${useId().replace(/:/g, "")}`;
  const gradientId = `eclipse-gradient-${useId().replace(/:/g, "")}`;
  const prefersReducedMotion = usePrefersReducedMotion();
  const moonR = R * 0.5;
  const moonCx = CX + R * 0.48;
  const moonCy = CY + R * -0.42;
  const wordmarkX = CX + R + CLEARSPACE;
  const width = (height / VIEWBOX_H) * VIEWBOX_W;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`logo-lockup ${prefersReducedMotion ? "logo-lockup--static" : ""} ${className ?? ""}`}
      role="img"
      aria-label="afynova"
      overflow="visible"
    >
      <defs>
        <mask id={maskId}>
          <rect width={VIEWBOX_W} height={VIEWBOX_H} fill="white" />
          <circle cx={moonCx} cy={moonCy} r={moonR} fill="black" />
        </mask>
        {!prefersReducedMotion && (
          <linearGradient
            id={gradientId}
            x1={CX}
            y1={CY - R}
            x2={CX}
            y2={CY + R}
            gradientUnits="userSpaceOnUse"
            gradientTransform={`rotate(0 ${CX} ${CY})`}
          >
            <stop offset="0%" stopColor={ECLIPSE_MAGENTA} />
            <stop offset="100%" stopColor={ECLIPSE_PURPLE} />
            <animateTransform
              attributeName="gradientTransform"
              type="rotate"
              from={`0 ${CX} ${CY}`}
              to={`360 ${CX} ${CY}`}
              dur={`${GRADIENT_SPIN_S}s`}
              repeatCount="indefinite"
            />
          </linearGradient>
        )}
      </defs>
      <circle
        cx={CX}
        cy={CY}
        r={R}
        className="logo-eclipse"
        fill={prefersReducedMotion ? ECLIPSE_MAGENTA : `url(#${gradientId})`}
        mask={`url(#${maskId})`}
      />
      <text
        x={wordmarkX}
        y={CY + 1}
        dominantBaseline="central"
        style={{ fontFamily: "var(--font-wordmark), Inter, system-ui, sans-serif" }}
        fontSize={WORDMARK_SIZE}
        fontWeight="600"
        fill={WORDMARK_FILL}
        letterSpacing="0.4"
      >
        AFYNOVA
      </text>
    </svg>
  );
}
