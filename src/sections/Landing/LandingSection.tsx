import React from "react";
import SocialIcons from "../../components/SocialIcons";
import Nav from "../../components/Nav";
import ScrollToNext from "../../components/ScrollToNext";

import "./style.scss";
import { useTheme } from "@components/ThemeSwitcher/ThemeSwitcher";
import { animated, useSpring } from "react-spring";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export interface Props {
  data: any;
}

const LandingSection: React.FC<Props> = ({ data }) => {
  const theme = useTheme();

  const backgroundProps = useSpring({
    config: { duration: 2000 },
    opacity: 1,
    backgroundColor: theme.theme.bgPrimary,
    from: { opacity: 1, backgroundColor: theme.previousTheme.bgPrimary !== "" ? theme.previousTheme.bgPrimary : theme.theme.bgPrimary },
  });

  const titleTextProps = useSpring({
    config: { duration: 2000 },
    opacity: 1,
    from: { opacity: 1, color: theme.previousTheme.colorPrimary !== "" ? theme.previousTheme.colorPrimary : theme.theme.colorPrimary },
    color: theme.theme.colorPrimary,
    fontSize: "3.5rem",
    fontWeight: "bold",
    fontFamily: "Reem Kufi",
    lineHeight: "3rem",
    paddingBottom: "1rem",
  });

  const subtitleProps = useSpring({
    config: { duration: 2000 },
    opacity: 1,
    from: { opacity: 1, color: theme.previousTheme.colorPrimary !== "" ? theme.previousTheme.colorPrimary : theme.theme.colorPrimary },
    color: theme.theme.colorPrimary,
    fontSize: "1.375rem",
    fontWeight: "normal",
    fontFamily: "Reem Kufi",
    margin: " 1.5rem 0",
  });


  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node : any, children: any) => (
        <animated.h1 style={titleTextProps}>
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
      <ScrollToNext pageSelector=".about-page" />
    </animated.div>
  );
};

export default LandingSection;
