import React, { ReactNode, useState } from "react";
import "./style.scss";

import SocialIcons from "@components/SocialIcons";
import Nav from "@components/Nav";
import ScrollToNext from "@components/ScrollToNext";

import { animated, useSpring } from "react-spring";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { useTheme } from "../../theme/ThemeSwitcher/ThemeSwitcher";
import { FadeInOutAnimation } from "../../animations/FadeInAndOutAnimation";
import { globalColorProps } from "../../animations/AnimationUtil";

export interface Props {
  data: any;
}

let counter = -1;
const delays = [1000, 1750, 2500];

const LandingSection: React.FC<Props> = ({ data }) => {
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

  const test = (children : ReactNode) => {
    counter += 1;

    const color = theme.previousTheme.colorPrimary !== "" ? theme.previousTheme.colorPrimary
      : theme.currentTheme.colorPrimary;

    const globalAnimation1 = useSpring({
      config: { duration: 500 },
      delay: delays[counter],
      display: "inline-block",
      alignSelf: "start",
      // width: "100px",
      opacity: 1,
      color: theme.currentTheme.colorPrimary,
      from: { opacity: 0, color }
    });

    return (
      <animated.div style={globalAnimation1} className="tagline">
        {children}
      </animated.div>
    );
  };

  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node : any, children: ReactNode) => (
        <animated.h1 style={globalAnimation}>
          <div className="intro-name">
            {children}
          </div>
        </animated.h1>
      ),

      [BLOCKS.HEADING_2]: (node : any, children: ReactNode) => test(children),
      [BLOCKS.HEADING_3]: (node : any, children: ReactNode) => test(children),
      [BLOCKS.HEADING_4]: (node : any, children: ReactNode) => test(children),
    }
  };

  return (
    <animated.div
      id="landing-page"
      style={backgroundProps}
      className="landing-page"
    >
      <Nav />
      <main style={{ color: theme.currentTheme.colorPrimary }}>
        {FadeInOutAnimation(
          <div>
            <br />


            {documentToReactComponents(data.json, options)}


            <SocialIcons />
          </div>,
          changeSetAnimated, alreadyAnimated
        )}
      </main>
      <div className="ding">
        <ScrollToNext pageSelector=".about-page" />
      </div>
    </animated.div>
  );
};

export default LandingSection;
