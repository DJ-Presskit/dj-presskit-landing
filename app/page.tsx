import Cards from "@/views/Cards";
import Hero from "@/views/Hero";
import FAQ from "@/views/FAQ";
import { ProposalCards } from "@/views/ProposalCards";
import FAQSchema from "@/components/FAQSchema";
import OrganizationSchema from "@/components/OrganizationSchema";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://djpresskit.com",
  },
  openGraph: {
    title: "DJ Presskit - Tu Presskit Digital Profesional",
    description:
      "Crea tu presskit digital profesional en minutos. La mejor manera de promocionarte como DJ.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DJ Presskit - Tu Presskit Digital Profesional",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="relative h-full">
      <FAQSchema />
      <OrganizationSchema />
      <Hero />
      <Cards />
      <ProposalCards />
      <FAQ />
      <div
        className={
          "h-[100px] translate-y-[99px] w-full  absolute bottom-0 left-0 bg-gradient-to-b from-secondary to-transparent z-50"
        }
      ></div>
    </main>
  );
}
