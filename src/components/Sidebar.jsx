import React from "react"
import { Image } from "react-bootstrap"
import spotifyLogo from "../assets/spotify-logo.png"
import SearchbarNav from "./SearchbarNav"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Image className="logo" src={spotifyLogo} />
      <div className="navigation">
        <ul>
          <li>
            <a href="home">
              <span className="fa fa-home"></span>
              <span>Home</span>
            </a>
          </li>

          <li>
            <SearchbarNav />
          </li>

          <li>
            <a href="yourlibrary">
              <span className="fa fas fa-book"></span>
              <span>Your Library</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <a href="createplaylist">
              <span className="fa fas fa-plus-square"></span>
              <span>Create Playlist</span>
            </a>
          </li>

          <li>
            <a href="likedsongs">
              <span className="fa fas fa-heart"></span>
              <span>Liked Songs</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="policies">
        <ul>
          <li>
            <a href="cookies">Cookies</a>
          </li>
          <li>
            <a href="privacy">Privacy</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
