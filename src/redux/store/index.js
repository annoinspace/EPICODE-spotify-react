import { combineReducers, configureStore } from "@reduxjs/toolkit"
import homepageAlbumReducer from "../reducers/homepageAlbumReducer"
import pillsReducer from "../reducers/pillsReducer"
import playlistReducer from "../reducers/playlistReducer"

const bigReducer = combineReducers({
  pills: pillsReducer,
  playlist: playlistReducer,
  homepageAlbums: homepageAlbumReducer
})

export const store = configureStore({
  reducer: bigReducer
})

// export default store
