import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import myRetailTheme from 'config/themeConfig'

import Item from './Item/Item'

const App = () => (
  <MuiThemeProvider theme={myRetailTheme}>
    <Item />
  </MuiThemeProvider>
)

export default App
