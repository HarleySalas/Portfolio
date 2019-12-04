import React from "react"
import "./HomeHero.scss"

import Button from "../../Button/Button"

import Shape from "./assets/shape.svg"
import Logo from "./assets/hs-outline.svg"

const HomeHero = () => {
  return (
    <div className="home-hero">
      {/* <Shape className="home-hero__shape" /> */}
      <div className="container home-hero__content-wrapper">
        <Logo className="home-hero__logo" />
        {/* <div className="container"> */}
        <h1 className="home-hero__title home-hero__title__heading">
          Harley Salas
        </h1>
        <h2 className="home-hero__title home-hero__title__subheading">
          Fullstack Web Developer
        </h2>
        <Button
          btnText="Contact"
          btnStyle="blue"
          btnSize="md"
          addClass="home-hero__contact home-hero__button"
        />
        <Button
          btnText="Resume"
          btnStyle="white"
          btnSize="md"
          addClass="home-hero__button"
        />
        {/* </div> */}
      </div>
    </div>
  )
}

export default HomeHero
