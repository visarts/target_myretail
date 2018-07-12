import { withTheme } from '@material-ui/core/styles'
import styled, { css } from 'styled-components'

export const StyledItemReviewsFeatureBlock = withTheme()(styled.div`
  ${props => css`
    padding: ${props.theme.globalValues.padding};
    background: ${props.theme.palette.primary.lightGrey};
  `}
`)

export const StyledItemsReviewFeatureBlockHeader = withTheme()(styled.div`
  ${props => css`
    padding-right: ${props.theme.globalValues.padding};
    padding-bottom: ${props.theme.globalValues.padding};
    border-bottom: ${props.theme.borders.light};
  `}
`)

export const StyledItemsReview = withTheme()(styled.div`
  ${props => css`
    padding-right: ${props.theme.globalValues.padding};
    padding-top: ${props.theme.globalValues.padding};
  `}
`)

export const StyledItemsReviewOverall = withTheme()(styled.div`
  ${props => css`
    padding-left: ${props.theme.globalValues.padding};
    padding-right: ${props.theme.globalValues.padding};
  `}
`)
