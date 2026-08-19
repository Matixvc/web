import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matías Villalobos | Unity Developer - Portafolio & CV",
  description: "Unity Developer especializado en XR/VR/AR, desarrollo de videojuegos y experiencias digitales interactivas. Explora mi portafolio y currículum.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Matías Villalobos | Unity Developer - Portafolio & CV",
    description: "Unity Developer especializado en XR/VR/AR, desarrollo de videojuegos y experiencias digitales interactivas. Explora mi portafolio y currículum.",
    url: "https://matiasdev-web.vercel.app/",
    siteName: "Matías Villalobos - Portafolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Matías Villalobos - Unity Developer",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matías Villalobos | Unity Developer - Portafolio & CV",
    description: "Unity Developer especializado en XR/VR/AR, desarrollo de videojuegos y experiencias digitales interactivas.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
