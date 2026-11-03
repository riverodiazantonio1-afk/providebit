"use client";

import { useEffect, useState } from "react";

type Props = { home?: boolean; className?: string };

export function SiteNav({ home = false, className = "" }: Props) {
  const [open, setOpen] = useState(false);
  const prefix = home ? "" : "/";
  const links = [
    { href: `${prefix}#proyectos`, label: "Proyectos" },
    { href: `${prefix}#asociacion`, label: "La asociación" },
    { href: "/junta-directiva", label: "Junta directiva" },
  ];

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    const onResize = () => { if (window.innerWidth > 760) setOpen(false); };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => { window.removeEventListener("keydown", onKey); window.removeEventListener("resize", onResize); };
  }, [open]);

  return <nav className={`nav ${className} ${open ? "navOpen" : ""}`.trim()} aria-label="Navegación principal">
    <a href="/" className="brand" aria-label="Providebit, inicio"><img src="/logo.png" alt="Providebit" /></a>
    <button type="button" className="navToggle" aria-expanded={open} aria-controls="menu-principal" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen(!open)}>
      <span /><span /><span />
    </button>
    <div className="navLinks" id="menu-principal" onClick={(event) => { if ((event.target as HTMLElement).closest("a")) setOpen(false); }}>
      {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
      <a href="/contacto" className="navCta">Contactar</a>
    </div>
  </nav>;
}
