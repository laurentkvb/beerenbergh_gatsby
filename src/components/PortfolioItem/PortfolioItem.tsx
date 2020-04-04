import React from "react";
import "./style.scss";
import { useTheme } from "@components/ThemeSwitcher/ThemeSwitcher";
import { PortfolioItemModel } from "@models/PortfolioItemModel";

interface Props {
  item : PortfolioItemModel;
}

const PortfolioItem: React.FC<Props> = ({ item }) => {
  const theme = useTheme();

  return (
    <a
      href={item.websiteUrl}
      className="portfolio-item"
      style={{
        backgroundColor: theme.theme.colorPrimary,
        color: theme.theme.textAlternate
      }}
    >
      <img
        alt={item.projectName}
        src={item.logoUrl}
        className="portfolio-item__image"
      />
      <div className="portfolio-item__title">{item.projectName}</div>
      <div className="portfolio-item__desc">{item.description}</div>
      <div className="portfolio-item__icon">
        <i className="fab fa-js" />
        <i className="fab fa-react" />
        <i className="fab fa-html5" />
      </div>
      <div className="portfolio-item__links" />
    </a>
  );
};

export default PortfolioItem;
