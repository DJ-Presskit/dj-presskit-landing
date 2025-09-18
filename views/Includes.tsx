import React from "react";
import Text from "@/components/Text/Text";
import { useTranslations } from "next-intl";

import Image from "next/image";

export default function Includes() {
  const t = useTranslations("includes");

  const items = [
    {
      key: "bio",
      icon: <Image src="/resources/bio.svg" alt="bio-icon" fill />,
    },
    {
      key: "gigs",
      icon: <Image src="/resources/gigs.svg" alt="gigs-icon" fill />,
    },
    {
      key: "media",
      icon: <Image src="/resources/media.svg" alt="media-icon" fill />,
    },
    {
      key: "lanzamientos",
      icon: <Image src="/resources/rocket-3d.svg" alt="rocket-icon" fill />,
    },
    {
      key: "gallery",
      icon: <Image src="/resources/gallery.svg" alt="gallery-icon" fill />,
    },
    {
      key: "rider",
      icon: <Image src="/resources/rider.svg" alt="rider-icon" fill />,
    },
    {
      key: "contact",
      icon: <Image src="/resources/messages-3d.svg" alt="contact-icon" fill />,
    },
    {
      key: "seo",
      icon: <Image src="/resources/seo.svg" alt="seo-icon" fill />,
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

        <div
          style={{ height: items.length * 270 + "px" }}
          className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 relative lg:!h-full"
        >
          {items.map(({ key, icon }, idx) => (
            <div
              style={{
                top: 80 + idx * 20 + "px",
              }}
              key={key}
              className="h-[250px] sticky md:!top-[150px] bg-secondary  rounded-sm group hover:scale-110 transition duration-500 cursor-default border-2 border-primary/20 p-5 lg:p-6 shadow-[0px_0px_5px_2px] shadow-accent/20 flex flex-col gap-4 lg:h-full lg:relative lg:!top-0"
            >
              <div className="w-[50px] lg:w-[70px] h-[50px] lg:h-[70px] relative">
                {icon}
              </div>

              <div className="flex flex-col gap-2 items-start justify-center grow">
                <Text
                  variant="subtitle"
                  className="!text-base text-left"
                  Tag={"h5"}
                >
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
          <div className="bg-secondary border-2 border-primary/20 shadow-[0px_0px_6px_2px] shadow-accent/20 p-6 lg:p-8 text-center rounded-sm">
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
