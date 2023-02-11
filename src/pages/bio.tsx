import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

const BioPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Bio</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "40% 60%",
          gridGap: "20px",
          marginBottom: "30px",
        }}
      >
        <StaticImage
          src={"../images/profile.jpg"}
          alt={"Me in a field looking off into the distance."}
          height={400}
          width={400}
          placeholder={"blurred"}
          imgStyle={{ borderRadius: "20px" }}
          style={{ borderRadius: "20px" }}
        />
        <div>
          <h2>I'm Stephen.</h2>
          <p>I like to do things! Look, here they are!</p>
        </div>
      </div>
      <h2>Passions</h2>
      <p>
        I'm looking for new opportunities to learn and collaborate with other
        talented engineers. Other than building software, I most enjoy
        connecting with people who share my passion for engineering and clean
        design.{" "}
      </p>
      <h2>Work</h2>
      <p>
        I'm a computer science student at Louisiana State University with a
        knack for software development and design. My favorite projects are
        those that challenge me to build upon my problem-solving skills while
        maintaining my chops as a developer. I've spent time working at a
        startup where I helped build a AI-assisted image editing web
        application. I've also gained experience building and training complex
        neural networks in and outside of the classroom, as well as building and
        deploying web applications with React.JS and GraphQL.{" "}
      </p>
      <h2>Hobbies</h2>
      <p>
        When I'm waiting for builds to compile, I like to pursue a few other
        hobbies - my favorite being photography. If you'd like to check out my
        photos, you can find them here.
      </p>
    </Layout>
  )
}

export default BioPage

export const Head: HeadFC = () => <title>Bio Page</title>
