import React from "react";
import Text from "@/components/Text/Text";
import { useTranslations } from "next-intl";
import { REVIEWS } from "@/data/es";
import Image from "next/image";
import CountUp from "@/components/CountUp";

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
          {REVIEWS.map(({ content, detail, name }, index) => (
            <React.Fragment key={index}>
              <div className="relative bg-secondary-lighter !pt-[90px] border-2 border-primary/20 p-5 md:px-20 lg:px-8 lg:p-8 flex flex-col gap-5  items-center justify-center w-full rounded-sm">
                <div className="absolute h-[60px] w-[60px] opacity-80 top-2 left-6">
                  <Image src="/resources/ticks.svg" alt="ticks" fill />
                </div>
                <div className="flex flex-col items-start gap-5 grow">
                  <Text variant="content" className="text-left">
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
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="w-full flex flex-col gap-10 lg:gap-0 md:flex-row justify-around mt-10">
          <div className="flex flex-col gap-2 items-center">
            <CountUp to={15} plus />
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
