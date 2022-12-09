import React from "react"
import { Image } from "react-bootstrap"
import PillsRow from "./PillsRow"
import HomepageAlbums from "./HomepageAlbums"

export default function Homepage() {
  return (
    <div className="container">
      <div className="top-nav">
        <div className="navigation-btns">
          <div className="previous">
            <Image src="./assets/chevron-left.svg" alt="" />
          </div>
          <div className="next">
            <Image src="./assets/chevron-right.svg" alt="" />
          </div>
        </div>
        <div className="account-info">
          <div className="img-container">
            <Image src="./assets/profile.jpg" alt="" />
          </div>
          <span className="account-name">Tyler Swan Marshall</span>
        </div>
      </div>

      <div className="mobile-top-nav">
        <h1 className="heading">Good Morning</h1>
        <div className="menu">
          <div className="icon-container bell">
            <Image className="icon" src="./assets/bell.svg" alt="" />
            <div className="circle"></div>
          </div>
          <div className="icon-container">
            <Image className="icon" src="./assets/clock.svg" alt="" />
          </div>
          <div className="icon-container">
            <Image className="icon" src="./assets/settings.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="mobile-categories-banner">
        <span className="">Music</span>
        <span className="">Podcasts</span>
      </div>

      <div className="welcome-tracks">
        <h1>Good Morning</h1>
        <div className="track-pills d-flex flex-row" id="pillsRow">
          <PillsRow />
        </div>
      </div>

      <div className="albums-row">
        <h2 className="heading">Recommended Albums</h2>
        <HomepageAlbums />
      </div>

      <div className="tracks-row">
        <h2 className="heading">Top Listened Tracks</h2>
        <p className="sub-heading">
          Discover some of the highest rated artists.
        </p>
        <div className="cards-container" id="tracksRow">
          <span className="see-all">See All</span>
        </div>
      </div>
    </div>
  )
}
