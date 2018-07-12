import React from 'react'
import { shallow } from 'enzyme'
import ItemActionsPrimary from '../ItemActionsPrimary'
import 'jest-styled-components'

describe('ItemActionsPrimary component', () => {
  it('renders', () => {
    const itemActionsPrimary = shallow(<ItemActionsPrimary />)
    expect(itemActionsPrimary).toHaveLength(1)
  })

  it('renders both action buttons when purchasingChannelCode is 0', () => {
    const itemActionsPrimary = shallow(<ItemActionsPrimary purchasingChannelCode={0} />)
    expect(itemActionsPrimary.find('#itemInStoreAction')).toHaveLength(1)
    expect(itemActionsPrimary.find('#itemAddToCartAction')).toHaveLength(1)
  })

  it('renders only the add to cart button when purchasingChannelCode is 1', () => {
    const itemActionsPrimary = shallow(<ItemActionsPrimary purchasingChannelCode={1} />)
    expect(itemActionsPrimary.find('#itemInStoreAction')).not.toHaveLength(1)
    expect(itemActionsPrimary.find('#itemAddToCartAction')).toHaveLength(1)
  })

  it('renders only the find in store button when purchasingChannelCode is 2', () => {
    const itemActionsPrimary = shallow(<ItemActionsPrimary purchasingChannelCode={2} />)
    expect(itemActionsPrimary.find('#itemInStoreAction')).toHaveLength(1)
    expect(itemActionsPrimary.find('#itemAddToCartAction')).not.toHaveLength(1)
  })
})
