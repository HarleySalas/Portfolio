import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <span className="footer__copy">
          &copy; {new Date().getFullYear()} Harley Salas
        </span>
      </div>
    </footer>
  );
};

export default Footer;
