import React, { CSSProperties } from "react";
import { animated } from "react-spring";
import { ThemeSwitcherContext } from "../../theme/ThemeSwitcher/interfaces/ThemeSwitcherContext";

interface Props {
  theme: ThemeSwitcherContext;
  stickyStyles: CSSProperties;
}

const ColorMeButton: React.FC<Props> = ({ theme, stickyStyles } : Props) => (
  <animated.div className="magic-wand bounce-xy" onClick={() => theme.setShouldChangeTheme()} style={stickyStyles}>
    <button className="fas fa-magic fa-lg" type="button" />
    <div className="magic-text">Color Me</div>
  </animated.div>
);

export default ColorMeButton;
