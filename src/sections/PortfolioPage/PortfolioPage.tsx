import React from "react";
import PortfolioItem from "@components/PortfolioItem";

import "./style.scss";
import { useTheme } from "@components/ThemeSwitcher/ThemeSwitcher";
import { PortfolioItemModel } from "@models/PortfolioItemModel";

interface Props {
  data : PortfolioItemModel[]
}

const PortfolioPage: React.FC<Props> = ({ data }) => {
  const theme = useTheme();

  return (
    <div className="portfolio-page" style={{ backgroundColor: theme.theme.bgPrimary }}>
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
            <PortfolioItem item={item} key={i} />
          ))}
        </div>
      </div>
      {/* <ScrollToPrevious pageSelector=".landing-page" /> */}
    </div>
  );
};

export default PortfolioPage;
