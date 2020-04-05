import React, { useEffect, useState } from "react";

// eslint-disable-next-line import/no-cycle
import { getThemes } from "./themes";
import styled, { ThemeProvider } from "styled-components";

export interface ThemeToggleContext {
  toggleTheme: Function;
  setShouldChangeTheme: Function;
  currentTheme: Theme;
  previousTheme: Theme;
}

export interface Theme {
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

const intervalInMS = 5000;
const themeInitialState = {
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
};

export const ThemeToggleContext = React.createContext<ThemeToggleContext>({
  toggleTheme: () => {},
  setShouldChangeTheme: () => {},
  currentTheme: themeInitialState,
  previousTheme: themeInitialState,
});

export const useTheme = () : ThemeToggleContext => React.useContext(ThemeToggleContext);


/**
 *
 * @param children
 * @variable shouldChangeTheme if true, theme will change every x interval in miliseconds
 * @constructor
 */
const ThemeSwitcher: React.FC = ({ children }) => {
  const firstTimeThemes : Array<Theme> = getThemes().filter((theme) => theme.firstTime);

  const [shouldChangeTheme, setShouldChangeTheme] = useState<boolean>(true);
  const [currentTheme, changeTheme] = useState<Theme>(firstTimeThemes[Math.floor(Math.random() * firstTimeThemes.length)]);
  const [previousTheme, changePreviousTheme] = useState<Theme>(themeInitialState);


  /* Function declarations below */
  const getRandomTheme = () : Theme => {
    if (currentTheme == null) {
      return firstTimeThemes[0];
    }

    const randomTheme: Theme = currentTheme;
    const themesWithoutCurrentTheme: Array<Theme> = getThemes()
      .filter((theme: Theme) => theme.name !== randomTheme.name);

    const randomThemeIndex = Math.floor(
      Math.random() * themesWithoutCurrentTheme.length
    );

    return themesWithoutCurrentTheme[randomThemeIndex];
  };

  const toggleTheme = () => {
    const randomTheme = getRandomTheme();
    changeTheme(randomTheme);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentTheme && shouldChangeTheme) {
        changePreviousTheme(currentTheme);

        const randomTheme : Theme = currentTheme;

        const themesWithoutCurrentTheme : Array<Theme> = getThemes()
          .filter((theme1 : Theme) => theme1.name !== randomTheme.name);

        const randomThemeIndex = Math.floor(
          Math.random() * themesWithoutCurrentTheme.length
        );
        changeTheme(themesWithoutCurrentTheme[randomThemeIndex]);
      }
    }, intervalInMS);
    return () => clearInterval(interval);
  }, [currentTheme, firstTimeThemes, shouldChangeTheme]);


  const Wrapper = styled.div`
    background-color: ${currentTheme?.bgPrimary};
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
      color: ${currentTheme?.textPrimary};
    }
  `;


  return (
    <ThemeToggleContext.Provider value={{
      toggleTheme,
      setShouldChangeTheme: () => setShouldChangeTheme(!shouldChangeTheme),
      currentTheme,
      previousTheme }}
    >
      <style>
        {`
           body {
             background-color: ${currentTheme?.bgPrimary};
             body, h1, h2, h3, h4, h5, h6, p, ol, ul {
               color: ${currentTheme?.textPrimary}
             }
           }
       `}
      </style>
      <ThemeProvider
        theme={{ mode: currentTheme }}
      >
        <Wrapper>{children}</Wrapper>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default ThemeSwitcher;
