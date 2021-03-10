import React from "react"
import styled from "@emotion/styled"

import Section from "../../components/Section"

export default () => (
  <HomeHeroContainer>
    <Section>
      <ContentContainer>
        <TextContainer>
          <h1>Creativity. Problem-solving. Innovation.</h1>
          <MainText>
            These are the things that make us human. They are the things that I
            strive to be better at every single day.
          </MainText>
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
  /* color: ${p => p.theme.colors.grey}; */
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
