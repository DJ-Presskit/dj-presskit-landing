import { getRequestConfig } from "next-intl/server";
import { routing, AppLocale } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = (await requestLocale) as string | undefined;
  const locale: AppLocale = routing.locales.includes(requested as AppLocale)
    ? (requested as AppLocale)
    : routing.defaultLocale;
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
