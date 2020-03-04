import React from "react";

import "./style.scss";
import { useTheme } from "@components/ThemeSwitcher/ThemeSwitcher";

const ParallaxBackground: React.FC = () => (
  <div className="parallax" style={{ color: useTheme().theme.colorPrimary }}>
    <div id="stars1" />
    <div id="stars2" />
    <div id="stars3" />
  </div>
);

export default ParallaxBackground;
