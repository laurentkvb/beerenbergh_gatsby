import React, { ReactNode } from "react";
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


const LandingPage: React.FC<Props> = ({ data }) => {
  const theme = useTheme();

  const titleText = (text : ReactNode) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const props = useSpring({
      opacity: 1,
      from: { opacity: 0 },
      fontSize: "3.5rem",
      fontWeight: "bold",
      lineHeight: "3rem",
      paddingBottom: "1rem",
    });
    return (
      <animated.h1 style={props}>
        <div
          className="intro-name"
          style={{
            fontFamily: "Reem Kufi",
            color:
                    theme && theme.theme
                      ? theme.theme?.colorPrimary
                      : "blue"
          }}
        >
          {text}
        </div>
      </animated.h1>
    );
  };

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node : any, children: any) => titleText(children)
    }
  };


  const subtitleText = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const props = useSpring({
      opacity: 1,
      from: { opacity: 0 },
      fontFamily: "Reem Kufi",
      fontSize: "1.375rem",
      fontWeight: "normal",
      margin: " 1.5rem 0",
    });
    return (
      <animated.h1 style={props}>
        <div
          className="tagline"
          style={{
            color:
            theme && theme.theme
              ? theme.theme?.colorPrimary
              : "blue"
          }}
        >
          Full Stack Developer
        </div>
      </animated.h1>
    );
  };

  return (
    <div
      id="landing-page"
      style={{ backgroundColor: theme.theme.bgPrimary }}
      className="landing-page"
    >
      <Nav />
      <main style={{ color: theme.theme.colorPrimary }}>
        <div className="intro-wrapper">
          <br />


          {documentToReactComponents(data.json, options)}

          {subtitleText()}


          <SocialIcons />
        </div>
      </main>
      <ScrollToNext pageSelector=".about-page" />
    </div>
  );
};

export default LandingPage;
