import React from 'react'
import Typography from '../Typography'
import { StyledButton } from './Button.style'

const Button = props => {
  const color = props.variant === 'secondary' ? 'default' : props.color
  const typographySize = props.variant === 'secondary' ? 'md' : 'lg'
  return (
    <StyledButton
      variant={props.variant}
      color={color}>
      <Typography size={typographySize}>
        {props.children}
      </Typography>
    </StyledButton>
  )
}

export default Button
