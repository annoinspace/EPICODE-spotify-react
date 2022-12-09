import React from "react"
import PillsRow from "./PillsRow"
import HomepageAlbums from "./HomepageAlbums"
import TopListenedTracks from "./TopListenedTracks"

export default function Homepage() {
  return (
    <div className="container">
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
        <TopListenedTracks />
      </div>
    </div>
  )
}
