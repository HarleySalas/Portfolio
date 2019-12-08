import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "./HomePortfolio.scss";

import LinkIcon from "./assets/link.svg";
import GithubIcon from "./assets/github.svg";

import HomePortfolioMobileDetail from "./HomePortfolioMobileDetail";
import HomePortfolioDesktopDetail from "./HomePortfolioDesktopDetail";

const HomePortfolio = () => {
  const data = useStaticQuery(graphql`
    query PortfolioQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(portfolio)/" } }
        sort: { fields: frontmatter___order, order: ASC }
      ) {
        nodes {
          frontmatter {
            description
            livesite_bool
            livesite
            title
            thumbnail
            tech_stack
            repo_bool
            repo
          }
          html
        }
      }
    }
  `);

  const portfolio = data.allMarkdownRemark.nodes;
  console.log(portfolio);

  return (
    <section className="home-portfolio">
      <div className="container home-portfolio__container">
        <div className="home-portfolio__title-wrapper">
          <h2 className="home-portfolio__title">Portfolio</h2>
          <div className="home-portfolio__title__line"></div>
        </div>
        {portfolio.map((item, index) => (
          <div className="home-portfolio__item" key={index}>
            <div className="home-portfolio__item__info">
              <img
                className="home-portfolio__item__img"
                src={item.frontmatter.thumbnail}
                alt={`${item.frontmatter.title} project`}
              />
              <h3 className="home-portfolio__item__title">
                {item.frontmatter.title}
              </h3>
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
              <HomePortfolioMobileDetail item={item} />
            </div>
            <HomePortfolioDesktopDetail item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePortfolio;
