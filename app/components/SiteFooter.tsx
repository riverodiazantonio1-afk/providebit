"use client";

import Link from "next/link";
import { site } from "../lib/site";
import { openCookieSettings } from "./CookieConsent";

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="footerTop">
        <div className="footerBrand">
          <img src="/logo-footer.png" alt="Providebit" />
          <p>«Todo lo bueno nos pertenece»: rescatamos lo bueno de todo esfuerzo humano y lo traemos hacia Cristo.</p>
        </div>
        <p className="footerDetails">
          <strong>{site.name}</strong><br />
          Asociación cultural legalmente constituida · Navarra, España<br />
          Web: {site.domain}<br />
          Correo: <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </div>

      <div className="footerBottom">
        <nav aria-label="Información legal">
          <Link href="/contacto">Contacto</Link>
          <Link href="/aviso-legal">Aviso legal</Link>
          <Link href="/politica-privacidad">Política de privacidad</Link>
          <Link href="/politica-cookies">Política de cookies</Link>
          <button type="button" onClick={openCookieSettings}>Configurar cookies</button>
        </nav>
        <p>© 2026 {site.name}. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
