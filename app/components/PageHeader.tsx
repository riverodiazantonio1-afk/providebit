// Cabecera oscura de las páginas interiores (contacto, junta directiva, textos legales).

type Props = { label: string; title: string; text: string };

export function PageHeader({ label, title, text }: Props) {
  return (
    <header className="pageHeader">
      <p className="sectionLabel">{label}</p>
      <h1>{title}</h1>
      <p className="pageHeaderText">{text}</p>
    </header>
  );
}
