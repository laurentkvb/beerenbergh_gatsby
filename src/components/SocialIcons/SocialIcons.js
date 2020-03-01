import React from "react";

import "./style.scss";

/* TODO THEME / COLOR */

const SocialIcons = (props, context) =>
// const { theme: { colorPrimary } } = context;

  (
    <div className="social-icons animate-icons">
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/laurentkvb" style={{ color: "red" }}><i className="fab fa-github" /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/laurent-kleering-van-beerenbergh-b32a70104" style={{ color: "red" }}><i className="fab fa-linkedin" /></a>
      <a target="_blank" rel="noopener noreferrer" href="mailto:lkvb90@gmail.com" style={{ color: "red" }}>
        <i
          className="far fa-envelope"
        />
      </a>
    </div>
  );


export default SocialIcons;
