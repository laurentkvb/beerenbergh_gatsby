import React from "react";

import "./style.scss";
import { useTheme } from "../ThemeSwitcher/ThemeSwitcher";

/* TODO THEME / COLOR */

const SocialIcons: React.FC = () => {
  const theme = useTheme();

  return (
    <div className="social-icons animate-icons">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/laurentkvb"
        style={{ color: theme.theme.colorPrimary }}
      >
        <i className="fab fa-github" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/laurent-kleering-van-beerenbergh-b32a70104"
        style={{ color: theme.theme.colorPrimary }}
      >
        <i
          className="fab fa-linkedin"
        />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:lkvb90@gmail.com"
        style={{ color: theme.theme.colorPrimary }}
      >
        <i
          className="far fa-envelope"
        />
      </a>
    </div>
  );
};

export default SocialIcons;
