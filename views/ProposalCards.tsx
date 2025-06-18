"use client";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import Text from "@/components/Text/Text";
import { Check, LayoutTemplate, Sparkles, SquarePen } from "lucide-react";
import DefaultButton from "@/components/Buttons/DefaultButton";
import { twMerge } from "tailwind-merge";
import LandingLink from "@/components/LandingLink/LandingLink";
import { plans } from "@/DATA";

// Mapeo de string a componente de icono
const iconMap: Record<string, React.ReactNode> = {
  LayoutTemplate: <LayoutTemplate size={40} />,
  Sparkles: <Sparkles size={40} />,
  SquarePen: <SquarePen size={40} />,
};

export function ProposalCards() {
  return (
    <section className="w-full section-px section-max-w mx-auto section-my section-py">
      <div className="">
        <Text
          Tag={"h4"}
          variant="title"
          className="bg-clip-text bg-gradient-to-tl from-gray-200 to-neutral-600 text-transparent py-4 mb-[10vh]"
        >
          Nuestros Planes
        </Text>
        <div className="h-full grid grid-rows-none grid-cols-1 gap-10 xl:grid-cols-3">
          {plans.map((plan, idx) => (
            <Card key={plan.title} {...plan}>
              {/* CanvasRevealEffect solo para los planes avanzados y premium */}
              {plan.icon === "Sparkles" && (
                <CanvasRevealEffect
                  animationSpeed={3}
                  containerClassName="bg-black"
                  colors={[
                    [89, 198, 186],
                    [137, 214, 206],
                  ]}
                  dotSize={5}
                />
              )}
              {plan.icon === "SquarePen" && (
                <CanvasRevealEffect
                  animationSpeed={3}
                  containerClassName="bg-black"
                  colors={[
                    [241, 154, 62],
                    [245, 178, 107],
                  ]}
                  dotSize={5}
                />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const Card = ({
  title,
  description,
  price,
  children,
  includes = [],
  href,
  buttonText,
}: {
  title: string;
  description: string;
  price: string;
  children?: React.ReactNode;
  includes?: string[];
  href: string;
  buttonText: string;
}) => {
  return (
    <div className="backdrop-blur-sm group/canvas-card relative flex items-center justify-center rounded-2xl border-2 w-full border-neutral-500 py-10 md:py-20 px-10 min-h-[70vh] overflow-hidden bg-secondary">
      <div
        className="absolute inset-0 [mask-image:radial-gradient(600px_at_center,white,transparent)] bg-secondary"
        style={{ filter: "blur(1px)" }}
      >
        {children}
      </div>

      <div className="relative z-20 text-center h-full w-full flex items-center justify-center flex-col gap-10">
        <Text Tag={"h5"} variant="subtitle">
          {title}
        </Text>

        <Text variant="custom" className="text-sm">
          {description}
        </Text>

        <Text
          variant="custom"
          className={twMerge(
            "text-lg font-semibold text-accent mt-4 mb-auto",
            title === "Plan Presskit Premium" && "text-accent-2"
          )}
        >
          {price}
        </Text>

        <div>
          {includes.map((item, i) => (
            <li key={i} className="flex gap-2 w-full text-left">
              <Check className="text-green-400 mt-1 min-w-4 min-h-4 max-w-4 max-h-4" />
              {item}
            </li>
          ))}
        </div>
        <div className="mt-auto">
          <LandingLink href={href}>
            <DefaultButton
              noGlow={title === "Plan Presskit Básico" ? true : false}
            >
              {buttonText}
            </DefaultButton>
          </LandingLink>
        </div>
      </div>
    </div>
  );
};
