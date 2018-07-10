import { createMuiTheme } from '@material-ui/core/styles'

export const theme = {
  white: '#fff',
  black: '#010101',
  darkGrey: '#444444',
  red: '#CC0000',
  lightRed: '#DD5555',
  default: '#BFBFBF',
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

const myRetailTheme = createMuiTheme({
  palette: {
    primary: theme,
    secondary: theme,
    typography,
  },
  typography: {
    xs: '10px',
    sm: '12px',
    md: '14px',
    lg: '16px',
    xl: '20px',
    xxl: '26px',
  },
  sizes: {
    xs: '5px',
    sm: '10px',
    md: '15px',
    lg: '20px',
    xl: '40px',
  },
  boxShadows: {
    sm: '3px 3px 7px rgba(0, 0, 0, .2)',
  },
  borders: {
    light: `1px solid ${theme.default}`,
  },
})

export default myRetailTheme
