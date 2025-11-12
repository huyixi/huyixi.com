import type { Metadata } from "next";
import Content from "../content.en.mdx";

export const metadata: Metadata = {
  title: "huyixi",
  description: "Developer and writer",
};

export default function EnglishPage() {
  return <Content />;
}
