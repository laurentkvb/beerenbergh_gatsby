import React from "react";
import SocialIcons from "../../components/SocialIcons";
import Nav from "../../components/Nav";
import ScrollToNext from "../../components/ScrollToNext";

import "./style.scss";
import { useTheme } from "@components/ThemeSwitcher/ThemeSwitcher";

export interface Props {
  title: string;
}

const LandingPage: React.FC<Props> = ({ title }) => {
  const theme = useTheme();

  if (!title) {
    return null;
  }

  return (
    <div
      id="landing-page"
      style={{ backgroundColor: theme.theme.bgPrimary }}
      className="landing-page"
    >
      <Nav />
      <main style={{ color: theme.theme.colorPrimary }}>
        {/*<BrowserNotes />*/}
        <div className="intro-wrapper">
          <br />

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
          <div className="tagline">Full Stack Developer</div>
          <SocialIcons />
        </div>
      </main>
      <ScrollToNext pageSelector=".about-page" />
    </div>
  );
};

export default LandingPage;
