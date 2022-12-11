import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { likeButtonAction, unlikeButtonAction } from "../../redux/actions"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

export default function LikedSongs() {
  const likedSongs = useSelector((state) => state.likedButtonIndicator.liked)
  console.log(likedSongs)
  const dispatch = useDispatch()

  return (
    <>
      <div className="navigation">LikedSongs</div>
      <ul className="d-block ">
        {likedSongs.map((track, i) => (
          <li key={i} className="d-flex justify-content-between">
            {track.title}
            <span>
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
            </span>
          </li>
        ))}
      </ul>
    </>
  )
}
