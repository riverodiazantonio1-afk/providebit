import type { NextConfig } from "next";

// Exportación estática: `npm run build` genera la carpeta `out/` con HTML,
// CSS e imágenes listos para publicarse en GitHub Pages.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
