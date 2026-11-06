"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "../lib/site";

// Menú principal. En móviles se pliega en un botón de hamburguesa.
export function SiteNav() {
  const [open, setOpen] = useState(false);
  const isHome = usePathname() === "/";
  const close = () => setOpen(false);

  // Cierra el menú con la tecla Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const classes = ["nav", !isHome && "navBordered", open && "navOpen"].filter(Boolean).join(" ");

  return (
    <nav className={classes} aria-label="Navegación principal">
      <Link href="/" className="brand" aria-label="Providebit, inicio" onClick={close}>
        <img src="/brand/providebit-horizontal-color.svg" alt="Providebit" width="2377" height="598" />
      </Link>

      <button
        type="button"
        className="navToggle"
        aria-expanded={open}
        aria-controls="menu-principal"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen(!open)}
      >
        <span /><span /><span />
      </button>

      <div className="navLinks" id="menu-principal">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} onClick={close}>{link.label}</Link>
        ))}
        <Link href="/contacto" className="navCta" onClick={close}>Contactar</Link>
      </div>
    </nav>
  );
}
