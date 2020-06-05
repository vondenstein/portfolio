import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import PageHero from "../components/page-hero"

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.slug}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </div>
)

const PostGroup = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return <div>{Posts}</div>
}

export default ({ ...props }) => {
  return (
    <Layout>
      <SEO title="Words" pathname="/words/" />
      <PageHero heading="Sometimes sharing means more than a tweet or Instagram post. This is my place for thoughts that deserve more." />
      <Section>
        <PostGroup data={props.data} />
      </Section>
    </Layout>
  )
}
