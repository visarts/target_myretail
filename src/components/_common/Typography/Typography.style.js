import React from 'react'
import { withTheme } from '@material-ui/core/styles'
import styled, { css } from 'styled-components'

export const StyledTypography = withTheme()(styled(({ element, children, size, strong, slim, theme, variant, block, ...other }) => {
  return React.createElement(element, {...other}, children)
})`
  margin: 0;
  ${props => css`
    line-height: ${props.variant === 'header' ? '1.15' : 'inherit'};
    display: ${props.block || props.variant === 'header' || props.variant === 'subHeader' ? 'block' : 'inline'};
    font-size: ${props.theme.typography[props.size]};
    font-weight: ${props.strong ? '700' : props.slim ? '200' : '400'};
    color: ${props.theme.palette.primary[props.color]};
    padding-top: ${(props.gutter === 'top' || props.gutter === 'both') && props.theme.sizes.sm};
    padding-bottom: ${(props.gutter === 'bottom' || props.gutter === 'both') && props.theme.sizes.sm};
    padding-left: ${(props.spacing === 'left' || props.spacing === 'both') && props.theme.sizes.xs};
    padding-right: ${(props.spacing === 'right' || props.spacing === 'both') && props.theme.sizes.xs};
  `}
`)
