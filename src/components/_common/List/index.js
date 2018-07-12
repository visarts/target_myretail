import React from 'react'
import { Typography } from 'common'
import { StyledList, StyledListItem } from './List.style'

const List = props => {
  return (
    <StyledList>
      {props.children}
    </StyledList>
  )
}

export const ListItem = props => {
  return (
    <StyledListItem>
      <Typography size="md">
        {props.children}
      </Typography>
    </StyledListItem>
  )
}

export default List
