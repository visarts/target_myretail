import { withTheme } from '@material-ui/core/styles'
import styled, { css } from 'styled-components'

export const StyledItemTitle = withTheme()(styled.div`
  text-align: center;
  ${props => css`
    padding-right: ${props.theme.sizes.xl};
    padding-left: ${props.theme.sizes.xl};
    @media(max-width: ${props.theme.breakpoints.values.md}px) {
      padding: 0;
    }
  `}
`)
