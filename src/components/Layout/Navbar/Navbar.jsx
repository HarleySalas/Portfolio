import React, { useContext, useState, useEffect } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import "./Navbar.scss";

import { ScrollContext } from "../../../context/ScrollContext";

import Logo from "./assets/hs-outline.svg";

import MobileMenu from "./MobileMenu/MobileMenu";
import DesktopMenu from "./DesktopMenu/DesktopMenu";

const Navbar = () => {
  const [scrollHeight] = useContext(ScrollContext);
  const [activateFullNav, setActivateFullNav] = useState(false);

  const handleClick = e => {
    e.preventDefault();

    scrollTo("#home");
  };

  useEffect(() => {
    const fiftyVh = window.innerHeight / 2;

    if (scrollHeight >= fiftyVh && !activateFullNav) {
      setActivateFullNav(true);
    } else if (scrollHeight < fiftyVh && activateFullNav) {
      setActivateFullNav(false);
    }
  }, [scrollHeight]);

  return (
    <nav className={`navbar ${activateFullNav && "navbar--active"}`}>
      <div className="container navbar__container">
        <a href="#home" onClick={e => handleClick(e)}>
          <Logo
            className={`navbar__logo ${activateFullNav &&
              "navbar__logo--active"}`}
          />
        </a>
        <DesktopMenu />
      </div>
      <MobileMenu />
    </nav>
  );
};

export default Navbar;
