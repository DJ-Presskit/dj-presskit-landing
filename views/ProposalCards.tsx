"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import Text from "@/components/Text/Text";
import { LayoutTemplate, Sparkles, SquarePen } from "lucide-react";

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
        <div className="h-full grid grid-rows-none grid-cols-1 md:grid-cols-2 gap-10 xl:grid-cols-3">
          <Card
            title="Plantillas Simples"
            description="Diseños básicos y profesionales"
            price="Desde $150.000"
            icon={<LayoutTemplate size={40} />}
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [89, 198, 186], // #59c6ba
                [137, 214, 206], // versión más clara
              ]}
              dotSize={5}
            />
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
          </Card>

          <Card
            title="Plantillas Premium"
            description="Diseños avanzados con animaciones"
            price="Desde $220.000"
            icon={<Sparkles size={40} />}
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [89, 198, 186], // #59c6ba
                [137, 214, 206], // versión más clara
              ]}
              dotSize={5}
            />
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
          </Card>

          <Card
            title="Diseños Personalizados"
            description="Diseño único a tu medida"
            price="Desde $650.000"
            icon={<SquarePen size={40} />}
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [89, 198, 186], // #59c6ba
                [137, 214, 206], // versión más clara
              ]}
              dotSize={5}
            />
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
          </Card>
        </div>
      </div>
    </section>
  );
}

const Card = ({
  title,
  description,
  price,
  icon,
  children,
}: {
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="backdrop-blur-sm group/canvas-card flex items-center justify-center rounded-2xl border-2 w-full border-neutral-500 p-8 h-[60vh] overflow-hidden"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center ">
          {icon}
        </div>
        {hovered && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
              {title}
            </h2>
            <p className="dark:text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-2 group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
              {description}
            </p>
            <p className="dark:text-white text-lg opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
              {price}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};
