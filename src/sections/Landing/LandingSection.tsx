import React from "react";
import "./style.scss";

import SocialIcons from "../../components/SocialIcons";
import Nav from "../../components/Nav";
import ScrollToNext from "../../components/ScrollToNext";

import { useTheme } from "@components/ThemeSwitcher/ThemeSwitcher";
import { animated, useSpring } from "react-spring";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export interface Props {
  data: any;
}

const LandingSection: React.FC<Props> = ({ data }) => {
  const theme = useTheme();

  const color = theme.previousTheme.colorPrimary !== "" ? theme.previousTheme.colorPrimary : theme.theme.colorPrimary;

  const backgroundProps = useSpring({
    config: { duration: 2000 },
    opacity: 1,
    backgroundColor: theme.theme.bgPrimary,
    from: { opacity: 1, backgroundColor: theme.previousTheme.bgPrimary !== "" ? theme.previousTheme.bgPrimary : theme.theme.bgPrimary },
  });

  const titleTextProps = useSpring({
    config: { duration: 2000 },
    opacity: 1,
    color: theme.theme.colorPrimary,
    from: { opacity: 1, color },
    // fontSize: "3.5rem",
    // fontWeight: "bold",
    // fontFamily: "Reem Kufi",
  });

  const subtitleProps = useSpring({
    config: { duration: 2000 },
    opacity: 1,
    color: theme.theme.colorPrimary,
    from: { opacity: 1, color },
    // fontSize: "1.375rem",
    // fontWeight: "normal",
    // fontFamily: "Reem Kufi",
    // margin: " 1.5rem 0",
  });


  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node : any, children: any) => {


        return (
          <animated.h1 style={titleTextProps}>
            <div className="intro-name">
              {children}
            </div>
          </animated.h1>
        );
      } }
  };


  return (
    <animated.div
      id="landing-page"
      style={backgroundProps}
      className="landing-page"
    >
      <Nav />
      <main style={{ color: theme.theme.colorPrimary }}>
        <div className="intro-wrapper">
          <br />


          {documentToReactComponents(data.json, options)}

          <animated.h1 style={subtitleProps}>
            <div className="tagline">
              Full Stack Developer
            </div>
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
