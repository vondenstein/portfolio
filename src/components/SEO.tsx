import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const SEO = ({
  title,
  description,
  children,
  type,
  image,
}: {
  title?: string
  description?: string
  children?: any
  type?: string
  image?: string
}) => {
  const siteMetadata = useSiteMetadata()

  const seo = {
    title: title ? `${title} · ${siteMetadata.title}` : siteMetadata.title,
    description: description ? description : siteMetadata.description,
    twitterHandle: siteMetadata.twitterHandle,
    image: siteMetadata.ogImageUrl,
  }

  if (seo.image) {
    const imageUrl = new URL(seo.image)
    imageUrl.searchParams.append("title", title ? title : siteMetadata.title)
    imageUrl.searchParams.append("subtitle", seo.description)
    if (type) imageUrl.searchParams.append("type", type)
    if (image) imageUrl.searchParams.append("image", image)
    seo.image = imageUrl
  }

  return (
    <>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      {seo.twitterHandle ? (
        <meta name="twitter:creator" content={seo.twitterHandle} />
      ) : (
        <></>
      )}
      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      {seo.image ? (
        <>
          <meta name="image" content={seo.image} />
          <meta name="twitter:image" content={seo.image} />
          <meta name="og:image" content={seo.image} />
        </>
      ) : (
        <></>
      )}

      {/* <meta name="og:type" />
      <meta name="og:article? "/>
      <meta name="og:url" />
      <meta name="og:image:width" />
      <meta name="og:image:height" /> */}
      {children}
    </>
  )
}

export default SEO
