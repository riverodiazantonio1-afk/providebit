import { LinkedInIcon } from "../components/icons";
import { PageHeader } from "../components/PageHeader";
import { SectionHeading } from "../components/SectionHeading";

const board = [
  { name: "Antonio Rivero Díaz", role: "Presidente", photo: "/images/junta/antonio-rivero.jpg", linkedin: "https://www.linkedin.com/in/antonio-rivero-diaz/" },
  { name: "Calixto Rivero Díaz", role: "Vocal", photo: "/images/junta/calixto-rivero.jpg", linkedin: "https://www.linkedin.com/in/calixtorivero/" },
  { name: "Fátima Pardinas Armisen", role: "Vocal", photo: "/images/junta/fatima-pardinas.jpg", linkedin: "https://www.linkedin.com/in/fpardinas/" },
  { name: "Mercedes Pardinas Armisen", role: "Secretaria", photo: "/images/junta/mercedes-pardinas.jpg", linkedin: "https://www.linkedin.com/in/mpardinas/" },
];

export default function JuntaDirectiva() {
  return (
    <main>
      <PageHeader
        label="Las personas"
        title="Junta directiva."
        text="Conoce a las personas que sirven y acompañan la misión de Providebit."
      />

      <section className="section boardSection">
        <SectionHeading
          label="Quiénes somos"
          title="Al servicio de estas obras."
          text="Somos una asociación pequeña, con nombre y rostro, puesta al servicio de los proyectos que acogemos."
        />

        <div className="boardGrid">
          {board.map((member) => (
            <article className="boardMember" key={member.name}>
              <img className="boardPhoto" src={member.photo} alt={`Retrato de ${member.name}`} width={640} height={800} loading="lazy" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <a
                className="boardLinkedin"
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Perfil de LinkedIn de ${member.name}`}
                title="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
