"use client";

import { FormEvent } from "react";
import { site } from "../lib/site";

const reasons = [
  "Consulta general",
  "Quiero hacer una donación",
  "Quiero colaborar con mi tiempo o conocimientos",
  "Tengo un proyecto que proponer",
  "Represento a una institución",
];

// No hay servidor: el formulario abre el programa de correo con el mensaje ya redactado.
export function ContactForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `${data.get("reason")} · Mensaje desde la web de ${data.get("name")}`;
    const body = `Nombre: ${data.get("name")}\nEmail: ${data.get("email")}\nMotivo: ${data.get("reason")}\n\nMensaje:\n${data.get("message")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contactForm" onSubmit={submit}>
      <label>Nombre<input name="name" autoComplete="name" required /></label>
      <label>Correo electrónico<input name="email" type="email" autoComplete="email" required /></label>
      <label>Motivo
        <select name="reason" defaultValue="Consulta general">
          {reasons.map((reason) => <option key={reason}>{reason}</option>)}
        </select>
      </label>
      <label>¿En qué podemos ayudarte?<textarea name="message" rows={6} required /></label>
      <button className="button buttonPrimary" type="submit">Enviar mensaje <span>→</span></button>
      <p className="formNote">Al enviar se abrirá tu aplicación de correo con el mensaje preparado.</p>
    </form>
  );
}
