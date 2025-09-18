import React from "react";
import Text from "@/components/Text/Text";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function WhyCapsules() {
  const t = useTranslations("whyCapsules");

  const steps = [
    {
      number: "1",
      title: t.rich("steps.step1.title", { br: () => <br></br> }),
      description: t("steps.step1.description"),
      icon: (
        <Image
          src={"/resources/crown.svg"}
          alt="crown"
          width={80}
          height={80}
        />
      ),
    },
    {
      number: "2",
      title: t.rich("steps.step2.title", { br: () => <br></br> }),
      description: t("steps.step2.description"),
      icon: (
        <Image src={"/resources/star.svg"} alt="star" width={80} height={80} />
      ),
    },
    {
      number: "3",
      title: t.rich("steps.step3.title", { br: () => <br></br> }),
      description: t("steps.step3.description"),
      icon: (
        <Image
          src={"/resources/thunder.svg"}
          alt="thunder"
          width={80}
          height={80}
        />
      ),
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-secondary-lighter to-secondary section-py">
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

        {/* Steps Process */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-10 mt-10">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="relative bg-gradient-to-b from-secondary to-secondary-lighter via-accent/15 border-2 border-primary/20 p-5 md:px-20 lg:px-8 lg:p-8 shadow-[0px_0px_10px_5px] shadow-accent/20 flex flex-col gap-5 h-[300px] md:h-[250px] items-center justify-center w-full lg:h-[350px] rounded-sm ">
                <div className="mx-auto relative">
                  <div
                    className="opacity-50 blur-xs translate-y-2 -translate-x-3 floating"
                    style={{ animationDelay: index * 2800 + "ms" }}
                  >
                    {step.icon}
                  </div>
                  <div
                    className="absolute top-0 left-0 z-10 floating"
                    style={{ animationDelay: index * 2500 + "ms" }}
                  >
                    {step.icon}
                  </div>
                </div>

                <div className="flex flex-col gap-5">
                  <Text variant="subtitle" Tag={"h5"}>
                    {step.title}
                  </Text>
                  <Text variant="content" className="">
                    {step.description}
                  </Text>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
