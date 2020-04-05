import React, { useState } from "react";
import "./style.scss";
import "../About/style.scss";

import PortfolioItem from "@components/PortfolioItem";
import { PortfolioItemModel } from "@models/contentful/PortfolioItemModel";
import ScrollToPrevious from "@components/ScrollToPrevious/ScrollToPrevious";
import { animated, useSpring } from "react-spring";
import { useTheme } from "../../theme/ThemeSwitcher/ThemeSwitcher";
import { FadeInOutAnimation } from "../../animations/FadeInAndOutAnimation";
import { globalColorProps } from "../../animations/AnimationUtil";

interface Props {
  data : PortfolioItemModel[]
}

const PortfolioSection: React.FC<Props> = ({ data }) => {
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
    <animated.div className="portfolio-page" style={backgroundProps}>
      <div className="content-grid">
        <div style={{ alignSelf: "start" }}>
          {FadeInOutAnimation(<animated.h1 className="intro-name" style={globalAnimation}>Portfolio</animated.h1>, changeSetAnimated, alreadyAnimated)}
          {" "}
        </div>

        {FadeInOutAnimation(
          <div className="portfolio-wrapper">
          <style>
            {`
              .portfolio-item {
                background-color: ${theme.currentTheme.colorPrimary};
                color: ${theme.currentTheme.textAlternate};
              }
              .portfolio-item a {
                color: ${theme.currentTheme.textAlternate};
              }
              .portfolio-item__links a:hover {
                border-bottom: 2px solid ${theme.currentTheme.colorAlternate};
              }
            `}
          </style>
          {data.map((item :PortfolioItemModel, i: number) => (
            <div style={{ flex: "1 0 20%" }}>
              <PortfolioItem item={item} key={i} />
            </div>

          ))}
        </div>, changeSetAnimated, alreadyAnimated, true)}
      </div>
      <ScrollToPrevious pageSelector=".landing-page" />
    </animated.div>

  );
};

export default PortfolioSection;
