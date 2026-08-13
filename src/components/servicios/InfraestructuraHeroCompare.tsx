import { Unplug, Network, ArrowRight, X } from "lucide-react";
import ComparePanel from "@/components/ComparePanel";
import InfraestructuraStackPreview from "@/components/servicios/InfraestructuraStackPreview";

const ITEMS_SUELTAS = [
  { id: "s-1", texto: "Web aislada del resto" },
  { id: "s-2", texto: "Pagos y datos en Excel" },
  { id: "s-3", texto: "Sin avisos si algo falla" },
];

function HerramientasSueltas() {
  return (
    <ComparePanel tone="muted" title="Herramientas sueltas" badge="desconectado" icon={Unplug}>
      <ul className="space-y-2.5">
        {ITEMS_SUELTAS.map((item) => (
          <li
            key={item.id}
            className="flex items-start gap-2 rounded-lg border border-dashed border-ink/10 bg-white/60 px-3 py-2.5 text-sm leading-relaxed text-ink/55"
          >
            <X className="mt-0.5 h-4 w-4 shrink-0 text-ink/35" strokeWidth={2} aria-hidden />
            <span>{item.texto}</span>
          </li>
        ))}
      </ul>
    </ComparePanel>
  );
}

function ArquitecturaIntegrada() {
  return (
    <ComparePanel
      tone="accent"
      title="Arquitectura integrada"
      badge="una arquitectura"
      icon={Network}
      className="!p-4 sm:!p-5"
    >
      <InfraestructuraStackPreview />
    </ComparePanel>
  );
}

/** Mini comparación para el hero — herramientas sueltas vs integrada (stack integrado). */
export default function InfraestructuraHeroCompare() {
  return (
    <div className="mt-10 pb-1 sm:mt-12">
      <p className="section-eyebrow text-center text-[0.72rem] lg:text-left">
        Sueltas vs integrada
      </p>
      <div className="mt-4 grid items-stretch gap-4 sm:grid-cols-[1fr_auto_1fr] sm:gap-6">
        <HerramientasSueltas />
        <div className="flex items-center justify-center py-2 sm:py-0">
          <ArrowRight
            className="h-5 w-5 rotate-90 text-ink/35 sm:rotate-0"
            strokeWidth={1.5}
            aria-hidden
          />
        </div>
        <ArquitecturaIntegrada />
      </div>
    </div>
  );
}
