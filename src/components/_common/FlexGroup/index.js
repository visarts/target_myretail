import React from 'react'
import PropTypes from 'prop-types'
import { StyledFlexGroup, StyledFlexGroupItem } from './FlexGroup.style'

const FlexGroup = props => {
  const childrenWithProps = React.Children.map(props.children, child => {
    if (child) {
      return React.cloneElement(child, { spacing: props.spacing, evenSpread: props.evenSpread })
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
  const width = Math.round((1 / parseInt(props.children.length)) * 100) || 50
  return (
    <StyledFlexGroupItem
      vertical={props.vertical}
      horizontal={props.horizontal}
      block={props.block}
      spacing={props.spacing}
      itemWidth={props.evenSpread ? `${width}%` : 'auto'}
      direction={props.direction}
      noGrow={props.noGrow}>
      {props.children}
    </StyledFlexGroupItem>
  )
}

FlexGroupItem.propTypes = {
  vertical: PropTypes.string,
  horizontal: PropTypes.string,
  block: PropTypes.bool,
  spacing: PropTypes.string,
  evenSpread: PropTypes.bool,
  direction: PropTypes.string,
  noGrow: PropTypes.bool,
}

export default FlexGroup
