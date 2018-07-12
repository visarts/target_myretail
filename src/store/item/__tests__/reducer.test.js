import itemReducer, { initialState } from '../reducer'
import { UPDATE_ITEM_QUANTITY } from '../actionType'

describe('itemReducer', () => {
  it('initial state', () => {
    expect(itemReducer(undefined, {})).toEqual(initialState)
  })

  it('handles UPDATE_ITEM_QUANTITY', () => {
    const data = 2
    const action = {
      type: UPDATE_ITEM_QUANTITY,
      payload: data,
    }

    expect(itemReducer(initialState, action)).toEqual({
      ...initialState,
      quantity: 2,
    })
  })
})
