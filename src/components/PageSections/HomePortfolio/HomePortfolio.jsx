import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./HomePortfolio.scss"

import LinkIcon from "./assets/link.svg"
import GithubIcon from "./assets/github.svg"

import HomePortfolioDetail from "./HomePortfolioDetail"

const HomePortfolio = () => {
  const data = useStaticQuery(graphql`
    query PortfolioQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(portfolio)/" } }
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
  `)

  const portfolio = data.allMarkdownRemark.nodes
  console.log(portfolio)

  return (
    <section className="home-portfolio">
      <div className="container home-portfolio__container">
        <div className="home-portfolio__title-wrapper">
          <h2 className="home-portfolio__title">Portfolio</h2>
          <div className="home-portfolio__title__line"></div>
        </div>
        {portfolio.map((item, index) => (
          <div className="home-portfolio__item" key={index}>
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
              <h4 className="home-portfolio__item__tech-title">Tech stack:</h4>
              {item.frontmatter.tech_stack.map((tech, index) => (
                <span className="home-portfolio__item__tech" key={index}>
                  {tech}
                </span>
              ))}
            </div>
            {/* LINKS */}
            <div className="home-portfolio__item__link-wrapper">
              {item.frontmatter.livesite_bool ? (
                <button className="home-portfolio__item__link-button home-portfolio__item__link-button--active">
                  <LinkIcon className="home-portfolio__item__link-icon" />
                  Live Site
                </button>
              ) : (
                <button className="home-portfolio__item__link-button home-portfolio__item__link-button--disabled">
                  <LinkIcon className="home-portfolio__item__link-icon" />
                  Private
                </button>
              )}
              {item.frontmatter.repo_bool ? (
                <button className="home-portfolio__item__link-button home-portfolio__item__link-button--active">
                  <GithubIcon className="home-portfolio__item__link-icon" />
                  Github
                </button>
              ) : (
                <button className="home-portfolio__item__link-button home-portfolio__item__link-button--disabled">
                  <GithubIcon className="home-portfolio__item__link-icon" />
                  Private
                </button>
              )}
            </div>
            <HomePortfolioDetail item={item} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default HomePortfolio
