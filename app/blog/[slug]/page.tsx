import Link from "next/link";
import { notFound } from "next/navigation";
import type { PostSlug } from "../posts";
import { getAllPostSlugs, posts } from "../posts";

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({
    slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = posts[slug as PostSlug];

  if (!post) {
    notFound();
  }

  const MDXContent = (await post.component()).default;

  const dateLabel = formatMonthYear(post.date);
  const author = post.author ?? "huyixi";

  return (
    <article className="space-y-8">
      <header className="space-y-4 mb-8">
        <h1 className="text-xl md:text-2xl mb-1 font-medium">{post.title}</h1>
        <Link
          href="/"
          className="text-sm text-foreground/60 hover:text-foreground transition-colors inline-block"
        >
          {dateLabel} - {author}
        </Link>
      </header>

      <div>
        <MDXContent />
      </div>
    </article>
  );
}

function formatMonthYear(date: string) {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat("en", {
    month: "long",
    year: "numeric",
  }).format(parsed);
}
