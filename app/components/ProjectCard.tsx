import { SubstackIcon } from "./icons";

export type Project = {
  title: string;
  description: string;
  image: string;
  /** Encuadre de la foto, si el centro no es la mejor parte (p. ej. "center 42%"). */
  imagePosition?: string;
  /** Si el proyecto ya tiene web, toda la tarjeta enlaza a ella. */
  link?: { href: string; label: string };
};

export function ProjectCard({ title, description, image, imagePosition, link }: Project) {
  return (
    <article className={link ? "project projectLinked" : "project"}>
      <div className="projectImage">
        <img src={image} alt="" style={{ objectPosition: imagePosition }} />
      </div>

      <div className="projectBody">
        {link ? (
          <span className="substackBadge"><SubstackIcon /> En Substack</span>
        ) : (
          <span className="pill">En desarrollo</span>
        )}

        {/* En las tarjetas con enlace, el enlace del título cubre toda la tarjeta (ver CSS). */}
        <h3>{link ? <a href={link.href} target="_blank" rel="noopener noreferrer">{title}</a> : title}</h3>
        <p>{description}</p>

        {link && <span className="projectMore">{link.label} <span aria-hidden="true">→</span></span>}
      </div>
    </article>
  );
}
