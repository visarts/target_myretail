import React from 'react'
import PropTypes from 'prop-types'
import {
  FlexGroup,
  FlexGroupItem,
  Rating,
  Typography,
} from 'common'

import { StyledItemsReviewOverall } from './ItemReviews.style'

const ItemReviewsOverall = props => {
  return (
    <StyledItemsReviewOverall>
      <FlexGroup>
        <FlexGroupItem>
          <Rating total={parseInt(props.consolidatedOverallRating)} />
          <Typography size="md" strong>overall</Typography>
        </FlexGroupItem>
        <FlexGroupItem horizontal="flex-end">
          <a href="">
            <Typography size="md" strong>view all {props.totalReviews} reviews</Typography>
          </a>
        </FlexGroupItem>
      </FlexGroup>
    </StyledItemsReviewOverall>
  )
}

ItemReviewsOverall.propTypes = {
  consolidatedOverallRating: PropTypes.number,
  totalReviews: PropTypes.number,
}

export default ItemReviewsOverall
