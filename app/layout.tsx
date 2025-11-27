import type React from "react";
import type { Metadata } from "next";
import { cookies, headers } from "next/headers";
import { Analytics } from "@vercel/analytics/next";
import "../styles/globals.css";
import { fontClassNameForLocale } from "@/lib/fonts";
import { LOCALE_COOKIE, localeToHtmlLang, resolveLocale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "huyixi",
  description: "I'm a designer, developer and writer.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cookieStore, requestHeaders] = await Promise.all([
    cookies(),
    headers(),
  ]);
  const locale = resolveLocale({
    cookie: cookieStore.get(LOCALE_COOKIE)?.value,
    header: requestHeaders.get("accept-language"),
  });
  const htmlLang = localeToHtmlLang(locale);
  const fontClass = fontClassNameForLocale(locale);

  return (
    <html lang={htmlLang} className={fontClass}>
      <body className="antialiased">
        <main className="w-full mt-0 md:mt-16">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
