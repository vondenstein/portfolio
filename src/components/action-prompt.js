import React from "react"
import styled from "@emotion/styled"

import Section from "@components/section"

const ActionPrompt = ({ heading, text, actionLink }) => {
  return (
    <Section>
      <Container>
        <Content>
          <Heading>{heading}</Heading>
          <Text>{text}</Text>
          {actionLink}
        </Content>
      </Container>
    </Section>
  )
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 64px 0 55px;
  margin: 10px auto 100px;
  // background: ${p => p.theme.colors.card};
  background: #fff;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  z-index: 1;
`

const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 640px;
`

const Heading = styled.h3`
  margin-bottom: 20px;
`

const Text = styled.p`
  margin: 0 auto 30px;
  // color: ${p => p.theme.colors.grey};
  line-height: 1.75;
`

export default ActionPrompt
