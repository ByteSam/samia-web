"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/contact";

/**
 * Formulario de captura de leads — opción A del checklist de lanzamiento.
 * No guarda nada en un backend: arma un mensaje de WhatsApp prellenado
 * con los datos y abre el chat directo con Daniel.
 */
export default function LeadForm() {
  const [nombre, setNombre] = useState("");
  const [negocio, setNegocio] = useState("");
  const [necesidad, setNecesidad] = useState("");

  const disabled = nombre.trim() === "" || necesidad.trim() === "";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (disabled) return;

    const mensaje = [
      `Hola, soy ${nombre}${negocio ? ` de ${negocio}` : ""}.`,
      necesidad,
    ].join(" ");

    window.open(whatsappLink(mensaje), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="card-soft space-y-4">
      <div>
        <label htmlFor="lead-nombre" className="text-sm font-medium text-ink">
          Tu nombre
        </label>
        <input
          id="lead-nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ej. María Torres"
          className="mt-1.5 w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-terracota"
          required
        />
      </div>

      <div>
        <label htmlFor="lead-negocio" className="text-sm font-medium text-ink">
          Tu negocio <span className="text-ink/40">(opcional)</span>
        </label>
        <input
          id="lead-negocio"
          type="text"
          value={negocio}
          onChange={(e) => setNegocio(e.target.value)}
          placeholder="Ej. Clínica Dental Sonrisa"
          className="mt-1.5 w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-terracota"
        />
      </div>

      <div>
        <label htmlFor="lead-necesidad" className="text-sm font-medium text-ink">
          ¿Qué necesitas?
        </label>
        <textarea
          id="lead-necesidad"
          value={necesidad}
          onChange={(e) => setNecesidad(e.target.value)}
          placeholder="Ej. Quiero una web que capture leads de mis pacientes."
          rows={3}
          className="mt-1.5 w-full resize-none rounded-xl border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-terracota"
          required
        />
      </div>

      <button type="submit" disabled={disabled} className="btn-pill btn-pill-whatsapp w-full disabled:opacity-40">
        Enviar por WhatsApp
      </button>
      <p className="text-center text-xs text-ink/45">
        Se abre WhatsApp con tu mensaje ya escrito — tú confirmas el envío.
      </p>
    </form>
  );
}
