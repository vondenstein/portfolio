import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

import media from "../../styles/media"
import starIcon from "../../../static/icons/star.svg"
import forkIcon from "../../assets/icons/fork.svg"

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

    // <PreviewCard style={{ background: "#0D0709" }}>
    //   <Heading style={{ color: "#fafafa" }}>{name}</Heading>
    //   <SubHeading style={{ color: "#fafafa" }}>{description}</SubHeading>
    //   {/* <Image src={needlBackground.childImageSharp.fluid} /> */}
    //   <Border style={{ background: "rgba(255,255,255,0.06)" }} />
    //   {/* <Anchor as="div" style={{ background: "#070202", color: "#515359" }}> */}
    //   <Anchor
    //     as="div"
    //     href={url}
    //     style={{
    //       background: `${language === null ? "#070202" : language.color}`,
    //       color: "#515359",
    //     }}
    //   >
    //     View on GitHub
    //   </Anchor>
    // </PreviewCard>
    <Card background={`${language === null ? "#070202" : language.color}`}>
      <Content>
        <Title dark>{name}</Title>
        <Description>{description}</Description>
        <HorizontalRule dark={true} />
        <ActionLink
          key={name}
          target="_blank"
          data-ally="false"
          href={`https://github.com/${name}`}
          dark
        >
          <LinkIcon type="image/svg+xml" data={`icons/github.svg`} />
          View on GitHub
        </ActionLink>
      </Content>
    </Card>
  )
}

const Card = styled.div<{ background }>`
  position: relative;
  height: 380px;
  padding: 80px 70px;
  background: ${p => p.background};
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow: hidden;
`

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 371px;

  ${media.phablet`
    text-align: center;
    margin: 0 auto;
  `}
`

const Title = styled.div`
  height: 25px;
  margin-bottom: 25px;
  font-weight: 600;
  font-size: 24px;
  color: ${p => (p.dark ? p.theme.colors.kepler : "#fff")};
`
const Description = styled.p`
  height: 120px;
  font-size: 18px;
  color: ${p => p.theme.colors.grey};
  margin-bottom: 30px;

  ${media.phablet`
    margin-bottom: 25px;
  `}
`

const HorizontalRule = styled.hr<{ dark }>`
  width: 140px;
  height: 1px;
  border: none;
  margin-bottom: 30px;
  background: ${p => (p.dark ? "rgba(0, 0, 0, 0.1)" : "rgba(255,255,255,0.1)")};
`

const ActionLink = styled.a`
  position: relative;
  font-weight: 600;
  font-size: 16px;
  color: ${p => (p.dark ? p.theme.colors.kepler : "#fff")};

  svg {
    margin-right: 13px;
  }

  &:nth-child(2) {
    margin-left: 30px;
  }

  &[data-a11y="true"]:focus::after {
    content: "";
    position: absolute;
    left: -10%;
    top: -42%;
    width: 120%;
    height: 200%;
    border: 2px solid ${p => p.theme.colors.purple};
    background: rgba(255, 255, 255, 0.01);
    border-radius: 5px;
  }
`

const LinkIcon = styled.object`
  height: 16px;
  margin-right: 12px;
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
