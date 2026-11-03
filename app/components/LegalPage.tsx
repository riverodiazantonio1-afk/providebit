import Link from "next/link";
import { legalTexts, type LegalPageType } from "../lib/legal";
import { PageHeader } from "./PageHeader";

export function LegalPage({ type }: { type: LegalPageType }) {
  const page = legalTexts[type];

  return (
    <main>
      <PageHeader label="Información legal" title={page.title} text={page.intro} />

      <article className="legalContent">
        <aside className="legalNote">{page.update}</aside>

        {page.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.body && <p>{section.body}</p>}
            {section.list && (
              <ul>
                {section.list.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            )}
          </section>
        ))}

        <p>
          Consulta también el <Link href="/aviso-legal">Aviso legal</Link>,
          la <Link href="/politica-privacidad">Política de privacidad</Link> y
          la <Link href="/politica-cookies">Política de cookies</Link>.
        </p>
      </article>
    </main>
  );
}
