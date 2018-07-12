import React from 'react'
import _ from 'lodash'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchApiData } from 'store/apiData/actionCreator'

import {
  Spinner,
} from 'common'

import ItemTitle from '../ItemTitle/ItemTitle'
import ItemGallery from '../ItemGallery/ItemGallery'
import ItemReviews from '../ItemReviews/ItemReviews'
import ItemPricing from '../ItemPricing/ItemPricing'
import ItemPromotions from '../ItemPromotions/ItemPromotions'
import ItemQuantity from '../ItemQuantity/ItemQuantity'
import ItemActionsPrimary from '../ItemActionsPrimary/ItemActionsPrimary'
import ItemReturns from '../ItemReturns/ItemReturns'
import ItemActionsSecondary from '../ItemActionsSecondary/ItemActionsSecondary'
import ItemFeatures from '../ItemFeatures/ItemFeatures'

import {
  StyledItem,
  StyledItemContainer,
  StyledItemComponent,
} from './Item.style'

class Item extends React.Component {
  constructor (props) {
    super(props)
    this.props.fetchApiData()
  }

  render () {
    const { props } = this
    const { isPending, apiData } = props.apiData
    const itemData = apiData && _.head(apiData.CatalogEntryView)
    return (
      <React.Fragment>
        <Spinner show={isPending} />
        {itemData && (
          <StyledItem>
            <StyledItemContainer>
              <StyledItemComponent><ItemTitle>{itemData.title}</ItemTitle></StyledItemComponent>
              <StyledItemComponent><ItemGallery images={_.head(itemData.Images)} /></StyledItemComponent>
            </StyledItemContainer>
            <StyledItemContainer>
              <StyledItemComponent><ItemPricing offerPrice={_.head(_.head(itemData.Offers).OfferPrice)} /></StyledItemComponent>
              <StyledItemComponent><ItemPromotions promotions={itemData.Promotions} /></StyledItemComponent>
              <StyledItemComponent><ItemQuantity /></StyledItemComponent>
              <StyledItemComponent><ItemActionsPrimary purchasingChannelCode={parseInt(itemData.purchasingChannelCode)} /></StyledItemComponent>
              <StyledItemComponent><ItemReturns returnPolicy={_.head(itemData.ReturnPolicy)} /></StyledItemComponent>
              <StyledItemComponent><ItemActionsSecondary /></StyledItemComponent>
              <StyledItemComponent specialFloat><ItemFeatures features={_.head(itemData.ItemDescription).features} /></StyledItemComponent>
            </StyledItemContainer>
            <StyledItemContainer>
              <StyledItemComponent><ItemReviews reviews={_.head(itemData.CustomerReview)} /></StyledItemComponent>
            </StyledItemContainer>
          </StyledItem>
        )}
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchApiData,
  }, dispatch)

const mapStateToProps = state => {
  return {
    apiData: {...state.apiData},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)
