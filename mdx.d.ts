declare module "*.mdx" {
  import type { ComponentType } from "react"

  const MDXComponent: ComponentType<Record<string, unknown>>
  export default MDXComponent
}

declare module "mdx/types" {
  import type { ComponentType } from "react"

  export type MDXComponents = Record<string, ComponentType<any>>
}
