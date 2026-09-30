import type { MDXComponents } from "mdx/types"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

function headingClass(className: string | undefined, base: string) {
  return cn(base, className)
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ className, ...props }) => (
      <h2
        className={headingClass(
          className,
          "mt-16 mb-4 scroll-mt-24 text-2xl font-semibold text-foreground",
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }) => (
      <h3
        className={headingClass(
          className,
          "mt-8 mb-3 scroll-mt-24 text-xl font-semibold text-foreground",
        )}
        {...props}
      />
    ),
    p: ({ className, ...props }) => (
      <p
        className={headingClass(
          className,
          "mb-4 text-base leading-relaxed text-muted-foreground",
        )}
        {...props}
      />
    ),
    a: ({ href = "", className, ...props }) => {
      const classes = headingClass(
        className,
        "text-primary underline-offset-4 hover:underline",
      )

      if (href.startsWith("http")) {
        return (
          <a
            href={href}
            className={classes}
            target="_blank"
            rel="noreferrer"
            {...props}
          />
        )
      }

      return <Link href={href} className={classes} {...props} />
    },
    ul: ({ className, ...props }) => (
      <ul
        className={headingClass(
          className,
          "mb-4 ml-6 list-disc space-y-2 text-muted-foreground",
        )}
        {...props}
      />
    ),
    ol: ({ className, ...props }) => (
      <ol
        className={headingClass(
          className,
          "mb-4 ml-6 list-decimal space-y-2 text-muted-foreground",
        )}
        {...props}
      />
    ),
    li: ({ className, ...props }) => (
      <li className={headingClass(className, "leading-relaxed")} {...props} />
    ),
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={headingClass(
          className,
          "my-8 border-l-4 border-border pl-4 text-xl text-foreground",
        )}
        {...props}
      />
    ),
    strong: ({ className, ...props }) => (
      <strong
        className={headingClass(className, "font-semibold text-foreground")}
        {...props}
      />
    ),
    em: ({ className, ...props }) => (
      <em className={headingClass(className, "italic")} {...props} />
    ),
    code: ({ className, ...props }) => (
      <code
        className={headingClass(
          className,
          "rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground",
        )}
        {...props}
      />
    ),
    pre: ({ className, ...props }) => (
      <pre
        className={headingClass(
          className,
          "mb-4 overflow-x-auto rounded-lg bg-card p-4 text-sm",
        )}
        {...props}
      />
    ),
    img: ({ src, alt = "", className }) => {
      if (!src || typeof src !== "string") return null

      return (
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={675}
          className={headingClass(className, "my-8 h-auto w-full rounded-lg")}
        />
      )
    },
    ...components,
  }
}
