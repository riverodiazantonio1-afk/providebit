import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Providebit | Asociación Cultural",
  description: "Providebit acoge, respalda y da cobertura a proyectos católicos de difusión del Evangelio.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "Providebit | Asociación Cultural",
    description: "Proyectos que echan raíces.",
    images: ["/og.png"],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Providebit", description: "Proyectos que echan raíces.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
