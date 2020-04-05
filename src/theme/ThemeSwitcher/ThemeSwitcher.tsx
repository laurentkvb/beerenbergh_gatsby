import React, { useEffect, useState } from "react";

// eslint-disable-next-line import/no-cycle
import { getThemes } from "./themes";
import { ThemeProvider } from "styled-components";
import Wrapper from "@components/Wrapper/Wrapper";
import { ThemeSwitcherContext } from "./interfaces/ThemeSwitcherContext";
import { Theme } from "./interfaces/Theme";


const DEFAULT_CHOSEN_INDEX_FROM_THEMES = 7;

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

export const ThemeToggleContext = React.createContext<ThemeSwitcherContext>({
  toggleTheme: () => {},
  setShouldChangeTheme: () => {},
  currentTheme: themeInitialState,
  previousTheme: themeInitialState,
});

export const useTheme = () : ThemeSwitcherContext => React.useContext(ThemeToggleContext);


/**
 *
 * @param children
 * @variable shouldChangeTheme if true, theme will change every x
 * interval in miliseconds
 * @constructor
 */
const ThemeSwitcher: React.FC = ({ children }) => {
  const firstTimeThemes : Array<Theme> = getThemes().filter((theme) => theme.firstTime);

  const [shouldChangeTheme, setShouldChangeTheme] = useState<boolean>(true);
  const [currentTheme, changeTheme] = useState<Theme>(
    getThemes()[DEFAULT_CHOSEN_INDEX_FROM_THEMES]
  );

  const [previousTheme, changePreviousTheme] = useState<Theme>(themeInitialState);


  /* Function declarations below */
  const getRandomTheme = () : Theme => {
    if (currentTheme == null) {
      return firstTimeThemes[DEFAULT_CHOSEN_INDEX_FROM_THEMES];
    }

    const randomTheme: Theme = currentTheme;
    const themesWithoutCurrentTheme: Array<Theme> = getThemes()
      .filter((theme: Theme) => theme.name !== randomTheme.name);

    const randomThemeIndex = Math.floor(
      Math.random() * themesWithoutCurrentTheme.length
    );

    return themesWithoutCurrentTheme[randomThemeIndex];
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


  return (
    <ThemeToggleContext.Provider value={{
      toggleTheme: () => changeTheme(getRandomTheme()),
      setShouldChangeTheme: () => setShouldChangeTheme(!shouldChangeTheme),
      currentTheme,
      previousTheme }}
    >
      <style>
        {`
           body {
             background-color: ${currentTheme.bgPrimary};
             body, h1, h2, h3, h4, h5, h6, p, ol, ul {
               color: ${currentTheme.textPrimary}
             }
           }
       `}
      </style>
      <ThemeProvider
        theme={{ mode: currentTheme }}
      >
        <Wrapper theme={currentTheme}>{children}</Wrapper>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default ThemeSwitcher;
