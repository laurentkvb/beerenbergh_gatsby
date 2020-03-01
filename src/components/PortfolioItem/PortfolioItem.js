import React from "react";
import PropTypes from "prop-types";
import "./style";

export const PortfolioItem = ({ item }, context) => {
  const {
    theme: { colorPrimary, textAlternate }
  } = context;

  return (
    <a
      href={item.fields.websiteUrl}
      className="portfolio-item"
      style={{ backgroundColor: colorPrimary, color: textAlternate }}
    >
      <img
        alt={item.fields.projectName}
        src={item.fields.logoUrl}
        className="portfolio-item__image"
      />
      <div className="portfolio-item__title">{item.fields.projectName}</div>
      <div className="portfolio-item__desc">{item.fields.description}</div>
      <div className="portfolio-item__icon">
        <i className="fab fa-js" />
        <i className="fab fa-react" />
        <i className="fab fa-html5" />
      </div>
      <div className="portfolio-item__links" />
    </a>
  );
};

PortfolioItem.contextTypes = {
  theme: PropTypes.any
};

export default PortfolioItem;
