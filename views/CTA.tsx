"use client";
import { motion } from "framer-motion";
import Text from "@/components/Text/Text";
import DefaultButton from "@/components/Buttons/DefaultButton";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/DATA";
import VideoBackground from "@/components/VideoBackground";

export default function CTA() {
  return (
    <section className="relative section-px py-20 lg:py-40 section-my mx-auto bg-radial from-secondary-lighter to-secondary-lighter/90 overflow-hidden">
      <VideoBackground
        className="object-bottom"
        sources={[
          { src: "/videos/background.webm", type: "video/webm" },
          { src: "/videos/background.mp4", type: "video/mp4" },
        ]}
      />
      <div className="flex flex-col items-center text-center gap-10">
        <Text Tag={"h4"} variant="title">
          Tu comunidad <br /> te está esperando
        </Text>

        <Text variant="content" className="text-neutral-500 max-w-[600px]">
          Seducí a bookers, sellos y fans con un presskit que hable por vos.
          <strong> Simplificá tu comunicación y potenciá tu marca hoy.</strong>
        </Text>

        <DefaultButton href={whatsappLink} className="uppercase">
          CONTACTANOS
        </DefaultButton>
      </div>
    </section>
  );
}
