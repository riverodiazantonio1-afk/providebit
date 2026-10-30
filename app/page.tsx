import { CookieConsent } from "./components/CookieConsent";
import { SiteFooter } from "./components/SiteFooter";

const projects = [
  { title: "Padres Católicos", description: "Contenidos, formación y experiencias para que los padres cultiven un hogar cristiano y una vida interior unida a Jesús.", image: "/images/padres.jpg" },
  { title: "Te receto un Santo", description: "Una iniciativa para acercar la vida de los santos de una manera cercana, actual y esperanzadora.", image: "/images/sociedad.jpg" },
  { title: "Bajo tu manto", description: "Objetos de piedad y devoción que acercan la fe a lo cotidiano y ayudan a compartirla con otros.", image: "/images/bajo-tu-manto.jpg" },
  { title: "Editorial Providebit", description: "Edición de obras que alimentan una vida cristiana profunda, comenzando por Don Dolindo Ruotolo.", image: "/images/lectura-formacion.jpg" },
];

const principles = [
  ["La civilización del amor", "Cristo ha venido a traer al mundo la paz y el amor verdaderos.", "Amor"],
  ["La transmisión del Evangelio", "La fe recibida se comparte: es lo único que puede sanar el mundo.", "Palabra"],
  ["El poder del Espíritu Santo", "Él capacita y sostiene a quienes están llamados a servir.", "Espíritu"],
  ["Capacitar a los agentes pastorales", "Padres, sacerdotes, laicos y consagrados llamados a formar a otros.", "Servicio"],
  ["Todo lo bueno nos pertenece", "Rescatamos lo bueno de todo esfuerzo humano y lo traemos hacia Cristo.", "Esperanza"],
];

const ways = [
  ["Contenidos", "Para conocer y meditar la Palabra de Dios."],
  ["Formaciones", "Para vivir la propia vocación con mayor hondura."],
  ["Artículos religiosos", "Signos sencillos que acerquen a Dios a la vida cotidiana."],
  ["Conferencias y eventos", "Encuentros que reúnan, formen y envíen."],
];

export default function Home() {
  return <main>
    <nav className="nav" aria-label="Navegación principal">
      <a href="/" className="brand" aria-label="Providebit, inicio"><img src="/logo.png" alt="Providebit" /></a>
      <div className="navLinks"><a href="#proyectos">Proyectos</a><a href="#asociacion">La asociación</a><a href="/junta-directiva">Junta directiva</a><a href="/contacto" className="navCta">Contactar</a></div>
    </nav>

    <header className="hero" id="inicio">
      <div className="heroOverlay" />
      <div className="heroContent">
        <p className="eyebrow light">Asociación cultural sin ánimo de lucro · Legalmente constituida en Navarra</p>
        <h1>Asociación Cultural Providebit</h1>
        <p className="heroText">Damos sostén a proyectos apostólicos que ayudan a conocer la Palabra de Dios, ponerla por obra y transmitir su amor a los demás.</p>
        <div className="heroActions"><a className="button buttonPrimary" href="#hacer-posible">Hacer una donación</a><a className="button buttonGhost" href="/contacto">Contactar</a></div>
      </div>
      <a className="scrollCue" href="#proyectos">Proyectos <span>↓</span></a>
    </header>

    <section className="projects projectsFirst" id="proyectos">
      <div className="sectionHeading"><div><div className="sectionLabel">Curso 2026–2027</div><h2>Proyectos apostólicos en desarrollo.</h2></div><p>Cuatro iniciativas que queremos sacar adelante durante el próximo curso.</p></div>
      <div className="projectGrid projectGridFour">{projects.map((project) => <article className="project" key={project.title}><img src={project.image} alt="" /><div className="projectBody"><span className="pill">En desarrollo</span><h3>{project.title}</h3><p>{project.description}</p></div></article>)}</div>
      <p className="projectNote">Bajo tu manto está promovido por uno de los socios de la asociación. Providebit lo acompaña respetando su identidad y su propósito propio.</p>
      <div className="projectsCta"><p>Si quieres ayudar a que alguno de estos proyectos dé su primer paso, puedes hacer una aportación.</p><a className="button buttonPrimary" href="#hacer-posible">Hacer una donación <span>→</span></a></div>
    </section>

    <section className="intro" id="asociacion">
      <div className="sectionLabel">Nuestra razón de ser</div>
      <div className="introGrid"><h2>Conocer la Palabra, confiar en ella y ponerla por obra.</h2><div><p className="lead">Providebit acoge y respalda iniciativas que ayudan a conocer a Dios, amarle y vivir de acuerdo con su Palabra.</p><p>Abraham confió en el Señor, obedeció a su palabra y la puso por obra. Fue padre de innumerables naciones y sigue siendo nuestro padre en la fe, extendida hoy por los cinco continentes.</p><p>Creemos que el fruto pastoral verdadero nace de ese mismo camino: escuchar a Dios, conocer su Palabra, recibir de Él la fuerza y obrar en consecuencia. No buscamos ser atractivos por nosotros mismos ni perseguimos un fin económico; queremos transmitir el amor de Dios a las gentes.</p></div></div>
      <div className="quotePair"><blockquote>«Dios proveerá el cordero para el holocausto, hijo mío.»<cite>Génesis 22, 8</cite></blockquote><blockquote>«Llevamos este tesoro en vasijas de barro, para que se vea que un poder tan extraordinario viene de Dios y no de nosotros.»<cite>2 Corintios 4, 7</cite></blockquote></div>
    </section>

    <section className="principles">
      <div className="principlesIntro"><div className="sectionLabel">Lo que nos guía</div><h2>Una fe que toma forma en la cultura.</h2><p>Queremos dar a otras personas oportunidades reales para conocer la tradición espiritual cristiana, al Dios Amor y todo lo que alimenta la fe.</p></div>
      <div className="principleList">{principles.map(([title, description, mark], index) => <article className="principle" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div><div className="principleMark" aria-hidden="true">{mark}</div></article>)}</div>
    </section>

    <section className="mission">
      <div className="sectionLabel">Misión y visión</div>
      <div className="missionGrid"><article><span>Misión</span><h2>Formar y acompañar</h2><p>A padres de familia, sacerdotes, laicos y consagrados para que vivan su vocación con mayor hondura y, a su vez, formen a otros.</p></article><article><span>Visión</span><h2>Ser fieles a la promesa</h2><p>La transformación pertenece al Señor de la historia. Nuestra parte es obedecer a su Palabra, servir con fidelidad y confiar en que Él proveerá lo necesario.</p></article></div>
    </section>

    <section className="jose">
      <div className="joseFeature"><div><div className="sectionLabel">Nuestro modelo</div><h2>La Sagrada Familia: una obediencia que cambió el mundo.</h2><p className="joseLead">La gran obra de la salvación creció en Nazaret, en el silencio fiel de Jesús, María y José. También las vocaciones pequeñas, vividas con obediencia y formación, pueden dar fruto mucho más allá de lo visible.</p><div className="missionGrid joseGrid"><article><h3>Servicio sin protagonismo</h3><p>Como san José, queremos poner nuestros talentos al servicio de una obra que no lleva nuestro nombre.</p></article><article><h3>Fidelidad confiada</h3><p>Sin gustar al mundo ni buscar resultados inmediatos: escuchando al Señor y dejando que Él transforme los corazones.</p></article></div></div><figure className="joseArtwork"><img src="/images/san-jose-providebit.png" alt="La Sagrada Familia: san José, la Virgen María y el Niño Jesús" /><figcaption>Ite ad Ioseph</figcaption></figure></div>
    </section>

    <section className="services" id="como">
      <div className="sectionHeading"><div><div className="sectionLabel">Distintas formas de servir</div><h2>Una misma misión, obras diversas.</h2></div><p>Los proyectos pueden adoptar formas distintas, pero todos buscan dar a conocer a Dios y ayudar a poner su Palabra por obra.</p></div>
      <div className="serviceGrid">{ways.map(([title, text], index) => <article className="service" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="support" id="hacer-posible">
      <div><div className="sectionLabel light">Colabora</div><h2>Haz posible estos proyectos.</h2></div>
      <div className="supportContent"><p className="supportLead">Si alguna de estas iniciativas resuena en tu corazón, tu aportación puede ayudar a que dé su primer paso.</p><p>También puedes contactar con nosotros para ofrecer tiempo, conocimientos, contactos o cualquier otro tipo de ayuda. Estamos aquí para escucharte.</p><div className="heroActions"><a className="button buttonLight" href="/contacto">Quiero donar <span>→</span></a><a className="button buttonGhost" href="/contacto">Contactar</a></div><p className="supportNote">Actualmente, las aportaciones a Providebit no dan derecho a deducción fiscal.</p></div>
    </section>

    <SiteFooter /><CookieConsent />
  </main>;
}
