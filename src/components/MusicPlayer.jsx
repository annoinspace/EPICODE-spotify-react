import React from "react"
import { Image } from "react-bootstrap"
import { useSelector } from "react-redux"

export default function MusicPlayer() {
  let currentTrack = useSelector((state) => state.playSong.song)
  console.log("-------current track --------", currentTrack)
  return (
    <div className="music-player">
      <div className="album-details">
        <Image className="album-artwork" src={currentTrack.album.cover} />
        <div className="album-text">
          <h4>{currentTrack.title}</h4>
          <h5>{currentTrack.artist.name}</h5>
        </div>
        <div className="icons">
          <i className="bi bi-heart"></i>
          <i className="bi bi-pip"></i>
        </div>
      </div>

      <div className="player-controls">
        <div className="control-buttons">
          <i className="bi bi-shuffle" style={{ fontSize: "0.5em" }}></i>
          <i className="bi bi-skip-start" style={{ fontSize: "0.6em" }}></i>
          <i className="bi bi-play-fill" style={{ fontSize: " 1em" }}></i>
          <i className="bi bi-skip-end" style={{ fontSize: "0.6em" }}></i>
          <i className="bi bi-repeat" style={{ fontSize: "0.6em" }}></i>
        </div>
        <div className="bar-container">
          <span id="time-remain">0:00</span>
          <div className="music-bar"></div>
          <span id="time-total">0:00</span>
        </div>
      </div>

      <div className="media-controls">
        <i className="bi bi-music-note-list"></i>
        <i className="bi bi-speaker"></i>
        <i className="fa-solid fa-volume-high"></i>
        <input id="volume" type="range" />
      </div>
    </div>
  )
}
