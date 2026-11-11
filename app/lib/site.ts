// Datos generales de la asociación que se repiten en varias páginas.
export const site = {
  name: "Asociación Cultural Providebit",
  domain: "providebit.es",
  email: "info@providebit.es",
  /** Enlace de pago de Stripe para donaciones; tras pagar redirige a /agradecimiento-donacion. */
  donationUrl: "https://pay.providebit.es/b/dRm28t53j2CDdqE2wZfUQ02",
  nif: "G71562854 (provisional)",
  address: "Calle Arriba 35, 1º B, 31430 Aoiz (Navarra), España",
};

// Enlaces del menú principal. Tras ellos, el botón destacado «Donar» (ver SiteNav).
export const navLinks = [
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/#asociacion", label: "La asociación" },
  { href: "/junta-directiva", label: "Junta directiva" },
  { href: "/contacto", label: "Contacto" },
];
