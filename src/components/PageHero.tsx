import React from "react"
import styled from "@emotion/styled"

import Section from "./Section"

const ProfileHero = ({ heading }) => {
  return (
    <Section>
      <PageHeading>
        <Heading>{heading}</Heading>
      </PageHeading>
    </Section>
  )
}

const PageHeading = styled.div`
  margin: 100px 0;
  max-width: 652px;
`

const Heading = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 52px;
  line-height: 1.15;
`

export default ProfileHero
