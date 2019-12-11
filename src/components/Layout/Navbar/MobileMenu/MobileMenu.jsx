import React from "react";
import "./MobileMenu.scss";

import { useToggle } from "../../../../utils";

import MobileMenuModal from "./MobileMenuModal/MobileMenuModal";

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
      {menuOpen && <MobileMenuModal toggle={toggleMenu} />}
    </div>
  );
};

export default MobileMenu;
