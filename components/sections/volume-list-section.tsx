import { YCombinator } from '@/components/ui/svgs/y-combinator'
import { Accel } from '@/components/ui/svgs/accel'
import { SVA } from '@/components/ui/svgs/sva'
import { Sequoia } from '@/components/ui/svgs/sequoia'
import { Salesforce } from '@/components/ui/svgs/salesforce'
import Image from 'next/image'

type Volume = {
    name: string
    image: string
    description: string
}

const volumes: Volume[] = [
    {
        name: 'Shadcn',
        image: 'https://avatars.githubusercontent.com/u/124599?v=4',
        description: 'Creator, Shadcn UI',
    },
    {
        name: 'Guillermo Rauch',
        image: 'https://avatars.githubusercontent.com/u/13041?v=4',
        description: 'Founder, CEO - Vercel',
    },
    {
        name: 'Adam Wathan',
        image: 'https://avatars.githubusercontent.com/u/4323180?v=4',
        description: 'CEO - Tailwind Labs',
    },
    {
        name: 'Lee Robinson',
        image: 'https://avatars.githubusercontent.com/u/9113740?v=4',
        description: 'VP of Developer Education - Cursor',
    },
    {
        name: 'Tobias Lütke',
        image: 'https://avatars.githubusercontent.com/u/347?v=4',
        description: 'Founder, Shopify',
    },
    {
        name: 'Brandon Eich',
        image: 'https://avatars.githubusercontent.com/u/313317?v=4',
        description: 'Founder, Brave Browser',
    },
    {
        name: 'Thomas Paul Mann',
        image: 'https://avatars.githubusercontent.com/u/12066405?v=4',
        description: 'Co-Founder, Raycast',
    },
    {
        name: 'Paul Copplestone',
        image: 'https://avatars.githubusercontent.com/u/10214025?v=4',
        description: 'Co-Founder, Supabase',
    },
    {
        name: 'Dylan Field',
        image: 'https://avatars.githubusercontent.com/u/159643?v=4',
        description: 'Founder, CEO - Figma',
    },
]

export default function VolumeListSection() {
    return (
        <section className="bg-background py-16 md:py-32">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide">Trusted by the best</p>
                    <h2 className="mt-4 text-balance font-faculty text-4xl font-regular tracking-tight">Our investors</h2>
                </div>

                <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-5">
                    <div className="bg-muted flex aspect-[3/2] items-center justify-center rounded-xl *:h-6 *:w-fit">
                        <YCombinator />
                    </div>
                    <div className="bg-muted flex aspect-[3/2] items-center justify-center rounded-xl *:h-5 *:w-fit">
                        <Accel />
                    </div>
                    <div className="bg-muted flex aspect-[3/2] items-center justify-center rounded-xl *:h-6 *:w-fit">
                        <SVA />
                    </div>
                    <div className="bg-muted flex aspect-[3/2] items-center justify-center rounded-xl *:h-4 *:w-fit">
                        <Sequoia />
                    </div>
                    <div className="bg-muted col-span-2 flex aspect-[3/2] items-center justify-center rounded-xl *:h-10 *:w-fit md:col-span-1">
                        <Salesforce />
                    </div>
                </div>

                <div className="mt-16">
                    <h3 className="text-center text-lg font-medium">Angel investors</h3>

                    <div className="@md:grid-cols-2 @2xl:grid-cols-3 mt-8 grid gap-4">
                        {volumes.map((volume) => (
                            <div
                                key={volume.name}
                                className="ring-border-illustration hover:bg-card hover:shadow-black/3 flex items-center gap-4 rounded-2xl p-4 shadow-lg shadow-transparent ring-1">
                                <div className="before:border-foreground/15 relative size-12 shrink-0 overflow-hidden rounded-full before:absolute before:inset-0 before:rounded-full before:border">
                                    <Image
                                        src={volume.image}
                                        alt={volume.name}
                                        className="size-full object-cover"
                                        width={56}
                                        height={56}
                                    />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-foreground truncate font-medium">{volume.name}</p>
                                    <p className="text-muted-foreground mt-0.5 truncate text-sm">{volume.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
