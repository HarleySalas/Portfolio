import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import "./DesktopMenu.scss";

import { useActiveSection } from "../../../../utils";

const DesktopMenu = () => {
  const activeSection = useActiveSection();

  const handleClick = e => {
    const hrefTarget = e.target.getAttribute("href");
    e.preventDefault();

    scrollTo(hrefTarget);
  };

  return (
    <nav className="navbar__desktop">
      <ul className="navbar__desktop__ul">
        <li className="navbar__desktop__li">
          <a
            href="#about"
            className={`navbar__desktop__li__link ${activeSection === "about" &&
              "active"}`}
            onClick={e => handleClick(e)}
          >
            About
          </a>
        </li>
        <li className="navbar__desktop__li">
          <a
            href="#skillset"
            className={`navbar__desktop__li__link  ${activeSection ===
              "skillset" && "active"}`}
            onClick={e => handleClick(e)}
          >
            Skillset
          </a>
        </li>
        <li className="navbar__desktop__li">
          <a
            href="#portfolio"
            className={`navbar__desktop__li__link  ${activeSection ===
              "portfolio" && "active"}`}
            onClick={e => handleClick(e)}
          >
            Portfolio
          </a>
        </li>
        <li className="navbar__desktop__li">
          <a
            href="#contact"
            className={`navbar__desktop__li__link  ${activeSection ===
              "contact" && "active"}`}
            onClick={e => handleClick(e)}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopMenu;
