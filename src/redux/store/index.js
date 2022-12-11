import { combineReducers, configureStore } from "@reduxjs/toolkit"
import homepageAlbumReducer from "../reducers/homepageAlbumReducer"
import pillsReducer from "../reducers/pillsReducer"
import topListenedTracksReducer from "../reducers/topListenedTracksReducer"

import likedButtonReducer from "../reducers/likedButtonReducer"
import playSongReducer from "../reducers/playSongReducer"

import localStorage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
import { encryptTransform } from "redux-persist-transform-encrypt"
const persistConfig = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: "SECRET_KEY"
    })
  ]
}

const bigReducer = combineReducers({
  pills: pillsReducer,
  playSong: playSongReducer,
  homepageAlbums: homepageAlbumReducer,
  topTracks: topListenedTracksReducer,
  likedButtonIndicator: likedButtonReducer
})
const persistedReducer = persistReducer(persistConfig, bigReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false
    })
  }
})

export const persistor = persistStore(store)
