import React, { useEffect, useRef, useState } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

import "./style.scss";
import { useTheme } from "@components/ThemeSwitcher/ThemeSwitcher";

const Nav: React.FC = () => {
  const theme = useTheme();
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const stickyClass = isSticky ? "sticky" : "";
  const stickyStyles = isSticky
    ? { backgroundColor: theme.theme.navAlpha, color: theme.theme.colorPrimary }
    : {
      backgroundColor: theme.theme.bgPrimary,
      color: theme.theme.colorPrimary
    }; // TODO COLOR

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
    const nextPage = document.querySelector(pageSelector);
    scrollTo(nextPage ? nextPage.className : "");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return function cleanup() {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={stickyClass} ref={navRef} style={stickyStyles}>
      <div className="magic-wand bounce-xy" onClick={() => theme.toggle()}>
        <button className="fas fa-magic fa-lg" type="button" />
        <div className="magic-text">Color Me</div>
      </div>
      <style>
        {`
          .menu__item:hover {
            border-bottom: 2px solid ${theme.theme.colorPrimary};
          }
        `}
        /*TODO THEME / COLOR*/
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
    </nav>
  );
};

export default Nav;
