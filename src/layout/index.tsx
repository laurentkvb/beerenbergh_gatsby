import * as React from "react";
import { ReactNode } from "react";
import Helmet from "react-helmet";

import "./index.css";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle";
import ThemeSwitcher from "@components/ThemeSwitcher/ThemeSwitcher";

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
  children: ReactNode;
}

const Layout: React.FC<DefaultLayoutProps> = ({
  children
}: DefaultLayoutProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />

    <Helmet title="Laurent Kleering van Beerenbergh" />

    <div>
      <ThemeSwitcher>
        <main>{children}</main>
      </ThemeSwitcher>
    </div>
  </ThemeProvider>
);

export default Layout;
