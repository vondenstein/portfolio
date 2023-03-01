import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Block from "../components/Block"

import * as styles from "../styles/BioPage.module.css"
import SEO from "../components/SEO"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const BioPage: React.FC<PageProps> = () => {
  const { author } = useSiteMetadata()

  return (
    <Layout>
      <Block>
        <StaticImage
          className={styles.image}
          src="../images/profile.jpg"
          alt="Me in a field looking off into the distance."
          layout="fixed"
          loading="eager"
          height={180}
          width={180}
        />
        <h2 style={{ marginBottom: "15px" }}>{author.title}</h2>
        <p style={{ marginBottom: "5px" }}>{author.subtitle}</p>
      </Block>
      <h2>Background</h2>
      <p>
        I'm a software engineer who loves to build new things. While I was born
        and raised in New Orleans, Louisiana, I'm currently enjoying the
        sunshine and lack of mosquitoes in Colorado. I graduated from Louisiana
        State Univerity with a degree in computer science, and since then have
        been enjoying connecting with people who share my passion for
        engineering and design. If this sounds like you, I'd absolutely love to
        hear from you!
      </p>
      <h2>Work</h2>
      <p>
        I'm currently working at{" "}
        <a href="https://spglobal.com" title="S&P Global Website">
          S&P Global
        </a>{" "}
        as an associate software engineer in the engineering solutions division.
        My team is primarily responsible for building and maintaining an array
        of internal tools to support a cutting-edge data insights platform,
        though we do maintain some customer-facing services. Our tools and
        services are used across the organization to increase developer
        efficiency, reduce platform-breaking errors in production, and relibably
        deliver customer data.
      </p>
      <p>
        Before S&P, I worked at Stephenson Stellar Corporation, where I was able
        to contribute to advanced security systems - including a system to
        detect and alert administrators in real-time about threats to satellite
        communications. I've co-founded a startup where our small team
        architected and built an AI-assisted image editing web application. I've
        also gained experience building and training neural networks in and
        outside of the classroom, as well as deploying scalable web services to
        the cloud.
      </p>
      <p>
        My favorite projects are those that challenge me to build upon my
        problem-solving skills while maintaining my chops as a developer - and
        I'm always interested in opportunities to scratch this itch. If you're
        looking for more in-depth information about my professional work or
        would like to work together, please reach out on{" "}
        <a
          href="https://linkedin.com/in/stephen-vondenstein/"
          title="Stephen Vondenstein on LinkedIn"
        >
          LinkedIn
        </a>
        !
      </p>
      <h2>Hobbies</h2>
      <p>
        When I'm waiting for builds to compile, I like to pursue a few other
        hobbies - one of my favorites being photography. If you'd like to check
        out my photos, you can find them{" "}
        <a
          href="https://instagram.com/vondensteins"
          title="@vondensteins on Instagram"
        >
          here
        </a>
        .
      </p>
      <p>
        I also enjoy tinkering with computer hardware and consumer electronics.
        The projects I've been most excited about are: restoring a vintage
        Macintosh SE/30, building a 6502-based computer, and designing a
        cyberdeck - all of which I'll be posting on this site with every 'aha!'
        moment and failure included.
      </p>
      <p>
        Lastly, living in the beautiful state of Colorado has awakened my inner
        explorer. My wife Blake and I have had an absolute blast getting
        outdoors and exploring the Rocky Mountains, both on foot or in our Jeep.
        When we're not exploring, you can probably find me in the garage
        figuring out which upgrade to install next - and if you see us out on
        the trail, be sure to give us a wave! ✌🏻
      </p>
    </Layout>
  )
}

export default BioPage

export const Head: HeadFC = () => {
  const { author } = useSiteMetadata()

  return (
    <SEO
      title="Bio"
      description="Hi, I'm Stephen. Software engineer, tinkerer, and occasional photographer."
      imgType="profile"
      imgTitle={author.title}
      imgSubtitle={author.subtitle}
      image="https://vondenstein.com/static/d6739856934033244f0b7ed44b54d539/90089/profile.jpg"
    />
  )
}
