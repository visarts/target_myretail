import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateItemQuantity } from 'store/item/actionCreator'

import {
  FlexGroup,
  FlexGroupItem,
  Btn,
  Typography,
} from 'common'

import { StyledItemQuantity, StyledItemQuantityControls } from './ItemQuantity.style'

class ItemQuantity extends React.Component {
  onIncreaseQuantity = () => {
    const quantity = parseInt(this.props.item.quantity + 1)
    this.props.updateItemQuantity(quantity)
  }

  onDecreaseQuantity = () => {
    if (this.props.item.quantity > 1) {
      const quantity = parseInt(this.props.item.quantity - 1)
      this.props.updateItemQuantity(quantity)
    }
  }

  render () {
    return (
      <StyledItemQuantity>
        <StyledItemQuantityControls>
          <FlexGroup>
            <FlexGroupItem>
              <Typography size="md">quantity</Typography>
            </FlexGroupItem>
            <FlexGroupItem horizontal="flex-end">
              <Btn
                icon="remove"
                color="white"
                background="default"
                disabled={this.props.item.quantity < 2}
                onClick={this.onDecreaseQuantity} />
              <Typography size="lg" spacing="both" strong>{this.props.item.quantity}</Typography>
              <Btn
                icon="add"
                color="white"
                background="default"
                onClick={this.onIncreaseQuantity} />
            </FlexGroupItem>
          </FlexGroup>
        </StyledItemQuantityControls>
      </StyledItemQuantity>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    updateItemQuantity,
  }, dispatch)

const mapStateToProps = state => {
  return {
    item: {...state.item},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemQuantity)
