import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-sand">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-ink/70 md:flex-row md:items-center md:justify-between">
        <Logo height={28} />
        <p>© {new Date().getFullYear()} SamIA · Lima, Perú · Atención 100% remota</p>
        <div className="flex gap-4">
          <Link href="/clinicas" className="hover:text-terracota">
            Clínicas
          </Link>
          <Link href="/infraestructura-digital" className="hover:text-terracota">
            Infraestructura Digital
          </Link>
          <Link href="/politica-de-privacidad" className="hover:text-terracota">
            Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
