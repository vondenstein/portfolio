import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import Hero from "../components/Hero"
import SocialLinks from "../components/SocialLinks"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  // const {
  //   prismic: {
  //     allAuthors: {
  //       edges: [{ node }],
  //     },
  //   },
  // } = useStaticQuery(graphql`
  //   {
  //     prismic {
  //       allAuthors {
  //         edges {
  //           node {
  //             profile_photo
  //             name
  //             quote
  //             social_links {
  //               service
  //               link
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <Layout>
      <SEO title="Bio" pathname="/bio/" />
      <Section>
        <Hero>
          <ProfilePicture>
            {/* <img src={node.profile_photo.url} alt={node.profile_photo.alt} /> */}
          </ProfilePicture>
          <ProfileName>Stephen Vondenstein</ProfileName>
          <ProfileInfo>Just one more cup of coffee...</ProfileInfo>
          <ProfileLinks>
            <SocialLinks links={null} />
          </ProfileLinks>
        </Hero>
        <ProfileBio>
          <h3>Fluent Languages:</h3>
          <p>Python, Java, JavaScript, Bash, SQL, HTML + CSS</p>
          <h3>Frameworks:</h3>
          <p>TensorFlow, Keras, Node.JS, React.JS, Redux</p>
          <h3>Tools:</h3>
          <p>
            VS Code, vim, Xcode, git, GitHub & GitLab, Travis CI, GitLab CI,
            Linux Shell, VMware vSphere, Docker, Kubernetes, nginx, BIND
          </p>
        </ProfileBio>
      </Section>
    </Layout>
  )
}

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
const ProfilePicture = styled.div`
  position: relative;
  z-index: 1;
  height: 164px;
  width: 164px;
  margin-bottom: 35px;
  border-radius: 50%;
  overflow: hidden;
  /* border: 2px solid ${p => p.theme.colors.background}; */
  box-shadow: 0px 15.619px 31.2381px rgba(0, 0, 0, 0.15);
`

const ProfileName = styled.h1`
  font-size: 38px;
  // font-family: ${p => p.theme.fonts.sansSerif};
  // color: ${p => p.theme.colors.primary};
  margin-bottom: 15px;
  font-weight: 600;
`

const ProfileInfo = styled.p`
  margin: 0 auto;
  max-width: 450px;
  // color: ${p => p.theme.colors.grey};
  font-size: 18px;
  // font-family: ${p => p.theme.fonts.sansSerif};
  line-height: 1.4;
  text-align: center;
`

const ProfileLinks = styled.div`
  display: flex;
  align-items: center;
  margin-top: 35px;
`
