import React from "react";

import "./style.scss";

const Footer = (props, context) => {
  const { theme: { colorPrimary, textPrimary } } = context;
  return (
    <footer>
      <div className="content-grid">
        <div style={{ color: textPrimary }}>
          Made by
          <a href="https://github.com/laurentkvb" target="_blank" rel="noopener noreferrer" style={{ color: colorPrimary }}>Nobody</a>
          {" "}
          <span role="img" aria-label="heart">❤️</span>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
