import React from "react";

import "./style.scss";
import { useTheme } from "@components/ThemeSwitcher/ThemeSwitcher";


const Footer : React.FC = () => {
  const theme = useTheme();

  return (
    <footer>
      <div className="content-grid">
        <div style={{ color: theme.theme.textPrimary }}>
          Made by
          <a
            href="https://github.com/laurentkvb"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: theme.theme.colorPrimary }}
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
