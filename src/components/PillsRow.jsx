import React, { useState, useEffect } from "react"
import { Image } from "react-bootstrap"
// import Pill from "./Pill"
import { useSelector, useDispatch } from "react-redux"

import { getPillsAction } from "../redux/actions"

export default function PillsRow() {
  let pills = useSelector((state) => state.pills.pillsListFromFetch)
  console.log("-----pills-------", pills)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPillsAction())
    console.log("-----pills again-------", pills)
  }, [])

  return (
    <>
      {pills.slice(0, 10).map((track) => (
        <div className="track-pill" key={track.id}>
          <div className="img-container">
            <Image src={track.artist.picture_medium} />
          </div>
          <div className="track-details">
            <p className="text">{track.title}</p>
          </div>
        </div>
      ))}
    </>
  )
}
