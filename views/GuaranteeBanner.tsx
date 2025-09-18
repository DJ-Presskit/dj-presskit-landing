import Text from "@/components/Text/Text";
import { Shield, Zap } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

export default function GuaranteeBanner() {
  const t = useTranslations("guaranteeBanner");

  return (
    <section className="w-full bg-secondary section-py">
      <div className="section-max-w section-px mx-auto flex flex-col items-center gap-10">
        <div className="rounded-sm w-full p-5 flex flex-col gap-6 lg:p-10 max-w-5xl mx-auto text-center border-cyan-400 border-2 bg-radial from-cyan-400/30 to-secondary">
          <Shield className="w-15 h-15 text-blue-600 mx-auto animate-pulse" />
          <Text variant="subtitle" Tag={"h3"}>
            {t("title")}
          </Text>
          <Text variant="content" className="">
            {t.rich("desc", {
              strong: (ch) => <strong className="text-blue-600">{ch}</strong>,
            })}
          </Text>
          <div className="flex flex-wrap gap-5 items-center justify-around">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              <Text variant="custom" className="text-sm">
                {t("point1")}
              </Text>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              <Text variant="custom" className="text-sm">
                {t("point2")}
              </Text>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              <Text variant="custom" className="text-sm">
                {" "}
                {t("point3")}
              </Text>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Text variant="custom" className="text-xs opacity-80">
            {t("note")}
          </Text>
        </div>
      </div>
    </section>
  );
}
