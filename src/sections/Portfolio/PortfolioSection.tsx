import React from "react";
import "./style.scss";

import PortfolioItem from "@components/PortfolioItem";
import { useTheme } from "@components/ThemeSwitcher/ThemeSwitcher";
import { PortfolioItemModel } from "@models/contentful/PortfolioItemModel";
import ScrollToPrevious from "@components/ScrollToPrevious/ScrollToPrevious";
import { animated, useSpring } from "react-spring";

interface Props {
  data : PortfolioItemModel[]
}

const PortfolioSection: React.FC<Props> = ({ data }) => {
  const theme = useTheme();

  const backgroundProps = useSpring({
    config: { duration: 2000 },
    opacity: 1,
    backgroundColor: theme.theme.bgPrimary,
    from: { opacity: 1, backgroundColor: theme.previousTheme.bgPrimary !== "" ? theme.previousTheme.bgPrimary : theme.theme.bgPrimary },
  });

  return (
    <animated.div className="portfolio-page" style={backgroundProps}>
      <div className="content-grid">
        <h1 style={{ color: theme.theme.colorPrimary }}>Portfolio</h1>
        <div className="portfolio-wrapper">
          <style>
            {`
              .portfolio-item {
                background-color: ${theme.theme.colorPrimary};
                color: ${theme.theme.textAlternate};
              }
              .portfolio-item a {
                color: ${theme.theme.textAlternate};
              }
              .portfolio-item__links a:hover {
                border-bottom: 2px solid ${theme.theme.colorAlternate};
              }
            `}
          </style>
          {data.map((item :PortfolioItemModel, i: number) => (
            <div style={{ flex: "1 0 20%" }}>
              <PortfolioItem item={item} key={i} />
            </div>

          ))}
        </div>
      </div>
      <ScrollToPrevious pageSelector=".landing-page" />
    </animated.div>
  );
};

export default PortfolioSection;
