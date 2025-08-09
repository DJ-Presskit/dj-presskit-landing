"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import Text from "../Text/Text";
import { Project as ProjectType } from "@/@types";
import AnimatedSeparator from "../AnimatedSeparator";
import { ModalState } from "@/views/Capsules";
import { Hash } from "lucide-react";
import DecryptedText from "../Text/DecryptedText";
import { useTranslations } from "next-intl";

interface ProjectProps extends ProjectType {
  index: number;
  setModal: (modal: ModalState) => void;
  capsuleIndex: number;
}

export default function Project({
  index,
  name,
  setModal,
  web,
  capsuleIndex,
  commingSoon,
}: ProjectProps) {
  const t = useTranslations("projects");

  return (
    <>
      <AnimatedSeparator className="first:hidden" />
      <div
        onClick={() => {
          if (web !== "") {
            window.open(web);
          }
        }}
        onMouseEnter={() => {
          setModal({
            active: true,
            index,
            showOpen: true,
          });
        }}
        onMouseLeave={() => {
          setModal({
            active: false,
            index,
            showOpen: true,
          });
        }}
        className={twMerge(
          "flex w-full justify-center md:justify-start items-center group p-10 px-0 lg:px-10 cursor-pointer transition duration-300 hover:opacity-50 gap-5",
          capsuleIndex % 2 && "lg:justify-end",
          name === "" && "cursor-default"
        )}
      >
        <div
          className={twMerge(
            "lg:group-hover:-translate-x-10 transition duration-400 items-center hidden md:flex",
            capsuleIndex % 2 && "lg:group-hover:translate-x-10"
          )}
        >
          <Hash size={20} />
          <Text
            Tag="h5"
            variant="subtitle"
            className="group-hover:text-accent transition duration-400"
          >
            {index + 1}
          </Text>
        </div>
        <Text
          variant="subtitle"
          className={twMerge(
            "lg:group-hover:-translate-x-10 transition duration-400 flex flex-col uppercase md:flex-row items-center",
            capsuleIndex % 2 && "lg:group-hover:translate-x-10"
          )}
        >
          <DecryptedText
            text={name}
            speed={150}
            animateOn="view"
            revealDirection="center"
          />
          {commingSoon && (
            <span className="text-[10px] md:text-sm text-accent-2">
              {" "}
              {t("soon")}
            </span>
          )}
        </Text>
      </div>
    </>
  );
}
