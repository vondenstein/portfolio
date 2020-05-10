import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import ProfileHero from "../components/profile-hero"

export default () => (
  <Layout>
    <SEO title="Meet" pathname="/meet/" />
    <Section>
      <ProfileHero />
      <ProfileBio>
        <h3>Fluent Languages:</h3>
        <p>Python, Java, JavaScript, Bash, SQL, HTML + CSS</p>
        <h3>Frameworks:</h3>
        <p>TensorFlow, Keras, Node.JS, React.JS, Redux</p>
        <h3>Tools:</h3>
        <p>
          VS Code, vim, Xcode, git, GitHub & GitLab, Travis CI, GitLab CI, Linux
          Shell, VMware vSphere, Docker, Kubernetes, nginx, BIND
        </p>
      </ProfileBio>
    </Section>
  </Layout>
)

const ProfileBio = styled.div`
  // background: linear-gradient(
  //   180deg,
  //   ${p => p.theme.colors.card} 0%,
  //   rgba(249, 250, 252, 0) 91.01%
  // );
  background: #ffffff;
  border-radius: 8px;
  padding: 88px 98px;
  position: relative;
  z-index: 1;
`
