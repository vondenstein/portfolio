export function excerpt(raw: string, length = 140): string {
  const text = raw
    .replace(/^---[\s\S]*?---/, "") // strip frontmatter
    .replace(/!\[.*?\]\(.*?\)/g, "") // strip images
    .replace(/\[([^\]]*)\]\(.*?\)/g, "$1") // links → text
    .replace(/#{1,6}\s+/g, "") // strip headings
    .replace(/[*_~`>]/g, "") // strip emphasis/quotes
    .replace(/\n+/g, " ") // collapse newlines
    .replace(/\s+/g, " ") // collapse whitespace
    .trim()

  if (text.length <= length) return text
  return text.slice(0, length).replace(/\s\S*$/, "") + "…"
}
