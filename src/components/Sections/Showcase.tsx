import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import Section from "../../components/Section"
import media from "../../styles/media"

export default ({ section }) => (
  <ShowcaseBody>
    <Section>
      <Card background={section.color}>
        <Content>
          <Icon dark>
            <ShowcaseIcon
              type="image/svg+xml"
              data={`icons/${section.icon}.svg`}
            />
            {section.title}
          </Icon>
          <Excerpt>{section.description}</Excerpt>
          <HorizontalRule dark={true} />
          <div>
            {section.links.map(link =>
              link.type === "internal" ? (
                <ActionLink as={Link} key={link.text} to={link.url} dark>
                  <LinkIcon
                    type="image/svg+xml"
                    data={`icons/${link.icon}.svg`}
                  />
                  {link.text}
                </ActionLink>
              ) : (
                <ActionLink
                  key={link.text}
                  target="_blank"
                  data-ally="false"
                  href={link.url}
                  dark
                >
                  <LinkIcon
                    type="image/svg+xml"
                    data={`icons/${link.icon}.svg`}
                  />
                  {link.text}
                </ActionLink>
              )
            )}
          </div>
        </Content>
        <ImageContainer>{/* <img src={section.image} /> */}</ImageContainer>
      </Card>
    </Section>
  </ShowcaseBody>
)

const ShowcaseBody = styled.div`
  margin-top: 30px;
  position: relative;
  z-index: 1;
`
const Card = styled.div<{ background }>`
  position: relative;
  width: 100%;
  height: 380px;
  padding: 80px 70px;
  background: ${p => p.background};
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow: hidden;
  margin: 0 auto;

  &:not(:last-child) {
    margin: 30px auto;
  }

  &::after {
    content: "";
    position: absolute;
    pointer-events: none;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    top: 0;
    left: 0;
    box-shadow: 0px 10px 100px rgba(0, 0, 0, 0.16);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover::after {
    opacity: 1;
  }

  ${media.phablet`
    height: 100%;
    padding: 40px 35px;
  `}
`

const LinkIcon = styled.object`
  height: 16px;
  margin-right: 12px;
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

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 371px;
`

const Icon = styled.div`
  height: 25px;
  margin-bottom: 25px;
  font-weight: 600;
  font-size: 24px;
  color: ${p => (p.dark ? p.theme.colors.kepler : "#fff")};
`

const ShowcaseIcon = styled.object`
  height: 25px;
  margin-right: 12px;
`

const Excerpt = styled.p`
  font-size: 18px;
  color: ${p => p.theme.colors.kepler};
  margin-bottom: 30px;

  ${media.phablet`
    margin-bottom: 25px;
  `}
`

const ImageContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 69%;
  top: 0;
  right: 0;
  pointer-events: none;
  overflow: hidden;

  .img {
    height: 100%;
  }

  ${media.tablet`
    display: none;
  `}
`
