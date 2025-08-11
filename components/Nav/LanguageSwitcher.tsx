"use client";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { locales } from "@/i18n";
import { twMerge } from "tailwind-merge";

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

  const notLanding = pathname !== "/";

  if (notLanding) {
    return <></>;
  }

  return (
    <div className={twMerge("flex items-center gap-2", className)}>
      <div className="flex rounded-full border border-neutral-600 overflow-hidden backdrop-blur bg-secondary/60">
        {locales.map((loc) => (
          <button
            key={loc}
            onClick={() => onChange(loc)}
            className={twMerge(
              "px-3 py-1 text-xs md:text-sm uppercase hover:text-accent transition-500 cursor-pointer",
              activeLocale === loc && "bg-neutral-900 text-white"
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
