import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./HomePortfolio.scss"

const HomePortfolio = () => {
  const data = useStaticQuery(graphql`
    query PortfolioQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(portfolio)/" } }
      ) {
        nodes {
          frontmatter {
            description
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
              {console.log(item.frontmatter.tech_stack)}
              {item.frontmatter.tech_stack.map((tech, index) => (
                <span className="home-portfolio__item__tech" key={index}>
                  {tech}
                </span>
              ))}
            </div>
            {/* LINKS */}
          </div>
        ))}
      </div>
    </section>
  )
}

export default HomePortfolio
