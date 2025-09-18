import React from "react";
import Text from "@/components/Text/Text";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function TheProblem() {
  const t = useTranslations("theProblem");

  const negatives = [
    t("left.item1"),
    t("left.item2"),
    t("left.item3"),
    t("left.item4"),
    t("left.item5"),
  ];

  const positives = [
    t("right.item1"),
    t("right.item2"),
    t("right.item3"),
    t("right.item4"),
    t("right.item5"),
  ];

  return (
    <section className="w-full bg-secondary section-pt section-mt">
      <div className="section-max-w section-px mx-auto flex flex-col items-center gap-10">
        <Text Tag={"h2"} variant="title" className="text-center">
          {t("title")}
        </Text>
        <Text
          variant="content"
          className="max-w-[850px] !text-center opacity-80"
        >
          {t("subtitle")}
        </Text>

        <div className="mt-[10vh] grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-10 w-full">
          <div className="relative bg-secondary-lighter opacity-70 border-2 border-red-500/50 p-5 lg:p-10 h-full flex flex-col gap-5  rounded-sm">
            <div className="absolute lg:-top-20 lg:right-10 z-10 lg:w-[250px] w-full -bottom-10 -right-0 h-full pointer-events-none">
              <Image
                src={"/resources/grieta.svg"}
                alt="grieta"
                fill
                className="lg:-rotate-45 rotate-180"
              />
            </div>
            <Image
              src={"/resources/alert-3d.svg"}
              alt="alert"
              width={50}
              height={50}
            />
            <Text variant="subtitle" className="text-red-500 text-left">
              {t("left.title")}
            </Text>
            <ul className="space-y-2">
              {negatives.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-left group"
                >
                  <Image
                    src={"/resources/cross-3d.svg"}
                    alt="cross"
                    width={15}
                    height={15}
                  />
                  <Text
                    variant="content"
                    className="!text-left group-even:z-0 z-40"
                  >
                    {item}
                  </Text>
                </li>
              ))}
            </ul>
          </div>

          <ArrowRight className="rotate-90 lg:rotate-0 size-10 mx-auto lg:mx-0 text-accent-2" />

          <div className="bg-secondary-lighter border-2 border-green-500/50 p-5 lg:p-10 h-full shadow-[0px_0px_10px_5px] shadow-green-500/50 flex flex-col gap-5 rounded-sm">
            <div className="relative">
              <Image
                src={"/resources/check-icon-3d.svg"}
                alt="check"
                width={50}
                height={50}
                className="opacity-50 blur-xs translate-y-2 -translate-x-3 floating"
                style={{ animationDelay: "250ms" }}
              />
              <Image
                src={"/resources/check-icon-3d.svg"}
                alt="check"
                width={50}
                height={50}
                className="absolute top-0 left-0 z-10 floating"
              />
            </div>
            <Text variant="subtitle" className="text-left">
              {t("right.title")}
            </Text>
            <ul className="space-y-2">
              {positives.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-left">
                  <Image
                    src={"/resources/check-icon-3d.svg"}
                    alt="check"
                    width={20}
                    height={20}
                  />{" "}
                  <Text variant="content" className="!text-left">
                    {item}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full flex items-center justify-center flex-col gap-5 max-w-[800px] p-5 lg:p-10 my-10">
          <Text variant="subtitle" className="text-accent-2">
            {t("bottom.title")}
          </Text>
          <Text variant="content" className="mt-2 block opacity-80">
            {t("bottom.desc")}
          </Text>
        </div>
      </div>
    </section>
  );
}
