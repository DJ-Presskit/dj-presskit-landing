"use client";
import Hero from "@/views/Hero";
import FAQ from "@/views/FAQ";
import { ProposalCards } from "@/views/ProposalCards";
import CTA from "@/views/CTA";
import Capsules from "@/views/Capsules";
import SoundCloudSupportBanner from "@/components/soundcloud/SoundCloudSupportBanner";
import TheProblem from "@/views/TheProblem";
import HowItsWorks from "@/views/HowItsWorks";
import Includes from "@/views/Includes";

export default function Home() {
  return (
    <main className="relative h-full">
      <Hero />
      <SoundCloudSupportBanner />
      <TheProblem />
      <HowItsWorks />
      <CTA />
      <Includes />
      {/* <Capsules />
      <ProposalCards />
      <FAQ /> */}
    </main>
  );
}
