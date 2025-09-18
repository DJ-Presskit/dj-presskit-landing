"use client";
import Icon from "../components/Icons/Icon";
import Text from "../components/Text/Text";
import Link from "next/link";
import { useTranslations } from "next-intl";

const SoundCloudSupportBanner = () => {
  const t = useTranslations("soundcloud");
  return (
    <section className="bg-gradient-to-t from-secondary via-[#ff5500]/50 to-secondary  w-full py-12 px-6 flex flex-col items-center justify-center text-center gap-5">
      <div className="flex items-center  flex-col">
        <Link href={"https://soundcloud.com"} target="_blank">
          <Icon src="soundcloud" className="w-32 h-32 md:w-32 md:h-32" />
        </Link>
        <Text
          Tag={"h5"}
          variant="title"
          className="text-lg text-transparent bg-clip-text bg-gradient-to-t from-[#ff5500] to-white"
        >
          {t("partner")}
        </Text>
      </div>
      <Text variant="content">
        {t.rich("text", {
          br: () => (
            <>
              <br className="hidden lg:block" />{" "}
            </>
          ),
        })}
      </Text>
    </section>
  );
};

export default SoundCloudSupportBanner;
