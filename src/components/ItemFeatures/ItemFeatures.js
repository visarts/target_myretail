import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import {
  Typography,
  List,
  ListItem,
} from 'common'

const Itemfeatures = props => {
  return (
    <React.Fragment>
      <Typography variant="header" size="huge" gutter="bottom">product highlights</Typography>
      <List>
        {_.map(props.features, (item, index) => (
          <ListItem key={index}>
            <span dangerouslySetInnerHTML={{__html: item}} />
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  )
}

Itemfeatures.propTypes = {
  features: PropTypes.array,
}

export default Itemfeatures
