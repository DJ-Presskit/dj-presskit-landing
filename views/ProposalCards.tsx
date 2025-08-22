"use client";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import Text from "@/components/Text/Text";
import { Check, LayoutTemplate, Sparkles, SquarePen } from "lucide-react";
import DefaultButton from "@/components/Buttons/DefaultButton";
import { twMerge } from "tailwind-merge";
import LandingLink from "@/components/LandingLink/LandingLink";
import { useLocalizedData } from "@/hooks/useLocalizedData";
import { PlanType } from "@/@types";
import { interleaveAttributes } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { useTranslations } from "next-intl";

// Mapeo de string a componente de icono
const iconMap: Record<string, React.ReactNode> = {
  LayoutTemplate: <LayoutTemplate size={40} />,
  Sparkles: <Sparkles size={40} />,
  SquarePen: <SquarePen size={40} />,
};

export function ProposalCards() {
  const { plans } = useLocalizedData();
  const t = useTranslations("plans");
  return (
    <section className="w-full section-px section-max-w mx-auto section-my section-py">
      <div className="">
        <Text
          Tag={"h4"}
          variant="title"
          className="bg-clip-text bg-gradient-to-tl from-gray-200 to-neutral-600 text-transparent py-4 mb-[10vh]"
        >
          {t("title")}
        </Text>
        <div className="h-full grid grid-rows-none grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20 place-items-center">
          {plans.map((plan, idx) => (
            <Card key={idx} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CardProps extends PlanType {}

const Card = ({
  id,
  title,
  description,
  price,
  includes = [],
  href,
  buttonText,
  discountText,
  discount,
}: CardProps) => {
  const { CAPSULES } = useLocalizedData();
  const t = useTranslations("plans");
  return (
    <div className="backdrop-blur-sm group/canvas-card relative flex items-center justify-center rounded-2xl border-2 w-full lg:max-w-[600px] border-neutral-500 py-10 md:py-20 px-10 min-h-[70vh] overflow-hidden bg-secondary">
      <div
        className="absolute inset-0 [mask-image:radial-gradient(600px_at_center,white,transparent)] bg-secondary"
        style={{ filter: "blur(1px)" }}
      >
        {id === "advanced" && (
          <div className="w-full h-full absolute bg-radial from-accent/40 to-transparent blur-2xl" />
        )}
        {id === "premium" && (
          <div className="w-full h-full absolute bg-radial from-accent-2/40 to-transparent blur-2xl animate-pulse" />
        )}
      </div>

      <div className="relative z-20 text-center h-full w-full flex items-center justify-center flex-col gap-10">
        {discount && (
          <span className="px-2 py-1 font-bold rounded bg-red-600 text-white text-sm animate-bounce md:absolute -top-10">
            {discountText} - CÁPSULA <strong className="text-accent">00</strong>
          </span>
        )}
        <Text Tag={"h5"} variant="subtitle">
          {title}
        </Text>

        <Text variant="custom" className="text-sm">
          {description}
        </Text>

        <div>
          <Text
            variant="custom"
            className={twMerge(
              "text-lg font-semibold text-accent mt-4 mb-auto flex relative items-center justify-center",
              id === "premium" && "text-accent-2",
              discount && "blur-[1px]"
            )}
          >
            {discount && <div className="w-full h-[3px] bg-red-600 absolute" />}
            {id === "premium" && t("from")} USD ${price}
          </Text>
          {discount && (
            <Text
              variant="custom"
              className={twMerge(
                "text-lg font-semibold text-accent mb-auto flex relative items-center justify-center",
                id === "premium" && "text-accent-2"
              )}
            >
              USD ${price - price * (discount / 100)}
            </Text>
          )}
        </div>

        <div>
          {includes.map((item, i) => (
            <li key={i} className="flex gap-2 w-full text-left">
              <Check className="text-green-400 mt-1 min-w-4 min-h-4 max-w-4 max-h-4" />
              {item}
            </li>
          ))}
        </div>
        <div className="mt-auto">
          <LandingLink
            href={href}
            trackingLabel={id === "premium" ? "premium_plan" : undefined}
          >
            <DefaultButton noGlow={id === "basic" ? true : false}>
              {buttonText}
            </DefaultButton>
          </LandingLink>
        </div>
      </div>
    </div>
  );
};
