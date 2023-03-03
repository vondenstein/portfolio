import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Layout from "../../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Block from "../../components/Block"

import * as styles from "../styles/BioPage.module.css"
import SEO from "../../components/SEO"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

const PhotosPage: React.FC<PageProps> = () => {
  const { author } = useSiteMetadata()

  return (
    <Layout>
      <h1>Photos</h1>
      <p>Documenting my adventures and favorite moments.</p>
    </Layout>
  )
}

export default PhotosPage

export const Head: HeadFC = () => {
  return (
    <SEO
      title="Photos"
      description="Hi, I'm Stephen. Software engineer, tinkerer, and occasional photographer."
      imgType="page"
      imgTitle="Photos"
    />
  )
}
