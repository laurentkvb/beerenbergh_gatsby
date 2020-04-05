import React, { useEffect, useState } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

import "./style.scss";
import { useTheme } from "../../theme/ThemeSwitcher/ThemeSwitcher";
import { useSpring, animated } from "react-spring";
import { globalColorProps } from "../../animations/AnimationUtil";

const ScrollTop : React.FC = () => {
  const [shouldShowScrollTopArrow, setShouldShowScrollTopArrow] = useState(false);
  const theme = useTheme();
  const hideArrowClass = shouldShowScrollTopArrow ? "" : "hide";
  const globalAnimation = useSpring(globalColorProps(theme));


  const handleScroll = () => {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const boundingRect = ((document || {}).documentElement || {}).getBoundingClientRect;
    if (boundingRect !== null) {
      const offset = document.documentElement.scrollTop + window.innerHeight;
      const height = document.documentElement.offsetHeight;

      if (document.documentElement.getBoundingClientRect().top * -1 > 100) {
        setShouldShowScrollTopArrow(true);
      } else {
        setShouldShowScrollTopArrow(false);
      }

      if (offset === height) {
        setShouldShowScrollTopArrow(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return function cleanup() {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-top" onClick={() => scrollTo(".landing-page")}>
      <animated.div
        className={`arrow ${hideArrowClass}`}
        style={globalAnimation}
      >
        <button className="fas fa-angle-double-up fa-2x" type="button" />
        <div className="to-top">To Top</div>
      </animated.div>
    </div>
  );
};


export default ScrollTop;
