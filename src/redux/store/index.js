import { combineReducers, configureStore } from "@reduxjs/toolkit"
import homepageAlbumReducer from "../reducers/homepageAlbumReducer"
import pillsReducer from "../reducers/pillsReducer"
import playlistReducer from "../reducers/playlistReducer"
import topListenedTracksReducer from "../reducers/topListenedTracksReducer"

const bigReducer = combineReducers({
  pills: pillsReducer,
  playlist: playlistReducer,
  homepageAlbums: homepageAlbumReducer,
  topTracks: topListenedTracksReducer
})

export const store = configureStore({
  reducer: bigReducer
})

// export default store
