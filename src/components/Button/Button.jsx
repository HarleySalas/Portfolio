import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

import "./Button.scss";

const Button = props => {
  const btnStyle = `
  button
  ${props.btnStyle === "blue" && "button--blue"}
  ${props.btnStyle === "white" && "button--white"}
  ${props.btnSize === "md" && "button--md"}
  ${props.addClass && props.addClass}
  `;

  const btnElement = (
    <button className={btnStyle} onClick={props.onClick}>
      {props.btnText}
    </button>
  );

  if (props.linkTo) {
    const handleClick = (e, hrefTarget) => {
      e.preventDefault();

      scrollTo(hrefTarget);
    };

    return (
      <a href={props.linkTo} onClick={e => handleClick(e, props.linkTo)}>
        {btnElement}
      </a>
    );
  }

  return btnElement;
};

export default Button;
