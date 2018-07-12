import { withTheme } from '@material-ui/core/styles'
import styled, { css } from 'styled-components'

export const StyledItemQuantity = withTheme()(styled.div`
  width: 50%;
  ${props => css`
    max-width: ${props.theme.globalValues.maxWidth};
    padding-top: ${props.theme.globalValues.padding};
    padding-bottom: ${props.theme.globalValues.padding};
  `}
`)

export const StyledItemQuantityControls = withTheme()(styled.div`
  ${props => css`
    border: ${props.theme.borders.light};
    padding: ${props.theme.sizes.xs};
  `}
`)
