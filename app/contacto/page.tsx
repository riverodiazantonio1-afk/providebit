import { PageHeader } from "../components/PageHeader";
import { site } from "../lib/site";
import { ContactForm } from "./ContactForm";

export default function Contacto() {
  return (
    <main>
      <PageHeader
        label="Contacta con nosotros"
        title="Hablemos de una obra que pueda dar fruto."
        text="Cuéntanos en qué podemos ayudarte o cómo te gustaría colaborar. Te responderemos lo antes posible."
      />

      <section className="contactContent">
        <div className="contactAside">
          <h2>Estamos para escucharte.</h2>
          <p>Si prefieres, también puedes escribirnos directamente a <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
          <p>Providebit es una asociación cultural legalmente constituida en Navarra, España.</p>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
