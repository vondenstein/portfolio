import React from "react"

const SocialLinks = ({ links }) => {
  if (!links) return null

  return (
    <>
      {/* {links.map(option => {
        const name = option.name || getHostname(option.url) || getServicename(option.url);
        const Icon = icons[name];
        if (!Icon) {
          throw new Error(
            `unsupported social link name=${name} / url=${option.url}`,
          );
        }
        return (
          <SocialIconContainer
            key={option.url}
            target="_blank"
            rel="noopener nofollow"
            data-a11y="false"
            aria-label={`Link to ${option.url}`}
            href={option.url}
          >
            <Icon fill={fill} />
            <Hidden>Link to ${option.url}</Hidden>
          </SocialIconContainer>
        );
      })} */}
    </>
  )
}

export default SocialLinks
