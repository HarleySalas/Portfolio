import React, { useEffect, useContext } from "react";
import throttle from "lodash/fp/throttle";
import "./Layout.scss";

//base CSS
import "../../styles/base.scss";
import "../../styles/layout.scss";
import "../../styles/typography.scss";

import { ScrollContext } from "../../context/ScrollContext";

import SEO from "./SEO/SEO";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children, title }) => {
  //track window scroll height
  const [scrollHeight, setScrollHeight] = useContext(ScrollContext);

  const handleScroll = throttle(172, () => {
    setScrollHeight(window.scrollY);
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);

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
