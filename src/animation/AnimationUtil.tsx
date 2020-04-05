import { CSSProperties } from "react";
import { ThemeToggleContext } from "../theme/ThemeSwitcher/ThemeSwitcher";

export const globalColorProps = (theme : ThemeToggleContext) : CSSProperties => {
  const color = theme.previousTheme.colorPrimary !== "" ? theme.previousTheme.colorPrimary
    : theme.currentTheme.colorPrimary;

  const result = { config: { duration: 2000 },
    opacity: 1,
    color: theme.currentTheme.colorPrimary,
    from: { opacity: 0, color } };

  return result;
};
