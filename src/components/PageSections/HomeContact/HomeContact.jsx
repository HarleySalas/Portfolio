import React from "react";
import "./HomeContact.scss";

import MailIcon from "./assets/paper-plane.svg";
import GithubIcon from "./assets/github.svg";
import LinkedInIcon from "./assets/linkedin.svg";

import Resume from "./assets/Harley-Salas-Resume.pdf";

import HomeContactForm from "./HomeContactForm/HomeContactForm";

const HomeContact = () => {
  return (
    <section id="contact" className="home-contact">
      <div className="container home-contact__container">
        <div className="home-contact__container__left">
          <div className="home-contact__title-wrapper">
            <h2 className="home-contact__title">Contact</h2>
            <div className="home-contact__title__line"></div>
          </div>
          <h3 className="home-contact__name">Harley Salas</h3>
          <div className="home-contact__email-wrapper">
            <div className="home-contact__email">
              <a
                href="mailto:harley@harleysalas.com"
                className="home-contact__email__link"
              >
                harley@harleysalas.com
              </a>
              <MailIcon className="home-contact__email__icon" />
            </div>
          </div>
          <div className="home-contact__link-wrapper">
            <a
              href="https://github.com/HarleySalas"
              target="_blank"
              rel="noopener noreferrer"
              className="home-contact__link"
            >
              <GithubIcon className="home-contact__link__icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/harley-salas-b22978142/"
              target="_blank"
              rel="noopener noreferrer"
              className="home-contact__link"
            >
              <LinkedInIcon className="home-contact__link__icon" />
            </a>
            <a href={Resume} target="_blank">
              <button className="home-contact__link__resume">Resume</button>
            </a>
          </div>
          <p className="home-contact__brief">
            I'm currently seeking freelance, contract and employment
            opportunities that are remote based.
          </p>
        </div>
        <div className="home-contact__container__right">
          <HomeContactForm />
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
