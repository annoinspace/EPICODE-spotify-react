import React, { useEffect } from "react"
import { Image } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import {
  getTopListenedTracksAction,
  likeButtonAction,
  unlikeButtonAction,
  playButtonAction
} from "../../redux/actions"
import { BsPlayCircleFill } from "react-icons/bs"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
export default function TopListenedTracks() {
  let topTracks = useSelector(
    (state) => state.topTracks.topListenedTracksFromFetch
  )
  let likedSongs = useSelector((state) => state.likedButtonIndicator.liked)

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
          <div>
            {" "}
            <span className="ml-auto mr-2 d-inline-block">
              {" "}
              <span>
                <BsPlayCircleFill
                  className="play-white pointer mr-2"
                  onClick={() => dispatch(playButtonAction(track))}
                />
              </span>
              {likedSongs.includes(track) ? (
                <span>
                  <AiFillHeart
                    className="pointer ml-2"
                    onClick={() => dispatch(unlikeButtonAction(track))}
                  />
                </span>
              ) : (
                <span>
                  <AiOutlineHeart
                    className="pointer ml-2"
                    onClick={() => dispatch(likeButtonAction(track))}
                  />
                </span>
              )}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
