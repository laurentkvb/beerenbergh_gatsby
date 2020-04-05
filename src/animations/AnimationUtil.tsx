import { CSSProperties } from "react";
import { ThemeSwitcherContext } from "../theme/ThemeSwitcher/interfaces/ThemeSwitcherContext";

export const globalColorProps = (theme : ThemeSwitcherContext) : CSSProperties => {
  const color = theme.previousTheme.colorPrimary !== "" ? theme.previousTheme.colorPrimary
    : theme.currentTheme.colorPrimary;

  const result = { config: { duration: 2000 },
    opacity: 1,
    color: theme.currentTheme.colorPrimary,
    from: { opacity: 1, color } };

  return result;
};
