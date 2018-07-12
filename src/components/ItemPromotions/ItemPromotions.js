import React from 'react'
import PropTypes from 'prop-types'
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
        <FlexGroup spacing="sm" key={item.promotionIdentifier} vertical="flex-start">
          <FlexGroupItem noGrow>
            <Icon name="local_offer" size="lg" color="red" />
          </FlexGroupItem>
          <FlexGroupItem noGrow>
            <Typography color="red" size="husky"> {_.head(item.Description).shortDescription}</Typography>
          </FlexGroupItem>
        </FlexGroup>
      ))}
    </StyledItemPromotions>
  )
}

ItemPromotions.propTypes = {
  promotions: PropTypes.array,
}

export default ItemPromotions
