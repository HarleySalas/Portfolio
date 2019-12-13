import React from "react";
import "./HomeHero.scss";

import Button from "../../Button/Button";

import Logo from "./assets/hs-outline.svg";

import Resume from "./assets/Harley-Salas-Resume.pdf";

const HomeHero = () => {
  return (
    <section id="home" className="home-hero">
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
          linkTo="#contact"
        />
        <Button
          btnText="Resume"
          btnStyle="white"
          btnSize="md"
          addClass="home-hero__button"
          file={Resume}
        />
        {/* </div> */}
      </div>
    </section>
  );
};

export default HomeHero;
