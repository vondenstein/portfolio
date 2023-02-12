import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const SEO = ({
  title,
  description,
  children,
}: {
  title?: string
  description?: string
  children?: any
}) => {
  const siteMetadata = useSiteMetadata()

  const seo = {
    title: title ? `${title} · ${siteMetadata.author}` : siteMetadata.title,
    description: description ? description : siteMetadata.description,
    twitterHandle: siteMetadata.twitterHandle,
  }

  return (
    <>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {/* <meta name="image/> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      {/* <meta name="twitter:image" content={seo.image} /> */}
      {seo.twitterHandle ? (
        <meta name="twitter:creator" content={seo.twitterHandle} />
      ) : (
        <></>
      )}
      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      {/* <meta name="og:type" />
      <meta name="og:article? "/>
      <meta name="og:url" />
      <meta name="og:image" />
      <meta name="og:image:width" />
      <meta name="og:image:height" /> */}
      {/* <link rel="icon" href="" /> */}
      {children}
    </>
  )
}

export default SEO
