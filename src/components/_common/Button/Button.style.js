import { withTheme } from '@material-ui/core/styles'
import styled, { css } from 'styled-components'

export const StyledButton = withTheme()(styled.button`
  text-align: center;
  border: 0;
  border-radius: 3px;
  ${props => css`
    ${props.variant === 'secondary' && css`
      background: ${props.theme.palette.primary.lightGrey};
    `}
    ${props.variant === 'primary' && css`
      background: ${props.theme.palette.gradients[props.color]};
    `}
  `}
`)
