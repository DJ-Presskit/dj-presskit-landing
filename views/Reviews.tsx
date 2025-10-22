import React from "react";
import Text from "@/components/Text/Text";
import { useTranslations } from "next-intl";
import { REVIEWS } from "@/data/es";
import Image from "next/image";
import CountUp from "@/components/CountUp";
import DefaultButton from "@/components/Buttons/DefaultButton";
import { Globe, SquareArrowOutUpRight } from "lucide-react";

export default function Reviews() {
  const t = useTranslations("reviews");

  return (
    <section className="w-full bg-secondary section-py overflow-hidden">
      <div className="mx-auto flex flex-col items-center gap-10">
        <Text Tag={"h2"} variant="title" className="text-center section-px">
          {t("title")}
        </Text>
        <Text
          variant="content"
          className="max-w-[900px] !text-center opacity-80 section-px"
        >
          {t.rich("subtitle", { strong: (ch) => <strong>{ch}</strong> })}
        </Text>

        <div className="w-full mt-10 flex gap-5 overflow-x-auto no-scrollbar">
          <div
            aria-hidden
            className="marquee flex items-stretch gap-5 lg:gap-10 will-change-transform"
          >
            {REVIEWS.map(({ content, detail, name, url }, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[320px] md:w-[380px] lg:w-[420px] max-h-[500px]"
              >
                <div className="relative bg-secondary !pt-[90px] border-2 border-primary/20 p-5 md:px-20 lg:px-8 lg:p-8 flex flex-col gap-5 items-center justify-center w-full rounded-sm h-full">
                  <div className="absolute h-[30px] w-[30px] opacity-80 top-6 left-6">
                    <Image src="/resources/ticks.svg" alt="ticks" fill />
                  </div>
                  <div className="flex flex-col items-start self-start gap-5 grow">
                    <Text
                      variant="content"
                      className="text-left !text-sm line-clamp-[12]"
                    >
                      {content}
                    </Text>
                    <div className="mt-auto space-y-5 flex flex-col items-start w-full">
                      <div className="w-full h-[1px] bg-accent/40" />
                      <Text variant="custom" className="text-sm font-bold">
                        {name}
                      </Text>
                      <Text variant="custom" className="text-xs">
                        {detail}
                      </Text>
                    </div>
                  </div>
                  <DefaultButton
                    href={url}
                    variant="basic"
                    className="w-fit min-w-none border-none !px-0 !aspect-square absolute right-5 bottom-5"
                  >
                    <Globe />
                  </DefaultButton>
                </div>
              </div>
            ))}
          </div>
          <div
            aria-hidden
            className="marquee flex items-stretch gap-5 lg:gap-10 will-change-transform"
          >
            {REVIEWS.map(({ content, detail, name, url }, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[320px] md:w-[380px] lg:w-[420px] max-h-[500px]"
              >
                <div className="relative bg-secondary !pt-[90px] border-2 border-primary/20 p-5 md:px-20 lg:px-8 lg:p-8 flex flex-col gap-5 items-center justify-center w-full rounded-sm h-full">
                  <div className="absolute h-[30px] w-[30px] opacity-80 top-6 left-6">
                    <Image src="/resources/ticks.svg" alt="ticks" fill />
                  </div>
                  <div className="flex flex-col items-start self-start gap-5 grow">
                    <Text
                      variant="content"
                      className="text-left !text-sm line-clamp-[12]"
                    >
                      {content}
                    </Text>
                    <div className="mt-auto space-y-5 flex flex-col items-start w-full">
                      <div className="w-full h-[1px] bg-accent/40" />
                      <Text variant="custom" className="text-sm font-bold">
                        {name}
                      </Text>
                      <Text variant="custom" className="text-xs">
                        {detail}
                      </Text>
                    </div>
                  </div>
                  <DefaultButton
                    href={url}
                    variant="basic"
                    className="w-fit min-w-none border-none !px-0 !aspect-square absolute right-5 bottom-5"
                  >
                    <Globe />
                  </DefaultButton>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col gap-10 lg:gap-0 md:flex-row justify-around mt-10">
          <div className="flex flex-col gap-2 items-center">
            <CountUp to={31} plus />
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
