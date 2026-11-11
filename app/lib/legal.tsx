import Link from "next/link";
import { site } from "./site";

// Textos de las páginas legales. Cada sección puede tener un párrafo, una lista o ambos.

type Section = { heading: string; body?: React.ReactNode; list?: React.ReactNode[] };
type LegalText = { title: string; intro: string; update: string; sections: Section[] };
export type LegalPageType = "aviso-legal" | "politica-privacidad" | "politica-cookies";

const contact = <>{site.name} · NIF {site.nif} · {site.address} · <a href={`mailto:${site.email}`}>{site.email}</a></>;

export const legalTexts: Record<LegalPageType, LegalText> = {
  "aviso-legal": {
    title: "Aviso legal",
    intro: "Condiciones generales de acceso y uso del sitio web providebit.es.",
    update: "Última actualización: 4 de agosto de 2026. Este aviso se completará cuando finalicen los trámites de inscripción de la asociación.",
    sections: [
      { heading: "1. Datos identificativos", body: <>En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico, esta web es titularidad de una asociación sin ánimo de lucro de inspiración católica constituida al amparo de la Ley Orgánica 1/2002.</>, list: [contact, <>Registro de Asociaciones de Navarra: número de inscripción pendiente de asignación.</>, <>Sitio web: providebit.es.</>] },
      { heading: "2. Objeto y aceptación", body: "Este aviso regula el acceso y uso de este sitio web. La navegación por él atribuye la condición de persona usuaria e implica la aceptación de estas condiciones." },
      { heading: "3. Finalidad del sitio web", body: "La web da a conocer los fines, misión, visión y proyectos de la Asociación y facilita el contacto con personas y entidades interesadas en colaborar. No está destinada a la contratación electrónica de bienes o servicios salvo indicación expresa." },
      { heading: "4. Condiciones de uso", body: "La persona usuaria se compromete a utilizar el sitio de forma lícita, respetuosa y conforme a la legislación aplicable. Queda prohibido usarlo con fines ilícitos, lesivos o que puedan dañar sus sistemas o los derechos de terceros." },
      { heading: "5. Propiedad intelectual", body: "Los contenidos, diseños, marcas y signos distintivos de la web, incluido «Providebit», pertenecen a la Asociación Cultural Providebit o a terceros que han autorizado su uso. No podrán reproducirse o explotarse sin autorización, salvo los usos legalmente permitidos." },
      { heading: "6. Enlaces y responsabilidad", body: "La web puede enlazar a páginas de terceros. La Asociación no controla ni asume responsabilidad por sus contenidos, políticas o disponibilidad. Tampoco garantiza la disponibilidad ininterrumpida del sitio, aunque procurará mantenerlo actualizado y seguro." },
      { heading: "7. Legislación aplicable", body: "Este aviso se rige por la legislación española. Cualquier controversia se someterá a los juzgados y tribunales competentes conforme a la normativa aplicable." },
    ],
  },
  "politica-privacidad": {
    title: "Política de privacidad",
    intro: "Cómo tratamos tus datos personales cuando visitas providebit.es, te pones en contacto con nosotros o haces una donación.",
    update: "Última actualización: 11 de noviembre de 2026. Esta política se redacta conforme al RGPD y a la Ley Orgánica 3/2018 (LOPDGDD).",
    sections: [
      { heading: "1. Responsable del tratamiento", list: [contact] },
      { heading: "2. Datos, finalidad y base jurídica", body: "Tratamos los datos que nos facilitas al contactar por correo electrónico para atender tu consulta, sobre la base de tu consentimiento. También podemos tratar datos identificativos y de contacto para gestionar la relación con personas asociadas, colaboradoras, donantes o voluntarias, conforme a la relación asociativa e interés legítimo. Las analíticas solo se activan con consentimiento previo." },
      { heading: "3. Donaciones", body: <>Las donaciones se realizan a través de una página de pago alojada en pay.providebit.es y gestionada por Stripe Payments Europe, Ltd. (Irlanda). Para tramitar tu aportación, Stripe recoge tu nombre, tu correo electrónico, los datos de tu medio de pago, el importe y la fecha. Providebit no recibe ni almacena el número completo de tu tarjeta: solo conoce el importe, la fecha, tu nombre, tu correo electrónico y los últimos dígitos del medio de pago. Tratamos estos datos para tramitar la donación, enviarte el justificante, agradecerte la aportación y llevar la contabilidad de la asociación. La base jurídica es tu solicitud de hacer la donación y el cumplimiento de nuestras obligaciones contables y fiscales. Stripe actúa como prestador del servicio de pago y, para fines propios como la prevención del fraude o el cumplimiento de la normativa financiera, como responsable independiente conforme a su <a href="https://stripe.com/es/privacy" target="_blank" rel="noreferrer">política de privacidad</a>.</> },
      { heading: "4. Destinatarios", body: <>No cedemos datos a terceros salvo obligación legal. Los proveedores tecnológicos pueden acceder a información limitada para prestar el servicio. Los datos de las donaciones los trata Stripe, que puede transferirlos fuera del Espacio Económico Europeo con las garantías previstas en el RGPD, como las cláusulas contractuales tipo de la Comisión Europea. Google Analytics, si se activa tras tu consentimiento, puede implicar transferencias internacionales con las garantías del proveedor. Consulta la <Link href="/politica-cookies">Política de Cookies</Link>.</> },
      { heading: "5. Conservación", body: "Conservamos los datos el tiempo necesario para cumplir la finalidad para la que se recabaron y los plazos legales aplicables. Los datos de las donaciones se conservan durante los plazos que exige la normativa contable y fiscal. Los datos analíticos se conservarán durante el plazo mínimo razonable configurado en la herramienta." },
      { heading: "6. Tus derechos", body: <>Puedes solicitar acceso, rectificación, supresión, oposición, limitación, portabilidad o retirar tu consentimiento escribiendo a <a href={`mailto:${site.email}`}>{site.email}</a>. Si consideras que no hemos atendido adecuadamente tu solicitud, puedes reclamar ante la <a href="https://www.aepd.es" target="_blank" rel="noreferrer">Agencia Española de Protección de Datos</a>.</> },
      { heading: "7. Seguridad y menores", body: "Aplicamos medidas técnicas y organizativas razonables para proteger los datos. La web no se dirige específicamente a menores de 14 años; si tienes conocimiento de que un menor nos ha enviado datos sin el consentimiento necesario, ponte en contacto con nosotros." },
      { heading: "8. Cambios", body: "Podemos actualizar esta política para adaptarla a cambios legales o a nuevos tratamientos. Recomendamos revisarla periódicamente." },
    ],
  },
  "politica-cookies": {
    title: "Política de cookies",
    intro: "Qué tecnologías utiliza providebit.es, para qué sirven y cómo puedes gestionarlas.",
    update: "Última actualización: 4 de agosto de 2026, conforme al artículo 22.2 de la LSSI-CE y a la guía de cookies de la AEPD.",
    sections: [
      { heading: "1. Qué son las cookies", body: "Son pequeños archivos que el sitio puede instalar en el navegador para almacenar o recuperar información. Esta web usa almacenamiento local para recordar la preferencia de consentimiento." },
      { heading: "2. Tu consentimiento", body: "Al entrar en la web puedes aceptar, rechazar o configurar las cookies no esenciales. Ninguna cookie analítica se activa antes de tu consentimiento. Puedes cambiar tu decisión en cualquier momento desde «Configurar cookies» en el pie de página." },
      { heading: "3. Tecnologías utilizadas", list: [<>Preferencia de consentimiento: tecnología propia, necesaria, guardada en el almacenamiento local del navegador hasta que se borren sus datos.</>, <>Google Analytics (cuando se configure y solo con consentimiento): cookies _ga, _ga_&lt;container-id&gt; y _gid para elaborar estadísticas agregadas de uso; sus plazos habituales son de hasta dos años.</>] },
      { heading: "4. Google Fonts y analítica", body: "Las tipografías se cargan desde Google Fonts; esta conexión técnica puede transmitir la dirección IP a Google, sin instalar cookies de seguimiento. Google Analytics está pendiente de activación y solo funcionará si se configura y se obtiene tu consentimiento." },
      { heading: "5. Gestión desde el navegador", body: "Además del panel de esta web, puedes bloquear o eliminar cookies desde los ajustes de tu navegador. Consulta la ayuda de Chrome, Firefox, Safari o Microsoft Edge para conocer los pasos." },
      { heading: "6. Actualizaciones", body: "Podemos actualizar esta política si incorporamos nuevas herramientas o cambia la normativa aplicable." },
    ],
  },
};
