"use client";

export function SiteFooter() {
  return <footer className="siteFooter">
    <div className="footerTop"><div className="footerBrand"><img src="/logo-footer.png" alt="Providebit" /><p>«Todo lo bueno nos pertenece»: rescatamos lo bueno de todo esfuerzo humano y lo traemos hacia Cristo.</p></div><p className="footerDetails"><strong>Asociación Cultural Providebit</strong><br />Asociación cultural legalmente constituida · Navarra, España<br />Web: providebit.es<br />Correo: <a href="mailto:info@providebit.es">info@providebit.es</a></p></div>
    <div className="footerBottom"><nav aria-label="Información legal"><a href="/contacto">Contacto</a><a href="/aviso-legal">Aviso legal</a><a href="/politica-privacidad">Política de privacidad</a><a href="/politica-cookies">Política de cookies</a><button type="button" onClick={() => window.dispatchEvent(new Event("providebit:cookie-settings"))}>Configurar cookies</button></nav><p>© 2026 Asociación Cultural Providebit. Todos los derechos reservados.</p></div>
  </footer>;
}
