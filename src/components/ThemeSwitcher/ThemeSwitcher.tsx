import React, { useEffect, useState } from "react";

// eslint-disable-next-line import/no-cycle
import { getThemes } from "./themes";
import styled, { ThemeProvider } from "styled-components";

interface ThemeToggleContext {
  toggleTheme: Function;
  setShouldChangeTheme: Function;
  theme: RandomTheme;
  previousTheme: RandomTheme;
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
  toggleTheme: () => {},
  setShouldChangeTheme: () => {},
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
  },
  previousTheme: {
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
  },
});

export const useTheme = () : ThemeToggleContext => React.useContext(ThemeToggleContext);


const ThemeSwitcher: React.FC = ({ children }) => {
  const allThemes : Array<RandomTheme> = getThemes();
  const firstTimeThemes : Array<RandomTheme> = allThemes.filter((theme) => theme.firstTime);
  const randomThemeIndexOriginal = Math.floor(Math.random() * firstTimeThemes.length);

  const [firstrunMS, setFirstRunMs] = useState(1);

  const [shouldChangeTheme, setShouldChangeTheme] = useState<boolean>(true); // if true, theme will change every 10sec.
  const [theme, changeTheme] = useState<RandomTheme>(firstTimeThemes[randomThemeIndexOriginal]);
  const [previousTheme, changePreviousTheme] = useState<RandomTheme>({
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
  });

  const setShouldChangeThemeVariable = () => {
    setShouldChangeTheme(!shouldChangeTheme);
  };

  const getRandomTheme = () : RandomTheme => {
    const currentTheme : RandomTheme = theme;

    const themesWithoutCurrentTheme : Array<RandomTheme> = allThemes
      .filter((theme1 : RandomTheme) => theme1.name !== currentTheme.name);

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
      if (firstrunMS === 1) {
        setFirstRunMs(10000);
      }

      if (shouldChangeTheme) {
        changePreviousTheme(theme);

        const currentTheme : RandomTheme = theme;

        const themesWithoutCurrentTheme : Array<RandomTheme> = allThemes
          .filter((theme1 : RandomTheme) => theme1.name !== currentTheme.name);

        const randomThemeIndex = Math.floor(
          Math.random() * themesWithoutCurrentTheme.length
        );
        changeTheme(themesWithoutCurrentTheme[randomThemeIndex]);
      }
    }, firstrunMS);
    return () => clearInterval(interval);
  }, [allThemes, firstrunMS, shouldChangeTheme, theme]);


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
    <ThemeToggleContext.Provider value={{ toggleTheme, setShouldChangeTheme: setShouldChangeThemeVariable, theme, previousTheme }}>
      <style>
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
