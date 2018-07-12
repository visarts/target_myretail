import React from 'react'
import { withTheme } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import styled, { css } from 'styled-components'

export const StyledBtn = withTheme()(styled(({customColor, ...other}) => {
  return <IconButton {...other} classes={{root: 'myretail-btn-root'}} />
})`
  &.myretail-btn-root {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    ${props => css`
      background: ${props.disabled ? props.theme.palette.primary.lightGrey : props.theme.palette.primary[props.background]};
      color: ${props.theme.palette.primary[props.customColor]};
      width: calc(${props.theme.sizes.xl} + 2px);
      height: calc(${props.theme.sizes.xl} + 2px);
    `}
  }
`)
