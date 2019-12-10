import React from "react";
import "./Layout.scss";

//base CSS
import "../../styles/base.scss";
import "../../styles/layout.scss";
import "../../styles/typography.scss";

import SEO from "./SEO/SEO";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children, title }) => {
  return (
    <div className="App">
      <Navbar />
      <div className="line-container">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <SEO title={title} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
