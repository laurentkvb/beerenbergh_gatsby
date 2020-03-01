import React from "react";
import SocialIcons from "../../components/SocialIcons";
import Nav from "../../components/Nav";
import ScrollToNext from "../../components/ScrollToNext";
import BrowserNotes from "../../components/BrowserNotes";

import "./style.scss";

export interface Props {
  // title: any;
  title: string;
}

const LandingPage: React.FC<Props> = ({ title }) => { // ALS 2e parameter stond er context
  // const {
  //   theme: { bgPrimary, colorPrimary }
  // } = context; TODO

  if (!title) {
    return null;
  }

  return (
    <div
      id="landing-page"
      style={{ backgroundColor: "white" }} // TODO background color paralx
      className="landing-page"
    >
      <Nav />
      <main style={{ color: "red" }}>
        {" "}
        {/* TODO background color paralax */}
        <BrowserNotes />
        <div className="intro-wrapper">
          <br />

          {/* {title */}
          {/*  && title.content */}
          {/*  && title.content.map((element : any) => ( */}
          {/*    <div className="intro-name">{element.content[0].value}</div> */}
          {/*  ))} */}

          <div className="intro-name">{title}</div>
          <div className="tagline">Full Stack Developer</div>
          <SocialIcons />
        </div>
      </main>
      <ScrollToNext pageSelector=".about-page" />
    </div>
  );
};

export default LandingPage;
