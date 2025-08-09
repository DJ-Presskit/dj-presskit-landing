import type { Metadata } from "next";
import { Michroma, Quicksand } from "next/font/google";
import "../globals.css";
import ExternalTags from "@/components/ExternalTags";
import Providers from "@/components/Providers";
import Footer from "@/components/Footer/Footer";
import { Analytics } from "@/components/Analytics";
import { WebViewWarning } from "@/components/WebViewWarning";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, AppLocale } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import LanguageSwitcher from "@/components/Nav/LanguageSwitcher";
import FAQSchema from "@/components/FAQSchema";
import OrganizationSchema from "@/components/OrganizationSchema";

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
  metadataBase: new URL("https://dj-presskit.com"),
  title:
    "DJ Presskit - Sitios Web Profesionales para DJs | Landing Page Personalizada",
  description:
    "Creamos sitios web profesionales y personalizados para DJs. Tu presskit digital listo en menos de 48 horas hábiles, con diseño moderno y optimizado para compartir con promotores y clubes.",
  keywords:
    "DJ presskit, sitio web DJ, landing page DJ, promoción DJ, portfolio DJ, presskit digital, presskit, press kit, media kit",
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
    url: "https://dj-presskit.com",
    siteName: "DJ Presskit",
    title: "DJ Presskit - Sitios Web Profesionales para DJs",
    description:
      "Creamos sitios web profesionales y personalizados para DJs. Tu presskit digital listo en menos de 48 horas hábiles.",
    images: [
      {
        url: "/logos/default-logo.png",
        secureUrl: "/logos/default-logo.png",
        width: 1200,
        height: 630,
        alt: "dj-presskit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DJ Presskit - Sitios Web Profesionales para DJs",
    description:
      "Creamos sitios web profesionales y personalizados para DJs. Tu presskit digital listo en menos de 48 horas hábiles.",
    creator: "@dj-presskit",
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

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: langParam } = await params;
  const lang = langParam as AppLocale;
  if (!routing.locales.includes(lang)) {
    notFound();
  }
  setRequestLocale(lang);
  const messages = await getMessages({ locale: lang });
  return (
    <html lang={lang}>
      <head>
        <ExternalTags />
        <link rel="canonical" href="https://dj-presskit.com" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${michroma.variable} ${quicksand.variable} antialiased`}
      >
        <FAQSchema />
        <OrganizationSchema />
        <NextIntlClientProvider messages={messages} locale={lang}>
          <Providers>
            <WebViewWarning />
            <LanguageSwitcher className="fixed top-5 right-5 z-[100]" />
            {children}
            <Footer />
            <Analytics />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
