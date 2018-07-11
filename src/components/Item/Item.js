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

class Item extends React.Component {
  constructor (props) {
    super(props)
    this.props.fetchApiData()
  }

  componentDidUpdate = () => {
    // console.log(this.props)
  }

  render () {
    const { props } = this
    const { isPending, apiData } = props.apiData
    const itemData = apiData && _.head(apiData.CatalogEntryView)
    console.log(itemData)
    return (
      <React.Fragment>
        <Spinner show={isPending} />
        {itemData && (
          <React.Fragment>
            <ItemTitle>{itemData.title}</ItemTitle>
            <ItemGallery images={_.head(itemData.Images)} />
            <ItemReviews reviews={_.head(itemData.CustomerReview)} />
            <ItemPricing offerPrice={_.head(_.head(itemData.Offers).OfferPrice)} />
            <ItemPromotions promotions={itemData.Promotions} />
          </React.Fragment>
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
