import React from "react";
import "./style.scss";
import laurentPicture from "../../assets/lkvb-moscow.jpg";

import ScrollToNext from "../../components/ScrollToNext";
import { aboutUsPageData } from "./AboutPaga.data";
import AboutListItem from "@components/AboutListItem/AboutListItem";
import { useSpring, animated } from "react-spring";
import { useTheme } from "../../theme/ThemeSwitcher/ThemeSwitcher";

const AboutSection: React.FC = () => {
  const theme = useTheme();

  const backgroundProps = useSpring({
    config: { duration: 2000 },
    opacity: 1,
    backgroundColor: theme.currentTheme.bgPrimary,
    from: { opacity: 1, backgroundColor: theme.previousTheme.bgPrimary !== "" ? theme.previousTheme.bgPrimary : theme.currentTheme.bgPrimary },
  });

  return (
    <animated.div className="about-page" style={backgroundProps}>
      <style>
        {`
          .highlight {
            background-color: ${theme.currentTheme.colorHighlight};
          }
          ::selection {
            background-color: ${theme.currentTheme.colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 className="intro-name" style={{ color: theme.currentTheme.colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <img
            src={laurentPicture}
            alt="Laurent Kleering van Beerenbergh"
            width="250"
            height="400"
          />
          <div className="about-content" style={{ color: theme.currentTheme.textPrimary }}>
            <h1 style={{ color: theme.currentTheme.colorPrimary }}>Stack</h1>
            {aboutUsPageData.map((data, i :number) => (
              <AboutListItem key={i} header={data.topic} list={data.topics} />
            ))}

            <p className="text-emoji" style={{ color: theme.currentTheme.colorPrimary }}>
              \ (•◡•) /
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </animated.div>
  );
};

export default AboutSection;
