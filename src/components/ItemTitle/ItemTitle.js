import React from 'react'
import { Typography } from 'common'
import { StyledItemTitle } from './ItemTitle.style'

const ItemTitle = props => {
  return (
    <StyledItemTitle>
      <Typography variant="header" size="xxl" slim>{props.children}</Typography>
    </StyledItemTitle>
  )
}

export default ItemTitle
