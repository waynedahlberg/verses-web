import { Button } from "@/components/ui/button"
import { ChevronRight, Cpu, Lock, Sparkles, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const FEATURES_IMAGE =
  "https://res.cloudinary.com/dewmpixcd/image/upload/v1790724602/verses-website/sean-sinclair-C_NJKfnTR5A-unsplash_opt_ew8doj.webp"

export default function FeaturesSection() {
  return (
    <section className="overflow-hidden bg-background py-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="grid items-center gap-12 pb-12 md:grid-cols-2">
          <div>
            <div className="max-w-md">
              <h2 className="text-4xl font-semibold tracking-tight text-balance text-foreground">
                Power of LLMs in Your Editor
              </h2>
              <p className="my-6 text-lg text-balance">
                Write code faster with the latest Large Language Models from
                Gemini, GooglePaLM, and Replit.
              </p>
              <p className="text-muted-foreground">
                Tailark is evolving to be more than just the models.{" "}
                <span className="text-title font-medium">
                  It supports an entire ecosystem
                </span>{" "}
                — from products innovate.
              </p>
              <Button
                render={
                  <Link href="#">
                    Learn more
                    <ChevronRight className="size-4 opacity-50" />
                  </Link>
                }
                nativeButton={false}
                className="mt-8 pr-2"
                variant="outline"
              />
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-white p-2 dark:bg-black">
            <Image
              src={FEATURES_IMAGE}
              alt=""
              width={1600}
              height={1200}
              aria-hidden
              className="pointer-events-none absolute inset-0 size-full scale-125 object-cover opacity-90 blur-2xl brightness-125 saturate-150 dark:opacity-80 dark:brightness-100"
            />
            <div className="relative overflow-hidden rounded-xl border border-dashed border-white/25 shadow-lg shadow-black/20">
              <Image
                src={FEATURES_IMAGE}
                alt="Colorful landscape"
                width={1600}
                height={1200}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--color-white)_1px,transparent_1px)] bg-size-[12px_12px] opacity-5" />
            </div>
          </div>
        </div>

        <div className="relative grid grid-cols-2 gap-x-3 gap-y-6 border-t pt-12 sm:gap-6 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4 fill-foreground/10 text-foreground" />
              <h3 className="text-sm font-medium">Faaast</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              It supports an entire helping developers and innovate.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4 fill-foreground/10 text-foreground" />
              <h3 className="text-sm font-medium">Powerful</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              It supports an entire helping developers and businesses.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Lock className="size-4 fill-foreground/10 text-foreground" />
              <h3 className="text-sm font-medium">Security</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              An helping developers businesses innovate.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 fill-foreground/10 text-foreground" />
              <h3 className="text-sm font-medium">AI Powered</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Helping developers businesses innovate.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}