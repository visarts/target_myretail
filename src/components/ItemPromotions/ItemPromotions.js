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
      <FlexGroup direction="column" vertical="flex-start">
        {_.map(props.promotions, item => (
          <FlexGroupItem key={item.promotionIdentifier}>
            <Icon name="local_offer" size="lg" color="red" />
            <Typography color="red" size="xl"> {_.head(item.Description).shortDescription}</Typography>
          </FlexGroupItem>
        ))}
      </FlexGroup>
    </StyledItemPromotions>
  )
}

export default ItemPromotions
