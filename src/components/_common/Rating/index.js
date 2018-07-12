import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import {
  FlexGroup,
  FlexGroupItem,
  Icon,
} from 'common'

const Rating = props => {
  const scale = props.scale || 5
  const total = parseInt(props.total)
  return (
    <FlexGroup>
      {_.map(_.range(scale || 5), item => (
        <FlexGroupItem key={item} block={props.block}>
          <Icon size={props.size || 'husky'} name="star_rate" color={item < total ? 'red' : 'default'} />
        </FlexGroupItem>
      ))}
    </FlexGroup>
  )
}

Rating.propTypes = {
  block: PropTypes.bool,
  size: PropTypes.string,
  scale: PropTypes.number,
  total: PropTypes.number.isRequired,
}

export default Rating
