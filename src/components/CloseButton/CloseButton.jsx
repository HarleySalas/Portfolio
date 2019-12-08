import React from "react";
import "./CloseButton.scss";

const CloseButton = ({ onClick, addClass }) => {
  return (
    <button
      className={`close-button ${addClass && addClass}`}
      onClick={onClick}
    >
      <div className="close-button__line"></div>
      <div className="close-button__line"></div>
    </button>
  );
};

export default CloseButton;
