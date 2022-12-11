import { PLAY_BUTTON_CLICKED } from "../actions"
const initialState = {
  song: []
}
const playSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_BUTTON_CLICKED:
      return {
        ...state,
        song: action.payload
      }
    // case UNLIKE_BUTTON_CLICKED:
    //   return {
    //     ...state,
    //     liked: state.liked.filter((track) => track !== action.payload)
    //   }
    default:
      return state
  }
}

export default playSongReducer
