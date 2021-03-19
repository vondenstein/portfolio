import React from "react"
import styled from "@emotion/styled"

import Section from "../../components/Section"

export default ({ section }) => (
  <HomeHeroContainer>
    <Section>
      <ContentContainer>
        <TextContainer>
          <Heading>{section.title}</Heading>
          <MainText>{section.subtitle}</MainText>
        </TextContainer>
      </ContentContainer>
    </Section>
  </HomeHeroContainer>
)

const HomeHeroContainer = styled.div``
/* ${media.desktop`
    #mirror-mask {
      display: none;
  `} */

const TextContainer = styled.div`
  position: relative;
  z-index: 10;
  max-width: 570px;
  top: 10px;
`

/* ${media.phablet`
    position: relative;
  `} */

const MainText = styled.p`
  font-size: 3.2rem;
  font-weight: 400;
  color: ${props => props.theme.colors.grey};
  line-height: 1.3;
  margin-bottom: 50px;
`
/* ${media.phablet`
    font-size: 2.2rem;
  `}; */

const ContentContainer = styled.div`
  height: calc(100vh - 230px);
  min-height: 600px;
  padding-top: 10px;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-height: 800px) {
    min-height: 360px;
  }

  @media screen and (max-height: 648px) {
    top: -60px;
  }
`

/* ${media.phablet`
    height: calc(100vh - 180px);
    min-height: 100%;
    padding: 0;
    top: -40px;
  `}; */

/* ${media.desktop_medium`
    min-height: 360px;
  `}; */

const Contact = styled.button`
  /* color: ${p => p.theme.colors.grey}; */
  font-weight: 600;
  transition: color 0.25s ease;

  &:hover {
    color: #fff;

    span {
      background: #fff;
    }
  }
`
/* ${media.desktop`
    display: none;
  `}; */

const Key = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 1px;
  color: #000;
  /* background: ${p => p.theme.colors.grey}; */
  font-size: 13px;
  width: 16px;
  height: 16px;
  border-radius: 2.5px;
  transition: background 0.25s ease;
`

const Mobile = styled.div``
/* ${media.desktop_medium_up`
    display: none;
  `}; */

const Heading = styled.h1`
  font-size: 3.2rem;
  line-height: 1.3;
  color: #fff;
  font-weight: 400;
  margin-bottom: 1rem;
  text-transform: "none";
`
