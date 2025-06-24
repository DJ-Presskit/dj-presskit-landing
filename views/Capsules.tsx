"use client";

import { Capsule, Project } from "@/@types";
import Modal from "@/components/capsuleSection/Modal";
import ProjectComponent from "@/components/capsuleSection/Project";
import Text from "@/components/Text/Text";
import { CAPSULES } from "@/DATA";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Capsules() {
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
interface ModalState {
  active: boolean;
  index: number;
}

const CapsuleSection: React.FC<CapsuleSectionProps> = ({
  projects,
  title,
  description,
  capsuleIndex,
}) => {
  const [modal, setModal] = useState<ModalState>({ active: false, index: 0 });

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
        "container mx-auto w-full flex items-start gap-10 px-6 xl:px-0",
        capsuleIndex % 2 && "flex-row-reverse",
        projects.length > 5 ? "h-[200vh]" : "h-[150vh]"
      )}
    >
      <div className="w-full sticky top-[25%] lg:top-[40%] z-10 flex-1 space-y-5">
        <motion.div style={{ opacity: opacity1 }}>
          <Text
            Tag={"h2"}
            variant="title"
            className={twMerge("text-left", capsuleIndex % 2 && "text-right")}
          >
            {/* CAPSULA{" "}
          <span
          className="font-bold text-accent"
          style={{ fontFamily: "var(--font-primary)" }}
          >
          GENESIS
          </span> */}

            {title.split(" ")[0]}
            <br />
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
            capsuleIndex % 2 && "ml-auto text-right"
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
        {projects.map((project, index) => {
          return (
            <ProjectComponent
              index={index}
              capsuleIndex={capsuleIndex}
              setModal={setModal}
              key={index}
              {...(project as Project)}
            />
          );
        })}
      </div>
      <Modal modal={modal} projects={projects} />
    </div>
  );
};
