import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import Card from "./card"
import starIcon from "../../images/star.svg"
import forkIcon from "../../images/fork.svg"

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
  return (
    <Card
      css={hoverAnimation}
      as="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <CardContent>
        <h4>{name}</h4>
        <p>{description}</p>
      </CardContent>
      <ExtraCardContent>
        {language === null ? null : (
          <ContentItem>
            <div>
              <svg height="15" width="15">
                <circle cx="7.5" cy="7.5" r="7.5" fill={language.color} />
              </svg>
            </div>
            <span>{language.name}</span>
          </ContentItem>
        )}
        <ContentItem>
          <img src={starIcon} alt="stars" />
          <span>{stars}</span>
        </ContentItem>
        <ContentItem>
          <img src={forkIcon} alt="stars" />
          <span>{forks}</span>
        </ContentItem>
      </ExtraCardContent>
    </Card>
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
