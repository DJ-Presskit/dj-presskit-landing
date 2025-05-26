import { BackgroundBeams } from "@/components/AnimatedBackgrounds/BackgroundBeams";
import DefaultButton from "@/components/Buttons/DefaultButton";
import Text from "@/components/Text/Text";
import Cards from "@/views/Cards";
import Hero from "@/views/Hero";

export default function Home() {
  return (
    <main className="relative h-full">
      <Hero />
      <Cards />
      <div
        className={
          "h-[100px] translate-y-[99px] w-full  absolute bottom-0 left-0 bg-gradient-to-b from-secondary to-transparent z-50"
        }
      ></div>
    </main>
  );
}
