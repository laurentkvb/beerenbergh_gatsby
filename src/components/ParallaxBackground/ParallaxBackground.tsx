import React from "react";

import "./style.scss";
import { useTheme } from "../../theme/ThemeSwitcher/ThemeSwitcher";

const ParallaxBackground: React.FC = () => (
  <div className="parallax" style={{ color: useTheme().currentTheme.colorPrimary }}>
    <div id="stars1" />
    <div id="stars2" />
    <div id="stars3" />
  </div>
);

export default ParallaxBackground;
