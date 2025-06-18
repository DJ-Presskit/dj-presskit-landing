"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Text from "../components/Text/Text";
import {
  CheckCheck,
  ChevronDown,
  Clock,
  Eye,
  Lightbulb,
  PencilRuler,
  Pin,
  Wrench,
  UserPen,
} from "lucide-react";
import GradientIcon from "@/components/Icons/GradientIcon";
import { FAQItemType } from "@/@types";
import { twMerge } from "tailwind-merge";
import LandingLink from "@/components/LandingLink/LandingLink";
import { faqData, iconMap } from "@/DATA";
import DefaultButton from "@/components/Buttons/DefaultButton";

const iconComponents = {
  CheckCheck,
  Pin,
  Clock,
  PencilRuler,
  Lightbulb,
  Eye,
  UserPen,
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-py section-px section-max-w mx-auto">
      <div className="flex flex-col items-center gap-10 mb-[10vh]">
        <Text
          Tag={"h4"}
          variant="title"
          className="bg-clip-text bg-gradient-to-tl from-gray-200 to-neutral-600 text-transparent py-4"
        >
          Preguntas Frecuentes
        </Text>
        <Text variant="content" className="">
          Resolvé tus dudas sobre nuestro servicio de presskit profesional
        </Text>
      </div>
      <div className="space-y-5">
        {faqData.map((item, index) => (
          <FAQItem
            idx={index}
            key={index}
            item={item}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
}

const FAQItem = ({
  item,
  isOpen,
  onClick,
  idx,
}: {
  item: any;
  isOpen: boolean;
  onClick: () => void;
  idx: number;
}) => {
  const IconComponent =
    iconComponents[item.icon as keyof typeof iconComponents];
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: idx * 0.02,
        ease: "easeOut",
      }}
      className="border-2 border-neutral-500 rounded-2xl overflow-hidden backdrop-blur-sm"
    >
      <button
        onClick={onClick}
        className="w-full p-5 md:p-8 flex items-center justify-between group cursor-pointer gap-5 md:gap-8"
      >
        <div className="flex items-center gap-5 md:gap-8">
          <GradientIcon
            icon={<IconComponent size={30} />}
            className={twMerge(isOpen && "[&>svg]:stroke-accent")}
          />
          <Text
            Tag={"h5"}
            variant="subtitle"
            className="text-left text-sm xl:text-xl"
          >
            {item.question}
          </Text>
        </div>
        <ChevronDown
          className={`w-8 h-8 transition duration-300 group-hover:stroke-accent ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            <div className="p-8 pt-0">
              {Array.isArray(item.answer) ? (
                <Text variant="content" className="text-neutral-500 text-left">
                  <ul className="list-disc list-inside space-y-1">
                    {item.answer.map((line: string, i: number) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </Text>
              ) : item.link ? (
                <Text
                  variant="content"
                  className="text-neutral-500 text-left flex flex-col gap-5"
                >
                  {item.answer.split("clickeando acá")[0]}
                  <LandingLink
                    href={item.link}
                    newTab
                    containerClassName="mx-auto"
                    className="hover:opacity-50"
                  >
                    <strong>{item.linkText}</strong>
                  </LandingLink>
                  {item.answer.split("clickeando acá")[1]}
                </Text>
              ) : (
                <Text variant="content" className="text-neutral-500">
                  {item.answer}
                </Text>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
