import React, { useState, useEffect } from "react"
import { Image } from "react-bootstrap"
// import Pill from "./Pill"
// import { useSelector } from "react-redux"
// import { Image } from "react-bootstrap"
// import { getPillsAction } from "../redux/actions"

export default function PillsRow() {
  //   const playlist = useSelector((state) => state.playlist)
  //   console.log(playlist)

  const [trackPills, setTrackPills] = useState([])

  const baseEndPoint =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem"

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzczYTZmMTNhN2ZjNDAwMTU5N2VjMzQiLCJpYXQiOjE2Njg1MjM3NjIsImV4cCI6MTY2OTczMzM2Mn0.hKzzFuHNrYleYqYAzaHfYBmGfdU02Ymm8H5qzgZKO88",
      "Content-Type": "application/json"
    }
  }

  const getPillsTracks = async () => {
    console.log("----------------fetching from api---------------------")
    try {
      let resp = await fetch(baseEndPoint, options)
      if (resp.ok) {
        let data = await resp.json()
        setTrackPills(data.data)

        console.log(setTrackPills)
      } else {
        console.log("error")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPillsTracks()
  }, [])

  return (
    <>
      {trackPills.slice(0, 10).map((track) => (
        <div className="track-pill" key={track.id}>
          <div className="img-container">
            <Image src={track.artist.picture_medium} />
          </div>
          <div className="track-details">
            <p className="text">{track.title}</p>
          </div>
        </div>
      ))}
      {/* // <div className="track-pill">
    //   <div className="img-container">
    //     <Image src={item.artist.picture_medium} />
    //   </div>
    // </div> */}
    </>
  )
}
