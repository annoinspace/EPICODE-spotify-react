import { combineReducers, configureStore } from "@reduxjs/toolkit"
import homepageAlbumReducer from "../reducers/homepageAlbumReducer"
import pillsReducer from "../reducers/pillsReducer"
import topListenedTracksReducer from "../reducers/topListenedTracksReducer"

import likedButtonReducer from "../reducers/likedButtonReducer"
import playSongReducer from "../reducers/playSongReducer"

const bigReducer = combineReducers({
  pills: pillsReducer,
  playSong: playSongReducer,
  homepageAlbums: homepageAlbumReducer,
  topTracks: topListenedTracksReducer,
  likedButtonIndicator: likedButtonReducer
})

export const store = configureStore({
  reducer: bigReducer
})
