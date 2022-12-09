import { GET_HOMEPAGE_ALBUMS } from "../actions"

const initialState = {
  homepageAlbumListFromFetch: []
}

const homepageAlbumReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOMEPAGE_ALBUMS:
      return {
        ...state,
        homepageAlbumListFromFetch: action.payload
      }

    default:
      return state
  }
}

export default homepageAlbumReducer
