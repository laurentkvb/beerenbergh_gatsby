import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const ParallaxBackground = (props, context) => {
  console.log("Props", props);
  // const { theme: { colorPrimary } } = context;

  return (
    <div className="parallax" style={{ color: "red" }}>
      <div id="stars1" />
      <div id="stars2" />
      <div id="stars3" />
    </div>
  );
};

ParallaxBackground.contextTypes = {
  theme: PropTypes.any
};

export default ParallaxBackground;
