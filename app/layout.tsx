import type { Metadata } from "next";
import { Bebas_Neue, Quicksand } from "next/font/google";
import "./globals.css";
import ExternalTags from "@/components/ExternalTags";
import Providers from "@/components/Providers";
import Footer from "@/components/Footer/Footer";

const bebasNeue = Bebas_Neue({
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
  title:
    "DJ Presskit -  Armamos sitios personalizados para DJs. Profesionales, rápidos y listos para compartir.",
  description:
    "Armamos sitios personalizados para DJs. Profesionales, rápidos y listos para compartir.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ExternalTags />
      </head>
      <body
        className={`${bebasNeue.variable} ${quicksand.variable} antialiased`}
      >
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
