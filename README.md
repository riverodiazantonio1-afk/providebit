# providebit.es

Sitio web de la Asociación Cultural Providebit, construido con [Next.js](https://nextjs.org) y publicado como web estática en GitHub Pages.

## Estructura

```
app/
  layout.tsx            # Estructura común: menú, pie de página y aviso de cookies
  globals.css           # Estilos de toda la web, ordenados por secciones
  page.tsx              # Página de inicio (los textos de proyectos y principios están al principio del archivo)
  contacto/             # Página y formulario de contacto
  junta-directiva/      # Página de la junta directiva (lista de miembros al principio del archivo)
  aviso-legal/, politica-privacidad/, politica-cookies/   # Páginas legales
  components/           # Piezas reutilizables (menú, pie, cookies, cabeceras, tarjeta de proyecto, iconos)
  lib/
    site.ts             # Datos de la asociación (correo, NIF, dirección) y enlaces del menú
    legal.tsx           # Textos de las páginas legales
public/                 # Imágenes y recursos estáticos (incluye CNAME con el dominio)
  brand/                # Logos oficiales en SVG (del sistema de diseño)
  fonts/                # Fuente de la marca: Archivo (normal, cursiva y Condensed para titulares)
.github/workflows/      # Publicación automática en GitHub Pages
```

### Sistema de diseño

Colores, tipografías, espaciados y radios siguen el sistema de diseño de Providebit
(https://claude.ai/artifact/UzEo8SLkMSLKefmbydhz2h). Los tokens están como variables
CSS al principio de `app/globals.css`, con los mismos nombres (`--cream`, `--brown`,
`--ink`, `--space-*`, `--radius-*`…). Usa siempre esas variables, no colores sueltos.

### Cambios habituales

- **Correo, dirección o NIF**: `app/lib/site.ts` (se actualiza en toda la web).
- **Añadir o editar un proyecto**: lista `projects` en `app/page.tsx`. Si el proyecto tiene web, añade `link` y la tarjeta enlazará a ella.
- **Miembros de la junta**: lista `board` en `app/junta-directiva/page.tsx`.
- **Textos legales**: `app/lib/legal.tsx`.

## Publicación

Cada vez que se suben cambios a la rama `main`, GitHub Actions compila la web
(`npm run build`, que genera la carpeta `out/`) y la publica en GitHub Pages,
servida en https://providebit.es.

## Desarrollo local (opcional)

Requisitos: Node.js 22 o superior.

| Comando         | Descripción                                          |
|-----------------|------------------------------------------------------|
| `npm install`   | Instala las dependencias                             |
| `npm run dev`   | Vista previa en http://localhost:3000                |
| `npm run build` | Genera la web estática en `out/`                     |
| `npm start`     | Sirve la carpeta `out/` para revisarla               |
