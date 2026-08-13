type LogoProps = {
  className?: string;
  height?: number;
};

const VIEWBOX = 120;

/** Marca afynova — logo eclipse E6c (simbolo + wordmark). */
export default function Logo({ className, height = 40 }: LogoProps) {
  const symbolSize = height;
  const r = VIEWBOX * 0.42;
  const cx = VIEWBOX / 2;
  const cy = VIEWBOX / 2;
  const moonR = r * 0.50;
  const moonCx = cx + r * 0.48;
  const moonCy = cy + r * -0.42;
  
  // Lockup width: symbol + clearspace + wordmark
  const totalWidth = (height / VIEWBOX) * 250;
  
  return (
    <svg
      width={totalWidth}
      height={height}
      viewBox="0 0 250 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="afynova"
    >
      <defs>
        <mask id="eclipse-mask">
          <rect width="250" height="120" fill="white" />
          <circle cx={moonCx} cy={moonCy} r={moonR} fill="black" />
        </mask>
      </defs>
      {/* Simbolo: Eclipse E6c */}
      <circle cx={cx} cy={cy} r={r} fill="#C1502E" mask="url(#eclipse-mask)" />
      {/* Wordmark */}
      <text
        x="85"
        y="68"
        fontFamily="Space Grotesk, Inter, system-ui, sans-serif"
        fontSize="38"
        fontWeight="500"
        fill="currentColor"
        letterSpacing="-0.5"
      >
        afynova
      </text>
    </svg>
  );
}
