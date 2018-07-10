import React from 'react'
import { withTheme } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon'
import styled, { css } from 'styled-components'

export const StyledIcon = withTheme()(styled(({ color, ...other }) => (
  <Icon {...other} color="inherit" classes={{root: 'myretail-icon-root'}} />
))`
  &.myretail-icon-root {
    ${props => css`
      font-size: ${props.theme.sizes[props.size]};
      width: ${props.theme.sizes[props.size]};
      color: ${props.theme.palette.primary[props.color] || 'inherit'};
      ${props.onClick && css`
        cursor: pointer;
      `}
    `}
  }
`)
