// Encabezado de sección: etiqueta y título a la izquierda, texto breve a la derecha.

type Props = { label: string; title: string; text: string };

export function SectionHeading({ label, title, text }: Props) {
  return (
    <div className="sectionHeading">
      <div>
        <p className="sectionLabel">{label}</p>
        <h2>{title}</h2>
      </div>
      <p>{text}</p>
    </div>
  );
}
