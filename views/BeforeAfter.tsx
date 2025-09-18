import React from "react";
import { useTranslations } from "next-intl";
import Text from "@/components/Text/Text";
import Image from "next/image";

const BeforeAfter: React.FC = () => {
  const t = useTranslations("comparison");

  const tBefore = useTranslations("before");
  const tAfter = useTranslations("after");

  const beforeItems = [
    tBefore("1"),
    tBefore("2"),
    tBefore("3"),
    tBefore("4"),
    tBefore("5"),
    tBefore("6"),
  ];

  const afterItems = [
    tAfter("1"),
    tAfter("2"),
    tAfter("3"),
    tAfter("4"),
    tAfter("5"),
    tAfter("6"),
  ];

  return (
    <section className="w-full bg-secondary section-py relative">
      <div className=" section-max-w section-px mx-auto flex flex-col items-center gap-10">
        <Text Tag={"h2"} variant="title" className="text-center z-50">
          {t("title")}
        </Text>
        <Text
          variant="content"
          className="max-w-[900px] !text-center opacity-80"
        >
          {t.rich("subtitle", {
            green: (ch) => <strong className="text-green-500">{ch}</strong>,
            red: (ch) => <strong className="text-red-500">{ch}</strong>,
          })}
        </Text>

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-40 w-full mt-10 z-50">
          {/* Before */}
          <div className="space-y-5 opacity-50">
            <div className="text-center mb-8">
              <div className="inline-block p-4 bg-red-500/20 rounded-full mb-2">
                <Image
                  src={"/resources/alert-3d.svg"}
                  alt="alert"
                  width={40}
                  height={40}
                />
              </div>
              <Text Tag={"h3"} variant="subtitle" className="text-center mb-2">
                {t("before")}
              </Text>
              <Text variant="content">{t("before-subtitle")}</Text>
            </div>

            <div className="space-y-4">
              {beforeItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-red-500/5 rounded-sm border border-red-500/60"
                >
                  <Image
                    src={"/resources/cross-3d.svg"}
                    alt="cross"
                    width={15}
                    height={15}
                    className="mt-1"
                  />
                  <Text variant="content">{item}</Text>
                </div>
              ))}
            </div>

            <div className="bg-secondary-lighter border-red-500/50 rounded-sm border-2 p-5 text-center">
              <Text
                variant="content"
                className="text-center text-red-500 font-bold w-full"
              >
                {t("result.before")}
              </Text>
            </div>
          </div>

          {/* After */}
          <div className="space-y-5">
            <div className="text-center mb-8">
              <div className="inline-block p-4 bg-green-500/20 rounded-full mb-2">
                <Image
                  src={"/resources/check-icon-3d.svg"}
                  alt="check"
                  width={40}
                  height={40}
                />
              </div>
              <Text Tag={"h3"} variant="subtitle" className="text-center mb-2">
                {t("after")}
              </Text>
              <Text variant="content">{t("after-subtitle")}</Text>
            </div>

            <div className="space-y-4">
              {afterItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-green-500/5 rounded-sm border border-green-500/60"
                >
                  <Image
                    src={"/resources/check-icon-3d.svg"}
                    alt="cross"
                    width={20}
                    height={20}
                    className="mt-1"
                  />
                  <Text variant="content">{item}</Text>
                </div>
              ))}
            </div>

            <div className="bg-secondary-lighter border-2 border-green-500/50 rounded-sm p-5 text-center shadow-[0px_0px_10px_5px] shadow-green-500/50">
              <Text
                variant="content"
                className="text-center text-green-500 font-bold w-full"
              >
                {t("result.after")}
              </Text>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center flex-col gap-5 max-w-[800px] p-5 lg:p-10 my-10">
          <Text variant="subtitle" className="text-accent-2">
            {t("cta.title")}
          </Text>
          <Text variant="content" className="mt-2 block opacity-80">
            {t("cta.subtitle")}
          </Text>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
