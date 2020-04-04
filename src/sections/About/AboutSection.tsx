import React from "react";
import "./style.scss";
import laurentPicture from "../../assets/lkvb-moscow.jpg";

import ScrollToNext from "../../components/ScrollToNext";
import { aboutUsPageData } from "./AboutPaga.data";
import { useTheme } from "@components/ThemeSwitcher/ThemeSwitcher";
import AboutListItem from "@components/AboutListItem/AboutListItem";
import { useSpring, animated } from "react-spring";

const AboutSection: React.FC = () => {
  const theme = useTheme();

  const backgroundProps = useSpring({
    config: { duration: 2000 },
    opacity: 1,
    backgroundColor: theme.theme.bgPrimary,
    from: { opacity: 1, backgroundColor: theme.previousTheme.bgPrimary !== "" ? theme.previousTheme.bgPrimary : theme.theme.bgPrimary },
  });

  return (
    <animated.div className="about-page" style={backgroundProps}>
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
              <AboutListItem key={i} header={data.topic} list={data.topics} />
            ))}

            <p className="text-emoji" style={{ color: theme.theme.colorPrimary }}>
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
