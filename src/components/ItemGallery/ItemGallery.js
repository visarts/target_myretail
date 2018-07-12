import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import ImageGallery from 'react-image-gallery'

const ItemGallery = props => {
  const alternateImages = props.images.AlternateImages
  const images = _.map(alternateImages, item => {
    return {
      original: item.image,
      thumbnail: item.image,
    }
  })
  return (
    <ImageGallery
      items={images}
      showPlayButton={false}
      showBullets />
  )
}

ItemGallery.propTypes = {
  images: PropTypes.object,
}

export default ItemGallery
