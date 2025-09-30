import React from "react";
import Text from "@/components/Text/Text";
import { useTranslations } from "next-intl";
import { REVIEWS } from "@/data/es";
import Image from "next/image";
import CountUp from "@/components/CountUp";
import DefaultButton from "@/components/Buttons/DefaultButton";
import { SquareArrowOutUpRight } from "lucide-react";

export default function Reviews() {
  const t = useTranslations("reviews");

  return (
    <section className="w-full bg-secondary section-py">
      <div className="section-max-w section-px mx-auto flex flex-col items-center gap-10">
        <Text Tag={"h2"} variant="title" className="text-center">
          {t("title")}
        </Text>
        <Text
          variant="content"
          className="max-w-[900px] !text-center opacity-80"
        >
          {t.rich("subtitle", { strong: (ch) => <strong>{ch}</strong> })}
        </Text>

        <div className="w-full flex flex-col lg:grid lg:grid-cols-3 items-center justify-center gap-5 lg:gap-10 mt-10">
          {REVIEWS.map(({ content, detail, name, url }, index) => (
            <React.Fragment key={index}>
              <div className="relative bg-secondary-lighter !pt-[90px] border-2 border-primary/20 p-5 md:px-20 lg:px-8 lg:p-8 flex flex-col gap-5  items-center justify-center w-full rounded-sm">
                <div className="absolute h-[60px] w-[60px] opacity-80 top-2 left-6">
                  <Image src="/resources/ticks.svg" alt="ticks" fill />
                </div>
                <div className="flex flex-col items-start self-start gap-5 grow">
                  <Text variant="content" className="text-left !text-sm">
                    {content}
                  </Text>
                  <div className="w-full h-[1px] bg-accent/40" />
                  <Text variant="custom" className="text-sm font-bold">
                    {name}
                  </Text>
                  <Text variant="custom" className="text-xs">
                    {detail}
                  </Text>
                </div>
                <DefaultButton
                  href={url}
                  variant="basic"
                  className="w-fit min-w-none border-none !px-0 !aspect-square absolute right-5 bottom-5"
                >
                  <SquareArrowOutUpRight />
                </DefaultButton>{" "}
              </div>
            </React.Fragment>
          ))}
          <button
            onClick={() =>
              alert("Este cupón lo encontro alguien mas...\n\nSegui buscando...")
            }
          >
            <div className="relative bg-secondary-lighter !pt-[90px] border-2 border-primary/20 p-5 md:px-20 lg:px-8 lg:p-8 flex flex-col gap-5  items-center justify-center w-full rounded-sm">
              <div className="absolute h-[60px] w-[60px] opacity-80 top-2 left-6">
                <Image src="/resources/ticks.svg" alt="ticks" fill />
              </div>
              <div className="flex flex-col items-start self-start gap-5 grow">
                <Text variant="content" className="text-left !text-sm">
                  La verdad que increible, desde que contrate sus servicios
                  aumente mi facturacion casi un 60% mas y me llaman de todo el
                  mundo para dar mis cursos de coaching.
                  <br />
                  <br />
                  Los recomiendo 100%
                </Text>
                <div className="w-full h-[1px] bg-accent/40" />
                <Text variant="custom" className="text-sm font-bold">
                  Julian
                </Text>
                <Text variant="custom" className="text-xs">
                  DJ - EEUU
                </Text>
              </div>
              <DefaultButton
                href={"https://julian.com"}
                variant="basic"
                className="w-fit min-w-none border-none !px-0 !aspect-square absolute right-5 bottom-5"
              >
                <SquareArrowOutUpRight />
              </DefaultButton>{" "}
            </div>
          </button>
        </div>
        <div className="w-full flex flex-col gap-10 lg:gap-0 md:flex-row justify-around mt-10">
          <div className="flex flex-col gap-2 items-center">
            <CountUp to={22} plus />
            <Text variant="content">{t("count-1")}</Text>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <CountUp to={35} extra="hs" />
            <Text variant="content">{t("count-2")}</Text>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <CountUp to={98} extra="%" />
            <Text variant="content">{t("count-3")}</Text>
          </div>
        </div>
      </div>
    </section>
  );
}
