import { Card } from '@/components/ui/card'
import { Notes } from '@/components/illustrations/notes'
import { Notes3 } from '@/components/illustrations/notes-3'
import { AiAutocomplete } from '@/components/illustrations/ai-autocomplete'
import { TranslationInterface } from '@/components/illustrations/translation-interface'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'

export default function FeaturesSliderSection() {
    return (
        <section className="bg-background @container py-24 max-lg:px-1">
            <Carousel
                opts={{
                    align: 'start',
                    loop: true,
                    breakpoints: {
                        '(max-width: 768px)': {
                            slidesToScroll: 1,
                        },
                        '(min-width: 768px)': {
                            slidesToScroll: 2,
                        },
                    },
                }}
                className="mx-auto max-w-5xl">
                <div className="mb-6 flex flex-wrap items-end justify-between gap-4 px-6 lg:mb-10">
                    <h2 className="max-w-xs text-balance font-faculty text-4xl font-normal tracking-tight">The Standard Works and more...</h2>
                    <div className="flex items-center gap-2">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </div>
                <CarouselContent className="gap-1 pt-6">
                    <CarouselItem className="space-y-4 md:basis-1/2">
                        <Card className="inset-ring-1 inset-ring-border-illustration shadow-black/4 relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl shadow-md ring-0">
                            <Image
                                src="https://res.cloudinary.com/dewmpixcd/image/upload/v1790805304/verses-website/card-ot_opt_ej25p7.webp"
                                alt="bg c1"
                                width={980}
                                height={980}
                                className="absolute inset-0 size-full"
                            />
                            <div className="scale-90">
                                {/* <Notes /> */}
                            </div>
                        </Card>
                        <p className="text-muted-foreground text-balance">
                            <strong className="text-foreground font-medium">The Old Testament</strong> with AI-powered suggestions, templates, and seamless collaboration for faster communication.
                        </p>
                    </CarouselItem>
                    <CarouselItem className="space-y-4 md:basis-1/2">
                        <Card className="inset-ring-1 inset-ring-border-illustration shadow-black/4 relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl shadow-md ring-0">
                            <Image
                                src="https://res.cloudinary.com/dewmpixcd/image/upload/v1790805304/verses-website/card-nt_opt_fegtbz.webp"
                                alt="bg c2"
                                width={980}
                                height={980}
                                className="absolute inset-0 size-full"
                            />
                            <div className="scale-90">
                                {/* <Notes3 /> */}
                            </div>
                        </Card>

                        <p className="text-muted-foreground text-balance">
                            <strong className="text-foreground font-medium">The New Testament</strong> with rich formatting, tagging, and instant search to capture and retrieve ideas effortlessly.
                        </p>
                    </CarouselItem>
                    <CarouselItem className="space-y-4 md:basis-1/2">
                        <Card className="inset-ring-1 inset-ring-border-illustration shadow-black/4 relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl shadow-md ring-0">
                            <Image
                                src="https://res.cloudinary.com/dewmpixcd/image/upload/v1790805305/verses-website/card-bm_opt_rlsias.webp"
                                alt="bg c3"
                                width={980}
                                height={980}
                                className="absolute inset-0 size-full"
                            />
                            <div className="scale-90">
                                {/* <AiAutocomplete /> */}
                            </div>
                        </Card>
                        <p className="text-muted-foreground text-balance">
                            <strong className="text-foreground font-medium">The Book of Mormon</strong> that learns your writing style and provides context-aware suggestions to boost productivity.
                        </p>
                    </CarouselItem>
                    <CarouselItem className="space-y-4 md:basis-1/2">
                        <Card className="inset-ring-1 inset-ring-border-illustration shadow-black/4 relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl shadow-md ring-0">
                            <Image
                                src="https://res.cloudinary.com/dewmpixcd/image/upload/v1790805304/verses-website/card-dc_opt_n4vnqa.webp"
                                alt="bg c4"
                                width={980}
                                height={980}
                                className="absolute inset-0 size-full"
                            />
                            <div className="scale-90">
                                {/* <TranslationInterface /> */}
                            </div>
                        </Card>
                        <p className="text-muted-foreground text-balance">
                            <strong className="text-foreground font-medium">The Doctrine and Covenants</strong> across 50+ languages with automatic detection and natural-sounding output for global teams.
                        </p>
                    </CarouselItem>
                    <CarouselItem className="space-y-4 md:basis-1/2">
                        <Card className="inset-ring-1 inset-ring-border-illustration shadow-black/4 relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl shadow-md ring-0">
                            <Image
                                src="https://res.cloudinary.com/dewmpixcd/image/upload/v1790805304/verses-website/card-pg_opt_wbsy5k.webp"
                                alt="bg c3"
                                width={980}
                                height={980}
                                className="absolute inset-0 size-full"
                            />
                            <div className="scale-90">
                                {/* <AiAutocomplete /> */}
                            </div>
                        </Card>
                        <p className="text-muted-foreground text-balance">
                            <strong className="text-foreground font-medium">The Pearl of Great Price</strong> that learns your writing style and provides context-aware suggestions to boost productivity.
                        </p>
                    </CarouselItem>
                    <CarouselItem className="space-y-4 md:basis-1/2">
                        <Card className="inset-ring-1 inset-ring-border-illustration shadow-black/4 relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl shadow-md ring-0">
                            <Image
                                src="https://res.cloudinary.com/dewmpixcd/image/upload/v1790805304/verses-website/card-pc_opt_gbbv1k.webp"
                                alt="bg c4"
                                width={980}
                                height={980}
                                className="absolute inset-0 size-full opacity-50"
                            />
                            <div className="scale-90">
                                {/* <TranslationInterface /> */}
                            </div>
                        </Card>
                        <p className="text-muted-foreground text-balance">
                            <strong className="text-foreground font-medium">The Family Proclamation</strong> across 50+ languages with automatic detection and natural-sounding output for global teams.
                        </p>
                    </CarouselItem>
                    <CarouselItem className="space-y-4 md:basis-1/2">
                        <Card className="inset-ring-1 inset-ring-border-illustration shadow-black/4 relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl shadow-md ring-0">
                            <Image
                                src="https://res.cloudinary.com/dewmpixcd/image/upload/v1790805303/verses-website/card-po_opt_csxnry.webp"
                                alt="bg c3"
                                width={980}
                                height={980}
                                className="absolute inset-0 size-full"
                            />
                            <div className="scale-90">
                                {/* <AiAutocomplete /> */}
                            </div>
                        </Card>
                        <p className="text-muted-foreground text-balance">
                            <strong className="text-foreground font-medium">Prayers & Ordinances</strong> that learns your writing style and provides context-aware suggestions to boost productivity.
                        </p>
                    </CarouselItem>
                    <CarouselItem className="space-y-4 md:basis-1/2">
                        <Card className="inset-ring-1 inset-ring-border-illustration shadow-black/4 relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl shadow-md ring-0">
                            <Image
                                src="https://res.cloudinary.com/dewmpixcd/image/upload/v1790805304/verses-website/card-ms_opt_fsk9ej.webp"
                                alt="bg c4"
                                width={980}
                                height={980}
                                className="absolute inset-0 size-full"
                            />
                            <div className="scale-90">
                                {/* <TranslationInterface /> */}
                            </div>
                        </Card>
                        <p className="text-muted-foreground text-balance">
                            <strong className="text-foreground font-medium">The Missionaries</strong> across 50+ languages with automatic detection and natural-sounding output for global teams.
                        </p>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </section>
    )
}
