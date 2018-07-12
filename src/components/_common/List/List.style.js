import { withTheme } from '@material-ui/core/styles'
import styled, { css } from 'styled-components'

export const StyledList = withTheme()(styled.ul`
  ${props => css`
    padding-left: ${props.theme.sizes.lg};
  `}
`)

export const StyledListItem = withTheme()(styled.li`
  list-style-type: disc;
  ${props => css`
    color: ${props.theme.palette.primary.default};
    padding-left: ${props.theme.sizes.md};
    padding-bottom: ${props.theme.sizes.xs};
  `}
`)
