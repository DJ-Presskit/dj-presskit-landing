import React from "react";
import Text from "@/components/Text/Text";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HowItsWorks() {
  const t = useTranslations("howItWorks");

  const steps = [
    {
      number: "1",
      title: t.rich("steps.step1.title", { br: () => <br></br> }),
      description: t("steps.step1.description"),
      icon: (
        <Image
          src={"/resources/messages-3d.svg"}
          alt="messages"
          width={60}
          height={60}
        />
      ),
    },
    {
      number: "2",
      title: t.rich("steps.step2.title", { br: () => <br></br> }),
      description: t("steps.step2.description"),
      icon: (
        <Image
          src={"/resources/upload-3d.svg"}
          alt="upload"
          width={60}
          height={60}
        />
      ),
    },
    {
      number: "3",
      title: "Entrega en 2 años",
      //t.rich("steps.step3.title", { br: () => <br></br> }),
      description:
        "En menos de 2 años tenemos tu Presskit listo y hacemos correcciones 1 a 1 con vos antes de lanzarlo.",
      // t("steps.step3.description"),
      icon: (
        <Image
          src={"/resources/clock-3d.svg"}
          alt="clock"
          width={60}
          height={60}
        />
      ),
    },
    {
      number: "4",
      title: t.rich("steps.step4.title", { br: () => <br></br> }),
      description: t("steps.step4.description"),
      icon: (
        <Image
          src={"/resources/rocket-3d.svg"}
          alt="rocket"
          width={60}
          height={60}
        />
      ),
    },
  ];

  return (
    <section className="w-full bg-secondary section-pb">
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

        {/* Steps Process */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-10 mt-10">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="relative bg-secondary-lighter border-2 border-primary/20 p-5 md:px-20 lg:px-8 lg:p-8 shadow-[0px_0px_10px_5px] shadow-accent/20 flex flex-col gap-5 h-[300px] md:h-[250px] items-center justify-center w-full lg:h-[450px] lg:min-w-[200px]  rounded-sm">
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-radial from-secondary via-secondary via-30% to-accent rounded-full flex items-center justify-center">
                  <Text variant="content" className="font-bold text-accent">
                    {step.number}
                  </Text>
                </div>

                <div className="mx-auto">{step.icon}</div>

                <div className="flex flex-col gap-5">
                  {step.title === "Entrega en 2 años" ? (
                    <button
                      onClick={() =>
                        alert("Este cupón ya se uso :(\n\nSegui buscando...")
                      }
                    >
                      <Text variant="subtitle" className="!text-lg" Tag={"h5"}>
                        {step.title}
                      </Text>
                    </button>
                  ) : (
                    <Text variant="subtitle" className="!text-lg" Tag={"h5"}>
                      {step.title}
                    </Text>
                  )}
                  <Text variant="content" className="">
                    {step.description}
                  </Text>
                </div>
              </div>

              {/* Arrow between steps (except last one) */}
              {index < steps.length - 1 && (
                <ArrowRight className="rotate-90 lg:rotate-0 size-10 mx-auto lg:mx-0 lg:hidden xl:block lg:min-w-10 text-accent-2" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
