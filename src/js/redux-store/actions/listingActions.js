import actionTypes from './types'

export function getListings() {
  return async dispatch => {
    try {
      const res = await WebService.getListings()
      dispatch(updateListings(res.data))
      return res
    } catch (err) {
      throw new Error(err)
    }
  }
}

export function updateListings(listingsData) {
  return {
    type: actionTypes.UPDATE_LISTINGS,
    listingsData
  }
}
