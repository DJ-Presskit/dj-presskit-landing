"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import { useWebViewDetection } from "@/hooks/useWebViewDetection";

interface AnimatedSeparatorProps {
  className?: string;
  direction?: "vertical" | "horizontal";
  once?: boolean;
}

const AnimatedSeparator = ({
  className,
  direction = "horizontal",
  once = true,
}: AnimatedSeparatorProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });
  const { shouldReduceAnimations } = useWebViewDetection();

  return (
    <div
      ref={ref}
      className={twMerge(
        "overflow-hidden",
        direction === "horizontal" && "w-[100%]  h-[1px] mx-auto",
        direction === "vertical" && "h-[100%] w-[1px]",
        className
      )}
    >
      <motion.div
        initial={
          shouldReduceAnimations
            ? direction === "horizontal"
              ? { scaleX: 1 }
              : { scaleY: 1 }
            : direction === "horizontal"
            ? { scaleX: 0 }
            : { scaleY: 0 }
        }
        animate={
          shouldReduceAnimations
            ? direction === "horizontal"
              ? { scaleX: 1 }
              : { scaleY: 1 }
            : isInView
            ? direction === "horizontal"
              ? { scaleX: 1 }
              : { scaleY: 1 }
            : direction === "horizontal"
            ? { scaleX: 0 }
            : { scaleY: 0 }
        }
        transition={
          shouldReduceAnimations
            ? {}
            : {
                delay: 0.2,
                duration: 1.5,
                ease: [0.77, 0, 0.18, 1],
              }
        }
        style={{
          width: "100%",
          height: "100%",
          transformOrigin: "left",
        }}
        className={twMerge(`bg-gradient-to-r from-accent to-transparent rounded-full`)}
      />
    </div>
  );
};

export default AnimatedSeparator;
