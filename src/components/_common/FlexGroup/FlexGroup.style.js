import { withTheme } from '@material-ui/core/styles'
import styled, { css } from 'styled-components'

export const StyledFlexGroup = withTheme()(styled.div`
  ${props => css`
    display: ${props.inlined ? 'inline-flex' : 'flex'};
    flex-direction: ${props.direction || 'row'};
    align-items: ${props.vertical || 'center'};
    justify-content: ${props.horizontal || 'flex-start'};
  `}
`)

export const StyledFlexGroupItem = withTheme()(styled.div`
  ${props => css`
    width: ${props.itemWidth};
    display: ${props.block ? 'block' : 'inline-flex'};
    flex-grow: ${props.block || props.noGrow ? 0 : 1};
    align-items: ${props.vertical || 'center'};
    justify-content: ${props.horizontal || 'flex-start'};
    flex-direction: ${props.direction || 'row'};
    ${props.spacing && css`
      &:not(:last-child) {
        margin-right: ${props.theme.sizes[props.spacing]};
      }
    `}
  `}
`)
