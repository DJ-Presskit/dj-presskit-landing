import Cards from "@/views/Cards";
import Hero from "@/views/Hero";
import FAQ from "@/views/FAQ";
import { ProposalCards } from "@/views/ProposalCards";
import CTA from "@/views/CTA";
import FAQSchema from "@/components/FAQSchema";
import OrganizationSchema from "@/components/OrganizationSchema";

export default function Home() {
  return (
    <main className="relative h-full">
      <FAQSchema />
      <OrganizationSchema />
      <Hero />
      <Cards />
      <ProposalCards />
      <CTA />
      <FAQ />
      <div
        className={
          "h-[100px] translate-y-[99px] w-full  absolute bottom-0 left-0 bg-gradient-to-b from-secondary to-transparent z-50"
        }
      ></div>
    </main>
  );
}
