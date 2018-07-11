import { combineReducers } from 'redux'

import apiData from './apiData/reducer'
import item from './item/reducer'

const rootReducer = combineReducers({
  apiData,
  item,
})

export default rootReducer
