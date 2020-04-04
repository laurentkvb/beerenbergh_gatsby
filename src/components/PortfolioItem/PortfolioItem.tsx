import React from "react";
import "./style.scss";
import { useTheme } from "@components/ThemeSwitcher/ThemeSwitcher";
import { PortfolioItemModel } from "@models/contentful/PortfolioItemModel";
import { animated, useSpring } from "react-spring";

interface Props {
  item : PortfolioItemModel;
}

const PortfolioItem: React.FC<Props> = ({ item }) => {
  const theme = useTheme();

  const backgroundProps = useSpring({
    config: { duration: 2000 },
    opacity: 1,
    backgroundColor: theme.theme.colorPrimary,
    color: theme.theme.textAlternate,
    from: {
      opacity: 1,
      backgroundColor: theme.previousTheme.colorPrimary !== "" ? theme.previousTheme.colorPrimary : theme.theme.colorPrimary,
      color: theme.previousTheme.textAlternate !== "" ? theme.previousTheme.textAlternate : theme.theme.textAlternate },
  });

  return (
    <animated.a
      href={item.websiteUrl}
      className="portfolio-item"
      style={backgroundProps}
    >
      <img
        alt={item.projectName}
        src={item.logoSrc !== null ? item.logoSrc.file.url : item.logoUrl}
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
    </animated.a>
  );
};

export default PortfolioItem;
