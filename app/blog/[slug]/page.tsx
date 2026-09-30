import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { formatDate } from "@/lib/format-date"
import { getPostContent, getPosts } from "@/lib/posts"

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const loaded = await getPostContent(slug)

  if (!loaded) {
    return { title: "Post not found" }
  }

  const { post } = loaded

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      images: [{ url: post.image, alt: post.title }],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const loaded = await getPostContent(slug)

  if (!loaded) {
    notFound()
  }

  const { post, Content } = loaded

  return (
    <div className="relative mx-auto max-w-5xl px-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink render={<Link href="/blog" />}>Blog</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{post.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <article className="mt-8">
        <header className="mb-8 max-w-2xl">
          <h1 className="mb-6 text-3xl font-bold text-balance text-foreground md:text-4xl md:leading-tight">
            {post.title}
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            {post.description}
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              {post.authors.map((author) => (
                <div
                  key={author.name}
                  className="grid grid-cols-[auto_1fr] items-center gap-2"
                >
                  <div className="aspect-square size-6 overflow-hidden rounded-md border border-transparent bg-card shadow-md shadow-black/15 ring-1 ring-border">
                    <img
                      src={author.image}
                      alt=""
                      width={460}
                      height={460}
                      className="size-full object-contain p-0.5"
                    />
                  </div>
                  <span className="line-clamp-1 text-sm text-muted-foreground">
                    {author.name}
                  </span>
                </div>
              ))}
            </div>
            <time
              className="text-sm text-muted-foreground"
              dateTime={post.publishedAt}
            >
              {formatDate(post.publishedAt)}
            </time>
          </div>
        </header>

        <div className="max-w-2xl">
          <div className="relative mb-12 overflow-hidden rounded-xl border shadow shadow-black/5">
            <Image
              src={post.image}
              alt=""
              width={1200}
              height={675}
              className="aspect-video w-full object-cover"
              priority
            />
          </div>
          <Content />
        </div>
      </article>

      <footer className="mt-12 border-t bg-muted/50 py-8">
        <Link
          href="/blog"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to Blog
        </Link>
      </footer>
    </div>
  )
}
