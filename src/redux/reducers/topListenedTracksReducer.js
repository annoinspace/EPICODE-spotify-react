import { GET_TOP_LISTENED_TRACKS } from "../actions"

const initialState = {
  topListenedTracksFromFetch: []
}

const topListenedTracksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOP_LISTENED_TRACKS:
      return {
        ...state,
        topListenedTracksFromFetch: action.payload
      }

    default:
      return state
  }
}

export default topListenedTracksReducer
