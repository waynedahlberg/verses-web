export default function LegalLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="relative flex flex-1 flex-col overflow-hidden border-b">
      <div className="@container flex flex-1 flex-col pt-22 pb-16 md:pt-32 md:pb-24">
        {children}
      </div>
    </main>
  )
}
