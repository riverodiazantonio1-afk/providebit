import { SiteFooter } from "../components/SiteFooter";

const board = [
  ["/images/junta/antonio-rivero.jpg", "Antonio Rivero Díaz", "Presidente", "https://www.linkedin.com/in/antonio-rivero-diaz/"],
  ["/images/junta/calixto-rivero.jpg", "Calixto Rivero Díaz", "Vocal", "https://www.linkedin.com/in/calixtorivero/"],
  ["/images/junta/fatima-pardinas.jpg", "Fátima Pardinas Armisen", "Vocal", "https://www.linkedin.com/in/fpardinas/"],
  ["/images/junta/mercedes-pardinas.jpg", "Mercedes Pardinas Armisen", "Secretaria", "https://www.linkedin.com/in/mpardinas/"],
];

export default function JuntaDirectiva() {
  return <main>
    <nav className="nav legalNav" aria-label="Navegación principal"><a href="/" className="brand" aria-label="Providebit, inicio"><img src="/logo.png" alt="Providebit" /></a><div className="navLinks"><a href="/#asociacion">La asociación</a><a href="/#proyectos">Proyectos</a><a href="/junta-directiva">Junta directiva</a><a href="/contacto" className="navCta">Contacto</a></div></nav>
    <header className="contactHeader"><div><p className="eyebrow">Las personas</p><h1>Junta directiva.</h1><p>Conoce a las personas que sirven y acompañan la misión de Providebit.</p></div></header>
    <section className="boardSection"><div className="sectionHeading"><div><div className="sectionLabel">Quiénes somos</div><h2>Al servicio de estas obras.</h2></div><p>Somos una asociación pequeña, con nombre y rostro, puesta al servicio de los proyectos que acogemos.</p></div><div className="boardGrid">{board.map(([photo, name, role, linkedin]) => <article className="boardMember" key={name}><img className="boardPhoto" src={photo} alt={`Retrato de ${name}`} width={640} height={800} loading="lazy" /><h3>{name}</h3><p>{role}</p><a className="boardLinkedin" href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={`Perfil de LinkedIn de ${name}`} title="LinkedIn"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg></a></article>)}</div></section>
    <SiteFooter />
  </main>;
}
