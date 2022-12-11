import { ADD_TO_LIKEDLIST } from "../actions"

const initialState = {
  likedlistContent: []
}

const likedlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LIKEDLIST:
      return {
        ...state,
        likedlistContent: [...state.likedlistContent, action.payload]
      }
    default:
      return state
  }
}

export default likedlistReducer
