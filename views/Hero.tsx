import DefaultButton from "@/components/Buttons/DefaultButton";
import Text from "@/components/Text/Text";
import { useLocalizedData } from "@/hooks/useLocalizedData";
import { CheckCircle, Star, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function Hero() {
  const t = useTranslations("hero");
  const { calendlyLink } = useLocalizedData();

  return (
    <div
      className={`h-full min-h-screen w-full bg-secondary flex flex-col items-center justify-center overflow-x-hidden`}
    >
      <div className="!z-[80] flex items-center  justify-center flex-col gap-10 section-max-w mx-auto section-px pt-20">
        <div className="rounded-full flex gap-2 bg-primary/20 p-2 px-5 items-center">
          <Users />
          <Text variant="custom" className="text-xs text-left lg:text-sm">
            {t("socialProof")}
          </Text>
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star
                style={{ animationDelay: idx * 100 + "ms" }}
                key={idx}
                className={twMerge(
                  "text-yellow-500 fill-yellow-500 size-4 animate-bounce"
                )}
              />
            ))}
          </div>
        </div>{" "}
        <Text Tag={"h1"} variant="title" className="my-5">
          {t("title_line1")}
          <br />
          {t("title_line2")}
        </Text>
        <Text variant="content" className="max-w-[600px] mx-auto !text-center">
          <strong>{t("desc_strong")}</strong>
          <br />
          <br />
          {t("desc")}
        </Text>
        <div className="grid grid-cols-3  gap-2 w-full lg:w-fit lg:mx-auto lg:flex lg:gap-5">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <Image
                src={"/resources/check-icon-3d.svg"}
                alt="check"
                width={20}
                height={20}
              />
              <Text variant="custom" className="text-xs text-left lg:text-sm">
                {t(`check-${idx + 1}`)}
              </Text>
            </div>
          ))}
        </div>
        <DefaultButton
          href={calendlyLink}
          className="uppercase"
          trackingLabel="hero_section"
        >
          {t("cta")}
        </DefaultButton>
      </div>
    </div>
  );
}
