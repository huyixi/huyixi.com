import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "../styles/fonts.css";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "huyixi",
  description: "I'm a developer and writer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <main className="w-full mt-0 md:mt-16">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
