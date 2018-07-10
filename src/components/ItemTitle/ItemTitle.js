import React from 'react'
import { Typography } from 'common'

const ItemTitle = props => {
  return (
    <Typography variant="header" size="xxl">{props.children}</Typography>
  )
}

export default ItemTitle
