function ordinal(n: number): string {
  const s = ["th", "st", "nd", "rd"]
  const v = n % 100
  return n + (s[(v - 20) % 10] || s[v] || s[0])
}

export function formatDate(date: Date): string {
  const month = date.toLocaleString("en-US", { month: "long", timeZone: "UTC" })
  const day = ordinal(date.getUTCDate())
  const year = date.getUTCFullYear()
  return `${month} ${day}, ${year}`
}
