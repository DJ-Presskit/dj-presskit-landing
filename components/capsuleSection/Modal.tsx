"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Text from "../Text/Text";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Project as ProjectType } from "@/@types";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

interface ModalProps {
  modal: { active: boolean; index: number };
  projects: ProjectType[];
}

export default function Modal({ modal, projects }: ModalProps) {
  const { active, index } = modal;

  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 1.2,
      ease: "power3",
    });

    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 1.2,
      ease: "power3",
    });

    //Move cursor
    let xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.2,
      ease: "power3",
    });

    let yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.2,
      ease: "power3",
    });

    //Move cursor label
    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.25,
      ease: "power3",
    });

    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.25,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;

      xMoveContainer(pageX);
      yMoveContainer(pageY);

      xMoveCursor(pageX - 4);
      yMoveCursor(pageY - 4);

      xMoveCursorLabel(pageX - 4);
      yMoveCursorLabel(pageY - 4);
    });
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className={
          "h-[400px] w-[500px] absolute bg-white overflow-hidden pointer-events-none flex items-center justify-center"
        }
      >
        <div
          style={{
            top: index * -100 + "%",
            transition: "top 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
          }}
          className={"h-full w-full absolute"}
        >
          {projects.map((project, index) => {
            return (
              <div
                className={`h-full w-full flex items-center justify-center`}
                style={{
                  background: `radial-gradient(circle, ${project.color}, var(--color-secondary))`,
                }}
                key={`modal_${index}`}
              >
                <Image
                  src={project.image}
                  width={400}
                  height={0}
                  alt={project.name}
                  className="h-auto"
                />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        className={
          "w-[70px] h-[70px] rounded-full bg-accent/60 absolute z-20 flex items-center justify-center pointer-events-none"
        }
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        className={
          "w-[70px] h-[70px] rounded-full bg-accent/60 absolute z-20 flex items-center justify-center pointer-events-none"
        }
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        <Text
          Tag={"h5"}
          variant="custom"
          className="text-primary font-bold text-xs"
        >
          ABRIR
        </Text>
      </motion.div>
    </>
  );
}
