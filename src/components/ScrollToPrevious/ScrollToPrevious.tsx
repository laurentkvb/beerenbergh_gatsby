import React from "react";
import "./style.scss";

import scrollTo from "gatsby-plugin-smoothscroll";
import { useTheme } from "@components/ThemeSwitcher/ThemeSwitcher";

interface Props {
  pageSelector: string;
}

const ScrollToPrevious: React.FC<Props> = ({ pageSelector }) => {
  const theme = useTheme();


  return (
    <div
      className="scroll-to-previous"
      onClick={() => scrollTo(pageSelector)}
    >
      <div className="arrow bounce" style={{ color: theme.theme.colorPrimary }}>
        <button className="fas fa-angle-double-up fa-2x" type="button" />
        <div className="scroll-text">To Top</div>
      </div>
    </div>
  );
};


export default ScrollToPrevious;
