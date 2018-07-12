import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'store/configureStore'
import { MuiThemeProvider } from '@material-ui/core/styles'
import myRetailTheme from 'config/themeConfig'
import { mount } from 'enzyme'
import ItemQuantity from '../ItemQuantity'

describe('ItemQuantity component', () => {
  let itemQuantity
  const store = configureStore()
  beforeEach(() => {
    itemQuantity = mount(
      <Provider store={store}>
        <MuiThemeProvider theme={myRetailTheme}>
          <ItemQuantity />
        </MuiThemeProvider>
      </Provider>
    )
  })
  it('renders', () => {
    expect(itemQuantity).toHaveLength(1)
  })

  it('increases the item quantity when the user clicks the + button', () => {
    const addButton = itemQuantity.find('#itemQuantityAddAction')
    const itemQuantityIndicator = itemQuantity.find('#itemQuantityValue')
    expect(itemQuantityIndicator.text()).toEqual('1')
    addButton.simulate('click')
    expect(itemQuantityIndicator.text()).toEqual('2')
  })

  it('decreases the item quantity when the user clicks the - button', () => {
    const removeButton = itemQuantity.find('#itemQuantityRemoveAction')
    const itemQuantityIndicator = itemQuantity.find('#itemQuantityValue')
    expect(itemQuantityIndicator.text()).toEqual('2')
    removeButton.simulate('click')
    expect(itemQuantityIndicator.text()).toEqual('1')
  })
})
