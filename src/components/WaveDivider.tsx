type WaveDividerProps = {
  flip?: boolean;
  color?: string;
  className?: string;
};

/** Divisor decorativo entre secciones, con forma de ola. */
export default function WaveDivider({
  flip = false,
  color = "var(--color-sand)",
  className = "",
}: WaveDividerProps) {
  return (
    <div
      className={`pointer-events-none -mb-px w-full overflow-hidden leading-none ${
        flip ? "rotate-180" : ""
      } ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="h-10 w-full">
        <path
          d="M0 30c100-25 200-25 300 0s200 25 300 0 200-25 300 0 200 25 300 0V60H0Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
