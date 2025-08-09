import { defineRouting } from "next-intl/routing";
export type AppLocale = "es" | "en";

export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
});
