import { combineReducers } from 'redux'

import apiData from './apiData/reducer'

const rootReducer = combineReducers({
  apiData,
})

export default rootReducer
