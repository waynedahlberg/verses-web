export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="border-b bg-muted">
      <div className="@container pt-22 pb-16 md:pt-32 md:pb-24">{children}</div>
    </main>
  )
}
