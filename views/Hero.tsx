import DefaultButton from "@/components/Buttons/DefaultButton";
import Text from "@/components/Text/Text";
import { useLocalizedData } from "@/hooks/useLocalizedData";
import {
  Check,
  CheckCheck,
  CheckCircle,
  Star,
  User2,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";

const SocialProofBadge = () => {
  const t = useTranslations("hero");

  return (
    <div className="rounded-full flex gap-2 bg-primary/20 p-2 px-5 mb-10 items-center">
      <Users />
      <Text variant="content">{t("socialProof")}</Text>
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Star key={idx} className="text-yellow-500 fill-yellow-500 size-4" />
        ))}
      </div>
    </div>
  );
};

export default function Hero() {
  const t = useTranslations("hero");
  const { calendlyLink } = useLocalizedData();

  return (
    <div
      className={`h-[100dvh] w-full bg-secondary flex flex-col items-center justify-center overflow-x-hidden`}
    >
      <div className="!z-[80] flex items-center  justify-center flex-col gap-10 section-max-w mx-auto section-px">
        <SocialProofBadge />
        <Text Tag={"h1"} variant="title" className="my-10">
          {t("title_line1")}
          <br />
          {t("title_line2")}
        </Text>
        <Text variant="content" className="max-w-[600px] mx-auto !text-center">
          <strong>{t("desc_strong")}</strong>
          <br />
          {t("desc")}
        </Text>
        <div className="grid grid-cols-3  gap-2 w-full lg:w-fit lg:mx-auto lg:flex lg:gap-5">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle className="text-green-500 w-5 h-5 min-w-5 min-h-5 lg:w-6 lg:h-6" />
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
