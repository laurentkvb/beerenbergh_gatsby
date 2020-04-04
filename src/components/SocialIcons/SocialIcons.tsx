import React from "react";

import "./style.scss";
import { useTheme } from "../ThemeSwitcher/ThemeSwitcher";
import { animated, useSpring } from "react-spring";

const socialMediaData = [
  { url: "https://github.com/laurentkvb",
    icon: "fab fa-github" },
  { url: "https://www.linkedin.com/in/laurent-kleering-van-beerenbergh-b32a70104",
    icon: "fab fa-linkedin" },
  { url: "mailto:lkvb90@gmail.com",
    icon: "far fa-envelope" }
];

const SocialIcons: React.FC = () => {
  const theme = useTheme();

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });


  return (
    <animated.div style={props}>

      <div className="social-icons animate-icons">
        {socialMediaData.map((value) => (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={value.url}
            style={{ color: theme.theme.colorPrimary }}
          >
            <i className={value.icon} />
          </a>
        ))}

      </div>

    </animated.div>
  );
};

export default SocialIcons;
