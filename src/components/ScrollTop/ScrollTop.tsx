import React, { useEffect, useState } from "react";
// import { toTop as scrollToPageTop } from "../../utils/scroll";
import scrollTo from "gatsby-plugin-smoothscroll";

import "./style.scss";
import { useTheme } from "../ThemeSwitcher/ThemeSwitcher";

const ScrollTop : React.FC = () => {
  const [shouldShowScrollTopArrow, setShouldShowScrollTopArrow] = useState(false);

  const theme = useTheme();


  const hideArrowClass = shouldShowScrollTopArrow ? "" : "hide";


  const handleScroll = () => {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const boundingRect = ((document || {}).documentElement || {}).getBoundingClientRect;
    // @ts-ignore
    if (boundingRect) {
      if (document.documentElement.getBoundingClientRect().top * -1 > 100) {
        setShouldShowScrollTopArrow(true);
      } else {
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
    <div className="scroll-top" onClick={() => scrollTo("0,0")}>
      <div
        className={`arrow ${hideArrowClass}`}
        style={{ color: theme.theme.colorPrimary }}
      >
        <button className="fas fa-angle-double-up fa-2x" type="button" />
        <div className="to-top">To Top</div>
      </div>
    </div>
  );
};


export default ScrollTop;