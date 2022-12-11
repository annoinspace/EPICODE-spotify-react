/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react"
import { Image } from "react-bootstrap"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { useSelector, useDispatch } from "react-redux"
import {
  getPillsAction,
  likeButtonAction,
  unlikeButtonAction
} from "../../redux/actions"

export default function PillsRow() {
  let pills = useSelector((state) => state.pills.pillsListFromFetch)
  console.log("-----pills-------", pills)
  let likedSongs = useSelector((state) => state.likedButtonIndicator.liked)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPillsAction())
    console.log("-----pills again-------", pills)
  }, [])

  // useEffect(() => {
  //   dispatch(likeButtonAction())
  // })

  return (
    <>
      {pills.slice(0, 10).map((track, i) => (
        <div className="track-pill" key={i}>
          <div className="img-container">
            <Image src={track.artist.picture_medium} />
          </div>
          <div className="track-details">
            <p className="text">{track.title}</p>
          </div>
          {/* <AiOutlineHeart
            className="ml-auto mr-2"
            onClick={() => dispatch(likeButtonAction(track))}
          /> */}
          {likedSongs.includes(track) ? (
            <span
              className="ml-auto mr-2"
              onClick={() => dispatch(unlikeButtonAction(track))}
            >
              <AiFillHeart />
            </span>
          ) : (
            <span
              className="ml-auto mr-2"
              onClick={() => dispatch(likeButtonAction(track))}
            >
              <AiOutlineHeart />
            </span>
          )}
        </div>
      ))}
    </>
  )
}
