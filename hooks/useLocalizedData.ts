"use client";
import {useLocale} from "next-intl";
import * as es from "@/data/es";
import * as en from "@/data/en";

export function useLocalizedData() {
  const locale = useLocale();
  const data = locale === "en" ? en : es;
  return {
    locale,
    ...data
  };
}


