import React from "react"
import "./HomeAbout.scss"

import aboutImg from "./assets/about-pic.jpg"

import Button from "../../../components/Button/Button"

const HomeAbout = () => {
  return (
    <section className="home-about">
      <div className="container home-about__container">
        <div className="home-about__mobile-title-wrapper">
          <h2 className="home-about__title">About</h2>
          <div className="home-about__title__line"></div>
        </div>
        <div className="home-about__img-wrapper">
          <img
            src={aboutImg}
            alt="Harley in Prague"
            className="home-about__img"
          />
        </div>
        <div className="home-about__content-wrapper">
          <div className="home-about__desktop-title-wrapper">
            <h2 className="home-about__title">About</h2>
            <div className="home-about__title__line"></div>
          </div>
          <p className="home-about__content">
            It’s rare someone gets to say they’re doing what they love, every
            single day. My passion for programming, design and business provides
            me with a never ending sense of fulfillment and desire to learn
            more.
          </p>
          <p className="home-about__content">
            I’m an American, born in Miami, Florida. I currently reside in
            Moscow, Russia. I’m always excited to work on new projects and
            conquer challenges.
          </p>
          <Button
            btnText="Get in Touch"
            btnStyle="blue"
            btnSize="md"
            addClass="home-about__content__cta"
          />
        </div>
      </div>
    </section>
  )
}

export default HomeAbout
