import { updateItemQuantity } from '../actionCreator'
import { UPDATE_ITEM_QUANTITY } from '../actionType'

describe('updateItemQuantity actions', () => {
  it('should create an action to update the item quantity', () => {
    const data = {
      quantity: 2,
    }
    const expectedAction = {
      type: UPDATE_ITEM_QUANTITY,
      payload: data,
    }
    expect(updateItemQuantity(data)).toEqual(expectedAction)
  })
})
