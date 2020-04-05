import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

import "./style.scss";
import { useTheme } from "../../theme/ThemeSwitcher/ThemeSwitcher";
import { useSpring, animated } from "react-spring";
import { globalColorProps } from "../../animations/AnimationUtil";

interface Props {
  pageSelector: string;
}

const ScrollToNext: React.FC<Props> = ({ pageSelector }) => {
  const theme = useTheme();


  const globalAnimation = useSpring(globalColorProps(theme));


  return (
    <div className="scroll-to-next" onClick={() => scrollTo(pageSelector)}>
      <animated.div className="arrow bounce" style={globalAnimation}>
        <div className="scroll-text">Click Me</div>
        <button className="fas fa-chevron-down fa-2x" type="button" />
      </animated.div>
    </div>
  );
};

export default ScrollToNext;
