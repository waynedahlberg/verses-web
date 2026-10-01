import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ContentColumn } from "@/components/content-column"
import { LegalBackLink } from "@/components/legal/back-link"
import { formatDate } from "@/lib/format-date"
import { getLegalContent, getLegalPages } from "@/lib/legal"

export function generateStaticParams() {
  return getLegalPages().map((page) => ({ slug: page.slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const loaded = await getLegalContent(slug)

  if (!loaded) {
    return { title: "Page not found" }
  }

  const { page } = loaded

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      type: "website",
    },
  }
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const loaded = await getLegalContent(slug)

  if (!loaded) {
    notFound()
  }

  const { page, Content } = loaded

  return (
    <ContentColumn>
      <LegalBackLink />

      <article className="mt-4">
        <header className="mb-8">
          <time
            className="text-sm text-muted-foreground"
            dateTime={page.lastUpdated}
          >
            Last updated: {formatDate(page.lastUpdated)}
          </time>
          <h1 className="mt-6 font-faculty text-3xl font-normal text-balance md:text-4xl md:leading-tight">
            {page.title}
          </h1>
        </header>
        <Content />
      </article>
    </ContentColumn>
  )
}
