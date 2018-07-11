import React from 'react'
import _ from 'lodash'

import { Btn, Typography } from 'common'

export default class ItemGallery extends React.Component {
  render () {
    const primaryImageUrl = _.head(this.props.images.PrimaryImage).image
    const alternateImages = this.props.images.AlternateImages
    return (
      <div>
        <div>
          <img src={primaryImageUrl} />
        </div>
        <div>
          <Btn icon="zoom_in" color="default" />
          <Typography size="md" color="main">view larger</Typography>
        </div>
        <div>
          <img src={primaryImageUrl} style={{width: '60px', border: '1px solid black'}} />
          {_.map(alternateImages, item => (
            <img src={item.image} key={item.image} style={{width: '60px'}} />
          ))}
        </div>
      </div>
    )
  }
}
