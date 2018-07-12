import React from 'react'
import PropTypes from 'prop-types'
import {
  FlexGroup,
  FlexGroupItem,
  Typography,
} from 'common'

import { StyledReturnsLabel } from './ItemReturns.style'

const ItemReturns = props => {
  return (
    <FlexGroup spacing="md">
      <FlexGroupItem>
        <StyledReturnsLabel>
          <Typography size="xl" slim>returns</Typography>
        </StyledReturnsLabel>
      </FlexGroupItem>
      <FlexGroupItem>
        <Typography size="xs" slim>
          This item must be returned within 30 days of the ship date.
          See <a href=""><Typography size="xs" strong>return policy</Typography></a> for details.
          Prices, promotions, styles and availability may vary by store and online.
        </Typography>
      </FlexGroupItem>
    </FlexGroup>
  )
}

ItemReturns.propTypes = {
  returnPolicy: PropTypes.object,
}

export default ItemReturns
