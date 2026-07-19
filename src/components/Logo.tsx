import Image from "next/image";

type LogoProps = {
  className?: string;
  /** Altura en px del logo */
  height?: number;
};

const LOGO_RATIO = 1294 / 526;

/** Marca ichan (logo real, generado por Daniel). */
export default function Logo({ className, height = 40 }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="ichan"
      height={height}
      width={Math.round(height * LOGO_RATIO)}
      className={className}
      priority
    />
  );
}
