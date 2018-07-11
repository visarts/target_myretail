import { withTheme } from '@material-ui/core/styles'
import styled, { css } from 'styled-components'

export const StyledItemPromotions = withTheme()(styled.div`
  ${props => css`
    padding-top: ${props.theme.globalValues.padding};
    padding-bottom: ${props.theme.globalValues.padding};
    border-top: ${props.theme.borders.light};
    border-bottom: ${props.theme.borders.light};
  `}
`)
