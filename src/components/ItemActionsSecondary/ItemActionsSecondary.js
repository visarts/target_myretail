import React from 'react'
import PropTypes from 'prop-types'
import {
  FlexGroup,
  FlexGroupItem,
  Button,
} from 'common'

const ItemActionsSecondary = props => {
  return (
    <FlexGroup spacing="xs" evenSpread>
      <FlexGroupItem>
        <Button variant="secondary" background="black">ADD TO REGISTRY</Button>
      </FlexGroupItem>
      <FlexGroupItem>
        <Button variant="secondary" background="black">ADD TO LIST</Button>
      </FlexGroupItem>
      <FlexGroupItem>
        <Button variant="secondary" background="black">SHARE</Button>
      </FlexGroupItem>
    </FlexGroup>
  )
}

ItemActionsSecondary.propTypes = {
  purchasingChannelCode: PropTypes.number,
}

export default ItemActionsSecondary
