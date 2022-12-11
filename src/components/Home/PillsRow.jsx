/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react"
import { Image } from "react-bootstrap"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { BsPlayCircleFill } from "react-icons/bs"
import { useSelector, useDispatch } from "react-redux"
import {
  getPillsAction,
  likeButtonAction,
  playButtonAction,
  unlikeButtonAction
} from "../../redux/actions"

export default function PillsRow() {
  let pills = useSelector((state) => state.pills.pillsListFromFetch)
  console.log("-----pills-------", pills)
  let likedSongs = useSelector((state) => state.likedButtonIndicator.liked)
  let currentTrack = useSelector((state) => state.playSong.song)
  console.log("-------current track --------", currentTrack)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPillsAction())
    console.log("-----pills again-------", pills)
  }, [])

  return (
    <>
      {pills.slice(0, 10).map((track, i) => (
        <div className="track-pill" key={i}>
          <div className="img-container">
            <Image src={track.artist.picture_medium} />
          </div>
          <div className="track-details d-flex flex-column">
            <BsPlayCircleFill
              className="play-white pointer"
              onClick={() => dispatch(playButtonAction(track))}
            />
            <p className=" pill-text">{track.title}</p>
          </div>
          <span className="ml-auto mr-2 d-flex">
            {likedSongs.includes(track) ? (
              <span>
                <AiFillHeart
                  className="pointer"
                  onClick={() => dispatch(unlikeButtonAction(track))}
                />
              </span>
            ) : (
              <span>
                <AiOutlineHeart
                  className="pointer"
                  onClick={() => dispatch(likeButtonAction(track))}
                />
              </span>
            )}
          </span>
        </div>
      ))}
    </>
  )
}
