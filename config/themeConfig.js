import { createMuiTheme } from '@material-ui/core/styles'

export const theme = {
  white: '#fff',
  black: '#010101',
  darkGrey: '#444444',
  lightGrey: '#F8F6F4',
  red: '#CC0000',
  lightRed: '#DD5555',
  default: '#BFBFBF',
  defaultLight: '#AAAAAA',
  main: '#010101',
}

export const typography = {
  white: '#FFFFFF',
  black: 'rgba(0, 0, 0, .9)',
  light: '#8F8F8F',
  alert: '#f44336',
  active: '#6EC373',
  inherit: 'inherit',
}

export const gradients = {
  red: `linear-gradient(to bottom, ${theme.lightRed}, ${theme.red})`,
  black: `linear-gradient(to bottom, ${theme.darkGrey}, ${theme.black})`,
}

export const sizes = {
  xs: '5px',
  sm: '10px',
  md: '15px',
  lg: '20px',
  xl: '35px',
}

export const globalValues = {
  padding: sizes.lg,
  maxWidth: '300px',
}

const myRetailTheme = createMuiTheme({
  palette: {
    primary: theme,
    secondary: theme,
    gradients,
    typography,
  },
  globalValues,
  typography: {
    xs: '10px',
    sm: '12px',
    md: '14px',
    lg: '16px',
    xl: '20px',
    xxl: '26px',
    huge: '37px',
  },
  sizes,
  borders: {
    light: `1px solid ${theme.defaultLight}`,
  },
})

export default myRetailTheme
