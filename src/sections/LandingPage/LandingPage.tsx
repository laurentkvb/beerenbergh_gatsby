import React from "react";
import SocialIcons from "../../components/SocialIcons";
import Nav from "../../components/Nav";
import ScrollToNext from "../../components/ScrollToNext";
import BrowserNotes from "../../components/BrowserNotes";

import "./style.scss";
import { useTheme } from "@components/ThemeSwitcher/ThemeSwitcher";

export interface Props {
  // title: any;
  title: string;
}

const LandingPage: React.FC<Props> = ({ title }) => {
  // ALS 2e parameter stond er context
  // const {
  //   theme: { bgPrimary, colorPrimary }
  // } = context; TODO

  console.log("dikke man");
  const themeToggle = useTheme();

  console.log("theme toggle:", themeToggle);

  if (!title) {
    return null;
  }

  return (
    <div
      id="landing-page"
      style={{ backgroundColor: "white" }} // TODO background color paralx
      className="landing-page"
    >
      <h1 style={{color: "black"}} onClick={() => themeToggle.toggle()}>
        <br /> <br /> <br /> <br /> Click hier
      </h1>
      <Nav />
      <main style={{ color: "red" }}>
        {" "}
        {/* TODO background color paralax */}
        <BrowserNotes />
        <div className="intro-wrapper">
          <br />

          <div className="intro-name" style={{color: (useTheme() && useTheme().theme) ? useTheme().theme.colorPrimary : "blue"}}>{title}</div>
          <div className="tagline">Full Stack Developer</div>
          <SocialIcons />
        </div>
      </main>
      <ScrollToNext pageSelector=".about-page" />
    </div>
  );
};

export default LandingPage;
