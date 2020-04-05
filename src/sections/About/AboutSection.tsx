import React, { useState } from "react";
import "./style.scss";
import laurentPicture from "../../assets/lkvb-moscow.jpg";

import ScrollToNext from "../../components/ScrollToNext";
import AboutListItem from "@components/AboutListItem/AboutListItem";
import { useSpring, animated } from "react-spring";
import { useTheme } from "../../theme/ThemeSwitcher/ThemeSwitcher";
import { aboutUsSectionData } from "@sections/About/AboutSection.data";
import { FadeInOutAnimation } from "../../animations/FadeInAndOutAnimation";
import { globalColorProps } from "../../animations/AnimationUtil";

const AboutSection: React.FC = () => {
  const theme = useTheme();
  const [alreadyAnimated, setAlreadyAnimated] = useState(false);

  const changeSetAnimated = () => {
    setAlreadyAnimated(true);
  };

  const backgroundProps = useSpring({
    config: { duration: 2000 },
    opacity: 1,
    backgroundColor: theme.currentTheme.bgPrimary,
    from: { opacity: 1, backgroundColor: theme.previousTheme.bgPrimary !== "" ? theme.previousTheme.bgPrimary : theme.currentTheme.bgPrimary },
  });

  const globalAnimation = useSpring(globalColorProps(theme));

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
        {FadeInOutAnimation(<animated.h1 className="intro-name" style={globalAnimation}>About</animated.h1>, changeSetAnimated, alreadyAnimated)}
        {FadeInOutAnimation(
          <div className="about-wrapper">
            <img
              src={laurentPicture}
              alt="Laurent Kleering van Beerenbergh"
              width="100"
              height="300"
            />
            <div className="about-content" style={{ color: theme.currentTheme.textPrimary }}>
              <animated.h1 style={globalAnimation}>Stack</animated.h1>
              {aboutUsSectionData.map((data, i :number) => (
                <AboutListItem key={i} header={data.topic} list={data.topics} />
              ))}

              <p className="text-emoji" style={{ color: theme.currentTheme.colorPrimary }}>
                \ (•◡•) /
              </p>
            </div>
          </div>, changeSetAnimated, alreadyAnimated, true
        )}
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </animated.div>
  );
};

export default AboutSection;
