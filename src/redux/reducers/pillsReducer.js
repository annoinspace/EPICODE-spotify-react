import { GET_PILLS_CONTENT } from "../actions"

const initialState = {
  pillsList: []
}

const pillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PILLS_CONTENT:
      return {
        ...state,
        pillsList: action.payload
      }

    default:
      return state
  }
}

export default pillsReducer
