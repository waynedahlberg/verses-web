import { ChartPie, MessageCircleHeart, Tickets, UserRoundPen } from 'lucide-react'

export default function DescriptionListSection() {
    return (
        <section className="bg-background py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-6 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-24">
                    <h2 className="text-foreground text-balance text-4xl font-semibold tracking-tight">AI-powered Marketing Tools</h2>
                    <div className="@container lg:col-span-2">
                        <dl className="@md:grid-cols-2 grid gap-6 *:space-y-2">
                            <div>
                                <UserRoundPen className="*:not-nth-2:opacity-50 *:nth-2:fill-primary *:nth-2:stroke-primary size-4 drop-shadow" />
                                <dt className="text-foreground font-semibold">AI-Powered Analytics</dt>
                                <dd className="text-muted-foreground">Leverage machine learning to gain deeper insights from your marketing data and optimize campaigns in real-time.</dd>
                            </div>
                            <div>
                                <ChartPie className="*:first:fill-primary *:first:stroke-primary size-4 drop-shadow" />
                                <dt className="text-foreground font-semibold">Intelligent Automation</dt>
                                <dd className="text-muted-foreground">Automate repetitive tasks and workflows, allowing your team to focus on strategic initiatives.</dd>
                            </div>
                            <div>
                                <MessageCircleHeart className="*:last:fill-primary fill-illustration size-4 drop-shadow" />
                                <dt className="text-foreground font-semibold">Predictive Targeting</dt>
                                <dd className="text-muted-foreground">Identify high-value audiences with precision using advanced predictive modeling.</dd>
                            </div>
                            <div>
                                <Tickets className="*:first:fill-primary size-4 drop-shadow" />

                                <dt className="text-foreground font-semibold">Smart Personalization</dt>
                                <dd className="text-muted-foreground">Deliver tailored content and experiences to each user based on their behavior and preferences.</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    )
}
