import type { Metadata } from "next"
import Image from "next/image"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { BlogPostGrid } from "@/components/blog/post-grid"
import { ContentColumn } from "@/components/content-column"
import { getPosts } from "@/lib/posts"

const SKY_LIGHT =
  "https://res.cloudinary.com/dewmpixcd/image/upload/v1790622370/verses-website/sky-07_opt_pvryaf.webp"
const SKY_DARK =
  "https://res.cloudinary.com/dewmpixcd/image/upload/v1790622370/verses-website/sky-22_opt_lfykgx.webp"

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on scripture and the work of reading, from Verses.",
}

export default function BlogPage() {
  const posts = getPosts()

  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 -top-14.5 h-[50rem] overflow-hidden mask-radial-[137%_100%] mask-radial-from-49% mask-radial-at-top">
        <div className="aspect-video md:aspect-square">
          <Image
            src={SKY_LIGHT}
            alt=""
            width={5000}
            height={5000}
            className="absolute inset-0 w-full md:-translate-y-1/12 dark:hidden"
            priority
          />
          <Image
            src={SKY_DARK}
            alt=""
            width={5000}
            height={5000}
            className="absolute inset-0 w-full opacity-50 not-dark:hidden"
            priority
          />
        </div>
      </div>
      <ContentColumn className="relative mt-16 md:mt-24">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>Blog</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="mt-4 font-faculty text-4xl font-normal tracking-tight text-balance text-muted-foreground md:text-5xl">
          News, insights and more from{" "}
          <strong className="font-normal text-foreground">Verses</strong>
        </h1>
      </ContentColumn>
      <div className="mt-12">
        {posts.length > 0 ? (
          <BlogPostGrid posts={posts} />
        ) : (
          <ContentColumn>
            <p className="text-muted-foreground">No posts yet.</p>
          </ContentColumn>
        )}
      </div>
    </>
  )
}
