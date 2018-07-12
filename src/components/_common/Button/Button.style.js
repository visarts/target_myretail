import { withTheme } from '@material-ui/core/styles'
import styled, { css } from 'styled-components'

export const StyledButton = withTheme()(styled.button`
  text-align: center;
  border: 0;
  border-radius: 3px;
  width: 100%;
  cursor: pointer;
  ${props => css`
    max-width: ${props.theme.globalValues.maxWidth};
    ${props.variant === 'secondary' && css`
      background: ${props.theme.palette.primary.lightGrey};
    `}
    ${props.variant === 'primary' && css`
      background: ${props.theme.palette.gradients[props.background]};
    `}
  `}
  &:hover {
    opacity: .8;
  }
`)
