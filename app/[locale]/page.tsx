"use client";
import Hero from "@/views/Hero";
import FAQ from "@/views/FAQ";
import { ProposalCards } from "@/views/ProposalCards";
import CTA from "@/views/CTA";
import Capsules from "@/views/Capsules";
import SoundCloudSupportBanner from "@/components/soundcloud/SoundCloudSupportBanner";
import TheProblem from "@/views/TheProblem";

export default function Home() {
  return (
    <main className="relative h-full">
      <Hero />
      <SoundCloudSupportBanner />
      <TheProblem />
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
