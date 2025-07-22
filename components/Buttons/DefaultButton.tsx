"use client";

import { motion } from "framer-motion";
import React from "react";
import { twMerge } from "tailwind-merge";
import Text from "../Text/Text";
import { trackWhatsAppClick } from "@/lib/gtag";

interface DefaultButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "basic";
  href?: string;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  childrenClassName?: string;
  noGlow?: boolean;
  trackingLabel?: string;
}

const DefaultButton: React.FC<DefaultButtonProps> = ({
  children,
  onClick,
  className,
  variant = "primary",
  href,
  type,
  disabled,
  childrenClassName,
  noGlow = "false",
  trackingLabel,
}) => {
  const variants = {
    primary: {
      container: "backdrop-blur-xs",
      text: "text-primary",
    },
    secondary: {
      container: "",
      text: "",
    },
    basic: {
      container: "",
      text: "",
    },
  };

  const renderChildren = () => (
    <Text
      variant="content"
      className={twMerge(
        "font-bold transition duration-500 lg:!text-xl",
        variants[variant].text,
        childrenClassName
      )}
    >
      {children}
    </Text>
  );

  const handleOnClick = () => {
    if (href && href.includes("wa.me") && trackingLabel) {
      trackWhatsAppClick(trackingLabel);
    }

    href && window.open(href);
    onClick && onClick();
  };

  return (
    <motion.button
      disabled={disabled}
      type={type}
      onClick={handleOnClick}
      transition={{ type: "spring", duration: 0.1 }}
      className={twMerge(
        "w-fit h-[60px] relative min-w-[250px] disabled:opacity-50 disabled:pointer-events-none group flex px-5 lg:px-10 items-center justify-center cursor-pointer transition duration-500 border-2 border-neutral-500",
        variants[variant].container,
        className
      )}
    >
      {renderChildren()}
    </motion.button>
  );
};

export default DefaultButton;
