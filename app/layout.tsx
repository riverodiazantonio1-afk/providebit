import type { Metadata } from "next";
import { CookieConsent } from "./components/CookieConsent";
import { SiteFooter } from "./components/SiteFooter";
import { SiteNav } from "./components/SiteNav";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://providebit.es"),
  title: "Providebit | Asociación Cultural",
  description: "Providebit acoge, sostiene y da cobertura a proyectos apostólicos que forman a padres, sacerdotes, laicos y consagrados para vivir su vocación cristiana con plenitud y hondura.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/favicon.png", type: "image/png" }],
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Providebit | Asociación Cultural",
    description: "Proyectos que echan raíces.",
    images: ["/og.png"],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Providebit", description: "Proyectos que echan raíces.", images: ["/og.png"] },
};

// Estructura común a todas las páginas: menú, contenido, pie y aviso de cookies.
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <SiteNav />
        {children}
        <SiteFooter />
        <CookieConsent />
      </body>
    </html>
  );
}
