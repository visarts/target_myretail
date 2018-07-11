import {
  UPDATE_ITEM_QUANTITY,
} from './actionType'

export function updateItemQuantity (data) {
  return {
    type: UPDATE_ITEM_QUANTITY,
    payload: data,
  }
}
