# providebit.es

Sitio web de la Asociación Cultural Providebit, construido con [Next.js](https://nextjs.org) y publicado como web estática en GitHub Pages.

## Estructura

```
app/                  # Páginas y componentes de la web
  components/         # Componentes reutilizables (pie de página, cookies, páginas legales)
  aviso-legal/        # Aviso legal
  politica-cookies/   # Política de cookies
  politica-privacidad/# Política de privacidad
  contacto/           # Formulario de contacto
  junta-directiva/    # Página de la junta directiva
public/               # Imágenes y recursos estáticos (incluye CNAME con el dominio)
.github/workflows/    # Publicación automática en GitHub Pages
```

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
