import { Theme } from "./Theme";

export interface ThemeSwitcherContext {
  toggleTheme: Function;
  setShouldChangeTheme: Function;
  currentTheme: Theme;
  previousTheme: Theme;
}
