"use client";

import { useState } from "react";
import { whatsappLink, CONTACT_EMAIL } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

/**
 * Formulario de captura de leads — abre WhatsApp con mensaje prellenado.
 */
export default function LeadForm() {
  const [nombre, setNombre] = useState("");
  const [negocio, setNegocio] = useState("");
  const [necesidad, setNecesidad] = useState("");
  const [mostrarFallback, setMostrarFallback] = useState(false);
  const [mensajeEnviado, setMensajeEnviado] = useState("");

  const disabled = nombre.trim() === "" || necesidad.trim() === "";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (disabled) return;

    const mensaje = [
      `Hola, soy ${nombre}${negocio ? ` de ${negocio}` : ""}.`,
      necesidad,
    ].join(" ");
    setMensajeEnviado(mensaje);

    const ventana = window.open(whatsappLink(mensaje), "_blank");
    const bloqueada = !ventana || typeof ventana.closed === "undefined";

    if (bloqueada) {
      setMostrarFallback(true);
      trackEvent("lead", { channel: "mailto_fallback" });
      return;
    }

    trackEvent("lead", { channel: "whatsapp" });
    setMostrarFallback(false);
    window.setTimeout(() => {
      if (ventana.closed) setMostrarFallback(true);
    }, 600);
  }

  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    "Diagnóstico gratis — contacto desde la web"
  )}&body=${encodeURIComponent(mensajeEnviado)}`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
          className="input-field"
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
          className="input-field"
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
          className="input-field resize-none"
          required
        />
      </div>

      <p className="lead-form-hint rounded-xl border px-4 py-3 text-sm">
        Al enviar, se abre WhatsApp con tu mensaje ya escrito. Tú confirmas el envío desde tu
        teléfono o WhatsApp Web.
      </p>

      <button
        type="submit"
        disabled={disabled}
        className="btn-pill btn-pill-solid btn-pill-whatsapp w-full disabled:!cursor-not-allowed disabled:!opacity-40 disabled:!shadow-none"
      >
        Continuar en WhatsApp
      </button>

      {mostrarFallback && (
        <p className="rounded-xl border border-terracota/20 bg-terracota/5 px-4 py-3 text-center text-sm text-ink/75">
          ¿No se abrió WhatsApp? Escríbeme a{" "}
          <a href={mailtoHref} className="font-medium text-terracota-dark underline underline-offset-2">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      )}
    </form>
  );
}
