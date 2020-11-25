import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import Card from "./card"
import starIcon from "@assets/icons/star.svg"
import forkIcon from "@assets/icons/fork.svg"

function RepoCard({
  name,
  description,
  url,
  stars,
  forks,
  language,
  topics,
  isArchived,
}) {
  console.log(language)
  return (
    // <Card
    //   css={hoverAnimation}
    //   as="a"
    //   href={url}
    //   target="_blank"
    //   rel="noopener noreferrer"
    // >
    //   <CardContent>
    //     <h4>{name}</h4>
    //     <p>{description}</p>
    //   </CardContent>
    //   <ExtraCardContent>
    //     {language === null ? null : (
    //       <ContentItem>
    //         <div>
    //           <svg height="15" width="15">
    //             <circle cx="7.5" cy="7.5" r="7.5" fill={language.color} />
    //           </svg>
    //         </div>
    //         <span>{language.name}</span>
    //       </ContentItem>
    //     )}
    //     <ContentItem>
    //       <img src={starIcon} alt="stars" />
    //       <span>{stars}</span>
    //     </ContentItem>
    //     <ContentItem>
    //       <img src={forkIcon} alt="stars" />
    //       <span>{forks}</span>
    //     </ContentItem>
    //   </ExtraCardContent>
    // </Card>
    <PreviewCard style={{ background: "#0D0709" }}>
      <Heading style={{ color: "#fafafa" }}>{name}</Heading>
      <SubHeading style={{ color: "#fafafa" }}>{description}</SubHeading>
      {/* <Image src={needlBackground.childImageSharp.fluid} /> */}
      <Border style={{ background: "rgba(255,255,255,0.06)" }} />
      {/* <Anchor as="div" style={{ background: "#070202", color: "#515359" }}> */}
      <Anchor
        as="div"
        href={url}
        style={{
          background: `${language === null ? "#070202" : language.color}`,
          color: "#515359",
        }}
      >
        View on GitHub
      </Anchor>
    </PreviewCard>
  )
}

const hoverAnimation = css`
  &:hover {
    cursor: pointer;
    z-index: 5;

    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.03),
      0 30px 60px -10px rgba(0, 0, 0, 0.05),
      0 18px 36px -18px rgba(0, 0, 0, 0.11);
    // -webkit-transition: -webkit-transform 2s var(--ease-out-quad), box-shadow 0.3s var(--ease-out-quad);
    // -webkit-transition: transform 2s var(--ease-out-quad), box-shadow 0.3s var(--ease-out-quad);
    transition: transform 0.35s ease, box-shadow 0.35s ease;

    -webkit-transform: translateY(-1px);
    transform: translateY(-1px);
  }
`

const CardContent = styled.div`
  padding: 1rem 0;
  h4 {
    margin-top: 0;
  }
`

const ContentItem = styled.div`
  display: flex;
  &:not(first-child) {
    margin-right: 0.5rem;
  }
  img {
    margin: 0;
  }
  span {
    color: #000;
    margin-left: 0.5rem;
  }
`

const ExtraCardContent = styled.div`
  display: flex;
  align-items: center;
`

RepoCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  stars: PropTypes.number,
  forks: PropTypes.number,
  isArchived: PropTypes.bool,
}

export default RepoCard

const PreviewCard = styled.div`
  border-radius: 5px;
  overflow: hidden;
  background: red;
  margin-bottom: 25px;
`

const Heading = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 40px 15px 40px;
  font-size: 22px;
  color: #fff;
  /* font-family: ${p => p.theme.fontfamily.serif}; */
`

const SubHeading = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 40px 15px 40px;
  font-size: 14px;
  color: #fff;
  /* font-family: ${p => p.theme.fontfamily.serif}; */
`

const Anchor = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  font-size: 18px;
  font-weight: 600;
`

const Border = styled.div`
  position: relative;
  top: 1px;
  height: 1px;
`
