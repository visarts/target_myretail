import React from 'react'
import _ from 'lodash'
import {
  FlexGroup,
  FlexGroupItem,
  Icon,
  Typography,
} from 'common'

import { StyledItemPromotions } from './ItemPromotions.style'

const ItemPromotions = props => {
  return (
    <StyledItemPromotions>
      {_.map(props.promotions, item => (
        <FlexGroup spacing="sm" key={item.promotionIdentifier}>
          <FlexGroupItem noGrow>
            <Icon name="local_offer" size="lg" color="red" />
          </FlexGroupItem>
          <FlexGroupItem noGrow>
            <Typography color="red" size="xl"> {_.head(item.Description).shortDescription}</Typography>
          </FlexGroupItem>
        </FlexGroup>
      ))}
    </StyledItemPromotions>
  )
}

export default ItemPromotions
