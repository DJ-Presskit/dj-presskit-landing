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
  trackingLabel,
}) => {
  const variants = {
    primary: {
      container: "bg-accent-2 border-accent-2",
      text: "text-secondary",
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
      variant="custom"
      className={twMerge(
        "font-bold transition duration-500 ",
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
        "w-full md:w-fit h-[60px] hover:opacity-60 relative min-w-[250px] rounded-[5px] disabled:opacity-50 disabled:pointer-events-none group flex px-5 lg:px-10 items-center justify-center cursor-pointer transition duration-500 border-2 border-neutral-500",
        variants[variant].container,
        className
      )}
    >
      {renderChildren()}
    </motion.button>
  );
};

export default DefaultButton;
