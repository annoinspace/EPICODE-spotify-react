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
    "https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem"
  const options = {
    headers: {
      "X-RapidAPI-Key": "ab2594bb9cmsh5be1c87d88bb0c1p112766jsn50e27924ed47",
      "Content-Type": "application/json"
    }
  }

  return async (dispatch, getState) => {
    console.log("----------------fetching from api---------------------")
    try {
      let resp = await fetch(baseEndPoint, options)
      if (resp.ok) {
        let data = await resp.json()
        const fetchedPillsData = data

        console.log(fetchedPillsData)
        dispatch({
          type: GET_PILLS_CONTENT,
          payload: fetchedPillsData
        })
      } else {
        console.log("error")
      }
    } catch (error) {
      console.log(error)
    }
  }
}
