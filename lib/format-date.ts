export function formatDate(dateString: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(dateString)

  if (!match) {
    throw new Error(`Invalid date: ${dateString}`)
  }

  const year = Number(match[1])
  const month = Number(match[2])
  const day = Number(match[3])

  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
