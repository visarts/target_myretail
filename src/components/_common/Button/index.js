import React from 'react'
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

export default Button
