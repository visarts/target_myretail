import { withTheme } from '@material-ui/core/styles'
import styled, { css } from 'styled-components'

export const StyledReturnsLabel = withTheme()(styled.div`
  ${props => css`
    padding-right: ${props.theme.sizes.md};
    border-right: ${props.theme.borders.light};
  `}
`)
