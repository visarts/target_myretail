import React from 'react'
import PropTypes from 'prop-types'
import { StyledTypography } from './Typography.style'

const variantMap = {
  header: 'h1',
  subHeader: 'h2',
  default: 'span',
}

const Typography = props => {
  return (
    <StyledTypography
      element={variantMap[props.variant] || variantMap.default}
      size={props.size}
      color={props.color || 'main'}>
      {props.children}
    </StyledTypography>
  )
}

Typography.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string,
  variant: PropTypes.string,
}

export default Typography
