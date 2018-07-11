import React from 'react'
import { withTheme } from '@material-ui/core/styles'
import styled, { css } from 'styled-components'

export const StyledTypography = withTheme()(styled(({ element, children, size, strong, theme, variant, block, ...other }) => {
  return React.createElement(element, {...other}, children)
})`
  margin: 0;
  ${props => css`
    display: ${props.block || props.variant === 'header' || props.variant === 'subHeader' ? 'block' : 'inline'};
    font-size: ${props.theme.typography[props.size]};
    font-weight: ${props.strong ? '700' : '400'};
    color: ${props.theme.palette.primary[props.color]};
    margin-top: ${(props.gutter === 'top' || props.gutter === 'both') && props.theme.globalValues.padding};
    margin-bottom: ${(props.gutter === 'bottom' || props.gutter === 'both') && props.theme.globalValues.padding};
  `}
`)
