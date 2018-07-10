import React from 'react'
import { shallow, mount } from 'enzyme'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Spinner from '../'
import praxisTheme from 'config/themeConfig'
import 'jest-styled-components'

describe('Spinner component', () => {
  it('renders', () => {
    const spinner = shallow(<Spinner />)
    expect(spinner).toHaveLength(1)
  })

  it('renders a Material-UI CircularProgress component with the value of `props.size`', () => {
    const spinner = shallow(<Spinner size={15} />)
    expect(spinner.find('#spinnerCircularProgress')).toHaveLength(1)
    expect(spinner.find('#spinnerCircularProgress').props().size).toBe(15)
  })

  it('center aligns the spinner if `props.centered` is truthy', () => {
    const spinner = mount(<MuiThemeProvider theme={praxisTheme}><Spinner /></MuiThemeProvider>)
    const centeredSpinner = mount(<MuiThemeProvider theme={praxisTheme}><Spinner centered /></MuiThemeProvider>)
    expect(spinner).not.toHaveStyleRule('align-items', 'center')
    expect(centeredSpinner).toHaveStyleRule('align-items', 'center')
  })

  it('displays `flex` if `props.show` is truthy', () => {
    const spinner = mount(<MuiThemeProvider theme={praxisTheme}><Spinner show /></MuiThemeProvider>)
    expect(spinner).toHaveStyleRule('display', 'flex')
  })

  it('displays `none` if `props.show` is falsy', () => {
    const spinner = mount(<MuiThemeProvider theme={praxisTheme}><Spinner /></MuiThemeProvider>)
    expect(spinner).toHaveStyleRule('display', 'none')
  })
})
