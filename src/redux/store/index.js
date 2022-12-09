import { combineReducers, configureStore } from "@reduxjs/toolkit"
import pillsReducer from "../reducers/pillsReducer"
import playlistReducer from "../reducers/playlistReducer"

const bigReducer = combineReducers({
  pills: pillsReducer,
  playlist: playlistReducer
})

const store = configureStore({
  reducer: bigReducer
})

export default store
