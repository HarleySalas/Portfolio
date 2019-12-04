import React from "react"
import "./HomeAbout.scss"

import aboutImg from "./assets/about-pic.jpg"

const HomeAbout = () => {
  return (
    <section className="home-about">
      <div className="container home-about__container">
        <div className="home-about__img-wrapper">
          <img
            src={aboutImg}
            alt="Harley in Prague"
            className="home-about__img"
          />
        </div>
      </div>
    </section>
  )
}

export default HomeAbout
