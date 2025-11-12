import type { Metadata } from "next";
import Content from "../content.cn.mdx";

export const metadata: Metadata = {
  title: "胡一希",
  description: "开发者与写作者",
};

export default function ChinesePage() {
  return (
    <div lang="zh-Hans">
      <Content />
    </div>
  );
}
