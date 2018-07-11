import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from 'common'

const ItemPricing = props => {
  return (
    <div>
      <Typography size="xxl" strong>
        {props.offerPrice.formattedPriceValue}
      </Typography> <Typography size="md">
        {props.offerPrice.priceQualifier.toLowerCase()}
      </Typography>
    </div>
  )
}

ItemPricing.propTypes = {
  offerPrice: PropTypes.object,
}

export default ItemPricing
