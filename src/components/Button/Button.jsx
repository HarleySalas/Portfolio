import React from "react"
import { Link } from "gatsby"

import "./Button.scss"

const Button = props => {
  const btnStyle = `
  button
  ${props.btnStyle === "blue" && "button--blue"}
  ${props.btnStyle === "white" && "button--white"}
  ${props.btnSize === "md" && "button--md"}
  ${props.addClass && props.addClass}
  `

  const btnElement = (
    <button className={btnStyle} onClick={props.onClick}>
      {props.btnText}
    </button>
  )

  if (props.linkTo) {
    return <Link to={props.linkTo}>{btnElement}</Link>
  }

  return btnElement
}

export default Button
