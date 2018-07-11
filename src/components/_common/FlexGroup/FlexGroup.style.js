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
    flex-grow: ${props.block ? 0 : 1};
    display: ${props.block ? 'block' : 'inline-flex'};
    align-items: ${props.vertical || 'center'};
    justify-content: ${props.horizontal || 'flex-start'};
  `}
`)
