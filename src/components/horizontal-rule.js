import React from "react"
import PropTypes from "prop-types"

function HorizontalRule({ offset }) {
  return (
    <div
      style={{
        position: `relative`,
        margin: `${offset} auto 50px`,
        borderBottom: `1px solid grey`,
      }}
    />
  )
}

HorizontalRule.defaultProps = {
  offset: `140px`,
}

HorizontalRule.propTypes = {
  offset: PropTypes.string,
}

export default HorizontalRule
