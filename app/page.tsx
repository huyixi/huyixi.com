import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { LOCALE_COOKIE, resolveLocale } from "@/lib/i18n";

export const metadata = {
  title: "huyixi",
  description: "Developer and writer",
};

export default async function Page() {
  const [cookieStore, requestHeaders] = await Promise.all([cookies(), headers()]);
  const cookieLocale = cookieStore.get(LOCALE_COOKIE)?.value;
  const headerLocale = requestHeaders.get("accept-language");
  const locale = resolveLocale({
    cookie: cookieLocale,
    header: headerLocale,
  });

  redirect(locale === "cn" ? "/cn" : "/");
}
