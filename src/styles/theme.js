/* eslint-disable */

const theme = {
  /** colors
   * Rationale naming of the colors
   * The naming of the colors in the 'color.js' file are derived from the color naming scheme from the [Invisio design pages](https://projects.invisionapp.com/d/main#/console/18319900/380486614/inspect).
   */
  colors: {
    blue5: "#002880",
    blue4: "#0041CC",
    blue3: "#087EE6",
    blue2: "#12BCFF",
    blue1: "#E5E9F2",
    orange1: "#f29323",
    black: "#202020",
    grey1: "#F6F8F9",
    grey2: "#E6E6E6",
    grey3: "#9b9b9b",
    grey4: "#888A8D",
    white: "#FFFFFF"
  },
  // typography
  fontWeights: {
    normal: 400,
    display: 500,
    bold: 600,
    heading: 700
  },
  fonts: {
    primary: "Rajdhani"
  },
  fontSizes: {
    root: "16px",
    0: "0.75rem", // 12px
    1: "0.875rem", // 14px
    2: "1.125rem", // 18px
    3: "1.3125rem", // 21px
    4: "1.5rem", // 24px
    button: "1.125rem",
    heading: "1.5rem" // 24px
  },
  // sizes
  space: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 24,
    6: 32,
    7: 38,
    8: 48,
    9: 64,
    10: 80,
    11: 120
  },
  sizes: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 24,
    6: 32,
    7: 38,
    8: 48,
    9: 64,
    10: 80,
    11: 120,
    navHeight: 70,
    pageHeaderHeight: 60,
    fullWidth: "100%",
    maxWidth: 1440,
    maxSectionWidth: 1344
  },
  breakpoints: ["640px", "768px", "1024px", "1280px"],
  zIndices: {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800
  },
  borders: {
    none: 0,
    "1px": "1px solid",
    "2px": "2px solid",
    "3px": "3px solid"
  },
  radii: {
    normal: 3
  },
  shadows: {
    normal: "0 0 15px 0 rgba(32,32,32,0.05)",
    elevated: "0 0 15px 0 rgba(32,32,32,0.2)",
    none: "none"
  }
};

// alias for breakpoints
theme.breakpoints.sm = "640px";
theme.breakpoints.md = "768px";
theme.breakpoints.lg = "1024px";
theme.breakpoints.xl = "1280px";

// alias for default colors
theme.colors.primary = theme.colors.blue5;
theme.colors.secondary = theme.colors.blue4;
theme.colors.tertiary = theme.colors.orange1;

theme.colors.catskillWhite = theme.colors.blue1;
theme.colors.dustyGray = theme.colors.grey3;

theme.colors.border = theme.colors.grey2;

// Grid column widths definitions
theme.sizes.column1 = theme.sizes.maxSectionWidth / 12;
theme.sizes.column2 = (theme.sizes.maxSectionWidth / 12) * 2;
theme.sizes.column3 = theme.sizes.maxSectionWidth / 4;
theme.sizes.column4 = theme.sizes.maxSectionWidth / 3;
theme.sizes.column5 = (theme.sizes.maxSectionWidth / 12) * 5;
theme.sizes.column6 = theme.sizes.maxSectionWidth / 2;
theme.sizes.column7 = (theme.sizes.maxSectionWidth / 12) * 7;
theme.sizes.column8 = (theme.sizes.maxSectionWidth / 12) * 8;
theme.sizes.column9 = (theme.sizes.maxSectionWidth / 12) * 9;
theme.sizes.column10 = (theme.sizes.maxSectionWidth / 12) * 10;
theme.sizes.column11 = (theme.sizes.maxSectionWidth / 12) * 11;
theme.sizes.column12 = theme.sizes.maxSectionWidth;

export default theme;
