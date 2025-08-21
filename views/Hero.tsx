import { BackgroundBeams } from "@/components/AnimatedBackgrounds/BackgroundBeams";
import DefaultButton from "@/components/Buttons/DefaultButton";
import Text from "@/components/Text/Text";
import { useLocalizedData } from "@/hooks/useLocalizedData";
import { useWebViewDetection } from "@/hooks/useWebViewDetection";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { initSafeHeight } from "@/lib/safeHeight";

export default function Hero() {
  const { shouldUseSafeHeight } = useWebViewDetection();
  const t = useTranslations("hero");
  const { whatsappLink } = useLocalizedData();

  useEffect(() => {
    if (shouldUseSafeHeight) {
      const cleanup = initSafeHeight();
      return cleanup;
    }
  }, [shouldUseSafeHeight]);

  return (
    <div
      className={`${
        shouldUseSafeHeight ? "safe-height-custom" : "h-screen"
      } w-full bg-secondary flex flex-col items-center justify-center antialiased overflow-x-hidden`}
    >
      <BackgroundBeams />
      <div className="!z-[80] flex items-center justify-center flex-col gap-[10vh] section-max-w mx-auto section-px">
        <Text Tag={"h1"} variant="title" className="">
          {t("title_line1")}
          <br />
          {t("title_line2")}
        </Text>
        <Text variant="content" className="max-w-[600px] mx-auto !text-center">
          <strong>{t("desc_strong")}</strong>
          <br />
          {t("desc")}
        </Text>
        <DefaultButton
          href={whatsappLink}
          className="uppercase"
          trackingLabel="hero_section"
        >
          {t("cta")}
        </DefaultButton>
      </div>
    </div>
  );
}
