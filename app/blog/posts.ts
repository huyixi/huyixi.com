import type React from "react"

export type PostSlug = "things-i-believe"

type PostDefinition = {
  title: string
  date: string
  author: string
  component: () => Promise<{ default: React.ComponentType }>
}

export const posts: Record<PostSlug, PostDefinition> = {
  "things-i-believe": {
    title: "Things I Believe",
    date: "January 15, 2025",
    author: "huyixi",
    component: () => import("./things-i-believe.mdx"),
  },
}

export function getAllPostSlugs(): PostSlug[] {
  return Object.keys(posts) as PostSlug[]
}
