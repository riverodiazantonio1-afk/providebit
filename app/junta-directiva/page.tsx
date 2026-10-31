import { SiteFooter } from "../components/SiteFooter";

const board = [
  ["/images/junta/antonio-rivero.jpg", "Antonio Rivero Díaz", "Presidente"],
  ["/images/junta/calixto-rivero.jpg", "Calixto Rivero Díaz", "Vocal"],
  ["/images/junta/fatima-pardinas.jpg", "Fátima Pardinas Armisen", "Vocal"],
  ["/images/junta/mercedes-pardinas.jpg", "Mercedes Pardinas Armisen", "Secretaria"],
];

export default function JuntaDirectiva() {
  return <main>
    <nav className="nav legalNav" aria-label="Navegación principal"><a href="/" className="brand" aria-label="Providebit, inicio"><img src="/logo.png" alt="Providebit" /></a><div className="navLinks"><a href="/#asociacion">La asociación</a><a href="/#proyectos">Proyectos</a><a href="/junta-directiva">Junta directiva</a><a href="/contacto" className="navCta">Contacto</a></div></nav>
    <header className="contactHeader"><div><p className="eyebrow">Las personas</p><h1>Junta directiva.</h1><p>Conoce a las personas que sirven y acompañan la misión de Providebit.</p></div></header>
    <section className="boardSection"><div className="sectionHeading"><div><div className="sectionLabel">Quiénes somos</div><h2>Al servicio de estas obras.</h2></div><p>Somos una asociación pequeña, con nombre y rostro, puesta al servicio de los proyectos que acogemos.</p></div><div className="boardGrid">{board.map(([photo, name, role]) => <article className="boardMember" key={name}><img className="boardPhoto" src={photo} alt={`Retrato de ${name}`} width={640} height={800} loading="lazy" /><h3>{name}</h3><p>{role}</p></article>)}</div></section>
    <SiteFooter />
  </main>;
}
