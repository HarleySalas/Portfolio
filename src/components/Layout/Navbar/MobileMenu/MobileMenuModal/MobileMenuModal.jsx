import React, { useState, useEffect, useRef } from "react";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import scrollTo from "gatsby-plugin-smoothscroll";
import "./MobileMenuModal.scss";

import { useActiveSection } from "../../../../../utils";

const MobileMenuModal = ({ toggle }) => {
  const modalRef = useRef(null);
  const activeSection = useActiveSection();
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    disableBodyScroll(modalRef.current);

    return () => clearAllBodyScrollLocks();
  }, []);

  const handleClick = e => {
    toggle();
    const hrefTarget = e.target.getAttribute("href");
    e.preventDefault();

    scrollTo(hrefTarget);
  };

  return (
    <>
      <div className="navbar__mobile__modal__backdrop" onClick={toggle}></div>
      <div className="navbar__mobile__modal" ref={modalRef}>
        <ul className="navbar__mobile__modal__ul">
          <li className="navbar__mobile__modal__li">
            <a
              href="#about"
              className={`navbar__mobile__modal__li__link ${activeSection ===
                "about" && "active"}`}
              onClick={e => handleClick(e)}
            >
              About
            </a>
          </li>
          <li className="navbar__mobile__modal__li">
            <a
              href="#skillset"
              className={`navbar__mobile__modal__li__link ${activeSection ===
                "skillset" && "active"}`}
              onClick={e => handleClick(e)}
            >
              Skillset
            </a>
          </li>
          <li className="navbar__mobile__modal__li">
            <a
              href="#portfolio"
              className={`navbar__mobile__modal__li__link ${activeSection ===
                "portfolio" && "active"}`}
              onClick={e => handleClick(e)}
            >
              Portfolio
            </a>
          </li>
          <li className="navbar__mobile__modal__li">
            <a
              href="#contact"
              className={`navbar__mobile__modal__li__link ${activeSection ===
                "contact" && "active"}`}
              onClick={e => handleClick(e)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenuModal;
