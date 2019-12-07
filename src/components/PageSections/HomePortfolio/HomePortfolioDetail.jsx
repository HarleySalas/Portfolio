import React from "react"

import DropdownIcon from "./assets/dropdown-icon.svg"
import Button from "../../../components/Button/Button"

import { useToggle } from "../../../utils"

const HomePortfolioDetail = ({ item }) => {
  const [description, toggleDescription] = useToggle(false)

  return (
    <>
      <DropdownIcon
        className={`home-portfolio__item__dropdown ${description &&
          "home-portfolio__item__dropdown--open"}`}
        onClick={toggleDescription}
      />
      <div
        className={`home-portfolio__item__description-wrapper ${description &&
          "home-portfolio__item__description-wrapper--open"}`}
      >
        <p className="home-portfolio__item__description">
          {item.frontmatter.description}
        </p>
        <Button
          btnText="Read More"
          btnStyle="blue"
          btnSize="md"
          addClass="home-portfolio__item__cta"
        />
      </div>
    </>
  )
}

export default HomePortfolioDetail
