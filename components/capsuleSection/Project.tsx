"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import Text from "../Text/Text";
import { Project as ProjectType } from "@/@types";
import AnimatedSeparator from "../AnimatedSeparator";

interface ProjectProps extends ProjectType {
  index: number;
  setModal: (modal: { active: boolean; index: number }) => void;
  capsuleIndex: number;
}

export default function Project({
  index,
  name,
  setModal,
  web,
  capsuleIndex,
}: ProjectProps) {
  return (
    <>
      <AnimatedSeparator />
      <div
        onClick={() => window.open(web)}
        onMouseEnter={() => {
          setModal({ active: true, index });
        }}
        onMouseLeave={() => {
          setModal({ active: false, index });
        }}
        className={twMerge(
          "flex w-full justify-center lg:justify-start items-center group p-10 cursor-pointer transition duration-300 hover:opacity-50",
          capsuleIndex % 2 && "lg:justify-end"
        )}
      >
        <Text
          variant="subtitle"
          className={twMerge(
            "group-hover:-translate-x-10 transition duration-400 uppercase",
            capsuleIndex % 2 && "group-hover:translate-x-10"
          )}
        >
          {name}
        </Text>
      </div>
      <AnimatedSeparator />
    </>
  );
}
