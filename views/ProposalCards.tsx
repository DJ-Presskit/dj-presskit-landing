"use client";
import React, { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import Text from "@/components/Text/Text";
import { Check, LayoutTemplate, Sparkles, SquarePen } from "lucide-react";
import DefaultButton from "@/components/Buttons/DefaultButton";
import { twMerge } from "tailwind-merge";
import { useMediaQuery } from "@/hooks";

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
            href="https://template.dj-presskit.com"
            title="Plan Presskit Básico"
            description="Ideal para DJs que quieren una presencia web rápida, clara y sin complicaciones."
            price="Desde $150.000"
            icon={<LayoutTemplate size={40} />}
            includes={[
              "Diseño estático moderno basado en plantilla.",
              "Formulario de contacto integrado conectado a Google Sheets.",
              "Sitio responsive (adaptado a móviles).",
              "Hosting incluido.",
              "Dominio de dj-presskit incluido",
              "Entrega en menos de 48hs.",
            ]}
          ></Card>

          <Card
            href="https://template-avanzado.dj-presskit.com"
            title="Plan Presskit Avanzado"
            description="Un presskit más visual, más dinámico y con funciones extra para destacar."
            price="Desde $220.000"
            icon={<Sparkles size={40} />}
            includes={[
              "Todo lo del Plan Básico",
              "Diseño con animaciones y transiciones parallax.",
              "Sección de próximos eventos conectada a Google Sheets.",
              "Dominio personalizado incluido.",
              "Email profesional con tu dominio.",
              "Entrega en menos de 72hs.",
            ]}
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
          </Card>

          <Card
            href="https://calendly.com/ramifazio/dj-presskit-interview"
            title="Plan Presskit Premium"
            description="Para DJs exigentes que buscan un sitio a medida, sin límites de creatividad ni funcionalidad."
            price="Desde $650.000"
            icon={<SquarePen size={40} />}
            includes={[
              "Todo lo del Plan Avanzado",
              "Diseño único desde cero (no plantilla).",
              "Animaciones, efectos y performance top tier.",
              "Secciones personalizadas a elección.",
              "Asesoramiento 1 a 1 en todo el proceso.",
              "Entrega en 20 días aprox.",
            ]}
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [241, 154, 62], // #f19a3e (accent-2)
                [245, 178, 107], // versión más clara
              ]}
              dotSize={5}
            />
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
  includes = [],
  href,
}: {
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  includes?: string[];
  href: string;
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover="hover"
      initial="initial"
      animate="initial"
      className="backdrop-blur-sm group/canvas-card relative flex items-center justify-center rounded-2xl border-2 w-full border-neutral-500 py-10 md:py-20 px-10 h-[70vh] overflow-hidden bg-secondary"
      variants={{
        hover: {
          scale: 1.025,
          boxShadow: "0px 10px 50px rgba(89, 198, 186, 0.35)",
          transition: { duration: 0.4 },
        },
      }}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {children}
            <div className="absolute inset-0 [mask-image:radial-gradient(600px_at_center,white,transparent)] bg-secondary" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenido */}
      <div className="relative z-20 text-center h-full w-full flex items-center justify-center flex-col">
        <motion.div
          className="absolute h-full w-full flex items-center justify-center"
          animate={{
            opacity: hovered ? 0 : 1,
            y: hovered ? -20 : 0,
          }}
          transition={{ duration: 0.5, delay: hovered ? 0 : 2.5 }}
        >
          {icon}
        </motion.div>

        <motion.h2
          className="text-xl font-bold text-white"
          animate={{
            opacity: hovered ? 1 : 0,
            y: hovered ? 0 : 20,
          }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          {title}
        </motion.h2>

        <motion.p
          className="text-sm text-gray-300 mt-2"
          animate={{
            opacity: hovered ? 1 : 0,
            y: hovered ? 0 : 20,
          }}
          transition={{ delay: 0.25, duration: 0.4 }}
        >
          {description}
        </motion.p>

        <motion.p
          className={twMerge(
            "text-lg font-semibold text-accent mt-4 mb-auto",
            title === "Plan Presskit Premium" && "text-accent-2"
          )}
          animate={{
            opacity: hovered ? 1 : 0,
            y: hovered ? 0 : 20,
          }}
          transition={{ delay: 0.35, duration: 0.4 }}
        >
          {price}
        </motion.p>

        {includes.map((item, i) => (
          <motion.li
            key={i}
            animate={{
              opacity: hovered ? 1 : 0,
              x: hovered ? 0 : -20,
            }}
            transition={{ delay: i * 0.4, duration: 0.4 }}
            className="flex gap-2 w-full text-left"
          >
            <Check className="text-green-400 mt-1 min-w-4 min-h-4 max-w-4 max-h-4" />
            {item}
          </motion.li>
        ))}
        <motion.div
          className="mt-auto"
          animate={{
            opacity: hovered ? 1 : 0,
            y: hovered ? 0 : 20,
          }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          <DefaultButton href={href}>
            {title === "Plan Presskit Premium"
              ? "AGENDA UNA REUNION"
              : "VER MÁS"}
          </DefaultButton>
        </motion.div>
      </div>
    </motion.div>
  );
};
