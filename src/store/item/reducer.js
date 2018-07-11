import {
  UPDATE_ITEM_QUANTITY,
} from './actionType'

export const initialState = {
  quantity: 1,
}

export default function apiDataReducer (state = initialState, action) {
  switch (action.type) {
    case UPDATE_ITEM_QUANTITY: {
      return {
        ...state,
        quantity: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
