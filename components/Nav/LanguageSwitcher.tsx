"use client";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { locales } from "@/i18n";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

type Props = { className?: string };

export default function LanguageSwitcher({ className }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const activeLocale = useLocale();
  const t = useTranslations("nav");

  const onChange = (locale: string) => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) {
      router.push(`/${locale}`);
      return;
    }
    const currentMaybeLocale = segments[0];
    if (locales.includes(currentMaybeLocale as any)) {
      segments[0] = locale;
    } else {
      segments.unshift(locale);
    }
    router.push("/" + segments.join("/"));
  };

  const notLanding = pathname === "/es/bookings-checklist";

  if (notLanding) {
    return <></>;
  }

  return (
    <div className={twMerge("flex items-center gap-2", className)}>
      <div className="flex rounded-full  overflow-hidden backdrop-blur-xl space-x-5 px-5 py-2 relative">
        <motion.div
          className="absolute top-0 left-0 w-1/2 bg-accent h-full"
          initial={false}
          animate={
            activeLocale === "es"
              ? { left: 0, right: "auto" }
              : { left: "50%", right: 0 }
          }
        />
        {locales.map((loc) => (
          <button
            key={loc}
            onClick={() => onChange(loc)}
            className={twMerge(
              "text-xs md:text-sm uppercase hover:text-accent transition-500 cursor-pointer text-primary z-[99] font-bold transition duration-500",
              activeLocale === loc && "text-secondary hover:text-primary"
            )}
            aria-label={`${t("language")}: ${loc}`}
          >
            {loc}
          </button>
        ))}
      </div>
    </div>
  );
}
