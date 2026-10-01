import { Button } from "@/components/ui/button"

export const SHARE_CTA = {
  downloadHeading: "Download the notes app of tomorrow today.",
  iosLabel: "Download for iOS",
  androidLabel: "Download for Android",
  phoneScreenSrc:
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-7-tall.svg",
  phoneMockupSrc:
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mockups/phone-2.png",
} as const

function AppleIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 384 512"
      className="size-4"
      fill="currentColor"
    >
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 512 512"
      className="size-4"
      fill="currentColor"
    >
      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
    </svg>
  )
}

export default function ShareCTASection() {
  const copy = SHARE_CTA

  return (
    <section className="bg-background py-12 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative h-[350px] overflow-hidden rounded-xl bg-zinc-950 text-white">
          <div className="flex h-full w-full flex-row p-4 sm:p-8 md:p-12">
            <div className="relative z-10 w-full self-center px-2 text-center sm:w-auto sm:flex-1 sm:px-0 md:text-left">
              <h2 className="mb-4 text-3xl font-bold text-white! sm:mb-6 sm:text-2xl md:text-3xl">
                {copy.downloadHeading}
              </h2>
              <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 md:justify-start">
                <Button
                  type="button"
                  className="bg-white text-zinc-950 hover:bg-white/90"
                >
                  <AppleIcon />
                  <span>{copy.iosLabel}</span>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="border-white bg-transparent text-white shadow-none hover:bg-white/10 hover:text-white"
                >
                  <PlayIcon />
                  <span>{copy.androidLabel}</span>
                </Button>
              </div>
            </div>
            <div className="relative z-10 hidden md:block">
              <div className="absolute top-0 left-1/2 h-[120%] w-[69%] -translate-x-1/2 overflow-hidden rounded-t-[32px]">
                <img
                  alt=""
                  className="h-full w-full object-cover"
                  src={copy.phoneScreenSrc}
                />
              </div>
              <div className="relative z-10 h-[350px] overflow-hidden">
                <img
                  alt=""
                  className="h-[600px] w-auto max-w-none"
                  height={600}
                  src={copy.phoneMockupSrc}
                  width={340}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
