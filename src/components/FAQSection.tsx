import Reveal from "@/components/Reveal";

type FAQItem = { q: string; a: string };

type FAQSectionProps = {
  items: FAQItem[];
  titulo?: string;
};

/** Bloque de preguntas frecuentes — reutilizado en Home y en todas las páginas de servicio/nicho. */
export default function FAQSection({ items, titulo = "Preguntas frecuentes" }: FAQSectionProps) {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-20">
      <Reveal>
        <h2 className="text-2xl font-normal text-ink md:text-3xl">{titulo}</h2>
      </Reveal>
      <div className="mt-8 space-y-6">
        {items.map((f, i) => (
          <Reveal key={f.q} delay={i * 60}>
            <div className="border-b border-ink/8 pb-6 last:border-0">
              <p className="font-medium text-ink">{f.q}</p>
              <p className="mt-1 text-sm text-ink/60">{f.a}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
