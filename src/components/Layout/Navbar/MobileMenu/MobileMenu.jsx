import React from "react";
import "./MobileMenu.scss";

import { useToggle } from "../../../../utils";

const MobileMenu = () => {
  const [menuOpen, toggleMenu] = useToggle(false);
  return (
    <div className="navbar__mobile">
      <button
        className={`navbar__mobile__button ${menuOpen && "active"}`}
        onClick={toggleMenu}
      >
        <span className="navbar__mobile__button__line"></span>
        <span className="navbar__mobile__button__line"></span>
        <span className="navbar__mobile__button__line"></span>
      </button>
    </div>
  );
};

export default MobileMenu;
