import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import SocialLinks from "../components/SocialLinks"
import media from "../styles/media"

export default function BioTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, fields, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} pathname={fields.slug} />
      <Section>
        <Hero>
          <ProfilePicture>
            <img src={frontmatter.photo} alt={"Profile photo"} />
          </ProfilePicture>
          <ProfileName>{frontmatter.name}</ProfileName>
          <ProfileInfo>{frontmatter.quote}</ProfileInfo>
          {/* <ProfileLinks>
            <SocialLinks links={frontmatter.links} />
          </ProfileLinks> */}
        </Hero>
        <ProfileBio>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </ProfileBio>
      </Section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BioPageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      fields {
        slug
      }
      frontmatter {
        title
        name
        quote
        photo
        links {
          service
          url
        }
      }
    }
  }
`

const Hero = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 35px auto 110px;
`

const ProfileBio = styled.div`
  // background: linear-gradient(
  //   180deg,
  //   ${p => p.theme.colors.card} 0%,
  //   rgba(249, 250, 252, 0) 91.01%
  // );
  background: #d4d7db;
  border-radius: 8px;
  padding: 88px 98px;
  position: relative;
  z-index: 1;
  ${media.phablet`
    padding: 35px;
  `}
`
const ProfilePicture = styled.div`
  position: relative;
  z-index: 1;
  height: 164px;
  width: 164px;
  margin-bottom: 35px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid ${p => p.theme.colors.background};
  box-shadow: 0px 15.619px 31.2381px rgba(0, 0, 0, 0.15);

  img {
    height: 164px;
    width: 164px;
  }
`

const ProfileName = styled.h1`
  font-size: 38px;
  // font-family: ${p => p.theme.fonts.sansSerif};
  color: #fff;
  margin-bottom: 15px;
  font-weight: 600;
`

const ProfileInfo = styled.p`
  margin: 0 auto;
  max-width: 450px;
  color: ${p => p.theme.colors.grey};
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
