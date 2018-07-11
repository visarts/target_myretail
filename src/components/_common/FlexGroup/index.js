import React from 'react'
import PropTypes from 'prop-types'
import { StyledFlexGroup, StyledFlexGroupItem } from './FlexGroup.style'

const FlexGroup = props => {
  const childrenWithProps = React.Children.map(props.children, child => {
    if (child) {
      return React.cloneElement(child, { spacing: props.spacing })
    }
  })
  return (
    <StyledFlexGroup
      vertical={props.vertical}
      horizontal={props.horizontal}
      inlined={props.inlined}
      direction={props.direction}>
      {childrenWithProps}
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
      block={props.block}
      spacing={props.spacing}
      direction={props.direction}>
      {props.children}
    </StyledFlexGroupItem>
  )
}

FlexGroupItem.propTypes = {
  vertical: PropTypes.string,
  horizontal: PropTypes.string,
  block: PropTypes.bool,
  direction: PropTypes.string,
}

export default FlexGroup
