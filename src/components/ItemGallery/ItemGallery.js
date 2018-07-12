import React from 'react'
import _ from 'lodash'
import ImageGallery from 'react-image-gallery'

export default class ItemGallery extends React.Component {
  render () {
    const alternateImages = this.props.images.AlternateImages
    const images = _.map(alternateImages, item => {
      return {
        original: item.image,
        thumbnail: item.image,
      }
    })
    return (
      // <div>
      //   <div>
      //     <img src={primaryImageUrl} />
      //   </div>
      //   <div>
      //     <Btn icon="zoom_in" color="default" />
      //     <Typography size="md" color="main">view larger</Typography>
      //   </div>
      //   <div>
      //     <img src={primaryImageUrl} style={{width: '60px', border: '1px solid black'}} />
      //     {_.map(alternateImages, item => (
      //       <img src={item.image} key={item.image} style={{width: '60px'}} />
      //     ))}
      //   </div>
      // </div>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showBullets />
    )
  }
}
