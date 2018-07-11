import React from 'react'
import PropTypes from 'prop-types'
import {
  FlexGroup,
  FlexGroupItem,
  Typography,
} from 'common'

const ItemReturns = props => {
  return (
    <FlexGroup spacing="md">
      <FlexGroupItem>
        <Typography size="xl" slim>returns</Typography>
      </FlexGroupItem>
      <FlexGroupItem>
        <Typography size="xs" slim>{props.returnPolicy.legalCopy}</Typography>
      </FlexGroupItem>
    </FlexGroup>
  )
}

ItemReturns.propTypes = {
  returnPolicy: PropTypes.object,
}

export default ItemReturns
