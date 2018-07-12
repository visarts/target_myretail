import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import ItemReviewsOverall from './ItemReviewsOverall'
import ItemReviewsFeatureBlock from './ItemReviewsFeatureBlock'

const ItemReviews = props => {
  return (
    <React.Fragment>
      <ItemReviewsOverall
        consolidatedOverallRating={parseInt(props.reviews.consolidatedOverallRating)}
        totalReviews={parseInt(props.reviews.totalReviews)} />
      <ItemReviewsFeatureBlock
        pro={_.head(props.reviews.Pro)}
        con={_.head(props.reviews.Con)} />
    </React.Fragment>
  )
}

ItemReviews.propTypes = {
  reviews: PropTypes.object,
}

export default ItemReviews
