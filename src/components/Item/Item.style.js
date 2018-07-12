import { withTheme } from '@material-ui/core/styles'
import styled, { css } from 'styled-components'

export const StyledItem = withTheme()(styled.div`
  display: flex;
  width: 1000px;
  margin: 50px auto;
  flex-flow: row wrap;
  ${props => css`
    @media(max-width: ${props.theme.breakpoints.values.md}px) {
      width: 100%;
      margin: ${props.theme.sizes.md};
    }
  `}
`)

export const StyledItemContainer = withTheme()(styled.div`
  width: 450px;
  ${props => css`
    margin-right: ${props.theme.sizes.xxl};
    @media(max-width: ${props.theme.breakpoints.values.md}px) {
      width: 100%;
      margin-right: ${props.theme.sizes.md};
    }
  `}
`)

export const StyledItemComponent = withTheme()(styled.div`
  ${props => css`
    margin-bottom: ${props.theme.sizes.lg};
    ${props.specialFloat && css`
      position: absolute;
      @media(max-width: ${props.theme.breakpoints.values.md}px) {
        position: relative;
      }
    `}
  `}
`)
