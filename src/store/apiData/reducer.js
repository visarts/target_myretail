import {
  FETCH_APIDATA_REQUEST,
  FETCH_APIDATA_FAILURE,
  FETCH_APIDATA_SUCCESS,
} from './actionType'

export const initialState = {
  apiData: null,
  isPending: false,
  errorMessage: '',
}

export default function apiDataReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_APIDATA_REQUEST: {
      return {
        ...state,
        isPending: true,
      }
    }
    case FETCH_APIDATA_SUCCESS: {
      return {
        ...state,
        isPending: false,
        apiData: action.payload,
      }
    }
    case FETCH_APIDATA_FAILURE: {
      return {
        ...state,
        apiData: null,
        isPending: false,
        errorMessage: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
