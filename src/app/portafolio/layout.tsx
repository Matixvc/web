import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portafolio | Matías Villalobos - Unity Developer",
  description: "Explora el portafolio de proyectos de Unity, XR/VR, desarrollo de videojuegos y simulaciones 3D de Matías Villalobos.",
  openGraph: {
    title: "Portafolio | Matías Villalobos - Unity Developer",
    description: "Explora el portafolio de proyectos de Unity, XR/VR, desarrollo de videojuegos y simulaciones 3D de Matías Villalobos.",
    url: "https://matiasdev-web.vercel.app/portafolio",
    siteName: "Matías Villalobos - Portafolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Portafolio de Matías Villalobos - Unity Developer",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portafolio | Matías Villalobos - Unity Developer",
    description: "Explora el portafolio de proyectos de Unity, XR/VR, desarrollo de videojuegos y simulaciones 3D de Matías Villalobos.",
    images: ["/og-image.svg"],
  },
};

export default function PortafolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}