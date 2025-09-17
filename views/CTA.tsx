"use client";
import { motion } from "framer-motion";
import Text from "@/components/Text/Text";
import DefaultButton from "@/components/Buttons/DefaultButton";
import { MessageCircle } from "lucide-react";
import { useLocalizedData } from "@/hooks/useLocalizedData";
import VideoBackground from "@/components/VideoBackground";
import { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";

export default function CTA({ className }: { className?: string }) {
  const t = useTranslations("cta");
  const { calendlyLink } = useLocalizedData();

  return (
    <section
      className={twMerge(
        "relative section-px py-20 lg:py-40 section-mt mx-auto bg-radial from-secondary-lighter to-secondary-lighter/90 overflow-hidden",
        className
      )}
    >
      <div className="w-full h-[150px] absolute -bottom-10 left-0  bg-gradient-to-t from-secondary-lighter to-transparent"></div>
      <VideoBackground
        className="object-bottom"
        sources={[
          { src: "/videos/background.webm", type: "video/webm" },
          { src: "/videos/background.mp4", type: "video/mp4" },
        ]}
      />
      <div className="flex flex-col items-center text-center gap-10">
        <Text Tag={"h4"} variant="title">
          {t.rich("title", { br: () => <br></br> })}
        </Text>
        <Text variant="content" className="text-accent font-bold">
          {t("subtitle")}
        </Text>

        <Text variant="content" className="text-neutral-500 max-w-[600px]">
          {t.rich("desc", {
            strong: (chunk) => <strong>{chunk}</strong>,
          })}
        </Text>

        <DefaultButton
          href={calendlyLink}
          className="uppercase"
          trackingLabel="cta_section"
        >
          {t("button")}
        </DefaultButton>
      </div>
    </section>
  );
}
