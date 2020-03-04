import React from "react";
// import { toElement as scrollToElement } from "../../utils/scroll";
import scrollTo from "gatsby-plugin-smoothscroll";

import "./style.scss";
import { useTheme } from "@components/ThemeSwitcher/ThemeSwitcher";

interface Props {
  pageSelector: string;
}

const ScrollToNext: React.FC<Props> = ({ pageSelector }) => {
  const theme = useTheme();

  const scrollToNext = () => {
    const nextPage = document.querySelector(pageSelector);
    scrollTo(nextPage ? nextPage.className : "");
  };

  return (
    <div className="scroll-to-next" onClick={() => scrollToNext()}>
      <div className="arrow bounce" style={{ color: theme.theme.colorPrimary }}>
        <div className="scroll-text">Click Me</div>
        <button className="fas fa-chevron-down fa-2x" />
      </div>
    </div>
  );
};

export default ScrollToNext;
