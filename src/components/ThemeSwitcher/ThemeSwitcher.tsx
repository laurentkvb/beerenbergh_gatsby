import React, { useContext, useState } from "react";

import { getThemes } from "./themes";
import styled, { ThemeContext, ThemeProvider } from "styled-components";

interface ThemeToggleContext {
  toggle: Function;
  theme: RandomTheme;
}

export interface RandomTheme {
  name: string;
  firstTime?: boolean;
  colorPrimary: string;
  colorAlternate: string;
  colorHighlight: string;
  bgPrimary: string;
  bgAlternate: string;
  bgLanding: string;
  textPrimary: string;
  textAlternate: string;
  textLanding: string;
  parallaxStars: string;
  navAlpha: string;
}

export const ThemeToggleContext = React.createContext<ThemeToggleContext>({
  toggle: () => {},
  theme: {
    name: "",
    firstTime: false,
    colorPrimary: "",
    colorAlternate: "",
    colorHighlight: "",
    bgPrimary: "",
    bgAlternate: "",
    bgLanding: "",
    textPrimary: "",
    textAlternate: "",
    textLanding: "",
    parallaxStars: "",
    navAlpha: "",
  }
});

export const useTheme = () : ThemeToggleContext => React.useContext(ThemeToggleContext);

const ThemeSwitcher: React.FC = ({ children }) => {
  const allThemes : Array<RandomTheme> = getThemes();
  const firstTimeThemes : Array<RandomTheme> = allThemes.filter((theme) => theme.firstTime);

  const [theme, changeTheme] = useState<RandomTheme>(firstTimeThemes[Math.floor(Math.random() * firstTimeThemes.length)]);

  console.log("Wat is theme:", theme);

  const getRandomTheme = () : RandomTheme => {
    const currentTheme : RandomTheme = theme;

    const themesWithoutCurrentTheme : Array<RandomTheme> = allThemes.filter((theme1 : RandomTheme) => theme1.name !== currentTheme.name);

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

  return (
    <ThemeToggleContext.Provider value={{ toggle: switchTheme, theme }}>
      <style>
        {" "}
        {/* TODO moet dit weg :hier stond eerst jsx="true" ? */}
        {`
           body {
             background-color: ${theme.bgPrimary};
             body, h1, h2, h3, h4, h5, h6, p, ol, ul {
               color: ${theme.textPrimary}
             }
           }
       `}
      </style>
      <ThemeProvider
        theme={{
          mode: theme
        }}
      >
        <Wrapper>{children}</Wrapper>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default ThemeSwitcher;