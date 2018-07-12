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
      block={props.block}
      spacing={props.spacing}
      variant={props.variant || 'default'}
      gutter={props.gutter || 'none'}
      strong={props.strong}
      slim={props.slim}
      color={props.color || 'main'}>
      {props.children}
    </StyledTypography>
  )
}

Typography.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string,
  block: PropTypes.bool,
  strong: PropTypes.bool,
  variant: PropTypes.string,
  gutter: PropTypes.string,
  slim: PropTypes.bool,
  spacing: PropTypes.string,
}

export default Typography
