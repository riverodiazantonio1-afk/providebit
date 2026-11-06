import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "../components/PageHeader";
import { site } from "../lib/site";

// Página a la que Stripe redirige tras completar una donación.
// No se indexa en buscadores: solo tiene sentido después de donar.
export const metadata: Metadata = {
  title: "Gracias por tu donación | Providebit",
  description: "Gracias por colaborar con la Asociación Cultural Providebit.",
  robots: { index: false, follow: false },
};

const nextSteps = [
  {
    title: "Justificante por correo",
    text: "En unos minutos recibirás en tu correo el justificante del pago. Si no lo ves, revisa la carpeta de correo no deseado.",
  },
  {
    title: "¿Algún problema?",
    text: `Si ves algún error en el importe o en el cargo, escríbenos a ${site.email} y lo resolveremos.`,
  },
  {
    title: "Información fiscal",
    text: "Actualmente, las aportaciones a Providebit no dan derecho a deducción fiscal.",
  },
];

const projectLinks = [
  { href: "https://padrescatolicos.substack.com", label: "Leer Padres Católicos" },
  { href: "https://terecetounsanto.com/", label: "Visitar Te receto un Santo" },
];

export default function AgradecimientoDonacion() {
  return (
    <main>
      <PageHeader
        label="Gracias de corazón"
        title="Gracias por tu donación."
        text="Tu aportación ayuda a que los proyectos que acompaña Providebit den su primer paso. Que Dios te lo pague."
      />

      <section className="section thanksNote">
        <p className="lead">Encomendamos tus intenciones en nuestra oración.</p>
        <p className="thanksSignature">
          Antonio Rivero Díaz
          <span>Presidente de la Asociación Cultural Providebit</span>
        </p>
      </section>

      <section className="section thanksSteps">
        <p className="sectionLabel">Y ahora</p>
        <div className="serviceGrid">
          {nextSteps.map((step, index) => (
            <article className="service" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section thanksFollow">
        <div>
          <p className="sectionLabel">Sigue cerca</p>
          <h2>Conoce de cerca lo que haces posible.</h2>
        </div>
        <div className="thanksFollowContent">
          <p>Puedes seguir el día a día de algunos de los proyectos en sus propias webs, o volver al inicio para conocerlos todos.</p>
          <div className="actions">
            {projectLinks.map((link) => (
              <a key={link.href} className="button buttonPrimary" href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label} <span>→</span>
              </a>
            ))}
          </div>
          <p><Link href="/#proyectos">Ver todos los proyectos</Link> · <Link href="/contacto">Colaborar de otra forma</Link></p>
        </div>
      </section>
    </main>
  );
}
