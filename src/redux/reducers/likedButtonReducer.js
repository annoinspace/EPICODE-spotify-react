import { LIKED_BUTTON_CLICKED, UNLIKE_BUTTON_CLICKED } from "../actions"
const initialState = {
  liked: []
}
const likedButtonReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKED_BUTTON_CLICKED:
      return {
        ...state,
        liked: [...state.liked, action.payload]
      }
    case UNLIKE_BUTTON_CLICKED:
      return {
        ...state,
        liked: state.liked.filter((track) => track !== action.payload)
      }
    default:
      return state
  }
}

export default likedButtonReducer
