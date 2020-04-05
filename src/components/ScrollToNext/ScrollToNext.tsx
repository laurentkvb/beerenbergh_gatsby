import React, { useState } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

import "./style.scss";
import { useTheme } from "../../theme/ThemeSwitcher/ThemeSwitcher";
import { useSpring, animated } from "react-spring";
import { globalColorProps } from "../../animations/AnimationUtil";
import { FadeInOutAnimation } from "../../animations/FadeInAndOutAnimation";

interface Props {
  pageSelector: string;
}

const ScrollToNext: React.FC<Props> = ({ pageSelector }) => {
  const theme = useTheme();
  const [alreadyAnimated, setAlreadyAnimated] = useState(false);

  const changeSetAnimated = () => {
    setAlreadyAnimated(true);
  };

  const globalAnimation = useSpring(globalColorProps(theme));

  return FadeInOutAnimation(
    <div className="scroll-to-next" onClick={() => scrollTo(pageSelector)}>
      <animated.div className="arrow bounce" style={globalAnimation}>
        <div className="scroll-text">Click Me</div>
        <button className="fas fa-chevron-down fa-2x" type="button" />
      </animated.div>
    </div>,
    changeSetAnimated, alreadyAnimated
  );
};

export default ScrollToNext;
