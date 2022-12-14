export const GET_PILLS_CONTENT = "GET_PILLS_CONTENT"
export const PLAY_BUTTON_CLICKED = "PLAY_BUTTON_CLICKED"
export const GET_HOMEPAGE_ALBUMS = "GET_HOMEPAGE_ALBUMS"
export const GET_TOP_LISTENED_TRACKS = "GET_TOP_LISTENED_TRACKS"
export const LIKED_BUTTON_CLICKED = "LIKED_BUTTON_CLICKED"
export const UNLIKE_BUTTON_CLICKED = "UNLIKE_BUTTON_CLICKED"

export const likeButtonAction = (track) => {
  return { type: "LIKED_BUTTON_CLICKED", payload: track }
}
export const unlikeButtonAction = (track) => {
  return { type: "UNLIKE_BUTTON_CLICKED", payload: track }
}

export const playButtonAction = (track) => {
  return { type: "PLAY_BUTTON_CLICKED", payload: track }
}

const baseEndPoint =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q="
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzczYTZmMTNhN2ZjNDAwMTU5N2VjMzQiLCJpYXQiOjE2Njg1MjM3NjIsImV4cCI6MTY2OTczMzM2Mn0.hKzzFuHNrYleYqYAzaHfYBmGfdU02Ymm8H5qzgZKO88",
    "Content-Type": "application/json"
  }
}

export const getTopListenedTracksAction = () => {
  return async (dispatch) => {
    console.log(
      "----------------fetching Top Tracks from api---------------------"
    )

    try {
      let query = `back`
      let resp = await fetch(baseEndPoint + query, options)
      if (resp.ok) {
        let data = await resp.json()
        let setTopListenedTracks = data.data

        console.log("setTopListenedTracks", setTopListenedTracks)
        dispatch({
          type: GET_TOP_LISTENED_TRACKS,
          payload: setTopListenedTracks
        })
      } else {
        console.log("error")
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const getPillsAction = (query) => {
  return async (dispatch) => {
    console.log(
      "----------------fetching TrackPills from api---------------------"
    )

    if (query) {
      try {
        let resp = await fetch(baseEndPoint + query, options)
        if (resp.ok) {
          let data = await resp.json()
          let setTrackPills = data.data

          console.log("setTrackPills", setTrackPills)
          dispatch({
            type: GET_PILLS_CONTENT,
            payload: setTrackPills
          })
        } else {
          console.log("error")
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      try {
        let resp = await fetch(baseEndPoint + `kpop`, options)
        if (resp.ok) {
          let data = await resp.json()
          let setTrackPills = data.data

          console.log("setTrackPills", setTrackPills)
          dispatch({
            type: GET_PILLS_CONTENT,
            payload: setTrackPills
          })
        } else {
          console.log("error")
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}

export const getHomepageAlbumsAction = () => {
  return async (dispatch) => {
    console.log(
      "----------------fetching HomepageAlbums from api---------------------"
    )

    try {
      let query = `kpop`
      let resp = await fetch(baseEndPoint + query, options)
      if (resp.ok) {
        let data = await resp.json()
        let setHomepageAlbums = data.data

        console.log("setHomepageAlbums", setHomepageAlbums)
        dispatch({
          type: GET_HOMEPAGE_ALBUMS,
          payload: setHomepageAlbums
        })
      } else {
        console.log("error")
      }
    } catch (error) {
      console.log(error)
    }
  }
}
