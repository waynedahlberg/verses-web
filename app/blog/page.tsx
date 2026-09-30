import type { Metadata } from "next"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { BlogPostGrid } from "@/components/blog/post-grid"
import { getPosts } from "@/lib/posts"

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on scripture and the work of reading, from Verses.",
}

export default function BlogPage() {
  const posts = getPosts()

  return (
    <>
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-md">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>Blog</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="mt-4 text-4xl font-semibold text-balance text-muted-foreground">
            News, insights and more from{" "}
            <strong className="font-semibold text-foreground">Verses</strong>
          </h1>
        </div>
      </div>
      <div className="mt-12">
        {posts.length > 0 ? (
          <BlogPostGrid posts={posts} />
        ) : (
          <p className="mx-auto max-w-5xl px-6 text-muted-foreground">
            No posts yet.
          </p>
        )}
      </div>
    </>
  )
}
