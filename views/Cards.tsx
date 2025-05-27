"use client";
import Text from "@/components/Text/Text";
import { GlowingEffect } from "@/components/ui/GlowingEffect";
import { motion } from "framer-motion";
import { Brain, Flame, Headphones, Link, Rocket, Sparkles } from "lucide-react";

export default function Cards() {
  return (
    <div className="h-full pb-[200px] section-pt grid grid-rows-none grid-cols-1 md:grid-cols-2 gap-10 xl:grid-cols-3 section-max-w section-px mx-auto">
      <GridItem
        icon={<Rocket size={30} className="" />}
        title="En menos de 48hs"
        description="Tu presskit profesional listo para publicar en menos de dos días hábiles."
        index={0}
      />
      <GridItem
        icon={<Headphones size={30} className="" />}
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
        icon={<Sparkles size={30} className="" />}
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
      className={`h-full backdrop-blur-sm group min-h-[300px] gap-10 lg:h-[250px] relative rounded-2xl border-2 border-neutral-500 p-8 flex flex-col justify-between`}
    >
      <GlowingEffect
        spread={80}
        glow={true}
        borderWidth={4}
        disabled={false}
        proximity={150}
        inactiveZone={0}
      />
      <div className="flex flex-col lg:flex-row items-center gap-5">
        <div className="relative lg:border-2 p-2 rounded-2xl border-neutral-500 group-hover:border-accent-2/20 transition duration-800">
          <svg width="0" height="0" className="absolute">
            <defs>
              <linearGradient
                id="iconGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" style={{ stopColor: "#e5e5e5" }} />
                <stop offset="100%" style={{ stopColor: "#525252" }} />
              </linearGradient>
            </defs>
          </svg>
          <div className="[&>svg]:stroke-[url(#iconGradient)]">{icon}</div>
        </div>
        <Text
          Tag={"h5"}
          variant="subtitle"
          className="lg:text-left flex items-center cursor-default"
        >
          {title.split("").map((l, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-fit"
            >
              {l}
            </motion.div>
          ))}
        </Text>
      </div>
      <Text variant="content" className="lg:text-left text-neutral-500">
        {description}
      </Text>
    </motion.article>
  );
};
