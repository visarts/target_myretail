import React from 'react'
import PropTypes from 'prop-types'
import {
  FlexGroup,
  FlexGroupItem,
  Button,
  Typography,
} from 'common'

const ItemActionsPrimary = props => {
  return (
    <FlexGroup vertical="flex-start" spacing="sm">
      {(props.purchasingChannelCode === 0 || props.purchasingChannelCode === 1) &&
        <FlexGroupItem horizontal="center" direction="column">
          <Button variant="primary" background="black">PICK UP IN STORE</Button>
          <a href=""><Typography size="sm" strong>find in a store</Typography></a>
        </FlexGroupItem>
      }
      {(props.purchasingChannelCode === 0 || props.purchasingChannelCode === 2) &&
        <FlexGroupItem>
          <Button variant="primary" background="red">ADD TO CART</Button>
        </FlexGroupItem>
      }
    </FlexGroup>
  )
}

ItemActionsPrimary.propTypes = {
  purchasingChannelCode: PropTypes.number,
}

export default ItemActionsPrimary
