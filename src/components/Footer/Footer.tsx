import React from "react";

import "./style.scss";
import { useTheme } from "../../theme/ThemeSwitcher/ThemeSwitcher";


const Footer : React.FC = () => {
  const theme = useTheme();

  return (
    <footer>
      <div className="content-grid">
        <div style={{ color: theme.currentTheme.textPrimary }}>
          Made by
          <a
            href="https://github.com/laurentkvb"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: theme.currentTheme.colorPrimary }}
          >
            Nobody
          </a>
          <span role="img" aria-label="heart">❤️</span>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
