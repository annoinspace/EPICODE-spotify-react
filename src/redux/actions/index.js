export const GET_PILLS_CONTENT = "GET_PILLS_CONTENT"
export const ADD_TO_PLAYLIST = "ADD_TO_PLAYLIST"
export const REMOVE_FROM_PLAYLIST = "REMOVE_FROM_PLAYLIST"

export const addToPlaylist = (data) => {
  return { type: "ADD_TO_PLAYLIST", payload: data }
}
export const removeFromPlaylist = (i) => {
  return { type: "REMOVE_FROM_PLAYLIST", payload: i }
}

export const getPillsAction = () => {
  const baseEndPoint =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem"
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzczYTZmMTNhN2ZjNDAwMTU5N2VjMzQiLCJpYXQiOjE2Njg1MjM3NjIsImV4cCI6MTY2OTczMzM2Mn0.hKzzFuHNrYleYqYAzaHfYBmGfdU02Ymm8H5qzgZKO88",
      "Content-Type": "application/json"
    }
  }

  return async (dispatch, getState) => {
    console.log("----------------fetching from api---------------------")
    console.log("--------state before", getState)
    try {
      let resp = await fetch(baseEndPoint, options)
      if (resp.ok) {
        let data = await resp.json()
        let setTrackPills = data.data

        console.log("setTrackPills", setTrackPills)
        dispatch({
          type: GET_PILLS_CONTENT,
          payload: setTrackPills
        })
        console.log("--------state after", getState)
      } else {
        console.log("error")
      }
    } catch (error) {
      console.log(error)
    }
  }
}
