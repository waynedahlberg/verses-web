import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Contact() {
    return (
        <section className="bg-background py-24">
            <div className="@container mx-auto max-w-5xl px-2">
                <div className="mx-auto max-w-4xl">
                    <div className="mx-auto max-w-2xl px-6">
                        <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:tracking-tight tracking-tight">Contact Us</h1>
                        <p className="text-muted-foreground mt-4 text-balance text-lg">Find answers to your questions and get support for our services.</p>
                    </div>

                    <div className="@lg:grid-cols-2 @lg:gap-y-12 mx-auto mt-10 grid max-w-2xl gap-3">
                        <div className="flex flex-col rounded-xl border p-6">
                            <h2 className="font-medium">Contact Sales</h2>
                            <p className="text-muted-foreground mb-4 mt-2 text-balance">Get in touch with our sales team for more information.</p>
                            <Button
                                render={<Link href="#link">Talk to sales</Link>}
                                nativeButton={false}
                                variant="outline"
                                size="sm"
                                className="mt-auto w-fit"
                            />
                        </div>
                        <div className="flex flex-col rounded-xl border p-6">
                            <h2 className="text-lg font-medium">Help and Support</h2>
                            <p className="text-muted-foreground mb-4 mt-2 text-balance">Find answers to your questions and get support for our services.</p>

                            <div className="mt-auto flex flex-wrap gap-1">
                                <Button
                                    render={<Link href="#link">Contact Support</Link>}
                                    nativeButton={false}
                                    variant="outline"
                                    size="sm"
                                    className="w-fit"
                                />
                                <Button
                                    render={<Link href="mailto:hey@tailark.com">hey@tailark.com</Link>}
                                    nativeButton={false}
                                    variant="ghost"
                                    size="sm"
                                    className="text-primary w-fit"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col p-6">
                            <h2 className="text-muted-foreground mb-2 text-sm">General</h2>
                            <Link
                                href="mailto:hello@tailark.com"
                                className="hover:decoration-primary font-medium hover:underline">
                                hello@tailark.com
                            </Link>
                        </div>
                        <div className="flex flex-col p-6">
                            <h2 className="text-muted-foreground mb-2 text-sm">Support</h2>
                            <Link
                                href="mailto:support@tailark.com"
                                className="hover:decoration-primary font-medium hover:underline">
                                support@tailark.com
                            </Link>
                        </div>

                        <div className="flex flex-col p-6">
                            <h2 className="text-muted-foreground mb-2 text-sm">X/Twitter</h2>
                            <Link
                                href="https://twitter.com/tailarkui "
                                className="hover:decoration-primary font-medium hover:underline">
                                @tailarkui
                            </Link>
                        </div>
                        <div className="flex flex-col p-6">
                            <h2 className="text-muted-foreground mb-2 text-sm">GitHub</h2>
                            <Link
                                href="https://github.com/tailark"
                                className="hover:decoration-primary font-medium hover:underline">
                                @tailark
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
