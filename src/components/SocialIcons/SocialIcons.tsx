import React from "react";

import "./style.scss";
import { useTheme } from "../../theme/ThemeSwitcher/ThemeSwitcher";
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

  const color = theme.previousTheme.colorPrimary !== "" ? theme.previousTheme.colorPrimary : theme.currentTheme.colorPrimary;

  const socialIconsProps = useSpring({
    config: { duration: 2000 },
    opacity: 1,
    color: theme.currentTheme.colorPrimary,
    from: { opacity: 0, color },
  });

  return (
    <div className="social-icons animate-icons">
      {socialMediaData.map((value, index: number) => (
        <animated.a
          target="_blank"
          rel="noopener noreferrer"
          href={value.url}
          key={index}
          style={socialIconsProps}
        >
          <i className={value.icon} />
        </animated.a>
      ))}

    </div>


  );
};

export default SocialIcons;
