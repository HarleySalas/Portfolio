import React, { useEffect, useState, useRef } from "react";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import { Portal } from "../../../../utils";
import Button from "../../../Button/Button";
import CloseButton from "../../../CloseButton/CloseButton";
import LinkIcon from "../assets/link.svg";
import GithubIcon from "../assets/github.svg";

import "./HomePortfolioItemView.scss";

const HomePortfolioItemView = ({ item, toggle }) => {
  const [closing, setClosing] = useState(false);
  const scrollContainer = useRef(null);

  useEffect(() => {
    disableBodyScroll(scrollContainer.current);

    return () => clearAllBodyScrollLocks();
  }, []);

  useEffect(() => {
    if (closing) {
      setTimeout(() => {
        toggle();
      }, 1420);
    }
  }, [closing, toggle]);

  return (
    <Portal>
      <section className="home-portfolio__item__view">
        <div className="home-portfolio__item__view__background-wrapper">
          <div
            className={`home-portfolio__item__view__background-column home-portfolio__item__view__background-column--sm ${closing &&
              "home-portfolio__item__view__background-column--closing"}`}
          ></div>
          <div
            className={`home-portfolio__item__view__background-column home-portfolio__item__view__background-column--lg ${closing &&
              "home-portfolio__item__view__background-column--closing"}`}
          ></div>
          <div
            className={`home-portfolio__item__view__background-column home-portfolio__item__view__background-column--lg ${closing &&
              "home-portfolio__item__view__background-column--closing"}`}
          ></div>
          <div
            className={`home-portfolio__item__view__background-column home-portfolio__item__view__background-column--lg ${closing &&
              "home-portfolio__item__view__background-column--closing"}`}
          ></div>
          <div
            className={`home-portfolio__item__view__background-column home-portfolio__item__view__background-column--lg ${closing &&
              "home-portfolio__item__view__background-column--closing"}`}
          ></div>
          <div
            className={`home-portfolio__item__view__background-column home-portfolio__item__view__background-column--sm ${closing &&
              "home-portfolio__item__view__background-column--closing"}`}
          ></div>
        </div>
        <div className="home-portfolio__item__view__line-wrapper">
          <div
            className={`home-portfolio__item__view__line ${closing &&
              "home-portfolio__item__view__line--close"}`}
          ></div>
          <div
            className={`home-portfolio__item__view__line ${closing &&
              "home-portfolio__item__view__line--close"}`}
          ></div>
          <div
            className={`home-portfolio__item__view__line ${closing &&
              "home-portfolio__item__view__line--close"}`}
          ></div>
          <div
            className={`home-portfolio__item__view__line ${closing &&
              "home-portfolio__item__view__line--close"}`}
          ></div>
          <div
            className={`home-portfolio__item__view__line ${closing &&
              "home-portfolio__item__view__line--close"}`}
          ></div>
        </div>
        <div
          className="home-portfolio__item__view__content"
          ref={scrollContainer}
        >
          <div className="container home-portfolio__item__view__container">
            <div className="home-portfolio__item__view__close">
              <CloseButton
                onClick={() => setClosing(true)}
                addClass={`${closing && "home-portfolio__item__view__fade"}`}
              />
            </div>
            <div
              className={`home-portfolio__item__view__container__wrapper ${closing &&
                "home-portfolio__item__view__container__wrapper--close"}`}
            >
              {/* DETAILS CONTAINER */}
              <div className="home-portfolio__item__view__container__details">
                <h2 className="home-portfolio__item__view__title">
                  {item.frontmatter.title}
                </h2>
                <img
                  src={item.frontmatter.thumbnail}
                  alt={`${item.frontmatter.title} project`}
                  className="home-portfolio__item__view__img"
                />
                {/* TECH STACK */}
                <div className="home-portfolio__item__tech-wrapper">
                  <h4 className="home-portfolio__item__tech-title">
                    Tech stack:
                  </h4>
                  {item.frontmatter.tech_stack.map((tech, index) => (
                    <span className="home-portfolio__item__tech" key={index}>
                      {tech}
                    </span>
                  ))}
                </div>
                {/* LINKS */}
                <div className="home-portfolio__item__link-wrapper">
                  {item.frontmatter.livesite_bool ? (
                    <a
                      href={item.frontmatter.livesite}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="home-portfolio__item__link-button home-portfolio__item__link-button--active">
                        <LinkIcon className="home-portfolio__item__link-icon" />
                        Live Site
                      </button>
                    </a>
                  ) : (
                    <button className="home-portfolio__item__link-button home-portfolio__item__link-button--disabled">
                      <LinkIcon className="home-portfolio__item__link-icon" />
                      Private
                    </button>
                  )}
                  {item.frontmatter.repo_bool ? (
                    <a
                      href={item.frontmatter.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="home-portfolio__item__link-button home-portfolio__item__link-button--active">
                        <GithubIcon className="home-portfolio__item__link-icon" />
                        Github
                      </button>
                    </a>
                  ) : (
                    <button className="home-portfolio__item__link-button home-portfolio__item__link-button--disabled">
                      <GithubIcon className="home-portfolio__item__link-icon" />
                      Private
                    </button>
                  )}
                </div>
              </div>
              {/* CONTENT CONTAINER */}
              <div className="home-portfolio__item__view__container__content">
                <p className="home-portfolio__item__view__body__details">
                  {item.frontmatter.description}
                </p>
                <div className="home-portfolio__item__view__body__hr" />
                <div
                  className="home-portfolio__item__view__body__html"
                  dangerouslySetInnerHTML={{ __html: item.html }}
                />
                <Button
                  btnText="Close"
                  btnStyle="blue"
                  btnSize="md"
                  onClick={() => setClosing(true)}
                  addClass="home-portfolio__item__view__cta"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Portal>
  );
};

export default HomePortfolioItemView;
