import React from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'
import { StyledSpinnerContainer, StyledSpinner } from './Spinner.style'

const Spinner = props => {
  return (
    <StyledSpinnerContainer show={props.show}>
      <StyledSpinner>
        <CircularProgress id="spinnerCircularProgress" size={60} />
      </StyledSpinner>
    </StyledSpinnerContainer>
  )
}

Spinner.propTypes = {
  show: PropTypes.bool,
  centered: PropTypes.bool,
  size: PropTypes.number,
}

export default Spinner
