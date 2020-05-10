import React from "react"
import styled from "@emotion/styled"

import Hero from "./hero"
import SocialLinks from "./social-links"

const ProfileHero = () => {
  return (
    <Hero>
      <ProfilePicture></ProfilePicture>
      <ProfileName>Stephen Vondenstein</ProfileName>
      <ProfileInfo>Just one more cup of coffee...</ProfileInfo>
      <ProfileLinks>
        <SocialLinks />
      </ProfileLinks>
    </Hero>
  )
}

const ProfilePicture = styled.div`
  position: relative;
  z-index: 1;
  height: 164px;
  width: 164px;
  margin-bottom: 35px;
  border-radius: 50%;
  overflow: hidden;
  // border: 2px solid ${p => p.theme.colors.background};
  box-shadow: 0px 15.619px 31.2381px rgba(0, 0, 0, 0.15);
`

const ProfileName = styled.h1`
  font-size: 38px;
  // font-family: ${p => p.theme.fonts.sansSerif};
  // color: ${p => p.theme.colors.primary};
  margin-bottom: 15px;
  font-weight: 600;
`

const ProfileInfo = styled.p`
  margin: 0 auto;
  max-width: 450px;
  // color: ${p => p.theme.colors.grey};
  font-size: 18px;
  // font-family: ${p => p.theme.fonts.sansSerif};
  line-height: 1.4;
  text-align: center;
`

const ProfileLinks = styled.div`
  display: flex;
  align-items: center;
  margin-top: 35px;
`

export default ProfileHero
