import { ProjectCard, type Project } from "./components/ProjectCard";
import { SectionHeading } from "./components/SectionHeading";
import { site } from "./lib/site";

const projects: Project[] = [
  {
    title: "Padres Católicos",
    description: "Contenidos, formación y experiencias para que los padres cultiven un hogar cristiano y una vida interior unida a Jesús.",
    image: "/images/padres.jpg",
    link: { href: "https://padrescatolicos.substack.com", label: "Leer Padres Católicos", platform: "substack" },
  },
  {
    title: "Te receto un Santo",
    description: "Una iniciativa para acercar la vida de los santos de una manera cercana, actual y esperanzadora.",
    image: "/images/sociedad.jpg",
    link: { href: "https://terecetounsanto.com/", label: "Visitar Te receto un Santo", platform: "web" },
  },
  {
    title: "Bajo tu manto",
    description: "Objetos de piedad y devoción que acercan la fe a lo cotidiano y ayudan a compartirla con otros.",
    image: "/images/bajo-tu-manto.jpg",
    imagePosition: "center 42%",
  },
  {
    title: "Editorial Providebit",
    description: "Edición de obras que alimentan una vida cristiana profunda, comenzando por Don Dolindo Ruotolo.",
    image: "/images/lectura-formacion.jpg",
  },
];

const values = [
  { title: "Confianza en la Providencia", text: "Dios proveerá: ponemos los medios y dejamos en sus manos el fruto.", mark: "Confianza" },
  { title: "Fidelidad a la Palabra", text: "La fe recibida se comparte: es lo único que puede sanar el mundo.", mark: "Palabra" },
  { title: "Docilidad al Espíritu Santo", text: "Él capacita y sostiene a quienes están llamados a servir.", mark: "Espíritu" },
  { title: "Servicio sin protagonismo", text: "Como san José, ponemos nuestros talentos al servicio de una obra que no lleva nuestro nombre.", mark: "Servicio" },
  { title: "Formación que se multiplica", text: "Padres, sacerdotes, laicos y consagrados que, formados, forman a su vez a otros.", mark: "Formar" },
  { title: "Todo lo bueno nos pertenece", text: "Rescatamos lo bueno de todo esfuerzo humano y lo traemos hacia Cristo.", mark: "Esperanza" },
  { title: "Transparencia", text: "Rendimos cuentas de cada aportación y del destino que le damos.", mark: "Claridad" },
];

// Testimonios bíblicos de que «Dios proveerá».
const testimonies = [
  { title: "Abraham", ref: "Gn 22,1-14", text: "Subió al monte sin saber cómo se cumpliría la promesa, y allí Dios proveyó el cordero." },
  { title: "La viuda de Sarepta", ref: "1 Re 17,8-16", text: "Compartió con Elías lo último que le quedaba, y no le faltaron la harina ni el aceite mientras duró la sequía." },
  { title: "Los cinco panes y dos peces", ref: "Jn 6,1-13", text: "Un muchacho ofreció lo poco que tenía; en manos de Jesús alimentó a una multitud y aún sobraron doce cestos." },
  { title: "Los primeros cristianos", ref: "Hch 4,32-35", text: "Llenos del Espíritu Santo, ponían sus bienes en común, y entre ellos no había ningún necesitado." },
];

const ways = [
  { title: "Contenidos", text: "Para conocer y meditar la Palabra de Dios." },
  { title: "Formaciones", text: "Para vivir la propia vocación con mayor hondura." },
  { title: "Artículos religiosos", text: "Signos sencillos que acerquen a Dios a la vida cotidiana." },
  { title: "Conferencias y eventos", text: "Encuentros que reúnan, formen y envíen." },
];

/** 1 → "01", 2 → "02"… */
const number = (index: number) => String(index + 1).padStart(2, "0");

export default function Home() {
  return (
    <main>
      {/* Portada */}
      <header className="hero">
        <div className="heroContent">
          <p className="sectionLabel light">Asociación cultural sin ánimo de lucro · Legalmente constituida en Navarra</p>
          <h1>Asociación Cultural Providebit</h1>
          <p className="heroText">Damos sostén a proyectos apostólicos que ayudan a conocer la Palabra de Dios, ponerla por obra y transmitir su amor a los demás.</p>
          <div className="actions">
            <a className="button buttonPrimary" href="#hacer-posible">Hacer una donación</a>
            <a className="button buttonGhost" href="/contacto">Contactar</a>
          </div>
        </div>
        <a className="scrollCue" href="#proyectos">Proyectos <span>↓</span></a>
      </header>

      {/* Proyectos */}
      <section className="section projects" id="proyectos">
        <SectionHeading
          label="Curso 2026–2027"
          title="Proyectos apostólicos en desarrollo."
          text="Cuatro iniciativas que queremos sacar adelante durante este curso."
        />
        <div className="projectGrid">
          {projects.map((project) => <ProjectCard key={project.title} {...project} />)}
        </div>
        <p className="projectNote">Bajo tu manto está promovido por uno de los socios de la asociación. Providebit lo acompaña respetando su identidad y su propósito propio.</p>
        <div className="projectsCta">
          <p>Si quieres ayudar a que alguno de estos proyectos dé su primer paso, puedes hacer una aportación.</p>
          <a className="button buttonPrimary" href="#hacer-posible">Hacer una donación <span>→</span></a>
        </div>
      </section>

      {/* La asociación */}
      <section className="section intro" id="asociacion">
        <p className="sectionLabel">Por qué nos llamamos Providebit</p>
        <div className="introGrid">
          <h2><em lang="la">Deus providebit</em>: «Dios proveerá».</h2>
          <div>
            <p className="lead">Con esas palabras respondió Abraham a su hijo Isaac camino del monte Moria (Gn 22,8). Son nuestro nombre y también nuestra manera de trabajar.</p>
            <p>Providebit acoge y respalda iniciativas que ayudan a conocer a Dios, amarle y vivir de acuerdo con su Palabra.</p>
            <p>Abraham confió en el Señor, obedeció a su palabra y la puso por obra. Fue padre de innumerables naciones y sigue siendo nuestro padre en la fe, extendida hoy por los cinco continentes.</p>
            <p>Creemos que el fruto pastoral verdadero nace de ese mismo camino: escuchar a Dios, conocer su Palabra, recibir de Él la fuerza y obrar en consecuencia. No buscamos ser atractivos por nosotros mismos ni perseguimos un fin económico; queremos transmitir el amor de Dios a las gentes.</p>
          </div>
        </div>
        <div className="testimonies">
          <h3>Testigos de la Providencia</h3>
          <div className="serviceGrid">
            {testimonies.map((item) => (
              <article className="service" key={item.title}>
                <span>{item.ref}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="testimoniesNote">Cada aportación a Providebit es, como aquellos cinco panes, algo pequeño puesto en manos de Dios.</p>
        </div>
        <div className="quotePair">
          <blockquote>«Dios proveerá el cordero para el holocausto, hijo mío.»<cite>(Gn 22,8)</cite></blockquote>
          <blockquote>«Llevamos este tesoro en vasijas de barro, para que se vea que un poder tan extraordinario viene de Dios y no de nosotros.»<cite>(2 Co 4,7)</cite></blockquote>
        </div>
      </section>

      {/* Principios */}
      <section className="section principles">
        <div className="principlesIntro">
          <p className="sectionLabel">Nuestros valores</p>
          <h2>Una fe que toma forma en la cultura.</h2>
          <p>Queremos dar a otras personas oportunidades reales para conocer la tradición espiritual cristiana, al Dios Amor y todo lo que alimenta la fe.</p>
        </div>
        <div className="principleList">
          {values.map((principle, index) => (
            <article className="principle" key={principle.title}>
              <span>{number(index)}</span>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </div>
              <div className="principleMark" aria-hidden="true">{principle.mark}</div>
            </article>
          ))}
        </div>
      </section>

      {/* Misión y visión */}
      <section className="section mission">
        <p className="sectionLabel">Misión y visión</p>
        <div className="missionGrid">
          <article>
            <span>Misión</span>
            <h2>Formar y acompañar</h2>
            <p>Acogemos, sostenemos y damos cobertura a proyectos apostólicos que forman a padres de familia, sacerdotes, laicos y consagrados, para que vivan su vocación cristiana con plenitud y hondura y, a su vez, formen a otros.</p>
          </article>
          <article>
            <span>Visión</span>
            <h2>Una sociedad transformada por el Espíritu</h2>
            <p>Familias y comunidades que conocen la Palabra de Dios, la viven y la transmiten. Confiamos en el poder del Espíritu Santo para transformar la sociedad actual y construir la civilización del amor; nuestra parte es obedecer a su Palabra, servir con fidelidad y confiar en que Él proveerá lo necesario.</p>
          </article>
        </div>
      </section>

      {/* La Sagrada Familia */}
      <section className="section jose">
        <div>
          <p className="sectionLabel">Nuestro modelo</p>
          <h2>La Sagrada Familia: una obediencia que cambió el mundo.</h2>
          <p className="joseLead">La gran obra de la salvación creció en Nazaret, en el silencio fiel de Jesús, María y José. También las vocaciones pequeñas, vividas con obediencia y formación, pueden dar fruto mucho más allá de lo visible.</p>
          <div className="joseGrid">
            <article>
              <h3>Servicio sin protagonismo</h3>
              <p>Como san José, queremos poner nuestros talentos al servicio de una obra que no lleva nuestro nombre.</p>
            </article>
            <article>
              <h3>Fidelidad confiada</h3>
              <p>Sin gustar al mundo ni buscar resultados inmediatos: escuchando al Señor y dejando que Él transforme los corazones.</p>
            </article>
          </div>
        </div>
        <figure className="joseArtwork">
          <img src="/images/san-jose-providebit.png" alt="La Sagrada Familia: san José, la Virgen María y el Niño Jesús" />
          <figcaption>Ite ad Ioseph</figcaption>
        </figure>
      </section>

      {/* Formas de servir */}
      <section className="section services">
        <SectionHeading
          label="Distintas formas de servir"
          title="Una misma misión, obras diversas."
          text="Los proyectos pueden adoptar formas distintas, pero todos buscan dar a conocer a Dios y ayudar a poner su Palabra por obra."
        />
        <div className="serviceGrid">
          {ways.map((way, index) => (
            <article className="service" key={way.title}>
              <span>{number(index)}</span>
              <h3>{way.title}</h3>
              <p>{way.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Donaciones */}
      <section className="section support" id="hacer-posible">
        <div>
          <p className="sectionLabel light">Colabora</p>
          <h2>Haz posible estos proyectos.</h2>
        </div>
        <div className="supportContent">
          <p className="supportLead">Si alguna de estas iniciativas resuena en tu corazón, tu aportación puede ayudar a que dé su primer paso.</p>
          <p>También puedes contactar con nosotros para ofrecer tiempo, conocimientos, contactos o cualquier otro tipo de ayuda. Estamos aquí para escucharte.</p>
          <div className="actions">
            <a className="button buttonLight" href={site.donationUrl}>Quiero donar <span>→</span></a>
            <a className="button buttonGhost" href="/contacto">Contactar</a>
          </div>
          <p className="supportNote">Actualmente, las aportaciones a Providebit no dan derecho a deducción fiscal.</p>
        </div>
      </section>
    </main>
  );
}
