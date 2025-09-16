import React from "react";
import Text from "@/components/Text/Text";
import DefaultButton from "@/components/Buttons/DefaultButton";
import { useTranslations } from "next-intl";
import {
  ArrowRight,
  CheckCircle,
  CrossIcon,
  FileWarning,
  TriangleAlert,
  X,
} from "lucide-react";

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
    <section className="w-full bg-secondary section-py section-my">
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
          <div className="bg-secondary-lighter opacity-50 border-2 border-red-500/50 p-5 lg:p-10 h-full flex flex-col gap-5">
            <TriangleAlert className="text-red-500 size-10" />
            <Text variant="subtitle" className="text-red-500 text-left">
              {t("left.title")}
            </Text>
            <ul className="space-y-2">
              {negatives.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-left">
                  <X className="text-red-500 w-5 h-5 min-w-5 min-h-5" />
                  <Text variant="content" className="!text-left">
                    {item}
                  </Text>
                </li>
              ))}
            </ul>
          </div>

          <ArrowRight className="rotate-90 lg:rotate-0 size-10 mx-auto lg:mx-0" />

          <div className="bg-secondary-lighter border-2 border-green-500/50 p-5 lg:p-10 h-full shadow-[0px_0px_10px_5px] shadow-green-500/50 flex flex-col gap-5">
            <CheckCircle className="text-green-500 size-10" />

            <Text variant="subtitle" className="text-left">
              {t("right.title")}
            </Text>
            <ul className="space-y-2">
              {positives.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-left">
                  <CheckCircle className="text-green-500 w-5 h-5 min-w-5 min-h-5" />
                  <Text variant="content" className="!text-left">
                    {item}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full flex items-center justify-center flex-col gap-5 max-w-[800px] p-5 lg:p-10">
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
