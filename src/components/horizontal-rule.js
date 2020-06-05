import React from "react"
import PropTypes from "prop-types"

function HorizontalRule({ offset }) {
  return (
    <div
      style={{
        position: `relative`,
        margin: `${offset} auto 50px`,
        borderBottom: `1px dotted grey`,
        borderTop: `1px dotted grey`,
        height: `3px`,
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
