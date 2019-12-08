import React from "react";

import DropdownIcon from "./assets/dropdown-icon.svg";
import Button from "../../Button/Button";
import HomePortfolioItemView from "./HomePortfolioItemView/HomePortfolioItemView";

import { useToggle } from "../../../utils";

const HomePortfolioMobileDetail = ({ item }) => {
  const [description, toggleDescription] = useToggle(false);
  const [viewItem, toggleViewItem] = useToggle(false);

  return (
    <>
      <DropdownIcon
        className={`home-portfolio__item__dropdown ${description &&
          "home-portfolio__item__dropdown--open"}`}
        onClick={toggleDescription}
      />
      <div
        className={`home-portfolio__item__detail-wrapper ${description &&
          "home-portfolio__item__detail-wrapper--open"}`}
      >
        <p className="home-portfolio__item__detail">
          {item.frontmatter.description}
        </p>
        <Button
          btnText="Read More"
          btnStyle="blue"
          btnSize="md"
          addClass="home-portfolio__item__cta"
          onClick={toggleViewItem}
        />
      </div>
      {viewItem && (
        <HomePortfolioItemView item={item} toggle={toggleViewItem} />
      )}
    </>
  );
};

export default HomePortfolioMobileDetail;
