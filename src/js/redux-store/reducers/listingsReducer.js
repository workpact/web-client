import initialState from '../initialState'
import actionTypes from '../actions/types'

export default function listingsReducer(state = initialState.listings, action) {
  let newListings = state
  switch (action.type) {
    case actionTypes.UPDATE_LISTINGS:
      newListings = { ...action.listingsData, loaded: true }
      return { ...newListings }

    default:
      return state
  }
}
