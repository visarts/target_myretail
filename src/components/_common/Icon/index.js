import React from 'react'
import PropTypes from 'prop-types'
import { StyledIcon } from './Icon.style'

const Icon = props => {
  return (
    <StyledIcon
      size={props.size || 'xl'}
      color={props.color || 'inherit'}
      onClick={props.onClick}
      style={props.style || {}}>
      {props.name}
    </StyledIcon>
  )
}

Icon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default Icon
