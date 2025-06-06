import type { Metadata } from "next";
import { Michroma, Quicksand } from "next/font/google";
import "./globals.css";
import ExternalTags from "@/components/ExternalTags";
import Providers from "@/components/Providers";
import Footer from "@/components/Footer/Footer";

const michroma = Michroma({
  weight: ["400"],
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const quicksand = Quicksand({
  variable: "--font-secondary",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://djpresskit.com"),
  title:
    "DJ Presskit - Sitios Web Profesionales para DJs | Landing Page Personalizada",
  description:
    "Creamos sitios web profesionales y personalizados para DJs. Tu presskit digital listo en minutos, con diseño moderno y optimizado para compartir con promotores y clubes.",
  keywords:
    "DJ presskit, sitio web DJ, landing page DJ, promoción DJ, portfolio DJ, presskit digital, presskit, press kit, media kit ",
  authors: [{ name: "DJ Presskit" }],
  creator: "DJ Presskit",
  publisher: "DJ Presskit",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://djpresskit.com",
    siteName: "DJ Presskit",
    title: "DJ Presskit - Sitios Web Profesionales para DJs",
    description:
      "Creamos sitios web profesionales y personalizados para DJs. Tu presskit digital listo en minutos.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DJ Presskit - Tu Presskit Digital Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DJ Presskit - Sitios Web Profesionales para DJs",
    description:
      "Creamos sitios web profesionales y personalizados para DJs. Tu presskit digital listo en minutos.",
    images: ["/og-image.png"],
    creator: "@djpresskit",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google:
      "google-site-verification=sHPUJpGQ2ToDcU7lhz4o0sPXUEWte0vzvDI-MtO2yOQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <ExternalTags />
        <link rel="canonical" href="https://djpresskit.com" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${michroma.variable} ${quicksand.variable} antialiased`}
      >
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
