import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

interface BlogPostsProps {
  posts: Post[]
}

interface BlogPostsItemProps {
  post: Post
  narrow?: boolean
}

// const BlogPosts: React.FC<BlogPostsProps> = ({ posts }) => {
//   if (!posts) return null
// }

const BlogPosts = ({
  posts: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <PostsContainer>
      {edges
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map(edge => {
          return (
            <PostsContainer>
              <List>
                <BlogPost key={edge.node.id} post={edge.node} />
                <BlogPost key={edge.node.id} post={edge.node} />
              </List>
            </PostsContainer>
          )
        })}
    </PostsContainer>
  )
}

export default BlogPosts

const BlogPost = ({ post }) => {
  return (
    <PostLink to={post.frontmatter.slug}>
      <Item>
        <ImageContainer></ImageContainer>
        <div>
          <Title>{post.frontmatter.title}</Title>
          <Excerpt>{post.frontmatter.summary}</Excerpt>
          <Metadata>
            {post.frontmatter.date} · {post.timeToRead} min read
          </Metadata>
        </div>
      </Item>
    </PostLink>
  )
}

const listTile = p => css`
  position: relative;
  display: grid;
  grid-template-columns: ${p.reverse
    ? `${narrow} ${wide}`
    : `${wide} ${narrow}`};
  grid-template-rows: 2;
  column-gap: 30px;

  &:not(:last-child) {
    margin-bottom: 75px;
  }
`

const listItemRow = p => css`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 488px;
  grid-column-gap: 96px;
  grid-template-rows: 1;
  align-items: center;
  position: relative;
  margin-bottom: 50px;
`

const listItemTile = p => css`
  position: relative;
`

const listRow = p => css`
  display: grid;
  grid-template-rows: ${p.hasOnlyOneArticle ? "1fr" : "1fr 1fr"};
`

const PostsContainer = styled.div<{ alwaysShowAllDetails?: boolean }>`
  transition: opacity 0.25s;
  ${p => p.alwaysShowAllDetails && showDetails}
`

const List = styled.div<{
  reverse: boolean
  gridLayout: string
  hasOnlyOneArticle: boolean
}>`
  ${p => (p.gridLayout === "tiles" ? listTile : listRow)}
`

const Item = styled.div<{ gridLayout: string }>`
  ${p => (p.gridLayout === "rows" ? listItemRow : listItemTile)}
`

const Metadata = styled.div`
  font-weight: 600;
  font-size: 16px;
  /* color: ${p => p.theme.colors.grey}; */
  opacity: 0.33;
`
const Title = styled.h2`
  font-size: 21px;
  /* font-family: ${p => p.theme.fonts.serif}; */
  margin-bottom: ${p =>
    p.hasOverflow && p.gridLayout === "tiles" ? "35px" : "10px"};
  transition: color 0.3s ease-in-out;
  /* ${limitToTwoLines};*/
`

const Excerpt = styled.p<{
  hasOverflow: boolean
  narrow: boolean
  gridLayout: string
}>`
  font-size: 16px;
  margin-bottom: 10px;
  /* color: ${p => p.theme.colors.grey}; */
  display: ${p => (p.hasOverflow && p.gridLayout === "tiles" ? "none" : "box")};
  max-width: ${p => (p.narrow ? "415px" : "515px")};
`
const ImageContainer = styled.div<{ narrow: boolean; gridLayout: string }>`
  position: relative;
  height: ${p => (p.gridLayout === "tiles" ? "280px" : "220px")};
  box-shadow: 0 30px 60px -10px rgba(0, 0, 0, ${p => (p.narrow ? 0.22 : 0.3)}),
    0 18px 36px -18px rgba(0, 0, 0, ${p => (p.narrow ? 0.25 : 0.33)});
  margin-bottom: ${p => (p.gridLayout === "tiles" ? "30px" : 0)};
  transition: transform 0.3s var(--ease-out-quad),
    box-shadow 0.3s var(--ease-out-quad);

  & > div {
    height: 100%;
  }

  /* ${mediaqueries.tablet`
    height: 200px;
    margin-bottom: 35px;
  `}

  ${mediaqueries.phablet`
    overflow: hidden;
    margin-bottom: 0;
    box-shadow: none;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  `} */
`

const PostLink = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 5px;
  z-index: 1;
  transition: transform 0.33s var(--ease-out-quart);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

  &:hover ${ImageContainer}, &:focus ${ImageContainer} {
    transform: translateY(-1px);
    box-shadow: 0 50px 80px -20px rgba(0, 0, 0, 0.27),
      0 30px 50px -30px rgba(0, 0, 0, 0.3);
  }

  &:hover h2,
  &:focus h2 {
    /* color: ${p => p.theme.colors.accent}; */
  }

  &[data-a11y="true"]:focus::after {
    content: "";
    position: absolute;
    left: -1.5%;
    top: -2%;
    width: 103%;
    height: 104%;
    /* border: 3px solid ${p => p.theme.colors.accent}; */
    background: rgba(255, 255, 255, 0.01);
    border-radius: 5px;
  }

  /* ${mediaqueries.phablet`
    &:hover ${ImageContainer} {
      transform: none;
      box-shadow: initial;
    }

    &:active {
      transform: scale(0.97) translateY(3px);
    }
  `} */
`
