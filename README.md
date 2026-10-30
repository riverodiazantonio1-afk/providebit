# providebit.es

Sitio web de la Asociación Providebit, construido con [vinext](https://github.com/cloudflare/vinext) (Next.js sobre Cloudflare Workers).

## Tecnología

- **Framework**: Next.js 19 (React Server Components) vía vinext
- **Runtime**: Cloudflare Workers
- **Estilos**: Tailwind CSS 4
- **Base de datos**: Cloudflare D1 + Drizzle ORM (opcional)
- **TypeScript**: sí

## Estructura

```
app/                  # Páginas y componentes de la aplicación
  components/         # Componentes reutilizables (footer, cookies, páginas legales)
  aviso-legal/        # Aviso legal
  politica-cookies/   # Política de cookies
  politica-privacidad/# Política de privacidad
  contacto/           # Formulario de contacto
  junta-directiva/    # Página de la junta directiva
public/               # Imágenes y recursos estáticos
db/                   # Esquema de base de datos (Drizzle)
worker/               # Entry point del Worker de Cloudflare
```

## Desarrollo local

**Requisitos**: Node.js `>=22.13.0`

```bash
npm install
npm run dev
```

## Comandos

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo local |
| `npm run build` | Compilar para producción |
| `npm run lint` | Linting con ESLint |
| `npm test` | Build + tests de HTML renderizado |
| `npm run db:generate` | Generar migraciones Drizzle |

## Despliegue

El sitio está configurado para desplegar en Cloudflare Workers (compatible también con GPT Sites).
