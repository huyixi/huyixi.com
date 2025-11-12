export const SUPPORTED_LOCALES = ["en", "cn"] as const
export type Locale = (typeof SUPPORTED_LOCALES)[number]

export const DEFAULT_LOCALE: Locale = "en"
export const LOCALE_COOKIE = "NEXT_LOCALE"

const LOCALE_ALIASES: Record<string, Locale> = {
  en: "en",
  "en-us": "en",
  "en-gb": "en",
  cn: "cn",
  zh: "cn",
  "zh-cn": "cn",
  "zh-hans": "cn",
  "zh-hant": "cn",
}

export function normalizeLocale(value?: string | null): Locale | null {
  if (!value) {
    return null
  }

  const key = value.toLowerCase()
  return LOCALE_ALIASES[key] ?? null
}

export function detectLocaleFromHeader(header?: string | null): Locale | null {
  if (!header) {
    return null
  }

  const tokens = header
    .split(",")
    .map((token) => token.split(";")[0]?.trim().toLowerCase())
    .filter(Boolean) as string[]

  for (const token of tokens) {
    const locale = normalizeLocale(token)
    if (locale) {
      return locale
    }
  }

  return null
}

export function resolveLocale({
  cookie,
  header,
  fallback = DEFAULT_LOCALE,
}: {
  cookie?: string | null
  header?: string | null
  fallback?: Locale
} = {}): Locale {
  return normalizeLocale(cookie) ?? detectLocaleFromHeader(header) ?? fallback
}

export function localeToHtmlLang(locale: Locale): string {
  return locale === "cn" ? "zh-Hans" : "en"
}
