import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

function CardGroup({ children }) {
  return <CardGrid>{children}</CardGrid>
}

const CardGrid = styled.div`
  margin-top: 30px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`

CardGroup.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CardGroup
