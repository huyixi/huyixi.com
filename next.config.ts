import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["md", "mdx", "ts", "tsx"],
  i18n: {
    locales: ["en", "cn"],
    defaultLocale: "en",
    localeDetection: true,
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
