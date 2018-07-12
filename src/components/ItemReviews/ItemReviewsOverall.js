import React from 'react'
import {
  FlexGroup,
  FlexGroupItem,
  Rating,
  Typography,
} from 'common'

const ItemReviewsOverall = props => {
  return (
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
  )
}

export default ItemReviewsOverall
