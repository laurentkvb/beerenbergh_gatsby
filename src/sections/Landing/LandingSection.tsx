import React from "react";
import "./style.scss";

import SocialIcons from "@components/SocialIcons";
import Nav from "@components/Nav";
import ScrollToNext from "@components/ScrollToNext";

import { animated, useSpring } from "react-spring";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { globalColorProps } from "../../animation/AnimationUtil";
import { useTheme } from "../../theme/ThemeSwitcher/ThemeSwitcher";

export interface Props {
  data: any;
}

const LandingSection: React.FC<Props> = ({ data }) => {
  const theme = useTheme();

  const backgroundProps = useSpring({
    config: { duration: 2000 },
    opacity: 1,
    backgroundColor: theme.currentTheme.bgPrimary,
    from: { opacity: 1, backgroundColor: theme.previousTheme.bgPrimary !== "" ? theme.previousTheme.bgPrimary : theme.currentTheme.bgPrimary },
  });

  const globalAnimation = useSpring(globalColorProps(theme));

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node : any, children: any) => (
        <animated.h1 style={globalAnimation}>
          <div className="intro-name">
            {children}
          </div>
        </animated.h1>
      ) }
  };

  return (
    <animated.div
      id="landing-page"
      style={backgroundProps}
      className="landing-page"
    >
      <Nav />
      <main style={{ color: theme.currentTheme.colorPrimary }}>
        <div className="intro-wrapper">
          <br />


          {documentToReactComponents(data.json, options)}

          <animated.h1 className="tagline" style={globalAnimation}>
            Full Stack Developer
          </animated.h1>


          <SocialIcons />
        </div>
      </main>
      <div className="ding">
        <ScrollToNext pageSelector=".about-page" />
      </div>
    </animated.div>
  );
};

export default LandingSection;
