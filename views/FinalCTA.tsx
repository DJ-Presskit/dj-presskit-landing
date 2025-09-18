"use client";
import React from "react";
import Text from "@/components/Text/Text";
import DefaultButton from "@/components/Buttons/DefaultButton";
import Icon from "@/components/Icons/Icon";
import { useTranslations } from "next-intl";
import { useLocalizedData } from "@/hooks/useLocalizedData";
import { twMerge } from "tailwind-merge";

export default function FinalCTA({ className }: { className?: string }) {
  const t = useTranslations("finalCTA");
  const { calendlyLink } = useLocalizedData();

  const handleCTA = () => {
    window.open(calendlyLink, "_blank");
  };

  return (
    <section className={twMerge("w-full bg-secondary section-py", className)}>
      <div className="section-max-w section-px mx-auto space-y-5 flex flex-col items-center">
        {/* Secondary message */}
        <div className="text-center ">
          <Text variant="content" className="text-lg text-neutral-400">
            {t("secondary")}
          </Text>
        </div>
        <DefaultButton
          variant="basic"
          href={calendlyLink}
          className="uppercase"
          trackingLabel="hero_section"
        >
          {t("cta")}
        </DefaultButton>
      </div>
    </section>
  );
}
