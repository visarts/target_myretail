import React from 'react'
import { withTheme } from '@material-ui/core/styles'
import styled, { css } from 'styled-components'

export const StyledTypography = withTheme()(styled(({ element, children, size, theme, ...other }) => {
  return React.createElement(element, {...other}, children)
})`
  margin: 0;
  ${props => css`
    font-size: ${props.theme.typography[props.size]};
    font-weight: ${props.strong ? '500' : '200'};
    color: ${props.theme.palette.primary[props.color]};
  `}
`)
