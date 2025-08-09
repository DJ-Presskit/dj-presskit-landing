"use client";
import { CardItemType } from "@/@types";
import GradientIcon from "@/components/Icons/GradientIcon";
import Text from "@/components/Text/Text";
import { useLocalizedData } from "@/hooks/useLocalizedData";
import {useTranslations} from "next-intl";
import { motion } from "framer-motion";
import {
  Brain,
  Flame,
  Headphones,
  Link,
  Rocket,
  Sparkles,
  UserPen,
} from "lucide-react";

// Mapeo de iconos para renderizar dinámicamente
const iconComponents = {
  Rocket,
  UserPen,
  Link,
  Headphones,
  Flame,
  Brain,
} as const;

export default function Cards() {
  const {benefitsCards} = useLocalizedData();
  const t = useTranslations('cards');
  return (
    <div className="flex flex-col section-py section-mb section-max-w section-px mx-auto items-center">
      <Text
        Tag={"h4"}
        variant="title"
        className="bg-clip-text bg-gradient-to-tl from-gray-200 to-neutral-600 text-transparent py-4 mb-[10vh]"
      >
        {t('title')}
      </Text>
      <div className="h-full grid grid-rows-none grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        {benefitsCards.map((card, index) => (
          <GridItem key={card.title} card={card} index={index} />
        ))}
      </div>
    </div>
  );
}

interface GridItemProps {
  card: CardItemType;
  index: number;
}

const GridItem = ({ card, index }: GridItemProps) => {
  const IconComponent =
    iconComponents[card.icon as keyof typeof iconComponents];

  return (
    <motion.article
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className={`h-full pointer-events-none backdrop-blur-sm group min-h-[300px] gap-10 lg:min-h-auto lg:h-[250px] relative rounded-2xl border-2 border-neutral-500 p-8 flex flex-col justify-between`}
    >
      <div className="flex flex-col lg:items-start items-center gap-5">
        <GradientIcon icon={<IconComponent size={30} className="" />} />
        <Text
          Tag={"h5"}
          variant="subtitle"
          className="lg:text-left flex items-center cursor-default"
        >
          {card.title}
        </Text>
      </div>
      <Text variant="content" className="lg:text-left text-neutral-500">
        {card.description}
      </Text>
    </motion.article>
  );
};
