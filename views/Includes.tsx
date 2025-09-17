import React from "react";
import Text from "@/components/Text/Text";
import { useTranslations } from "next-intl";

import Image from "next/image";

export default function Includes() {
  const t = useTranslations("includes");

  const items = [
    {
      key: "bio",
      icon: (
        <Image src="/resources/bio.svg" alt="bio-icon" width={50} height={50} />
      ),
    },
    {
      key: "gigs",
      icon: (
        <Image
          src="/resources/gigs.svg"
          alt="gigs-icon"
          width={50}
          height={50}
        />
      ),
    },
    {
      key: "media",
      icon: (
        <Image
          src="/resources/media.svg"
          alt="media-icon"
          width={50}
          height={50}
        />
      ),
    },
    {
      key: "lanzamientos",
      icon: (
        <Image
          src="/resources/rocket-3d.svg"
          alt="rocket-icon"
          width={50}
          height={50}
        />
      ),
    },
    {
      key: "gallery",
      icon: (
        <Image
          src="/resources/gallery.svg"
          alt="gallery-icon"
          width={50}
          height={50}
        />
      ),
    },
    {
      key: "rider",
      icon: (
        <Image
          src="/resources/rider.svg"
          alt="rider-icon"
          width={50}
          height={50}
        />
      ),
    },
    {
      key: "contact",
      icon: (
        <Image
          src="/resources/messages-3d.svg"
          alt="contact-icon"
          width={50}
          height={50}
        />
      ),
    },
    {
      key: "seo",
      icon: (
        <Image src="/resources/seo.svg" alt="seo-icon" width={50} height={50} />
      ),
    },
  ];

  return (
    <section className="w-full bg-secondary-lighter section-pb">
      <div className="section-max-w section-px mx-auto flex flex-col items-center gap-10">
        <Text Tag={"h2"} variant="title" className="text-center">
          {t.rich("title", { br: () => <br></br> })}
        </Text>
        <Text
          variant="content"
          className="max-w-[900px] !text-center opacity-80"
        >
          {t.rich("subtitle", {
            strong: (children) => <strong>{children}</strong>,
          })}
        </Text>

        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {items.map(({ key, icon }) => (
            <div
              key={key}
              className="bg-secondary-lighter group hover:scale-110 transition duration-500 cursor-default border-2 border-primary/20 p-5 lg:p-6 shadow-[0px_0px_6px_2px] shadow-accent/20 rounded-none flex flex-col gap-4 h-full"
            >
              {icon}

              <div className="flex flex-col gap-2 items-start">
                <Text variant="subtitle" className="!text-base" Tag={"h5"}>
                  {t.rich(`items.${key}.title`)}
                </Text>
                <Text variant="content" className="text-primary/60 text-left">
                  {t.rich(`items.${key}.description`, {
                    underline: (children) => (
                      <span className="group-hover:text-accent-2 transition duration-500">
                        {children}
                      </span>
                    ),
                  })}
                </Text>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full mt-10">
          <div className="bg-secondary-lighter border-2 border-primary/20 shadow-[0px_0px_6px_2px] shadow-accent/20 p-6 lg:p-8 text-center">
            <Text
              variant="subtitle"
              className="text-accent-2 uppercase mb-5"
              Tag={"h4"}
            >
              {t("note.title")}
            </Text>
            <Text variant="content">
              {t.rich("note.description", {
                strong: (children) => (
                  <strong className="text-accent">{children}</strong>
                ),
              })}
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}
