import React from 'react'
import PropTypes from 'prop-types'
import { StyledFlexGroup, StyledFlexGroupItem } from './FlexGroup.style'

const FlexGroup = props => {
  return (
    <StyledFlexGroup
      vertical={props.vertical}
      horizontal={props.horizontal}
      inlined={props.inlined}
      direction={props.direction}>
      {props.children}
    </StyledFlexGroup>
  )
}

FlexGroup.propTypes = {
  vertical: PropTypes.string,
  horizontal: PropTypes.string,
  inlined: PropTypes.string,
  direction: PropTypes.string,
}

export const FlexGroupItem = props => {
  return (
    <StyledFlexGroupItem
      vertical={props.vertical}
      horizontal={props.horizontal}
      block={props.block}>
      {props.children}
    </StyledFlexGroupItem>
  )
}

FlexGroupItem.propTypes = {
  vertical: PropTypes.string,
  horizontal: PropTypes.string,
  block: PropTypes.bool,
}

export default FlexGroup
