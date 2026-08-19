import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV | Matías Villalobos - Unity Developer",
  description: "Currículum profesional de Matías Villalobos, Unity Developer especializado en XR/VR, videojuegos y simulaciones 3D. Santiago, Chile.",
  openGraph: {
    title: "CV | Matías Villalobos - Unity Developer",
    description: "Currículum profesional de Matías Villalobos, Unity Developer especializado en XR/VR, videojuegos y simulaciones 3D. Santiago, Chile.",
    url: "https://matiasdev-web.vercel.app/cv",
    siteName: "Matías Villalobos - CV",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "CV de Matías Villalobos - Unity Developer",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV | Matías Villalobos - Unity Developer",
    description: "Currículum profesional de Matías Villalobos, Unity Developer especializado en XR/VR, videojuegos y simulaciones 3D.",
    images: ["/og-image.svg"],
  },
};

export default function CVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}