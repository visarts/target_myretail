import React from 'react'
import { shallow, mount } from 'enzyme'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Spinner from '../'
import myRetailTheme from 'config/themeConfig'
import 'jest-styled-components'

describe('Spinner component', () => {
  it('renders', () => {
    const spinner = shallow(<Spinner />)
    expect(spinner).toHaveLength(1)
  })

  it('renders a Material-UI CircularProgress component', () => {
    const spinner = shallow(<Spinner />)
    expect(spinner.find('#spinnerCircularProgress')).toHaveLength(1)
    expect(spinner.find('#spinnerCircularProgress').props().size).toBe(60)
  })

  it('displays `flex` if `props.show` is truthy', () => {
    const spinner = mount(<MuiThemeProvider theme={myRetailTheme}><Spinner show /></MuiThemeProvider>)
    expect(spinner).toHaveStyleRule('display', 'flex')
  })

  it('displays `none` if `props.show` is falsy', () => {
    const spinner = mount(<MuiThemeProvider theme={myRetailTheme}><Spinner /></MuiThemeProvider>)
    expect(spinner).toHaveStyleRule('display', 'none')
  })
})
