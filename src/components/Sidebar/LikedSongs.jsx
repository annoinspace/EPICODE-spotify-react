import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { unlikeButtonAction } from "../../redux/actions"
import { FiTrash2 } from "react-icons/fi"

export default function LikedSongs() {
  const likedSongs = useSelector((state) => state.likedButtonIndicator.liked)
  console.log(likedSongs)
  const dispatch = useDispatch()

  return (
    <>
      <div className="navigation sidebar-list">LikedSongs</div>
      <ul className="d-block ">
        {likedSongs.map((track, i) => (
          <li key={i} className="d-flex justify-content-between">
            {track.title}
            <span>
              {likedSongs.includes(track) && (
                <span
                  className="ml-auto mr-2"
                  onClick={() => dispatch(unlikeButtonAction(track))}
                >
                  <FiTrash2 className="pointer" />
                </span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </>
  )
}
