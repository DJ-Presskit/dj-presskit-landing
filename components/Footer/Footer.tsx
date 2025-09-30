"use client";
import Image from "next/image";
import Text from "../Text/Text";
import { useTranslations } from "next-intl";
import { Instagram, Mail, Video } from "lucide-react";
import Link from "next/link";
import AnimatedSeparator from "../AnimatedSeparator";

export default function Footer() {
  const SOCIALS = [
    {
      icon: (
        <Instagram
          width={30}
          height={30}
          className="text-primary/50 hover:text-accent transition duration-500 hover:scale-125"
        />
      ),
      href: "https://instagram.com/dj.presskit",
    },
    {
      icon: (
        <Mail
          width={35}
          height={35}
          className="text-primary/50 hover:text-accent transition duration-500 hover:scale-125"
        />
      ),
      href: "mailto:info@dj-presskit.com",
    },
    {
      icon: (
        <Video
          width={35}
          height={35}
          className="text-primary/50 hover:text-accent transition duration-500 hover:scale-125"
        />
      ),
      href: "https://calendly.com/dj-presskit/entrevista",
    },
  ];

  const t = useTranslations("footer");

  return (
    <footer className="flex flex-col gap-10 items-center py-20 justify-center w-full section-px bg-gradient-to-b from-secondary to-accent/15">
      <div className="flex items-center justify-center flex-col gap-5">
        <Image
          src="/logos/default-logo.svg"
          alt="logo"
          width={100}
          height={100}
          className="hover:rotate-45 transition duration-500 delay-100 cursor-pointer ease-in-out"
          onClick={() => {
            if (window !== undefined) {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        />
        <Text
          variant="custom"
          className="text-transparent bg-clip-text bg-radial from-accent to-secondary-lighter text-xl lg:text-3xl"
          Tag={"h5"}
        >
          DJ PRESSKIT
        </Text>
        <Link href={"https://wa.link/fehmpu"} className="cursor-default">
          <Text
            variant="custom"
            className="text-[8px] cursor-help lg:text-[10px] text-transparent bg-clip-text bg-radial from-accent-2 to-accent-2/50"
          >
            {t("slogan")}
          </Text>
        </Link>
      </div>
      <AnimatedSeparator transformOrigin="center" />
      <div className="w-full flex items-center justify-center gap-10 flex-col-reverse md:flex-row md:justify-between">
        <div className="text-center">
          <Text
            variant="content"
            className="!text-center md:!text-left !text-sm opacity-80"
          >
            {new Date().getFullYear()} DJ PRESSKIT ® {t("rights")}
          </Text>
        </div>
        <div className="flex items-center gap-5">
          {SOCIALS.map((item, idx) => (
            <Link target="_blank" key={idx} href={item.href}>
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
