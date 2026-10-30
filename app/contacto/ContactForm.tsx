"use client";

import { FormEvent } from "react";

export function ContactForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Mensaje desde la web de ${data.get("name")}`);
    const body = encodeURIComponent(`Nombre: ${data.get("name")}\nEmail: ${data.get("email")}\n\nMensaje:\n${data.get("message")}`);
    window.location.href = `mailto:info@providebit.es?subject=${subject}&body=${body}`;
  }
  return <form className="contactForm" onSubmit={submit}><label>Nombre<input name="name" autoComplete="name" required /></label><label>Correo electrónico<input name="email" type="email" autoComplete="email" required /></label><label>¿En qué podemos ayudarte?<textarea name="message" rows={6} required /></label><button className="button buttonPrimary" type="submit">Enviar mensaje <span>→</span></button><p className="formNote">Al enviar se abrirá tu aplicación de correo con el mensaje preparado.</p></form>;
}
