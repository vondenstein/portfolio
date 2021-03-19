import React from "react"
import styled from "@emotion/styled"

const SocialLinks = ({ links }) => {
  if (!links) return null

  return (
    <>
      {links.map(link => {
        return (
          <SocialIconContainer
            key={link.url}
            target="_blank"
            rel="noopener nofollow"
            data-a11y="false"
            aria-label={`Link to ${link.url}`}
            href={link.url}
          >
            <SocialIcon
              type="image/svg+xml"
              data={`icons/${link.service}.svg`}
            />
          </SocialIconContainer>
        )
      })}
    </>
  )
}

const SocialIcon = styled.object`
  height: 16px;
`

const SocialIconContainer = styled.a`
  position: relative;
  margin-left: 3.2rem;
  text-decoration: none;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  &[data-a11y="true"]:focus::after {
    content: "";
    position: absolute;
    left: -50%;
    top: -10%;
    width: 200%;
    height: 120%;
    border: 2px solid ${p => p.theme.colors.purple};
    background: rgba(255, 255, 255, 0.01);
    border-radius: 5px;
  }
`

export default SocialLinks
