import React from "react"
import "./Layout.scss"

//base CSS
import "../../styles/base.scss"
import "../../styles/layout.scss"
import "../../styles/typography.scss"

// import { ReactComponent as Pattern } from "./assets/texture.svg"

import SEO from "./SEO/SEO"

const Layout = ({ children, title }) => {
  return (
    <div className="App">
      <div className="line-container">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <SEO title={title} />
      {children}
    </div>
  )
}

export default Layout
