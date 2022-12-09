import React from "react"
import { Image } from "react-bootstrap"

export default function MusicPlayer() {
  return (
    <div className="music-player">
      <div className="album-details">
        <Image
          class="album-artwork"
          src="https://upload.wikimedia.org/wikipedia/en/2/27/Daft_Punk_-_Discovery.png"
        />
        <div className="album-text">
          <h4>One More Time</h4>
          <h5>Daft Punk</h5>
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
