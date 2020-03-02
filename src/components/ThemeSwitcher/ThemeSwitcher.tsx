import React, { useContext, useState } from "react";

import { getThemes } from "./themes";
import styled, { ThemeContext, ThemeProvider } from "styled-components";

const ThemeToggleContext = React.createContext({
  toggle: () => {},
  theme: null
});

export const useTheme = () => React.useContext(ThemeToggleContext);

const ThemeSwitcher: React.FC = ({ children }) => {
  // ALS 2e parameter stond er context
  const allThemes = getThemes();
  const firstTimeThemes = allThemes.filter((theme) => theme.firstTime);

  const [theme, changeTheme] = useState(
    firstTimeThemes[Math.floor(Math.random() * firstTimeThemes.length)]
  );

  console.log("Wat is theme:", theme);

  const getRandomTheme = () => {
    const currentTheme = theme;

    const themesWithoutCurrentTheme = allThemes.filter(
      (theme1) => theme1.name !== currentTheme.name
    );
    const randomThemeIndex = Math.floor(
      Math.random() * themesWithoutCurrentTheme.length
    );

    return themesWithoutCurrentTheme[randomThemeIndex];
  };

  const switchTheme = () => {
    const randomTheme = getRandomTheme();

    changeTheme(randomTheme);
  };

  const themeContext = useContext(ThemeContext);

  console.log("themeContext", themeContext);

  const Wrapper = styled.div`
    background-color: ${theme.bgPrimary};
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ol,
    ul {
      color: ${theme.textPrimary};
    }
  `;

  // @ts-ignore
  return (
    <ThemeToggleContext.Provider value={{ toggle: switchTheme, theme }}>
      <ThemeProvider
        theme={{
          mode: theme
        }}
      >
        <Wrapper>{children}</Wrapper>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
  // return (
  //   <div className="theme-switcher">
  //     <style jsx="true">
  //       {`
  //         body {
  //           background-color: ${theme.bgPrimary};
  //           body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  //             color: ${theme.textPrimary}
  //           }
  //         }
  //       `}
  //     </style>
  //     { children }
  //   </div>
  // );
};

export default ThemeSwitcher;
