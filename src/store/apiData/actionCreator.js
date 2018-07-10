import axios from 'axios'
import {
  FETCH_APIDATA_REQUEST,
  FETCH_APIDATA_FAILURE,
  FETCH_APIDATA_SUCCESS,
} from './actionType'

export function fetchApiDataMetricsRequest () {
  return {
    type: FETCH_APIDATA_REQUEST,
  }
}

export function fetchApiDataMetricsSuccess (data) {
  return {
    type: FETCH_APIDATA_SUCCESS,
    payload: data,
  }
}

export function fetchApiDataMetricsFailure (error) {
  return {
    type: FETCH_APIDATA_FAILURE,
    payload: error,
  }
}

export function fetchApiData (date) {
  return async dispatch => {
    dispatch(fetchApiDataMetricsRequest())
    try {
      let response = await axios.get('./data/itemData.json')
      if (response.data) {
        dispatch(fetchApiDataMetricsSuccess(response.data))
      } else {
        throw new Error('Oops! The data service ran into an error')
      }
    } catch (e) {
      dispatch(fetchApiDataMetricsFailure(e.message || 'error'))
    }
  }
}
