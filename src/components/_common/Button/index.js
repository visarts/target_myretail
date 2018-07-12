import React from 'react'
import PropTypes from 'prop-types'
import Typography from '../Typography'
import { StyledButton } from './Button.style'

const Button = props => {
  const typographySize = props.variant === 'secondary' ? 'sm' : 'lg'
  const typographyColor = props.variant === 'primary' ? 'white' : 'main'
  return (
    <StyledButton
      variant={props.variant}
      background={props.background}>
      <Typography
        size={typographySize}
        color={typographyColor}
        gutter="both"
        slim
        block>
        {props.children}
      </Typography>
    </StyledButton>
  )
}

Button.propTypes = {
  variant: PropTypes.string,
  background: PropTypes.string,
}

export default Button
