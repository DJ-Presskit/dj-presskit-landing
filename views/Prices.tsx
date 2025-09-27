"use client";
import React from "react";
import Text from "@/components/Text/Text";
import DefaultButton from "@/components/Buttons/DefaultButton";
import { useLocalizedData } from "@/hooks/useLocalizedData";
import { CheckCircle, SquareArrowOutUpRight, Table } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Prices() {
  const t = useTranslations("pricing");
  const { calendlyLink } = useLocalizedData();

  const handleCTA = () => {
    window.open(calendlyLink, "_blank");
  };

  const baseFeatures = [
    t("base.1"),
    t("base.2"),
    t("base.3"),
    t("base.4"),
    t("base.5"),
    t("base.6"),
    t("base.7"),
    t("base.8"),
    t("base.9"),
    t("base.10"),
    t("base.11"),
  ];

  const addOns = [
    {
      title: t("addons.domain.title"),
      description: t("addons.domain.desc"),
      price: "+$15",
      detail: t("addons.domain.detail"),
    },
    {
      title: t("addons.sections.title"),
      description: t("addons.sections.desc"),
      price: "+$50",
      detail: t("addons.sections.detail"),
    },
  ];

  return (
    <section className="w-full bg-secondary section-py">
      <div className="section-max-w section-px mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <Text Tag="h2" variant="title" className="mb-4 md:mb-5">
            {t("title")}
          </Text>
          <Text
            variant="content"
            className="max-w-3xl mx-auto text-sm sm:text-base"
          >
            {t("subtitle")}
          </Text>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto w-full">
          {/* Main Plan */}
          <div className="relative rounded-sm p-4 sm:p-6 md:p-8 border-2 border-primary/20 bg-radial from-accent/30 to-secondary shadow-[0px_0px_10px_5px] shadow-accent/20 flex flex-col">
            <div className="text-center mb-6 md:mb-10">
              <Text Tag="h3" variant="subtitle" className="mb-4 md:mb-5">
                {t("main.title")}
              </Text>
              <div className="mb-4 md:mb-5 flex items-end gap-2 justify-center">
                <Text
                  Tag={"h5"}
                  variant="custom"
                  className="text-3xl sm:text-4xl font-bold text-accent-2"
                >
                  $150
                </Text>
                <Text variant="custom" className="text-sm text-primary/80 ">
                  USD
                </Text>
              </div>
              <Text variant="custom" className="text-sm text-primary/80">
                {t("main.desc")}
              </Text>
            </div>

            <div className="space-y-2 mb-6 md:mb-10 flex-1">
              {baseFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent mt-0.5 flex-shrink-0" />
                  <Text
                    variant="custom"
                    className="text-xs sm:text-sm text-left"
                  >
                    {feature}
                  </Text>
                </div>
              ))}
            </div>

            <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center pt-4 gap-5">
              <DefaultButton
                onClick={handleCTA}
                className="text-sm sm:text-base md:text-lg uppercase w-full sm:w-[90%] md:w-[80%]"
                trackingLabel="pricing-main-cta"
              >
                {t("cta")}
              </DefaultButton>
              <DefaultButton
                href="https://demo.dj-presskit.com"
                variant="basic"
                className="md:w-fit min-w-none !px-0 !aspect-square"
              >
                <SquareArrowOutUpRight />
              </DefaultButton>
            </div>
          </div>

          {/* Add-ons */}
          <div className="rounded-sm p-4 sm:p-6 md:p-8 border border-primary/20 bg-secondary-lighter flex flex-col">
            <div className="text-center mb-6 md:mb-10">
              <Text Tag="h3" variant="subtitle" className="mb-4 md:mb-5">
                {t("addons.title")}
              </Text>
              <Text
                variant="content"
                className="text-primary/80 text-sm sm:text-base"
              >
                {t("addons.subtitle")}
              </Text>
            </div>

            <div className="space-y-3 sm:space-y-4 md:space-y-5 mb-6 md:mb-10 flex-1">
              {addOns.map((addon, index) => (
                <div className="rounded-sm border-secondary border-2 overflow-hidden">
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 md:p-5 bg-secondary gap-2 sm:gap-3"
                  >
                    <div className="flex-1 flex flex-col items-start gap-1">
                      <Text variant="content" className="text-sm sm:text-base">
                        {addon.title}
                      </Text>
                      <Text
                        variant="custom"
                        className="text-xs sm:text-sm text-primary/80 text-left"
                      >
                        {addon.description}
                      </Text>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <Text
                        variant="content"
                        Tag={"h5"}
                        className="text-accent-2 font-semibold text-sm sm:text-base"
                      >
                        {addon.price}
                      </Text>
                      <Text
                        variant="custom"
                        className="text-xs text-primary/80"
                      >
                        USD
                      </Text>
                    </div>
                  </div>
                  {addon.detail && (
                    <div className="flex items-center justify-center py-2 bg-secondary-lighter">
                      <Text
                        variant="custom"
                        className="text-xs text-primary/80 uppercase"
                      >
                        {addon.detail}
                      </Text>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <DefaultButton
              href={"https://wa.me/djpress"}
              variant="secondary"
              className="w-full uppercase mx-auto text-sm sm:text-base"
              trackingLabel="pricing-addons-cta"
            >
              {t("addons.cta")}
            </DefaultButton>
          </div>
        </div>
      </div>
    </section>
  );
}
