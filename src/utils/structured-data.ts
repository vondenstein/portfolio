function titleCase(slug: string) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
}

export function buildBreadcrumbList(
  pathname: string,
  siteUrl: string,
  pageTitle?: string,
) {
  const segments = pathname.replace(/\/$/, "").split("/").filter(Boolean)

  if (segments.length === 0) return null

  const crumbs = [
    { name: "Home", url: siteUrl },
    ...segments.map((segment, i) => {
      const isLastSegment = i === segments.length - 1
      return {
        name: isLastSegment && pageTitle ? pageTitle : titleCase(segment),
        url: `${siteUrl}/${segments.slice(0, i + 1).join("/")}`,
      }
    }),
  ]

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  }
}
