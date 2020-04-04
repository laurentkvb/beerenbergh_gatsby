import React from "react";

import "./style.scss";
import { useTheme } from "../ThemeSwitcher/ThemeSwitcher";
import { animated, useSpring } from "react-spring";

const socialMediaData = [
  { url: "https://github.com/laurentkvb",
    icon: "fab fa-github"
  },
  { url: "https://www.linkedin.com/in/laurent-kleering-van-beerenbergh-b32a70104",
    icon: "fab fa-linkedin"
  },
  { url: "https://soundcloud.com/moulsodal",
    icon: "fab fa-soundcloud"
  },
  { url: "mailto:lkvb90@gmail.com",
    icon: "far fa-envelope"
  }
];

const SocialIcons: React.FC = () => {
  const theme = useTheme();

  const backgroundProps = useSpring({
    config: { duration: 2000 },
    opacity: 1,
    color: theme.theme.colorPrimary,
    from: { opacity: 1, color: theme.previousTheme.colorPrimary !== "" ? theme.previousTheme.colorPrimary : theme.theme.colorPrimary },
  });


  return (
    <div className="social-icons animate-icons" style={backgroundProps}>
      {socialMediaData.map((value, index: number) => (
        <animated.a
          target="_blank"
          rel="noopener noreferrer"
          href={value.url}
          key={index}
          style={backgroundProps}
        >
          <i className={value.icon} />
        </animated.a>
      ))}

    </div>


  );
};

export default SocialIcons;
