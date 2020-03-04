import React from "react";
import ScrollToNext from "../../components/ScrollToNext";
import "./style.scss";
import { aboutUsPageData } from "./AboutPaga.data";
import { HeaderListItem } from "./HeaderListItem/HeaderListItem";
import { useTheme } from "@components/ThemeSwitcher/ThemeSwitcher";
import laurentPicture from "../../assets/lkvb-moscow.jpg";

const AboutPage: React.FC = () => {
  const theme = useTheme();

  return (
    <div className="about-page" style={{ backgroundColor: theme.theme.bgPrimary }}>
      <style>
        {/* TODO moet dit weg :hier stond eerst jsx="true" ? */}
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
            {aboutUsPageData.map((data, i) => (
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
