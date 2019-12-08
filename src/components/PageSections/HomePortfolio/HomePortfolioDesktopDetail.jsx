import React from "react";

import Button from "../../../components/Button/Button";
import HomePortfolioItemView from "./HomePortfolioItemView/HomePortfolioItemView";

import { useToggle } from "../../../utils";

const HomePortfolioDesktopDetail = ({ item }) => {
  const [viewItem, toggleViewItem] = useToggle(false);
  return (
    <>
      <div className="home-portfolio__item__detail-wrapper--desktop">
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

export default HomePortfolioDesktopDetail;
