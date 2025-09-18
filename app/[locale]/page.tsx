"use client";
import Hero from "@/views/Hero";
import CTA from "@/views/CTA";
import SoundCloudSupportBanner from "@/views/SoundCloudSupportBanner";
import TheProblem from "@/views/TheProblem";
import HowItsWorks from "@/views/HowItsWorks";
import Includes from "@/views/Includes";
import BeforeAfter from "@/views/BeforeAfter";
import WhyCapsules from "@/views/WhyCapsules";
import Reviews from "@/views/Reviews";
import GuaranteeBanner from "@/views/GuaranteeBanner";
import Prices from "@/views/Prices";

export default function Home() {
  return (
    <main className="relative h-full">
      <Hero />
      <TheProblem />
      <HowItsWorks />
      <CTA />
      <Includes />
      <WhyCapsules />
      <BeforeAfter />
      <Reviews />
      <Prices />
      <GuaranteeBanner />
      <SoundCloudSupportBanner />
    </main>
  );
}
