import React from "react";
import ScrollToNext from "../../components/ScrollToNext";
import "./style.scss";
import { aboutUsPageData } from "./AboutPaga.data";
import { HeaderListItem } from "./HeaderListItem/HeaderListItem";

// TODO THEME / COLOR
const AboutPage = (props) =>
// const {
//   theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary },
// } = context;

  (
    <div className="about-page" style={{ backgroundColor: "blue" }}>
      {" "}
      {/* TODO COLOR */}
      <style jsx="true">
        {`
          .highlight {
            background-color: white;
          }
          ::selection {
            background-color: orange;
          }
        `}
        {/* TODO COLOR */}
        {/* TODO COLOR */}
      </style>
      <div className="content-grid">
        <h1 style={{ color: "white" }}>About</h1>
        {" "}
        {/* TODO COLOR */}
        {/* TODO COLOR */}
        <div className="about-wrapper">
          <img
            src="img/lkvb-moscow.jpg"
            alt="Laurent Kleering van Beerenbergh"
            width="250"
            height="400"
          />
          <div className="about-content" style={{ color: "blue" }}>
            {/* TODO COLOR */}
            <h1 style={{ color: "blue" }}>Stack</h1>
            {/* TODO COLOR */}

            {aboutUsPageData.map((data) => (
              <HeaderListItem header={data.topic} list={data.topics} />
            ))}

            <p className="text-emoji" style={{ color: "blue" }}>
              {" "}
              {/* TODO COLOR */}
              \ (•◡•) /
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
export default AboutPage;
