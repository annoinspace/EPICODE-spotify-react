import React, { useState, useEffect } from "react"
// import { Image } from "react-bootstrap"
import { getPillsAction } from "../redux/actions"

export default function PillsRow() {
  //   const [query, setQuery] = useState("")
  const [trackPills, setTrackPills] = useState([])

  useEffect(() => {
    getPillsAction()
  }, [])

  return (
    <div className="track-pill">
      <div className="img-container">
        {/* <Image src={item.artist.picture_medium} /> */}
      </div>
    </div>
  )
}
