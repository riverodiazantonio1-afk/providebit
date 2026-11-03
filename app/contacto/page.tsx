import { SiteNav } from "../components/SiteNav";
import { ContactForm } from "./ContactForm";
import { SiteFooter } from "../components/SiteFooter";

export default function Contacto() { return <main><SiteNav className="legalNav" /><header className="contactHeader"><div><p className="eyebrow">Contacta con nosotros</p><h1>Hablemos de una obra que pueda dar fruto.</h1><p>Cuéntanos en qué podemos ayudarte o cómo te gustaría colaborar. Te responderemos lo antes posible.</p></div></header><section className="contactContent"><div className="contactAside"><h2>Estamos para escucharte.</h2><p>Si prefieres, también puedes escribirnos directamente a <a href="mailto:info@providebit.es">info@providebit.es</a>.</p><p>Providebit es una asociación cultural legalmente constituida en Navarra, España.</p></div><ContactForm /></section><SiteFooter /></main>; }
