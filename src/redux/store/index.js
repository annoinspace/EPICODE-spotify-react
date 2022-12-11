import { combineReducers, configureStore } from "@reduxjs/toolkit"
import homepageAlbumReducer from "../reducers/homepageAlbumReducer"
import pillsReducer from "../reducers/pillsReducer"
import topListenedTracksReducer from "../reducers/topListenedTracksReducer"
import likedlistReducer from "../reducers/likedlistReducer"
import likedButtonReducer from "../reducers/likedButtonReducer"

const bigReducer = combineReducers({
  pills: pillsReducer,
  likedlist: likedlistReducer,
  homepageAlbums: homepageAlbumReducer,
  topTracks: topListenedTracksReducer,
  likedButtonIndicator: likedButtonReducer
})

export const store = configureStore({
  reducer: bigReducer
})

// export default store
