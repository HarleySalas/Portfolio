import React from "react";
import "./Navbar.scss";

import Logo from "./assets/hs-outline.svg";

import MobileMenu from "./MobileMenu/MobileMenu";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar__container">
        <Logo className="navbar__logo" />
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
