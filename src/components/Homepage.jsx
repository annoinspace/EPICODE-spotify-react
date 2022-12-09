import React from "react"
import { Image } from "react-bootstrap"

export default function Homepage() {
  return (
    <div class="container">
      <div class="top-nav">
        <div class="navigation-btns">
          <div class="previous">
            <Image src="./assets/chevron-left.svg" alt="" />
          </div>
          <div class="next">
            <Image src="./assets/chevron-right.svg" alt="" />
          </div>
        </div>
        <div class="account-info">
          <div class="img-container">
            <Image src="./assets/profile.jpg" alt="" />
          </div>
          <span class="account-name">Tyler Swan Marshall</span>
        </div>
      </div>

      <div class="mobile-top-nav">
        <h1 class="heading">Good Morning</h1>
        <div class="menu">
          <div class="icon-container bell">
            <Image class="icon" src="./assets/bell.svg" alt="" />
            <div class="circle"></div>
          </div>
          <div class="icon-container">
            <Image class="icon" src="./assets/clock.svg" alt="" />
          </div>
          <div class="icon-container">
            <Image class="icon" src="./assets/settings.svg" alt="" />
          </div>
        </div>
      </div>

      <div class="mobile-categories-banner">
        <span class="">Music</span>
        <span class="">Podcasts</span>
      </div>

      <div class="welcome-tracks">
        <h1>Good Morning</h1>
        <div class="track-pills" id="pillsRow"></div>
      </div>

      <div class="albums-row">
        <h2 class="heading">Recommended Albums</h2>
        <div class="cards-container" id="albumsRow">
          <span class="see-all">See All</span>
        </div>
      </div>

      <div class="tracks-row">
        <h2 class="heading">Top Listened Tracks</h2>
        <p class="sub-heading">Discover some of the highest rated artists.</p>
        <div class="cards-container" id="tracksRow">
          <span class="see-all">See All</span>
        </div>
      </div>
    </div>
  )
}
