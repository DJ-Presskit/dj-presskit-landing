"use client";
import DefaultButton from "@/components/Buttons/DefaultButton";
import GradientIcon from "@/components/Icons/GradientIcon";
import Text from "@/components/Text/Text";
import { GlowingEffect } from "@/components/ui/GlowingEffect";
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

export default function Cards() {
  return (
    <div className="flex flex-col section-py section-mb section-max-w section-px mx-auto items-center">
      <Text
        Tag={"h4"}
        variant="title"
        className="bg-clip-text bg-gradient-to-tl from-gray-200 to-neutral-600 text-transparent py-4 mb-[10vh]"
      >
        ¿Por qué elegirnos?
      </Text>
      <div className="h-full grid grid-rows-none grid-cols-1 md:grid-cols-2 gap-10 xl:grid-cols-3 mb-10">
        <GridItem
          icon={<Rocket size={30} className="" />}
          title="En menos de 72hs"
          description="Tu presskit profesional listo para publicar en menos de tres días hábiles."
          index={0}
        />
        <GridItem
          icon={<UserPen size={30} className="" />}
          title="Adaptado a vos"
          description="Incluye tu bio, redes sociales, rider técnico y próximas fechas de eventos."
          index={1}
        />
        <GridItem
          icon={<Link size={30} className="" />}
          title="Compartible"
          description="Un solo link para compartir en todas tus redes sociales y con tus contactos."
          index={2}
        />
        <GridItem
          icon={<Headphones size={30} className="" />}
          title="Presencia profesional"
          description="Potenciamos tu marca personal como DJ para que tu imagen refleje la calidad de tu música."
          index={3}
        />
        <GridItem
          icon={<Flame size={30} className="" />}
          title="Producto único"
          description="Un diseño exclusivo que te hace destacar frente a toda la competencia del mercado."
          index={4}
        />
        <GridItem
          icon={<Brain size={30} className="" />}
          title="Sin complicaciones"
          description="Solo respondés unas preguntas y nosotros nos encargamos de todo el proceso."
          index={5}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 1,
          ease: "easeOut",
        }}
      >
        <DefaultButton href="https://calendly.com/ramifazio/dj-presskit-interview">
          CREA TU PRESSKIT
        </DefaultButton>
      </motion.div>
    </div>
  );
}

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  index: number;
}

const GridItem = ({ icon, title, description, index }: GridItemProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.2,
        ease: "easeOut",
      }}
      className={`h-full pointer-events-none cursor-cell backdrop-blur-sm group min-h-[300px] gap-10 lg:h-[250px] relative rounded-2xl border-2 border-neutral-500 p-8 flex flex-col justify-between`}
    >
      <GlowingEffect
        spread={80}
        glow={true}
        borderWidth={4}
        disabled={false}
        proximity={150}
        inactiveZone={0}
      />
      <div className="flex flex-col lg:items-start items-center gap-5">
        <GradientIcon icon={icon} />
        <Text
          Tag={"h5"}
          variant="subtitle"
          className="lg:text-left flex items-center cursor-default"
        >
          {title}
        </Text>
      </div>
      <Text variant="content" className="lg:text-left text-neutral-500">
        {description}
      </Text>
    </motion.article>
  );
};
