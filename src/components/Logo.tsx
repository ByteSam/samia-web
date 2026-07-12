import Image from "next/image";

type LogoProps = {
  className?: string;
  /** Altura en px del logo */
  height?: number;
};

const LOGO_RATIO = 1310 / 347;

/** Marca SamIA (logo real, generado por Daniel). */
export default function Logo({ className, height = 40 }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="SamIA"
      height={height}
      width={Math.round(height * LOGO_RATIO)}
      className={className}
      priority
    />
  );
}
