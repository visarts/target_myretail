import { withTheme } from '@material-ui/core/styles'
import styled, { css } from 'styled-components'

export const StyledItem = withTheme()(styled.div`
  display: flex;
  width: 1000px;
  margin: 50px auto;
  flex-flow: row wrap;
  ${props => css`

  `}
`)

export const StyledItemContainer = withTheme()(styled.div`
  width: 450px;
  ${props => css`
    margin-right: ${props.theme.sizes.xl};
  `}
`)

export const StyledItemComponent = withTheme()(styled.div`
  ${props => css`
    margin-bottom: ${props.theme.sizes.lg};
  `}
`)
