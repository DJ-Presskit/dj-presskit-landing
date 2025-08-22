"use client";
import { Capsule, Project } from "@/@types";
import AnimatedSeparator from "@/components/AnimatedSeparator";
import Modal from "@/components/capsuleSection/Modal";
import ProjectComponent from "@/components/capsuleSection/Project";
import DecryptedText from "@/components/Text/DecryptedText";
import Text from "@/components/Text/Text";
import { useLocalizedData } from "@/hooks/useLocalizedData";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cog, Lock } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Capsules() {
  const { CAPSULES } = useLocalizedData();

  return (
    <section id="capsules" className={twMerge("w-full flex flex-col")}>
      {CAPSULES.map((item, index) => {
        return <CapsuleSection key={index} {...item} capsuleIndex={index} />;
      })}
    </section>
  );
}

interface CapsuleSectionProps extends Capsule {
  capsuleIndex: number;
}

// Type para el estado del modal
export interface ModalState {
  active: boolean;
  index: number;
  showOpen: boolean;
}

const CapsuleSection: React.FC<CapsuleSectionProps> = ({
  projects,
  title,
  description,
  commingSoon,
  demoUrl,
  capsuleIndex,
}) => {
  const t = useTranslations("capsules");

  const [modal, setModal] = useState<ModalState>({
    active: false,
    index: 0,
    showOpen: true,
  });

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "50% start"],
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const opacity2 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 0, 1, 0]
  );

  return (
    <div
      ref={container}
      className={twMerge(
        "container mx-auto w-full px-6 xl:px-0",
        // En mobile, si es comingSoon, usar flex-col simple
        commingSoon && demoUrl
          ? "flex !h-full lg:!h-screen flex-col gap-6 lg:flex-row lg:items-start lg:gap-10 mb-[20vh] lg:mb-0"
          : "flex items-start gap-10",
        capsuleIndex % 2 && "lg:flex-row-reverse",
        // Solo aplicar altura cuando no es comingSoon en mobile
        projects.length > 5 ? "h-[200vh]" : "h-[150vh]"
      )}
    >
      <div
        className={twMerge(
          "w-full flex-1 space-y-5",
          // En mobile, si es comingSoon, no usar sticky y usar flex-col
          commingSoon && demoUrl
            ? "lg:sticky lg:top-[20%] xl:top-[30%] lg:z-10 flex flex-col"
            : "sticky top-[20%] lg:top-[30%] z-10"
        )}
      >
        <motion.div style={{ opacity: opacity1 }}>
          {projects.length === 10 && (
            <Lock
              className={twMerge(
                "size-10 text-accent-2 mb-5",
                capsuleIndex % 2 && "lg:!ml-auto"
              )}
            />
          )}
          {commingSoon && (
            <motion.div
              className={twMerge(
                "mb-5 w-fit h-fit",
                commingSoon && demoUrl && "mx-auto lg:mx-0 lg:mb-5",
                capsuleIndex % 2 && "lg:ml-auto"
              )}
              animate={{
                rotate: [0, 180, 220, 0],
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 2,
              }}
            >
              <Cog className="size-10 text-accent-2" />
            </motion.div>
          )}
          <Text
            Tag={"h2"}
            variant="title"
            className={twMerge(
              "text-left",
              commingSoon &&
                demoUrl &&
                "text-center flex justify-center gap-2 lg:block",
              capsuleIndex % 2 && "lg:text-right"
            )}
          >
            {title.split(" ")[0]}
            <br
              className={twMerge(commingSoon && demoUrl && "hidden lg:block")}
            />
            <span
              className="font-bold text-accent"
              style={{ fontFamily: "var(--font-primary)" }}
            >
              {title.split(" ")[1]}
            </span>
          </Text>
        </motion.div>
        <motion.div
          style={{ opacity: opacity2 }}
          className={twMerge(
            "max-w-[400px]",
            // En mobile centrar, en desktop mantener alineación original
            commingSoon &&
              demoUrl &&
              "mx-auto text-center lg:mx-0 lg:text-left",
            capsuleIndex % 2 && "lg:ml-auto lg:text-right"
          )}
        >
          <Text variant="content">{description}</Text>
        </motion.div>
      </div>
      <div
        className={twMerge(
          "w-full flex-1 xl:flex-2 flex flex-col items-center justify-center overflow-y-auto self-center"
        )}
      >
        {commingSoon && demoUrl ? (
          <Link href={demoUrl} target="_blank" className="w-full">
            <button className="cursor-pointer flex flex-col items-center justify-end w-full group overflow-hidden relative">
              <div className="absolute w-0 h-auto group-hover:w-full blur-xl transition-all duration-700 ease-out top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-radial from-accent aspect-square via-secondary via-60% to-secondary -z-10 rounded-full" />
              <AnimatedSeparator transformOrigin="center" />
              <Text
                variant="subtitle"
                className={twMerge("transition p-10 uppercase")}
              >
                <DecryptedText
                  text={t("knowIt")}
                  speed={150}
                  animateOn="view"
                  revealDirection="center"
                />
              </Text>
              <AnimatedSeparator transformOrigin="center" />
            </button>
          </Link>
        ) : (
          projects.map((project, index) => {
            return (
              <ProjectComponent
                index={index}
                capsuleIndex={capsuleIndex}
                setModal={setModal}
                key={index}
                {...(project as Project)}
              />
            );
          })
        )}
      </div>
      <Modal modal={modal} projects={projects} />
    </div>
  );
};
