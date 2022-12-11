import React, { useEffect } from "react"
import { Image } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getTopListenedTracksAction } from "../../redux/actions"

export default function TopListenedTracks() {
  let topTracks = useSelector(
    (state) => state.topTracks.topListenedTracksFromFetch
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopListenedTracksAction())
    console.log("-----TopTracks again-------", topTracks)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="cards-container" id="tracksRow">
      <span className="see-all">See All</span>
      {topTracks.slice(0, 8).map((track) => (
        <div className="card" key={track.id}>
          <div className="img-container">
            <Image src={track.artist.picture_medium} alt="" />
          </div>
          <div className="card-details">
            <p className="title ">{track.title}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
