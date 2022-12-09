import { ADD_TO_PLAYLIST } from "../actions"

const initialState = {
  playlistContent: []
}

const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PLAYLIST:
      return {
        ...state,
        playlistContent: [...state.playlistContent, action.payload]
      }
    default:
      return state
  }
}

export default playlistReducer
