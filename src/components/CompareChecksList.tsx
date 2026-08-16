import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";

type Item = { id: string; texto: string };

/** Lista con checks en stagger al entrar en viewport (Fase 5). Server + Reveal client. */
export default function CompareChecksList({ items }: { items: Item[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <Reveal key={item.id} delay={i * 80}>
          <li className="compare-list-item-accent flex items-start gap-2 rounded-lg px-3 py-2.5 text-sm leading-relaxed">
            <Check className="compare-check-icon mt-0.5 h-4 w-4 shrink-0 text-terracota" strokeWidth={2} aria-hidden />
            <span>{item.texto}</span>
          </li>
        </Reveal>
      ))}
    </ul>
  );
}
