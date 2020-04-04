import React from "react";
import SocialIcons from "../../components/SocialIcons";
import Nav from "../../components/Nav";
import ScrollToNext from "../../components/ScrollToNext";

import "./style.scss";
import { useTheme } from "@components/ThemeSwitcher/ThemeSwitcher";
import { animated, useSpring } from "react-spring";

export interface Props {
  title: string;
}


const LandingPage: React.FC<Props> = ({ title }) => {
  const theme = useTheme();

  const titleAnimationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    fontSize: "4rem",
    fontWeight: "bold",
    lineHeight: "4rem",
    paddingBottom: "1rem",
  });

  const subtitleAnimationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    fontSize: "1.375rem",
    margin: " 1.5rem 0",
    fontWeight: 300,
  });


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


          <animated.h1 style={titleAnimationProps}>
            <div
              className="intro-name"
              style={{
                color:
                  theme && theme.theme
                    ? theme.theme?.colorPrimary
                    : "blue"
              }}
            >
              {title}
            </div>
          </animated.h1>

          <animated.h1 style={subtitleAnimationProps}>
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


          <SocialIcons />
        </div>
      </main>
      <ScrollToNext pageSelector=".about-page" />
    </div>
  );
};

export default LandingPage;
