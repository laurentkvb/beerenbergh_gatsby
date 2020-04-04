import React from "react";
import "./style.scss";
import laurentPicture from "../../assets/lkvb-moscow.jpg";

import ScrollToNext from "../../components/ScrollToNext";
import { aboutUsPageData } from "./AboutPaga.data";
import { HeaderListItem } from "./HeaderListItem/HeaderListItem";
import { useTheme } from "@components/ThemeSwitcher/ThemeSwitcher";

const AboutPage: React.FC = () => {
  const theme = useTheme();

  return (
    <div className="about-page" style={{ backgroundColor: theme.theme.bgPrimary }}>
      <style>
        {`
          .highlight {
            background-color: ${theme.theme.colorHighlight};
          }
          ::selection {
            background-color: ${theme.theme.colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 className="intro-name" style={{ color: theme.theme.colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <img
            src={laurentPicture}
            alt="Laurent Kleering van Beerenbergh"
            width="250"
            height="400"
          />
          <div className="about-content" style={{ color: theme.theme.textPrimary }}>
            <h1 style={{ color: theme.theme.colorPrimary }}>Stack</h1>
            {aboutUsPageData.map((data, i :number) => (
              <HeaderListItem key={i} header={data.topic} list={data.topics} />
            ))}

            <p className="text-emoji" style={{ color: theme.theme.colorPrimary }}>
              \ (•◡•) /
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

export default AboutPage;
