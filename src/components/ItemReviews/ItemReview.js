import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

import {
  FlexGroup,
  FlexGroupItem,
  Rating,
  Typography,
} from 'common'

import { StyledItemsReview } from './ItemReviews.style'

const ItemReview = props => {
  const datePosted = moment(props.datePosted).format('MMMM DD, YYYY')
  const total = parseInt(props.review.overallRating)
  return (
    <StyledItemsReview>
      <FlexGroup direction="column" vertical="flex-start">
        <FlexGroupItem direction="column" vertical="flex-start">
          <Rating size="lg" total={total} block />
          <Typography variant="subHeader" size="lg" strong>
            {props.review.title}
          </Typography>
          <Typography size="sm">
            {props.review.review}
          </Typography>
          <Typography size="sm" gutter="top" block>
            <a href="">{props.review.screenName}</a> {datePosted}
          </Typography>
        </FlexGroupItem>
      </FlexGroup>
    </StyledItemsReview>
  )
}

ItemReview.propTypes = {
  review: PropTypes.object,
}

export default ItemReview
