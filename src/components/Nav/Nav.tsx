import React, { useEffect, useRef, useState } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

import "./style.scss";
import { useTheme } from "@components/ThemeSwitcher/ThemeSwitcher";
import { animated, useSpring } from "react-spring";

const Nav: React.FC = () => {
  const theme = useTheme();
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const stickyClass = isSticky ? "sticky" : "";
  let stickyProps;

  if (isSticky) {
    stickyProps = (theme.previousTheme.navAlpha !== "" ? theme.previousTheme.navAlpha : theme.theme.navAlpha);
  } else {
    stickyProps = theme.previousTheme.bgPrimary !== "" ? theme.previousTheme.bgPrimary : theme.theme.bgPrimary;
  }

  const stickyStyles = useSpring({
    config: { duration: 2000 },
    opacity: 1,
    from: {
      opacity: 1,
      backgroundColor: stickyProps,
      color: theme.previousTheme.colorPrimary !== "" ? theme.previousTheme.colorPrimary : theme.theme.colorPrimary
    },
    backgroundColor: isSticky ? theme.theme.navAlpha : theme.theme.bgPrimary,
    color: theme.theme.colorPrimary
  });

  const handleScroll = () => {
    if (navRef instanceof HTMLElement) {
      if (window.pageYOffset > navRef.offsetTop) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
  };

  const scrollToPage = (pageSelector: string) => {
    scrollTo(pageSelector);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return function cleanup() {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <animated.nav className={stickyClass} ref={navRef} style={stickyStyles}>
      <div className="magic-wand bounce-xy" onClick={() => theme.setShouldChangeTheme()}>
        <button className="fas fa-magic fa-lg" type="button" />
        <div className="magic-text">Color Me</div>
      </div>
      <style>
        {`
          .menu__item:hover {
            border-bottom: 2px solid ${theme.theme.colorPrimary};
          }
        `}
      </style>
      <div className="menu">
        <div
          className="menu__item active"
          onClick={() => scrollToPage(".about-page")}
        >
          About
        </div>
        <div
          className="menu__item"
          onClick={() => scrollToPage(".portfolio-page")}
        >
          Portfolio
        </div>
      </div>
    </animated.nav>
  );
};

export default Nav;
