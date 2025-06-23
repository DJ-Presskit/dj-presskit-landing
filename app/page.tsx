"use client";
import Cards from "@/views/Cards";
import Hero from "@/views/Hero";
import FAQ from "@/views/FAQ";
import { ProposalCards } from "@/views/ProposalCards";
import CTA from "@/views/CTA";
import FAQSchema from "@/components/FAQSchema";
import OrganizationSchema from "@/components/OrganizationSchema";
import Capsules from "@/views/Capsules";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    delay(1000).then(() => {
      if (typeof window !== "undefined" && window.location.hash) {
        const id = window.location.hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  }, []);

  return (
    <main className="relative h-full">
      <FAQSchema />
      <OrganizationSchema />
      <Hero />
      <Cards />
      <Capsules />
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
