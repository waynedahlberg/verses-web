export function legalBackDestination(
  referrer: string,
  origin: string,
): "back" | "/" {
  if (!referrer) return "/"

  try {
    return new URL(referrer).origin === origin ? "back" : "/"
  } catch {
    return "/"
  }
}
