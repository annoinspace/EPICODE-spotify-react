import React from "react"
import { Image } from "react-bootstrap"

export default function TopNav() {
  return (
    <>
      <div className="top-nav red">
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

      <div className="mobile-top-nav red">
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
    </>
  )
}
