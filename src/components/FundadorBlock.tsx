import Image from "next/image";
import Reveal from "@/components/Reveal";

/** Bloque condensado del fundador — vive dentro/junto a Casos reales. No es una sección de marca personal. */
export default function FundadorBlock() {
  return (
    <Reveal>
      <div className="card-soft flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-ink/10">
          <Image src="/daniel.jpg" alt="Daniel, fundador de ichan" fill sizes="64px" className="object-cover" />
        </div>
        <p className="text-sm text-ink/70">
          Soy Daniel, ingeniero especializado en infraestructura y
          automatización. Hoy implemento personalmente cada solución de
          ICHAN para asegurar calidad y resultados.
        </p>
      </div>
    </Reveal>
  );
}
