import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 1rem;
  background: #fff;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.09);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
`

Card.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Card
