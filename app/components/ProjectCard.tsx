import { GlobeIcon, SubstackIcon } from "./icons";

export type Project = {
  title: string;
  description: string;
  image: string;
  /** Encuadre de la foto, si el centro no es la mejor parte (p. ej. "center 42%"). */
  imagePosition?: string;
  /** Si el proyecto ya tiene web, toda la tarjeta enlaza a ella. */
  link?: { href: string; label: string; platform: "substack" | "web" };
};

/** Distintivo de la tarjeta según dónde se publique el proyecto. */
function Badge({ platform }: { platform?: "substack" | "web" }) {
  if (platform === "substack") return <span className="badge substackBadge"><SubstackIcon /> En Substack</span>;
  if (platform === "web") return <span className="badge webBadge"><GlobeIcon /> Sitio web</span>;
  return <span className="badge pill">En desarrollo</span>;
}

export function ProjectCard({ title, description, image, imagePosition, link }: Project) {
  return (
    <article className={link ? "project projectLinked" : "project"}>
      <div className="projectImage">
        <img src={image} alt="" style={{ objectPosition: imagePosition }} />
      </div>

      <div className="projectBody">
        <Badge platform={link?.platform} />

        {/* En las tarjetas con enlace, el enlace del título cubre toda la tarjeta (ver CSS). */}
        <h3>{link ? <a href={link.href} target="_blank" rel="noopener noreferrer">{title}</a> : title}</h3>
        <p>{description}</p>

        {link && <span className="projectMore">{link.label} <span aria-hidden="true">→</span></span>}
      </div>
    </article>
  );
}
