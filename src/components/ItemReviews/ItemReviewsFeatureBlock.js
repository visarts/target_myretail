import React from 'react'
import PropTypes from 'prop-types'
import {
  FlexGroup,
  FlexGroupItem,
  Typography,
} from 'common'
import ItemReview from './ItemReview'
import { StyledItemReviewsFeatureBlock, StyledItemsReviewFeatureBlockHeader } from './ItemReviews.style'

const ItemReviewsFeatureBlock = props => {
  return (
    <StyledItemReviewsFeatureBlock>
      <FlexGroup vertical="flex-start" evenSpread>
        <FlexGroupItem>
          <FlexGroupItem block>
            <StyledItemsReviewFeatureBlockHeader>
              <Typography variant="subHeader" size="lg">PRO</Typography>
              <Typography size="sm">most helpful 4-5 star review</Typography>
            </StyledItemsReviewFeatureBlockHeader>
            <ItemReview review={props.pro} />
          </FlexGroupItem>
        </FlexGroupItem>
        <FlexGroupItem>
          <FlexGroupItem block>
            <StyledItemsReviewFeatureBlockHeader>
              <Typography variant="subHeader" size="lg">CON</Typography>
              <Typography size="sm">most helpful 1-2 star review</Typography>
            </StyledItemsReviewFeatureBlockHeader>
            <ItemReview review={props.con} />
          </FlexGroupItem>
        </FlexGroupItem>
      </FlexGroup>
    </StyledItemReviewsFeatureBlock>
  )
}

ItemReviewsFeatureBlock.propTypes = {
  pro: PropTypes.object,
  con: PropTypes.object,
}

export default ItemReviewsFeatureBlock
