import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";

type FinalCTAProps = {
  titulo: string;
  textoSecundario?: string;
  mensaje: string;
  textoBoton?: string;
};

/** Bloque de CTA final (WhatsApp) — reutilizado en las páginas de servicio/nicho. */
export default function FinalCTA({
  titulo,
  textoSecundario = "Diagnóstico gratis de 30 minutos. Sin compromiso.",
  mensaje,
  textoBoton = "Escríbeme por WhatsApp",
}: FinalCTAProps) {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-28 text-center">
      <Reveal>
        <h2 className="text-2xl font-medium text-ink md:text-3xl">{titulo}</h2>
        <p className="mt-3 text-ink/60">{textoSecundario}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <WhatsAppButton message={mensaje}>{textoBoton}</WhatsAppButton>
        </div>
      </Reveal>
    </section>
  );
}
