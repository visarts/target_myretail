import { createMuiTheme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'

export const praxis = {
  light: '#f05545',
  main: '#8c1f27',
  dark: '#7f0000',
  contrastText: '#fff',
  alert: '#BF341C',
  active: '#6EC373',
  pending: '#F6F59B',
  default: '#CFCFCF',
}

export const typography = {
  white: '#FFFFFF',
  black: 'rgba(0, 0, 0, .9)',
  light: '#8F8F8F',
  alert: '#f44336',
  active: '#6EC373',
  inherit: 'inherit',
}

export const backgrounds = {
  light: grey[100],
  dark: grey[600],
  selected: grey[300],
  disabled: grey[400],
  header: '#8F8F8F',
  active: '#FFF8CA',
  activeSelected: '#fff5b5',
  activeSegment: '#FFFDF5',
  pending: `repeating-linear-gradient(-45deg, white, white 5px, #FFF8CA 5px, #FFF8CA 10px)`,
}

export const borders = {
  light: grey.A100,
  dark: '#ACACAC',
  active: '#FFF8CA',
}

const myRetailTheme = createMuiTheme({
  palette: {
    primary: praxis,
    secondary: praxis,
    typography,
    backgrounds,
    borders,
  },
  sizes: {
    xs: '5px',
    sm: '10px',
    md: '15px',
    lg: '20px',
    xl: '50px',
    container: {
      minHeight: '60px',
      maxHeight: '62vh',
      minWidth: '550px',
      maxWidth: '960px',
    },
    form: {
      xs: '60px',
      sm: '100px',
      md: '250px',
      lg: '350px',
      xl: '400px',
    },
    font: {
      header: '14px',
    },
  },
  boxShadows: {
    sm: '3px 3px 7px rgba(0, 0, 0, .2)',
  },
  borders: {
    light: `1px solid ${borders.light}`,
  },
})

export default myRetailTheme
