import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ContentColumn } from "@/components/content-column"
import { formatDate } from "@/lib/format-date"
import type { PostSummary } from "@/lib/post-frontmatter"

function Authors({ authors }: { authors: PostSummary["authors"] }) {
  return (
    <div className="space-y-2">
      {authors.map((author) => (
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
  )
}

function ReadLabel() {
  return (
    <span className="flex items-center gap-1 text-sm font-medium text-primary transition-colors duration-200 group-hover:text-foreground">
      Read
      <ChevronRight
        strokeWidth={2.5}
        aria-hidden="true"
        className="size-3.5 translate-y-px duration-200 group-hover:translate-x-0.5"
      />
    </span>
  )
}

export function BlogPostGrid({ posts }: { posts: PostSummary[] }) {
  const moreArticles = posts.slice(3)
  const lastArticles = moreArticles.length % 2 || 2

  return (
    <ContentColumn>
      <div className="grid gap-6 sm:grid-cols-2">
        {posts.slice(0, 3).map((article, index) => (
          <Card
            key={article.slug}
            className="group relative row-span-5 grid grid-rows-subgrid gap-3 bg-transparent bg-linear-to-b from-card from-65% to-transparent p-6 shadow-xl shadow-black/10"
          >
            <div className="-mx-6 -mt-6 aspect-video overflow-hidden rounded-xl">
              <Image
                src={article.image}
                alt=""
                width={1600}
                height={900}
                className="h-full w-full object-cover"
                sizes="(min-width: 640px) 20rem, 100vw"
                priority={index === 0}
              />
            </div>

            <time
              className="text-sm text-muted-foreground"
              dateTime={article.publishedAt}
            >
              {formatDate(article.publishedAt)}
            </time>

            <h2 className="font-faculty text-lg font-normal text-foreground">
              <Link
                href={`/blog/${article.slug}`}
                className="before:absolute before:inset-0"
              >
                {article.title}
              </Link>
            </h2>

            <p className="text-muted-foreground">{article.description}</p>

            <div className="grid grid-cols-[1fr_auto] items-end gap-2 pt-4">
              <Authors authors={article.authors} />
              <div className="flex h-6 items-center">
                <ReadLabel />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {moreArticles.length > 0 && (
        <div className="mt-24">
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-x-px -inset-y-6 border-x"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-y-6 inset-x-0 left-1/2 w-6 -translate-x-3 border-x max-sm:hidden"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-x-6 -inset-y-px border-y"
            />
            <div className="grid gap-x-6 sm:grid-cols-2">
              {moreArticles.map((article, index) => (
                <article
                  key={article.slug}
                  className={cn(
                    "group relative row-span-4 grid grid-rows-subgrid gap-3 p-6 duration-200 hover:bg-card focus-within:bg-card",
                    index < moreArticles.length - lastArticles && "border-b",
                  )}
                >
                  <time
                    className="text-sm text-muted-foreground"
                    dateTime={article.publishedAt}
                  >
                    {formatDate(article.publishedAt)}
                  </time>
                  <h2 className="font-faculty text-lg font-normal text-foreground">
                    <Link
                      href={`/blog/${article.slug}`}
                      className="before:absolute before:inset-0"
                    >
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground">{article.description}</p>
                  <div className="grid grid-cols-[1fr_auto] items-end gap-2 pt-4">
                    <Authors authors={article.authors} />
                    <div className="flex h-6 items-center">
                      <ReadLabel />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}
    </ContentColumn>
  )
}
