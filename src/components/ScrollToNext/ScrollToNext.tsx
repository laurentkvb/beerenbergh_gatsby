import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

import "./style.scss";
import { useTheme } from "@components/ThemeSwitcher/ThemeSwitcher";

interface Props {
  pageSelector: string;
}

const ScrollToNext: React.FC<Props> = ({ pageSelector }) => {
  const theme = useTheme();

  const scrollToNext = () => {
    scrollTo(pageSelector);
  };

  return (
    <div className="scroll-to-next" onClick={() => scrollToNext()}>
      <div className="arrow bounce" style={{ color: theme.theme.colorPrimary }}>
        <div className="scroll-text">Click Me</div>
        <button className="fas fa-chevron-down fa-2x" type="button" />
      </div>
    </div>
  );
};

export default ScrollToNext;
